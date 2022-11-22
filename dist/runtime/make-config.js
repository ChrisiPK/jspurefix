"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeFactory = void 0;
const ascii_1 = require("../buffer/ascii");
const config_1 = require("../config");
const util_1 = require("../util/");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("./di-tokens");
let RuntimeFactory = class RuntimeFactory {
    constructor(definitionFactory, logFactory, msgFactory, description) {
        this.definitionFactory = definitionFactory;
        this.logFactory = logFactory;
        this.msgFactory = msgFactory;
        this.description = description;
    }
    makeConfig() {
        const description = this.description;
        return new Promise((accept, reject) => {
            try {
                this.definitionFactory.getDefinitions(description.application.dictionary, (t) => {
                    return this.logFactory.logger(`${description.application.type}.${t}`);
                }).then((definitions) => {
                    const config = new config_1.JsFixConfig(this.msgFactory, definitions, description, ascii_1.AsciiChars.Soh, this.logFactory);
                    accept(config);
                }).catch(e => {
                    reject(e);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
};
RuntimeFactory = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(util_1.DefinitionFactory)),
    __param(1, (0, tsyringe_1.inject)(di_tokens_1.DITokens.JsFixLoggerFactory)),
    __param(2, (0, tsyringe_1.inject)(di_tokens_1.DITokens.ISessionMsgFactory)),
    __param(3, (0, tsyringe_1.inject)(di_tokens_1.DITokens.ISessionDescription)),
    __metadata("design:paramtypes", [util_1.DefinitionFactory,
        config_1.JsFixLoggerFactory, Object, Object])
], RuntimeFactory);
exports.RuntimeFactory = RuntimeFactory;
//# sourceMappingURL=make-config.js.map