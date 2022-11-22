"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickAction = void 0;
var TickAction;
(function (TickAction) {
    TickAction[TickAction["Nothing"] = 1] = "Nothing";
    TickAction[TickAction["Heartbeat"] = 2] = "Heartbeat";
    TickAction[TickAction["TestRequest"] = 3] = "TestRequest";
    TickAction[TickAction["TerminateOnError"] = 4] = "TerminateOnError";
    TickAction[TickAction["WaitLogoutConfirmExpired"] = 5] = "WaitLogoutConfirmExpired";
    TickAction[TickAction["Stop"] = 6] = "Stop";
})(TickAction = exports.TickAction || (exports.TickAction = {}));
//# sourceMappingURL=tick-action.js.map