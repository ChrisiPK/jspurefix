"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsfixCmd = void 0;
require("reflect-metadata");
const buffer_1 = require("./buffer");
const ascii_1 = require("./buffer/ascii");
const util_1 = require("./util");
const transport_1 = require("./transport");
const types_1 = require("./types");
const util = require("util");
const fs = require('node-fs-extra');
const minimist = require("minimist");
const path = require("path");
const factory_1 = require("./transport/factory");
const compiler_1 = require("./dictionary/compiler");
const runtime_1 = require("./runtime");
const di_tokens_1 = require("./runtime/di-tokens");
const argv = minimist(process.argv.slice(2));
var PrintMode;
(function (PrintMode) {
    PrintMode[PrintMode["Structure"] = 1] = "Structure";
    PrintMode[PrintMode["Object"] = 2] = "Object";
    PrintMode[PrintMode["Verbose"] = 3] = "Verbose";
    PrintMode[PrintMode["Stats"] = 4] = "Stats";
    PrintMode[PrintMode["Token"] = 5] = "Token";
    PrintMode[PrintMode["Encoded"] = 6] = "Encoded";
})(PrintMode || (PrintMode = {}));
var Command;
(function (Command) {
    Command[Command["Generate"] = 1] = "Generate";
    Command[Command["Replay"] = 2] = "Replay";
    Command[Command["Lookup"] = 3] = "Lookup";
    Command[Command["Encode"] = 4] = "Encode";
    Command[Command["Benchmark"] = 5] = "Benchmark";
    Command[Command["Compile"] = 6] = "Compile";
    Command[Command["Unknown"] = 7] = "Unknown";
})(Command || (Command = {}));
class JsfixCmd {
    constructor() {
        this.root = path.join(__dirname, '../');
        this.delimiter = ascii_1.AsciiChars.Soh;
        this.stats = {};
        this.filter = null;
        this.messages = 0;
        this.print = true;
    }
    static getCommand() {
        let command = Command.Unknown;
        if (argv.compile) {
            command = Command.Compile;
        }
        else if (argv.generate) {
            command = Command.Generate;
        }
        else if (argv.fix) {
            command = argv.benchmark ? Command.Benchmark : Command.Replay;
        }
        else if (argv.field) {
            command = Command.Lookup;
        }
        else if (argv.json) {
            command = Command.Encode;
        }
        else if (argv.msg) {
            command = Command.Lookup;
        }
        return command;
    }
    static getPrintMode() {
        let mode = PrintMode.Stats;
        if (argv.tokens) {
            mode = PrintMode.Token;
        }
        else if (argv.stats) {
            mode = PrintMode.Stats;
        }
        else if (argv.objects) {
            mode = PrintMode.Object;
        }
        else if (argv.verbose) {
            mode = PrintMode.Verbose;
        }
        else if (argv.structures) {
            mode = PrintMode.Structure;
        }
        else if (argv.encoded) {
            mode = PrintMode.Encoded;
        }
        return mode;
    }
    static writeFile(name, api) {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = util.promisify(fs.writeFile);
            yield writer(name, api, {
                encoding: 'utf8'
            }).catch((e) => {
                throw e;
            });
        });
    }
    exec() {
        return new Promise((resolve, reject) => {
            this.init().then(() => __awaiter(this, void 0, void 0, function* () {
                let actioned = true;
                let command = JsfixCmd.getCommand();
                switch (command) {
                    case Command.Generate: {
                        yield this.generate();
                        break;
                    }
                    case Command.Encode: {
                        this.encode();
                        break;
                    }
                    case Command.Replay: {
                        const repeats = !isNaN(argv.repeats) ? argv.repeats : 1;
                        try {
                            for (let i = 0; i < repeats; ++i) {
                                yield this.replay();
                            }
                        }
                        catch (e) {
                            reject(e);
                        }
                        break;
                    }
                    case Command.Benchmark: {
                        const repeats = !isNaN(argv.repeats) ? argv.repeats : 10000;
                        try {
                            yield this.benchmark(repeats);
                        }
                        catch (e) {
                            reject(e);
                        }
                        break;
                    }
                    case Command.Lookup: {
                        if (argv.field) {
                            this.field();
                        }
                        else {
                            this.msg();
                        }
                        break;
                    }
                    case Command.Compile: {
                        yield this.compile();
                        break;
                    }
                    case Command.Unknown:
                    default: {
                        actioned = false;
                    }
                }
                resolve(actioned);
            })).catch((e) => {
                reject(e);
            });
        });
    }
    firstMessage(t) {
        return new Promise((resolve, reject) => {
            t.receiver.on('msg', (msgType, msgView) => {
                resolve(msgView.clone());
            });
            t.receiver.on('error', (e) => {
                reject(e);
            });
        });
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            const lipPath = path.join(this.root, 'data/examples/lipsum.txt');
            const words = yield (0, util_1.getWords)(lipPath);
            const generator = new util_1.MessageGenerator(words, this.definitions);
            let density = 1;
            if (argv.density) {
                density = parseFloat(argv.density);
            }
            if (isNaN(density)) {
                console.log('density must be numeric in range > 0 density <= 1.0');
                return;
            }
            if (argv.script) {
                yield this.script(generator, density);
            }
            else {
                yield this.single(generator, density);
            }
        });
    }
    single(generator, density) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!argv.type) {
                console.log('specify type to generate e.g. --type = AE');
                return;
            }
            const msgType = `${argv.type}`;
            let makeGroups = true;
            if (argv.groups) {
                makeGroups = argv.groups === 'true';
            }
            const obj = generator.generate(msgType, density, makeGroups);
            console.log(JSON.stringify(obj, null, 4));
            const fix = this.encodeObject(msgType, obj);
            const ft = new factory_1.MsgTransport(1, this.session.config, new transport_1.StringDuplex(fix));
            if (argv.unit) {
                yield this.unitTest(fix, obj, ft);
            }
            else {
                this.subscribe(ft);
            }
        });
    }
    script(generator, density) {
        return __awaiter(this, void 0, void 0, function* () {
            let buffer = new buffer_1.ElasticBuffer();
            const repeats = argv.repeats || 50;
            const key = types_1.MsgTag.MsgType.toString();
            const sf = this.definitions.simple.get(key);
            const session = this.session;
            for (let i = 0; i < repeats; ++i) {
                const msgType = util_1.MessageGenerator.getRandomEnum(sf).toString();
                console.log(`i = ${i} ${msgType}`);
                const obj = generator.generate(msgType, density);
                session.encodeMessage(msgType, obj);
                buffer.writeBuffer(session.buffer.slice());
                buffer.writeString(require('os').EOL);
            }
            yield JsfixCmd.writeFile('./fix.txt', buffer.slice().toString('utf8'));
        });
    }
    unitTest(fix, obj, ft) {
        return __awaiter(this, void 0, void 0, function* () {
            const view = yield this.firstMessage(ft);
            const summary = view.structure.summary();
            yield JsfixCmd.writeFile('./fix.txt', fix);
            yield JsfixCmd.writeFile('./object.json', JSON.stringify(obj, null, 4));
            yield JsfixCmd.writeFile('./token.txt', view.toString());
            yield JsfixCmd.writeFile('./structure.json', JSON.stringify(summary, null, 4));
        });
    }
    encodeObject(msgType, object) {
        const session = this.session;
        session.encodeMessage(msgType, object);
        return session.buffer.toString();
    }
    msg() {
        const definitions = this.definitions;
        const m = definitions.message.get(argv.msg);
        if (m) {
            console.log(m.toString());
        }
    }
    field() {
        let sf;
        const tag = parseInt(argv.field, 10);
        const definitions = this.definitions;
        if (!isNaN(tag)) {
            sf = definitions.tagToSimple[tag];
        }
        else {
            sf = definitions.simple.get(argv.field);
        }
        if (sf) {
            console.log(sf.toString());
        }
    }
    ensureExists(path) {
        return new Promise((accept, reject) => {
            fs.mkdirp(path, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    accept(true);
                }
            });
        });
    }
    compileDefinitions(outputPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureExists(path.join(outputPath, 'set'));
            yield this.ensureExists(path.join(outputPath, 'enum'));
            const definitions = this.definitions;
            const compilerSettings = require('../data/compiler.json');
            compilerSettings.output = outputPath;
            const msgCompiler = new compiler_1.MsgCompiler(definitions, compilerSettings);
            yield msgCompiler.generate();
            const enumCompiler = new compiler_1.EnumCompiler(definitions, compilerSettings);
            const writeFile = path.join(compilerSettings.output, './enum/all-enum.ts');
            yield enumCompiler.generate(writeFile);
        });
    }
    compile() {
        return __awaiter(this, void 0, void 0, function* () {
            let output = argv.output;
            const dp = new util_1.DefinitionFactory().getDictPath(argv.dict);
            if (dp) {
                output = dp.output;
            }
            output = path.join(this.root, output);
            yield this.compileDefinitions(output);
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let session = argv.session || 'data/session/test-initiator.json';
            this.sys = new runtime_1.SessionContainer();
            this.sys.registerGlobal('error');
            session = this.norm(session);
            this.sessionDescription = require(session);
            const container = yield this.sys.makeSystem(this.sessionDescription);
            this.config = container.resolve(di_tokens_1.DITokens.IJsFixConfig);
            this.definitions = this.config.definitions;
            let dict;
            if (argv.dict) {
                dict = argv.dict;
                const df = yield new util_1.DefinitionFactory().getDefinitions(dict);
                this.config.definitions = df;
                this.definitions = df;
            }
            const definitions = this.definitions;
            if (argv.delimiter) {
                this.delimiter = ascii_1.AsciiChars.firstChar(argv.delimiter);
                this.config.delimiter = this.delimiter;
            }
            this.jsonHelper = new util_1.JsonHelper(definitions);
            if (argv.session) {
                this.session = container.resolve(di_tokens_1.DITokens.MsgTransmitter);
            }
        });
    }
    dispatch(ft) {
        return __awaiter(this, void 0, void 0, function* () {
            if (argv.type != null) {
                this.filter = argv.type.toString();
            }
            let time = false;
            if (argv.time || argv.stats) {
                this.print = false;
                time = true;
            }
            this.subscribe(ft);
            const startsAt = new Date();
            yield ft.wait();
            const elapsed = new Date().getTime() - startsAt.getTime();
            if (time) {
                console.log(`messages ${this.messages} elapsed ms ${elapsed}`);
            }
            if (argv.stats) {
                console.log(JSON.stringify(this.stats, null, 4));
            }
        });
    }
    subscribe(ft) {
        this.messages = 0;
        this.stats = {};
        const filter = this.filter;
        ft.receiver.on('msg', (msgType, m) => {
            if (filter) {
                if (msgType !== filter) {
                    return;
                }
            }
            ++this.messages;
            this.onMsg(msgType, m);
        });
    }
    onMsg(msgType, m) {
        const mode = JsfixCmd.getPrintMode();
        const print = this.print;
        const stats = this.stats;
        switch (mode) {
            case PrintMode.Stats: {
                if (!stats[msgType]) {
                    stats[msgType] = 1;
                }
                else {
                    stats[msgType] = stats[msgType] + 1;
                }
                break;
            }
            case PrintMode.Verbose: {
                const verbose = m.toVerbose();
                if (verbose) {
                    console.log(verbose);
                }
                break;
            }
            case PrintMode.Object: {
                const asObject = m.toObject();
                if (print) {
                    const def = this.definitions.message.get(msgType);
                    console.log(`${msgType} [${def.name}] = ${JSON.stringify(asObject, null, 4)}`);
                    console.log();
                }
                break;
            }
            case PrintMode.Structure: {
                const summary = m.structure.summary();
                if (print) {
                    console.log(JSON.stringify(summary, null, 4));
                }
                break;
            }
            case PrintMode.Token: {
                const tokens = m.toString();
                if (print) {
                    console.log(tokens);
                }
                break;
            }
            case PrintMode.Encoded: {
                const fix = this.encodeObject(msgType, m.toObject());
                console.log(fix);
                break;
            }
            default:
                throw new Error(`unknown mode ${mode}`);
        }
    }
    replay() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!argv.fix) {
                console.log('provide a path to fix file i.e. --fix=data/examples/execution-report/fix.txt');
                return;
            }
            const fix = this.norm(argv.fix);
            const config = this.config;
            const ft = new factory_1.MsgTransport(1, config, new transport_1.FileDuplex(fix));
            yield this.dispatch(ft);
        });
    }
    benchmark(repeats) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!argv.fix) {
                console.log('provide a path to fix file i.e. --fix=data/examples/execution-report/fix.txt');
                return;
            }
            return new Promise((accept, reject) => {
                const fix = this.norm(argv.fix);
                const fs = require('fs');
                fs.readFile(fix, 'utf8', (err, contents) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        reject(err);
                    }
                    const toParse = new transport_1.StringDuplex(contents.repeat(repeats), false);
                    const startsAt = new Date();
                    let i = 0;
                    const config = this.config;
                    const buffer = config.sessionContainer.resolve(di_tokens_1.DITokens.ParseBuffer);
                    const asciiParser = new ascii_1.AsciiParser(config, toParse.readable, buffer);
                    asciiParser.on('msg', (msgType, v) => {
                        ++i;
                        if (i === repeats) {
                            const elapsed = new Date().getTime() - startsAt.getTime();
                            console.log(contents);
                            console.log(v.toString());
                            console.log(`[${msgType}]: repeats = ${repeats}, fields = ${v.structure.tags.nextTagPos}, length = ${contents.length} chars, elapsed ms ${elapsed}, ${(elapsed / repeats) * 1000} micros per msg`);
                            accept(true);
                        }
                    });
                }));
            });
        });
    }
    encode() {
        const session = this.session;
        if (!session) {
            console.log('provide a session json file e.g. --session=data/session/test-initiator.json');
            return;
        }
        if (!argv.type) {
            console.log('provide a message type e.g. --type=8');
            return;
        }
        if (!argv.json) {
            console.log('provide a json representation e.g. data/examples/execution-report/object.json');
            return;
        }
        const ts = argv.type.toString();
        const msg = this.jsonHelper.fromJson(path.join(this.root, argv.json), ts);
        session.encodeMessage(ts, msg);
        const fix = session.buffer.toString();
        console.log(fix);
    }
    norm(p) {
        let f = p;
        if (!path.isAbsolute(p)) {
            f = path.join(this.root, f);
        }
        return f;
    }
}
exports.JsfixCmd = JsfixCmd;
function showHelp() {
    console.log('this help page');
    console.log('npm run cmd');
    console.log('npm run cmd -- --help');
    console.log();
    console.log('token format i.e. [602] 687 (LegQty) = 33589');
    console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/quickfix/FIX.4.4/execution-report/fix.txt --delimiter="|" --tokens');
    console.log();
    console.log('token format use fix repo dictionary');
    console.log('jsfix-cmd --dict=data/fix_repo/FIX.4.4/Base --fix=data/examples/quickfix/FIX.4.4/execution-report/fix.txt'
        + ' --delimiter="|" --tokens');
    console.log();
    console.log('structure format i.e. show locations of components etc.');
    console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt' +
        ' --delimiter="|" --tokens --structures');
    console.log();
    console.log('full JS object in JSON format.');
    console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt' +
        ' --delimiter="|" --tokens --objects');
    console.log();
    console.log('full JS object in JSON format - filter only type messages.');
    console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt' +
        ' --delimiter="|" --tokens --type=8 --objects');
    console.log();
    console.log('timing stats and message counts. Structured parsing of all messages.');
    console.log('jsfix-cmd --dict=data/FIX44.xml --fix=data/examples/FIX.4.4/quickfix/execution-report/fix.txt --stats');
    console.log();
    console.log('encode a json object to fix format');
    console.log('jsfix-cmd --json=data/examples/FIX.4.4/quickfix/execution-report/object.json' +
        ' --session=data/session.json --type=8 --delimiter="|"');
    console.log();
    console.log('display field definition');
    console.log('jsfix-cmd --dict=data/FIX44.xml --field=MsgType|35');
    console.log();
    console.log('display field use fix repo dictionary e.g. 271 MDEntrySize QTY Quantity or volume represented by the Market Data Entry.');
    console.log('jsfix-cmd --dict=data/fix_repo/FIX.4.4/Base --field=MsgType');
    console.log('jsfix-cmd --dict=data/fix_repo/FIX.4.4/Base --field=35');
    console.log();
    console.log('script to describe field in repository version 4.4');
    console.log('npm run repo44 -- --field=8');
    console.log();
    console.log('script to describe field in fixml');
    console.log('npm run fixml -- --field=50');
    console.log();
    console.log('generate unit test set of files - i.e. randomly generate an object, encode to fix. density 1 is all fields');
    console.log('jsfix-cmd --generate --type=AE --density=0.8 --unit --delimiter="|" --session=data/session/test-initiator.json');
    console.log('npm run repo44-unit -- --type=AE');
    console.log('test script with no repeat groups');
    console.log('npm run repo44-unit -- --type=AE --groups=false');
    console.log();
    console.log('generate a fix log of randomly generated but syntactically correct messages');
    console.log('jsfix-cmd --generate --density=0.8 --repeats=50 --script --delimiter="|" --session=data/session/test-initiator.json');
    console.log('npm run repo44-script');
    console.log('parse above generated script');
    console.log('npm run repo44-repscr');
    console.log();
    console.log('replay example repo fix file of 50 messages.');
    console.log('jsfix-cmd --session=data/session/test-initiator.json --fix=data/examples/FIX.4.4/fix.txt --delimiter="|" --stats');
    console.log('npm run repo44-replay -- --stats');
    console.log('npm run repo44-replay -- --objects');
    console.log('npm run repo44-replay -- --tokens');
    console.log('npm run repo44-replay -- --structures');
    console.log();
    console.log('benchmark parse a message');
    console.log('jsfix-cmd --delimiter="|" --session=data/session/test-initiator.json --fix=data/examples/FIX.4.4/repo/trade-capture-no-groups/fix.txt --benchmark');
    console.log('npm run repo44-bench -- --fix=data/examples/FIX.4.4/repo/trade-capture-no-groups/fix.txt');
    console.log();
    console.log('compile typescript interfaces - i.e. outputs to src/types/FIX4.4 - requires set and enum sub folders');
    console.log('npm run cmd -- --dict=repo40 --compile');
    console.log('npm run cmd -- --dict=repo41 --compile');
    console.log('npm run cmd -- --dict=repo42 --compile');
    console.log('npm run cmd -- --dict=repo43 --compile');
    console.log('npm run cmd -- --dict=repo44 --compile');
    console.log('npm run cmd -- --dict=repo50 --compile');
    console.log('npm run cmd -- --dict=repo50sp1 --compile');
    console.log('npm run cmd -- --dict=repo50sp2 --compile');
    console.log('npm run cmd -- --dict=repofixml --compile');
    console.log('npm run cmd -- --dict=qf44 --compile');
    console.log('npm run cmd -- --dict=data/handmade.xml --compile --output=src/types/handmade');
    console.log();
}
const help = argv.h || argv.help;
if (help) {
    showHelp();
}
else {
    const cmd = new JsfixCmd();
    cmd.exec().then((res) => {
        if (!res) {
            showHelp();
        }
    }).catch((e) => {
        console.log(`error ${e.message}`);
    });
}
//# sourceMappingURL=jsfix-cmd.js.map