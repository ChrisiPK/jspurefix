"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionState = void 0;
var SessionState;
(function (SessionState) {
    SessionState[SessionState["DisconnectedNoConnectionToday"] = 1] = "DisconnectedNoConnectionToday";
    SessionState[SessionState["DisconnectedConnectionToday"] = 2] = "DisconnectedConnectionToday";
    SessionState[SessionState["DetectBrokenNetworkConnection"] = 3] = "DetectBrokenNetworkConnection";
    SessionState[SessionState["AwaitingConnection"] = 4] = "AwaitingConnection";
    SessionState[SessionState["InitiateConnection"] = 5] = "InitiateConnection";
    SessionState[SessionState["NetworkConnectionEstablished"] = 6] = "NetworkConnectionEstablished";
    SessionState[SessionState["InitiationLogonSent"] = 7] = "InitiationLogonSent";
    SessionState[SessionState["InitiationLogonReceived"] = 8] = "InitiationLogonReceived";
    SessionState[SessionState["InitiationLogonResponse"] = 9] = "InitiationLogonResponse";
    SessionState[SessionState["HandleResendRequest"] = 10] = "HandleResendRequest";
    SessionState[SessionState["ReceiveMsgSeqNumTooHigh"] = 11] = "ReceiveMsgSeqNumTooHigh";
    SessionState[SessionState["AwaitingProcessingResponseToResendRequest"] = 12] = "AwaitingProcessingResponseToResendRequest";
    SessionState[SessionState["NoMessagesReceivedInInterval"] = 13] = "NoMessagesReceivedInInterval";
    SessionState[SessionState["AwaitingProcessingResponseToTestRequest"] = 14] = "AwaitingProcessingResponseToTestRequest";
    SessionState[SessionState["ReceiveLogout"] = 15] = "ReceiveLogout";
    SessionState[SessionState["InitiateLogout"] = 16] = "InitiateLogout";
    SessionState[SessionState["ActiveNormalSession"] = 17] = "ActiveNormalSession";
    SessionState[SessionState["WaitingForALogon"] = 18] = "WaitingForALogon";
    SessionState[SessionState["PeerLogonRejected"] = 20] = "PeerLogonRejected";
    SessionState[SessionState["WaitingLogoutConfirm"] = 21] = "WaitingLogoutConfirm";
    SessionState[SessionState["ConfirmingLogout"] = 22] = "ConfirmingLogout";
    SessionState[SessionState["Stopped"] = 23] = "Stopped";
    SessionState[SessionState["Idle"] = 24] = "Idle";
})(SessionState = exports.SessionState || (exports.SessionState = {}));
//# sourceMappingURL=session-state.js.map