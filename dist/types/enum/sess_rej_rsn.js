"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRejectReason = void 0;
var SessionRejectReason;
(function (SessionRejectReason) {
    SessionRejectReason[SessionRejectReason["InvalidTagNumber"] = 0] = "InvalidTagNumber";
    SessionRejectReason[SessionRejectReason["RequiredTagMissing"] = 1] = "RequiredTagMissing";
    SessionRejectReason[SessionRejectReason["TagNotDefinedForThisMessageType"] = 2] = "TagNotDefinedForThisMessageType";
    SessionRejectReason[SessionRejectReason["UndefinedTag"] = 3] = "UndefinedTag";
    SessionRejectReason[SessionRejectReason["TagSpecifiedWithoutAValue"] = 4] = "TagSpecifiedWithoutAValue";
    SessionRejectReason[SessionRejectReason["ValueIsIncorrect"] = 5] = "ValueIsIncorrect";
    SessionRejectReason[SessionRejectReason["IncorrectDataFormatForValue"] = 6] = "IncorrectDataFormatForValue";
    SessionRejectReason[SessionRejectReason["DecryptionProblem"] = 7] = "DecryptionProblem";
    SessionRejectReason[SessionRejectReason["SignatureProblem"] = 8] = "SignatureProblem";
    SessionRejectReason[SessionRejectReason["CompIDProblem"] = 9] = "CompIDProblem";
    SessionRejectReason[SessionRejectReason["SendingTimeAccuracyProblem"] = 10] = "SendingTimeAccuracyProblem";
    SessionRejectReason[SessionRejectReason["InvalidMsgType"] = 11] = "InvalidMsgType";
    SessionRejectReason[SessionRejectReason["XMLValidationError"] = 12] = "XMLValidationError";
    SessionRejectReason[SessionRejectReason["TagAppearsMoreThanOnce"] = 13] = "TagAppearsMoreThanOnce";
    SessionRejectReason[SessionRejectReason["TagSpecifiedOutOfRequiredOrder"] = 14] = "TagSpecifiedOutOfRequiredOrder";
    SessionRejectReason[SessionRejectReason["RepeatingGroupFieldsOutOfOrder"] = 15] = "RepeatingGroupFieldsOutOfOrder";
    SessionRejectReason[SessionRejectReason["IncorrectNumInGroupCountForRepeatingGroup"] = 16] = "IncorrectNumInGroupCountForRepeatingGroup";
    SessionRejectReason[SessionRejectReason["Non"] = 17] = "Non";
    SessionRejectReason[SessionRejectReason["Other"] = 99] = "Other";
})(SessionRejectReason = exports.SessionRejectReason || (exports.SessionRejectReason = {}));
//# sourceMappingURL=sess_rej_rsn.js.map