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
require("reflect-metadata");
const path = require("path");
const setup_1 = require("../env/setup");
const root = path.join(__dirname, '../../../data');
let definitions;
let views;
let expected;
let setup = null;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/test-initiator.json', null);
    yield setup.init();
    definitions = setup.client.config.definitions;
    expected = require(path.join(root, 'examples/FIX.4.4/fix.json'));
    views = yield setup.client.getViews();
}), 45000);
test('expect 50 messages in log', () => {
    expect(views.length).toEqual(50);
});
test('expect 50 messages of specific types in log', () => {
    const layout = views.reduce((a, latest) => {
        const def = definitions.message.get(latest.segment.name);
        if (def) {
            let lookup = a[def.msgType];
            if (!lookup) {
                lookup = 1;
            }
            else {
                lookup++;
            }
            a[def.msgType] = lookup;
        }
        return a;
    }, {});
    expect(layout).toEqual(expected);
});
//# sourceMappingURL=fix-log-replay.test.js.map