"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseState = void 0;
var ParseState;
(function (ParseState) {
    ParseState[ParseState["BeginField"] = 1] = "BeginField";
    ParseState[ParseState["ParsingTag"] = 2] = "ParsingTag";
    ParseState[ParseState["ParsingValue"] = 3] = "ParsingValue";
    ParseState[ParseState["ParsingRawDataLength"] = 4] = "ParsingRawDataLength";
    ParseState[ParseState["ParsingRawData"] = 5] = "ParsingRawData";
    ParseState[ParseState["MsgComplete"] = 6] = "MsgComplete";
})(ParseState = exports.ParseState || (exports.ParseState = {}));
//# sourceMappingURL=parse-state.js.map