"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseState = void 0;
var ParseState;
(function (ParseState) {
    ParseState[ParseState["Begin"] = 1] = "Begin";
    ParseState[ParseState["FieldDefinitions"] = 2] = "FieldDefinitions";
    ParseState[ParseState["ComponentsFirstPass"] = 3] = "ComponentsFirstPass";
    ParseState[ParseState["ComponentsSecondPass"] = 4] = "ComponentsSecondPass";
    ParseState[ParseState["ComponentsThirdPass"] = 5] = "ComponentsThirdPass";
    ParseState[ParseState["Messages"] = 6] = "Messages";
})(ParseState = exports.ParseState || (exports.ParseState = {}));
//# sourceMappingURL=parse-state.js.map