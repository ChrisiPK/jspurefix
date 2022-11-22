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
const transport_1 = require("../../transport");
let state;
let now;
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    state = new transport_1.FixSessionState({ heartBeat: 30 });
    state.state = transport_1.SessionState.InitiationLogonResponse;
    now = new Date(2018, 0, 1, 20, 0, 0, 0);
    state.LastSentAt = now;
    state.lastReceivedAt = now;
    state.peerHeartBeatSecs = 30;
    state.lastPeerMsgSeqNum = 1;
}));
test('do nothing', () => {
    const action = state.calcAction(now);
    expect(action).toEqual(transport_1.TickAction.Nothing);
});
test('heartbeat', () => {
    const next = new Date(now.getTime() + 31 * 1000);
    state.lastReceivedAt = next;
    const action = state.calcAction(next);
    expect(state.timeToDie()).toEqual(false);
    expect(state.timeToHeartbeat()).toEqual(true);
    expect(state.timeToTerminate()).toEqual(false);
    expect(state.timeToTestRequest()).toEqual(false);
    expect(action).toEqual(transport_1.TickAction.Heartbeat);
});
test('testrequest', () => {
    const next = new Date(now.getTime() + 51 * 1000);
    state.LastSentAt = next;
    const action = state.calcAction(next);
    expect(state.timeToDie()).toEqual(false);
    expect(state.timeToHeartbeat()).toEqual(false);
    expect(state.timeToTerminate()).toEqual(false);
    expect(state.timeToTestRequest()).toEqual(true);
    expect(action).toEqual(transport_1.TickAction.TestRequest);
});
test('testrequest - no response', () => {
    const next = new Date(now.getTime() + 55 * 2 * 1000);
    state.LastSentAt = next;
    state.lastTestRequestAt = now;
    const action = state.calcAction(next);
    expect(state.timeToDie()).toEqual(false);
    expect(state.timeToHeartbeat()).toEqual(false);
    expect(state.timeToTerminate()).toEqual(true);
    expect(state.timeToTestRequest()).toEqual(true);
    expect(action).toEqual(transport_1.TickAction.TerminateOnError);
});
test('time to die - no logout response', () => {
    const next = new Date(now.getTime() + 20 * 1000);
    state.state = transport_1.SessionState.WaitingLogoutConfirm;
    state.LastSentAt = now;
    state.lastReceivedAt = now;
    state.logoutSentAt = now;
    const action = state.calcAction(next);
    expect(state.timeToDie()).toEqual(true);
    expect(state.timeToHeartbeat()).toEqual(false);
    expect(state.timeToTerminate()).toEqual(false);
    expect(state.timeToTestRequest()).toEqual(false);
    expect(action).toEqual(transport_1.TickAction.Stop);
});
//# sourceMappingURL=session-state.test.js.map