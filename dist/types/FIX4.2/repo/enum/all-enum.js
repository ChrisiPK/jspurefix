"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrFirm = exports.CoveredOrUncovered = exports.PutOrCall = exports.AllocLinkType = exports.StandInstDbType = exports.SecurityType = exports.SettlLocation = exports.SettlInstSource = exports.SettlInstTransType = exports.SettlInstMode = exports.ExecType = exports.ResetSeqNumFlag = exports.MiscFeeType = exports.IOINaturalFlag = exports.DKReason = exports.GapFillFlag = exports.ForexReq = exports.LocateReqd = exports.ReportToExch = exports.IOIQualifier = exports.OrdRejReason = exports.CxlRejReason = exports.EncryptMethod = exports.PossResend = exports.EmailType = exports.AllocRejCode = exports.AllocStatus = exports.ProcessCode = exports.OpenClose = exports.AllocTransType = exports.SettlmntTyp = exports.Urgency = exports.TimeInForce = exports.Side = exports.Rule80A = exports.PossDupFlag = exports.OrdType = exports.OrdStatus = exports.MsgType = exports.LastCapacity = exports.IOITransType = exports.IOIShares = exports.IOIQltyInd = exports.IDSource = exports.HandlInst = exports.ExecTransType = exports.ExecInst = exports.CommType = exports.AdvTransType = exports.AdvSide = void 0;
exports.GTBookingInst = exports.PriceType = exports.BasisPxType = exports.TradeType = exports.IncTaxInd = exports.ProgRptReqs = exports.ExchangeForPhysical = exports.LiquidityIndType = exports.DiscretionInst = exports.MsgDirection = exports.BusinessRejectReason = exports.ExecRestatementReason = exports.SolicitedFlag = exports.BidRequestTransType = exports.SessionRejectReason = exports.QuoteEntryRejectReason = exports.MessageEncoding = exports.TradSesStatus = exports.TradSesMode = exports.TradSesMethod = exports.Adjustment = exports.DueToRelated = exports.InViewOfCommon = exports.HaltReason = exports.SecurityTradingStatus = exports.UnsolicitedIndicator = exports.SecurityResponseType = exports.SecurityRequestType = exports.QuoteRequestType = exports.QuoteResponseLevel = exports.QuoteRejectReason = exports.QuoteCancelType = exports.QuoteAckStatus = exports.CorporateAction = exports.FinancialStatus = exports.OpenCloseSettleFlag = exports.DeleteReason = exports.MDReqRejReason = exports.MDUpdateAction = exports.TradeCondition = exports.QuoteCondition = exports.TickDirection = exports.MDEntryType = exports.AggregatedBook = exports.MDUpdateType = exports.SubscriptionRequestType = exports.Benchmark = exports.RoutingType = exports.AllocHandlInst = exports.NotifyBrokerOfCredit = void 0;
exports.MultiLegReportingType = exports.CxlRejResponseTo = exports.ListExecInstType = exports.NetGrossInd = void 0;
var AdvSide;
(function (AdvSide) {
    AdvSide["Buy"] = "B";
    AdvSide["Sell"] = "S";
    AdvSide["Trade"] = "T";
    AdvSide["Cross"] = "X";
})(AdvSide = exports.AdvSide || (exports.AdvSide = {}));
var AdvTransType;
(function (AdvTransType) {
    AdvTransType["Cancel"] = "C";
    AdvTransType["New"] = "N";
    AdvTransType["Replace"] = "R";
})(AdvTransType = exports.AdvTransType || (exports.AdvTransType = {}));
var CommType;
(function (CommType) {
    CommType["PerUnit"] = "1";
    CommType["Percent"] = "2";
    CommType["Absolute"] = "3";
})(CommType = exports.CommType || (exports.CommType = {}));
var ExecInst;
(function (ExecInst) {
    ExecInst["StayOnOfferSide"] = "0";
    ExecInst["NotHeld"] = "1";
    ExecInst["Work"] = "2";
    ExecInst["GoAlong"] = "3";
    ExecInst["OverTheDay"] = "4";
    ExecInst["Held"] = "5";
    ExecInst["ParticipateDoNotInitiate"] = "6";
    ExecInst["StrictScale"] = "7";
    ExecInst["TryToScale"] = "8";
    ExecInst["StayOnBidSide"] = "9";
    ExecInst["NoCross"] = "A";
    ExecInst["OkToCross"] = "B";
    ExecInst["CallFirst"] = "C";
    ExecInst["PercentOfVolume"] = "D";
    ExecInst["DoNotIncrease"] = "E";
    ExecInst["DoNotReduce"] = "F";
    ExecInst["AllOrNone"] = "G";
    ExecInst["InstitutionsOnly"] = "I";
    ExecInst["LastPeg"] = "L";
    ExecInst["MidPricePeg"] = "M";
    ExecInst["NonNegotiable"] = "N";
    ExecInst["OpeningPeg"] = "O";
    ExecInst["MarketPeg"] = "P";
    ExecInst["PrimaryPeg"] = "R";
    ExecInst["Suspend"] = "S";
    ExecInst["FixedPegToLocalBestBidOrOfferAtTimeOfOrder"] = "T";
    ExecInst["CustomerDisplayInstruction"] = "U";
    ExecInst["Netting"] = "V";
    ExecInst["PegToVwap"] = "W";
})(ExecInst = exports.ExecInst || (exports.ExecInst = {}));
var ExecTransType;
(function (ExecTransType) {
    ExecTransType["New"] = "0";
    ExecTransType["Cancel"] = "1";
    ExecTransType["Correct"] = "2";
    ExecTransType["Status"] = "3";
})(ExecTransType = exports.ExecTransType || (exports.ExecTransType = {}));
var HandlInst;
(function (HandlInst) {
    HandlInst["AutomatedExecutionNoIntervention"] = "1";
    HandlInst["AutomatedExecutionInterventionOk"] = "2";
    HandlInst["ManualOrder"] = "3";
})(HandlInst = exports.HandlInst || (exports.HandlInst = {}));
var IDSource;
(function (IDSource) {
    IDSource["Cusip"] = "1";
    IDSource["Sedol"] = "2";
    IDSource["Quik"] = "3";
    IDSource["IsinNumber"] = "4";
    IDSource["RicCode"] = "5";
    IDSource["IsoCurrencyCode"] = "6";
    IDSource["IsoCountryCode"] = "7";
    IDSource["ExchangeSymbol"] = "8";
    IDSource["ConsolidatedTapeAssociation"] = "9";
})(IDSource = exports.IDSource || (exports.IDSource = {}));
var IOIQltyInd;
(function (IOIQltyInd) {
    IOIQltyInd["High"] = "H";
    IOIQltyInd["Low"] = "L";
    IOIQltyInd["Medium"] = "M";
})(IOIQltyInd = exports.IOIQltyInd || (exports.IOIQltyInd = {}));
var IOIShares;
(function (IOIShares) {
    IOIShares["Large"] = "L";
    IOIShares["Medium"] = "M";
    IOIShares["Small"] = "S";
})(IOIShares = exports.IOIShares || (exports.IOIShares = {}));
var IOITransType;
(function (IOITransType) {
    IOITransType["Cancel"] = "C";
    IOITransType["New"] = "N";
    IOITransType["Replace"] = "R";
})(IOITransType = exports.IOITransType || (exports.IOITransType = {}));
var LastCapacity;
(function (LastCapacity) {
    LastCapacity["Agent"] = "1";
    LastCapacity["CrossAsAgent"] = "2";
    LastCapacity["CrossAsPrincipal"] = "3";
    LastCapacity["Principal"] = "4";
})(LastCapacity = exports.LastCapacity || (exports.LastCapacity = {}));
var MsgType;
(function (MsgType) {
    MsgType["Heartbeat"] = "0";
    MsgType["TestRequest"] = "1";
    MsgType["ResendRequest"] = "2";
    MsgType["Reject"] = "3";
    MsgType["SequenceReset"] = "4";
    MsgType["Logout"] = "5";
    MsgType["Ioi"] = "6";
    MsgType["Advertisement"] = "7";
    MsgType["ExecutionReport"] = "8";
    MsgType["OrderCancelReject"] = "9";
    MsgType["QuoteStatusRequest"] = "a";
    MsgType["Logon"] = "A";
    MsgType["News"] = "B";
    MsgType["MassQuoteAcknowledgement"] = "b";
    MsgType["Email"] = "C";
    MsgType["SecurityDefinitionRequest"] = "c";
    MsgType["NewOrderSingle"] = "D";
    MsgType["SecurityDefinition"] = "d";
    MsgType["NewOrderList"] = "E";
    MsgType["SecurityStatusRequest"] = "e";
    MsgType["SecurityStatus"] = "f";
    MsgType["OrderCancelRequest"] = "F";
    MsgType["OrderCancelReplaceRequest"] = "G";
    MsgType["TradingSessionStatusRequest"] = "g";
    MsgType["OrderStatusRequest"] = "H";
    MsgType["TradingSessionStatus"] = "h";
    MsgType["MassQuote"] = "i";
    MsgType["BusinessMessageReject"] = "j";
    MsgType["AllocationInstruction"] = "J";
    MsgType["ListCancelRequest"] = "K";
    MsgType["BidRequest"] = "k";
    MsgType["BidResponse"] = "l";
    MsgType["ListExecute"] = "L";
    MsgType["ListStrikePrice"] = "m";
    MsgType["ListStatusRequest"] = "M";
    MsgType["ListStatus"] = "N";
    MsgType["AllocationInstructionAck"] = "P";
    MsgType["DontKnowTrade"] = "Q";
    MsgType["QuoteRequest"] = "R";
    MsgType["Quote"] = "S";
    MsgType["SettlementInstructions"] = "T";
    MsgType["MarketDataRequest"] = "V";
    MsgType["MarketDataSnapshotFullRefresh"] = "W";
    MsgType["MarketDataIncrementalRefresh"] = "X";
    MsgType["MarketDataRequestReject"] = "Y";
    MsgType["QuoteCancel"] = "Z";
})(MsgType = exports.MsgType || (exports.MsgType = {}));
var OrdStatus;
(function (OrdStatus) {
    OrdStatus["New"] = "0";
    OrdStatus["PartiallyFilled"] = "1";
    OrdStatus["Filled"] = "2";
    OrdStatus["DoneForDay"] = "3";
    OrdStatus["Canceled"] = "4";
    OrdStatus["Replaced"] = "5";
    OrdStatus["PendingCancel"] = "6";
    OrdStatus["Stopped"] = "7";
    OrdStatus["Rejected"] = "8";
    OrdStatus["Suspended"] = "9";
    OrdStatus["PendingNew"] = "A";
    OrdStatus["Calculated"] = "B";
    OrdStatus["Expired"] = "C";
    OrdStatus["AcceptedForBidding"] = "D";
    OrdStatus["PendingReplace"] = "E";
})(OrdStatus = exports.OrdStatus || (exports.OrdStatus = {}));
var OrdType;
(function (OrdType) {
    OrdType["Market"] = "1";
    OrdType["Limit"] = "2";
    OrdType["Stop"] = "3";
    OrdType["StopLimit"] = "4";
    OrdType["MarketOnClose"] = "5";
    OrdType["WithOrWithout"] = "6";
    OrdType["LimitOrBetter"] = "7";
    OrdType["LimitWithOrWithout"] = "8";
    OrdType["OnBasis"] = "9";
    OrdType["OnClose"] = "A";
    OrdType["LimitOnClose"] = "B";
    OrdType["ForexMarket"] = "C";
    OrdType["PreviouslyQuoted"] = "D";
    OrdType["PreviouslyIndicated"] = "E";
    OrdType["ForexLimit"] = "F";
    OrdType["ForexSwap"] = "G";
    OrdType["ForexPreviouslyQuoted"] = "H";
    OrdType["Funari"] = "I";
    OrdType["Pegged"] = "P";
})(OrdType = exports.OrdType || (exports.OrdType = {}));
var PossDupFlag;
(function (PossDupFlag) {
    PossDupFlag["OriginalTransmission"] = "N";
    PossDupFlag["PossibleDuplicate"] = "Y";
})(PossDupFlag = exports.PossDupFlag || (exports.PossDupFlag = {}));
var Rule80A;
(function (Rule80A) {
    Rule80A["AgencySingleOrder"] = "A";
    Rule80A["ShortExemptTransactionAType"] = "B";
    Rule80A["ProprietaryNonAlgo"] = "C";
    Rule80A["ProgramOrderMember"] = "D";
    Rule80A["ShortExemptTransactionForPrincipal"] = "E";
    Rule80A["ShortExemptTransactionWType"] = "F";
    Rule80A["ShortExemptTransactionIType"] = "H";
    Rule80A["IndividualInvestor"] = "I";
    Rule80A["ProprietaryAlgo"] = "J";
    Rule80A["AgencyAlgo"] = "K";
    Rule80A["ShortExemptTransactionMemberAffliated"] = "L";
    Rule80A["ProgramOrderOtherMember"] = "M";
    Rule80A["AgentForOtherMember"] = "N";
    Rule80A["ProprietaryTransactionAffiliated"] = "O";
    Rule80A["Principal"] = "P";
    Rule80A["TransactionNonMember"] = "R";
    Rule80A["SpecialistTrades"] = "S";
    Rule80A["TransactionUnaffiliatedMember"] = "T";
    Rule80A["AgencyIndexArb"] = "U";
    Rule80A["AllOtherOrdersAsAgentForOtherMember"] = "W";
    Rule80A["ShortExemptTransactionMemberNotAffliated"] = "X";
    Rule80A["AgencyNonAlgo"] = "Y";
    Rule80A["ShortExemptTransactionNonMember"] = "Z";
})(Rule80A = exports.Rule80A || (exports.Rule80A = {}));
var Side;
(function (Side) {
    Side["Buy"] = "1";
    Side["Sell"] = "2";
    Side["BuyMinus"] = "3";
    Side["SellPlus"] = "4";
    Side["SellShort"] = "5";
    Side["SellShortExempt"] = "6";
    Side["Undisclosed"] = "7";
    Side["Cross"] = "8";
    Side["CrossShort"] = "9";
})(Side = exports.Side || (exports.Side = {}));
var TimeInForce;
(function (TimeInForce) {
    TimeInForce["Day"] = "0";
    TimeInForce["GoodTillCancel"] = "1";
    TimeInForce["AtTheOpening"] = "2";
    TimeInForce["ImmediateOrCancel"] = "3";
    TimeInForce["FillOrKill"] = "4";
    TimeInForce["GoodTillCrossing"] = "5";
    TimeInForce["GoodTillDate"] = "6";
})(TimeInForce = exports.TimeInForce || (exports.TimeInForce = {}));
var Urgency;
(function (Urgency) {
    Urgency["Normal"] = "0";
    Urgency["Flash"] = "1";
    Urgency["Background"] = "2";
})(Urgency = exports.Urgency || (exports.Urgency = {}));
var SettlmntTyp;
(function (SettlmntTyp) {
    SettlmntTyp["Regular"] = "0";
    SettlmntTyp["Cash"] = "1";
    SettlmntTyp["NextDay"] = "2";
    SettlmntTyp["TPlus2"] = "3";
    SettlmntTyp["TPlus3"] = "4";
    SettlmntTyp["TPlus4"] = "5";
    SettlmntTyp["Future"] = "6";
    SettlmntTyp["WhenAndIfIssued"] = "7";
    SettlmntTyp["SellersOption"] = "8";
    SettlmntTyp["TPlus5"] = "9";
})(SettlmntTyp = exports.SettlmntTyp || (exports.SettlmntTyp = {}));
var AllocTransType;
(function (AllocTransType) {
    AllocTransType["New"] = "0";
    AllocTransType["Replace"] = "1";
    AllocTransType["Cancel"] = "2";
    AllocTransType["Preliminary"] = "3";
    AllocTransType["Calculated"] = "4";
    AllocTransType["CalculatedWithoutPreliminary"] = "5";
})(AllocTransType = exports.AllocTransType || (exports.AllocTransType = {}));
var OpenClose;
(function (OpenClose) {
    OpenClose["Close"] = "C";
    OpenClose["Open"] = "O";
})(OpenClose = exports.OpenClose || (exports.OpenClose = {}));
var ProcessCode;
(function (ProcessCode) {
    ProcessCode["Regular"] = "0";
    ProcessCode["SoftDollar"] = "1";
    ProcessCode["StepIn"] = "2";
    ProcessCode["StepOut"] = "3";
    ProcessCode["SoftDollarStepIn"] = "4";
    ProcessCode["SoftDollarStepOut"] = "5";
    ProcessCode["PlanSponsor"] = "6";
})(ProcessCode = exports.ProcessCode || (exports.ProcessCode = {}));
var AllocStatus;
(function (AllocStatus) {
    AllocStatus[AllocStatus["Accepted"] = 0] = "Accepted";
    AllocStatus[AllocStatus["BlockLevelReject"] = 1] = "BlockLevelReject";
    AllocStatus[AllocStatus["AccountLevelReject"] = 2] = "AccountLevelReject";
    AllocStatus[AllocStatus["Received"] = 3] = "Received";
})(AllocStatus = exports.AllocStatus || (exports.AllocStatus = {}));
var AllocRejCode;
(function (AllocRejCode) {
    AllocRejCode[AllocRejCode["UnknownAccount"] = 0] = "UnknownAccount";
    AllocRejCode[AllocRejCode["IncorrectQuantity"] = 1] = "IncorrectQuantity";
    AllocRejCode[AllocRejCode["IncorrectAveragegPrice"] = 2] = "IncorrectAveragegPrice";
    AllocRejCode[AllocRejCode["UnknownExecutingBrokerMnemonic"] = 3] = "UnknownExecutingBrokerMnemonic";
    AllocRejCode[AllocRejCode["CommissionDifference"] = 4] = "CommissionDifference";
    AllocRejCode[AllocRejCode["UnknownOrderId"] = 5] = "UnknownOrderId";
    AllocRejCode[AllocRejCode["UnknownListId"] = 6] = "UnknownListId";
    AllocRejCode[AllocRejCode["OtherSeeText"] = 7] = "OtherSeeText";
})(AllocRejCode = exports.AllocRejCode || (exports.AllocRejCode = {}));
var EmailType;
(function (EmailType) {
    EmailType["New"] = "0";
    EmailType["Reply"] = "1";
    EmailType["AdminReply"] = "2";
})(EmailType = exports.EmailType || (exports.EmailType = {}));
var PossResend;
(function (PossResend) {
    PossResend["OriginalTransmission"] = "N";
    PossResend["PossibleResend"] = "Y";
})(PossResend = exports.PossResend || (exports.PossResend = {}));
var EncryptMethod;
(function (EncryptMethod) {
    EncryptMethod[EncryptMethod["None"] = 0] = "None";
    EncryptMethod[EncryptMethod["Pkcs"] = 1] = "Pkcs";
    EncryptMethod[EncryptMethod["Des"] = 2] = "Des";
    EncryptMethod[EncryptMethod["Pkcsdes"] = 3] = "Pkcsdes";
    EncryptMethod[EncryptMethod["Pgpdes"] = 4] = "Pgpdes";
    EncryptMethod[EncryptMethod["Pgpdesmd5"] = 5] = "Pgpdesmd5";
    EncryptMethod[EncryptMethod["Pem"] = 6] = "Pem";
})(EncryptMethod = exports.EncryptMethod || (exports.EncryptMethod = {}));
var CxlRejReason;
(function (CxlRejReason) {
    CxlRejReason[CxlRejReason["TooLateToCancel"] = 0] = "TooLateToCancel";
    CxlRejReason[CxlRejReason["UnknownOrder"] = 1] = "UnknownOrder";
    CxlRejReason[CxlRejReason["BrokerCredit"] = 2] = "BrokerCredit";
    CxlRejReason[CxlRejReason["OrderAlreadyInPendingStatus"] = 3] = "OrderAlreadyInPendingStatus";
})(CxlRejReason = exports.CxlRejReason || (exports.CxlRejReason = {}));
var OrdRejReason;
(function (OrdRejReason) {
    OrdRejReason[OrdRejReason["BrokerCredit"] = 0] = "BrokerCredit";
    OrdRejReason[OrdRejReason["UnknownSymbol"] = 1] = "UnknownSymbol";
    OrdRejReason[OrdRejReason["ExchangeClosed"] = 2] = "ExchangeClosed";
    OrdRejReason[OrdRejReason["OrderExceedsLimit"] = 3] = "OrderExceedsLimit";
    OrdRejReason[OrdRejReason["TooLateToEnter"] = 4] = "TooLateToEnter";
    OrdRejReason[OrdRejReason["UnknownOrder"] = 5] = "UnknownOrder";
    OrdRejReason[OrdRejReason["DuplicateOrder"] = 6] = "DuplicateOrder";
    OrdRejReason[OrdRejReason["DuplicateOfAVerballyCommunicatedOrder"] = 7] = "DuplicateOfAVerballyCommunicatedOrder";
    OrdRejReason[OrdRejReason["StaleOrder"] = 8] = "StaleOrder";
})(OrdRejReason = exports.OrdRejReason || (exports.OrdRejReason = {}));
var IOIQualifier;
(function (IOIQualifier) {
    IOIQualifier["AllOrNone"] = "A";
    IOIQualifier["AtTheClose"] = "C";
    IOIQualifier["InTouchWith"] = "I";
    IOIQualifier["Limit"] = "L";
    IOIQualifier["MoreBehind"] = "M";
    IOIQualifier["AtTheOpen"] = "O";
    IOIQualifier["TakingAPosition"] = "P";
    IOIQualifier["AtTheMarket"] = "Q";
    IOIQualifier["ReadyToTrade"] = "R";
    IOIQualifier["PortfolioShown"] = "S";
    IOIQualifier["ThroughTheDay"] = "T";
    IOIQualifier["Versus"] = "V";
    IOIQualifier["Indication"] = "W";
    IOIQualifier["CrossingOpportunity"] = "X";
    IOIQualifier["AtTheMidpoint"] = "Y";
    IOIQualifier["PreOpen"] = "Z";
})(IOIQualifier = exports.IOIQualifier || (exports.IOIQualifier = {}));
var ReportToExch;
(function (ReportToExch) {
    ReportToExch["SenderReports"] = "N";
    ReportToExch["ReceiverReports"] = "Y";
})(ReportToExch = exports.ReportToExch || (exports.ReportToExch = {}));
var LocateReqd;
(function (LocateReqd) {
    LocateReqd["No"] = "N";
    LocateReqd["Yes"] = "Y";
})(LocateReqd = exports.LocateReqd || (exports.LocateReqd = {}));
var ForexReq;
(function (ForexReq) {
    ForexReq["DoNotExecuteForexAfterSecurityTrade"] = "N";
    ForexReq["ExecuteForexAfterSecurityTrade"] = "Y";
})(ForexReq = exports.ForexReq || (exports.ForexReq = {}));
var GapFillFlag;
(function (GapFillFlag) {
    GapFillFlag["SequenceReset"] = "N";
    GapFillFlag["GapFillMessage"] = "Y";
})(GapFillFlag = exports.GapFillFlag || (exports.GapFillFlag = {}));
var DKReason;
(function (DKReason) {
    DKReason["UnknownSymbol"] = "A";
    DKReason["WrongSide"] = "B";
    DKReason["QuantityExceedsOrder"] = "C";
    DKReason["NoMatchingOrder"] = "D";
    DKReason["PriceExceedsLimit"] = "E";
    DKReason["Other"] = "Z";
})(DKReason = exports.DKReason || (exports.DKReason = {}));
var IOINaturalFlag;
(function (IOINaturalFlag) {
    IOINaturalFlag["NotNatural"] = "N";
    IOINaturalFlag["Natural"] = "Y";
})(IOINaturalFlag = exports.IOINaturalFlag || (exports.IOINaturalFlag = {}));
var MiscFeeType;
(function (MiscFeeType) {
    MiscFeeType["Regulatory"] = "1";
    MiscFeeType["Tax"] = "2";
    MiscFeeType["LocalCommission"] = "3";
    MiscFeeType["ExchangeFees"] = "4";
    MiscFeeType["Stamp"] = "5";
    MiscFeeType["Levy"] = "6";
    MiscFeeType["Other"] = "7";
    MiscFeeType["Markup"] = "8";
    MiscFeeType["ConsumptionTax"] = "9";
})(MiscFeeType = exports.MiscFeeType || (exports.MiscFeeType = {}));
var ResetSeqNumFlag;
(function (ResetSeqNumFlag) {
    ResetSeqNumFlag["No"] = "N";
    ResetSeqNumFlag["Yes"] = "Y";
})(ResetSeqNumFlag = exports.ResetSeqNumFlag || (exports.ResetSeqNumFlag = {}));
var ExecType;
(function (ExecType) {
    ExecType["New"] = "0";
    ExecType["PartialFill"] = "1";
    ExecType["Fill"] = "2";
    ExecType["DoneForDay"] = "3";
    ExecType["Canceled"] = "4";
    ExecType["Replaced"] = "5";
    ExecType["PendingCancel"] = "6";
    ExecType["Stopped"] = "7";
    ExecType["Rejected"] = "8";
    ExecType["Suspended"] = "9";
    ExecType["PendingNew"] = "A";
    ExecType["Calculated"] = "B";
    ExecType["Expired"] = "C";
    ExecType["Restated"] = "D";
    ExecType["PendingReplace"] = "E";
})(ExecType = exports.ExecType || (exports.ExecType = {}));
var SettlInstMode;
(function (SettlInstMode) {
    SettlInstMode["Default"] = "0";
    SettlInstMode["StandingInstructionsProvided"] = "1";
    SettlInstMode["SpecificAllocationAccountOverriding"] = "2";
    SettlInstMode["SpecificAllocationAccountStanding"] = "3";
})(SettlInstMode = exports.SettlInstMode || (exports.SettlInstMode = {}));
var SettlInstTransType;
(function (SettlInstTransType) {
    SettlInstTransType["Cancel"] = "C";
    SettlInstTransType["New"] = "N";
    SettlInstTransType["Replace"] = "R";
})(SettlInstTransType = exports.SettlInstTransType || (exports.SettlInstTransType = {}));
var SettlInstSource;
(function (SettlInstSource) {
    SettlInstSource["BrokerCredit"] = "1";
    SettlInstSource["Institution"] = "2";
})(SettlInstSource = exports.SettlInstSource || (exports.SettlInstSource = {}));
var SettlLocation;
(function (SettlLocation) {
    SettlLocation["Cedel"] = "CED";
    SettlLocation["DepositoryTrustCompany"] = "DTC";
    SettlLocation["EuroClear"] = "EUR";
    SettlLocation["FederalBookEntry"] = "FED";
    SettlLocation["LocalMarketSettleLocation"] = "ISO Country Code";
    SettlLocation["Physical"] = "PNY";
    SettlLocation["ParticipantTrustCompany"] = "PTC";
})(SettlLocation = exports.SettlLocation || (exports.SettlLocation = {}));
var SecurityType;
(function (SecurityType) {
    SecurityType["Wildcard"] = "?";
    SecurityType["BankersAcceptance"] = "BA";
    SecurityType["ConvertibleBond"] = "CB";
    SecurityType["CertificateOfDeposit"] = "CD";
    SecurityType["CollateralizedMortgageObligation"] = "CMO";
    SecurityType["CorporateBond"] = "CORP";
    SecurityType["CommercialPaper"] = "CP";
    SecurityType["CorporatePrivatePlacement"] = "CPP";
    SecurityType["CommonStock"] = "CS";
    SecurityType["FederalHousingAuthority"] = "FHA";
    SecurityType["FederalHomeLoan"] = "FHL";
    SecurityType["FederalNationalMortgageAssociation"] = "FN";
    SecurityType["ForeignExchangeContract"] = "FOR";
    SecurityType["Future"] = "FUT";
    SecurityType["GovernmentNationalMortgageAssociation"] = "GN";
    SecurityType["TreasuriesAgencyDebenture"] = "GOVT";
    SecurityType["IoetteMortgage"] = "IET";
    SecurityType["MutualFund"] = "MF";
    SecurityType["MortgageInterestOnly"] = "MIO";
    SecurityType["MortgagePrincipalOnly"] = "MPO";
    SecurityType["MortgagePrivatePlacement"] = "MPP";
    SecurityType["MiscellaneousPassThrough"] = "MPT";
    SecurityType["MunicipalBond"] = "MUNI";
    SecurityType["NoSecurityType"] = "NONE";
    SecurityType["Option"] = "OPT";
    SecurityType["PreferredStock"] = "PS";
    SecurityType["RepurchaseAgreement"] = "RP";
    SecurityType["ReverseRepurchaseAgreement"] = "RVRP";
    SecurityType["StudentLoanMarketingAssociation"] = "SL";
    SecurityType["TimeDeposit"] = "TD";
    SecurityType["UsTreasuryBillOld"] = "USTB";
    SecurityType["Warrant"] = "WAR";
    SecurityType["CatsTigersAndLions"] = "ZOO";
})(SecurityType = exports.SecurityType || (exports.SecurityType = {}));
var StandInstDbType;
(function (StandInstDbType) {
    StandInstDbType[StandInstDbType["Other"] = 0] = "Other";
    StandInstDbType[StandInstDbType["Dtcsid"] = 1] = "Dtcsid";
    StandInstDbType[StandInstDbType["ThomsonAlert"] = 2] = "ThomsonAlert";
    StandInstDbType[StandInstDbType["AGlobalCustodian"] = 3] = "AGlobalCustodian";
})(StandInstDbType = exports.StandInstDbType || (exports.StandInstDbType = {}));
var AllocLinkType;
(function (AllocLinkType) {
    AllocLinkType[AllocLinkType["FxNetting"] = 0] = "FxNetting";
    AllocLinkType[AllocLinkType["FxSwap"] = 1] = "FxSwap";
})(AllocLinkType = exports.AllocLinkType || (exports.AllocLinkType = {}));
var PutOrCall;
(function (PutOrCall) {
    PutOrCall[PutOrCall["Put"] = 0] = "Put";
    PutOrCall[PutOrCall["Call"] = 1] = "Call";
})(PutOrCall = exports.PutOrCall || (exports.PutOrCall = {}));
var CoveredOrUncovered;
(function (CoveredOrUncovered) {
    CoveredOrUncovered[CoveredOrUncovered["Covered"] = 0] = "Covered";
    CoveredOrUncovered[CoveredOrUncovered["Uncovered"] = 1] = "Uncovered";
})(CoveredOrUncovered = exports.CoveredOrUncovered || (exports.CoveredOrUncovered = {}));
var CustomerOrFirm;
(function (CustomerOrFirm) {
    CustomerOrFirm[CustomerOrFirm["Customer"] = 0] = "Customer";
    CustomerOrFirm[CustomerOrFirm["Firm"] = 1] = "Firm";
})(CustomerOrFirm = exports.CustomerOrFirm || (exports.CustomerOrFirm = {}));
var NotifyBrokerOfCredit;
(function (NotifyBrokerOfCredit) {
    NotifyBrokerOfCredit["DetailsShouldNotBeCommunicated"] = "N";
    NotifyBrokerOfCredit["DetailsShouldBeCommunicated"] = "Y";
})(NotifyBrokerOfCredit = exports.NotifyBrokerOfCredit || (exports.NotifyBrokerOfCredit = {}));
var AllocHandlInst;
(function (AllocHandlInst) {
    AllocHandlInst[AllocHandlInst["Match"] = 1] = "Match";
    AllocHandlInst[AllocHandlInst["Forward"] = 2] = "Forward";
    AllocHandlInst[AllocHandlInst["ForwardAndMatch"] = 3] = "ForwardAndMatch";
})(AllocHandlInst = exports.AllocHandlInst || (exports.AllocHandlInst = {}));
var RoutingType;
(function (RoutingType) {
    RoutingType[RoutingType["TargetFirm"] = 1] = "TargetFirm";
    RoutingType[RoutingType["TargetList"] = 2] = "TargetList";
    RoutingType[RoutingType["BlockFirm"] = 3] = "BlockFirm";
    RoutingType[RoutingType["BlockList"] = 4] = "BlockList";
})(RoutingType = exports.RoutingType || (exports.RoutingType = {}));
var Benchmark;
(function (Benchmark) {
    Benchmark["Curve"] = "1";
    Benchmark["FiveYr"] = "2";
    Benchmark["Old5"] = "3";
    Benchmark["TenYr"] = "4";
    Benchmark["Old10"] = "5";
    Benchmark["ThirtyYr"] = "6";
    Benchmark["Old30"] = "7";
    Benchmark["ThreeMolibor"] = "8";
    Benchmark["SixMolibor"] = "9";
})(Benchmark = exports.Benchmark || (exports.Benchmark = {}));
var SubscriptionRequestType;
(function (SubscriptionRequestType) {
    SubscriptionRequestType["Snapshot"] = "0";
    SubscriptionRequestType["SnapshotAndUpdates"] = "1";
    SubscriptionRequestType["DisablePreviousSnapshot"] = "2";
})(SubscriptionRequestType = exports.SubscriptionRequestType || (exports.SubscriptionRequestType = {}));
var MDUpdateType;
(function (MDUpdateType) {
    MDUpdateType[MDUpdateType["FullRefresh"] = 0] = "FullRefresh";
    MDUpdateType[MDUpdateType["IncrementalRefresh"] = 1] = "IncrementalRefresh";
})(MDUpdateType = exports.MDUpdateType || (exports.MDUpdateType = {}));
var AggregatedBook;
(function (AggregatedBook) {
    AggregatedBook["BookEntriesShouldNotBeAggregated"] = "N";
    AggregatedBook["BookEntriesToBeAggregated"] = "Y";
})(AggregatedBook = exports.AggregatedBook || (exports.AggregatedBook = {}));
var MDEntryType;
(function (MDEntryType) {
    MDEntryType["Bid"] = "0";
    MDEntryType["Offer"] = "1";
    MDEntryType["Trade"] = "2";
    MDEntryType["IndexValue"] = "3";
    MDEntryType["OpeningPrice"] = "4";
    MDEntryType["ClosingPrice"] = "5";
    MDEntryType["SettlementPrice"] = "6";
    MDEntryType["TradingSessionHighPrice"] = "7";
    MDEntryType["TradingSessionLowPrice"] = "8";
    MDEntryType["TradingSessionVwapPrice"] = "9";
})(MDEntryType = exports.MDEntryType || (exports.MDEntryType = {}));
var TickDirection;
(function (TickDirection) {
    TickDirection["PlusTick"] = "0";
    TickDirection["ZeroPlusTick"] = "1";
    TickDirection["MinusTick"] = "2";
    TickDirection["ZeroMinusTick"] = "3";
})(TickDirection = exports.TickDirection || (exports.TickDirection = {}));
var QuoteCondition;
(function (QuoteCondition) {
    QuoteCondition["Open"] = "A";
    QuoteCondition["Closed"] = "B";
    QuoteCondition["ExchangeBest"] = "C";
    QuoteCondition["ConsolidatedBest"] = "D";
    QuoteCondition["Locked"] = "E";
    QuoteCondition["Crossed"] = "F";
    QuoteCondition["Depth"] = "G";
    QuoteCondition["FastTrading"] = "H";
    QuoteCondition["NonFirm"] = "I";
})(QuoteCondition = exports.QuoteCondition || (exports.QuoteCondition = {}));
var TradeCondition;
(function (TradeCondition) {
    TradeCondition["Cash"] = "A";
    TradeCondition["AveragePriceTrade"] = "B";
    TradeCondition["CashTrade"] = "C";
    TradeCondition["NextDay"] = "D";
    TradeCondition["Opening"] = "E";
    TradeCondition["IntradayTradeDetail"] = "F";
    TradeCondition["Rule127Trade"] = "G";
    TradeCondition["Rule155Trade"] = "H";
    TradeCondition["SoldLast"] = "I";
    TradeCondition["NextDayTrade"] = "J";
    TradeCondition["Opened"] = "K";
    TradeCondition["Seller"] = "L";
    TradeCondition["Sold"] = "M";
    TradeCondition["StoppedStock"] = "N";
})(TradeCondition = exports.TradeCondition || (exports.TradeCondition = {}));
var MDUpdateAction;
(function (MDUpdateAction) {
    MDUpdateAction["New"] = "0";
    MDUpdateAction["Change"] = "1";
    MDUpdateAction["Delete"] = "2";
})(MDUpdateAction = exports.MDUpdateAction || (exports.MDUpdateAction = {}));
var MDReqRejReason;
(function (MDReqRejReason) {
    MDReqRejReason["UnknownSymbol"] = "0";
    MDReqRejReason["DuplicateMdReqId"] = "1";
    MDReqRejReason["InsufficientBandwidth"] = "2";
    MDReqRejReason["InsufficientPermissions"] = "3";
    MDReqRejReason["UnsupportedSubscriptionRequestType"] = "4";
    MDReqRejReason["UnsupportedMarketDepth"] = "5";
    MDReqRejReason["UnsupportedMdUpdateType"] = "6";
    MDReqRejReason["UnsupportedAggregatedBook"] = "7";
    MDReqRejReason["UnsupportedMdEntryType"] = "8";
})(MDReqRejReason = exports.MDReqRejReason || (exports.MDReqRejReason = {}));
var DeleteReason;
(function (DeleteReason) {
    DeleteReason["Cancellation"] = "0";
    DeleteReason["Error"] = "1";
})(DeleteReason = exports.DeleteReason || (exports.DeleteReason = {}));
var OpenCloseSettleFlag;
(function (OpenCloseSettleFlag) {
    OpenCloseSettleFlag["DailyOpen"] = "0";
    OpenCloseSettleFlag["SessionOpen"] = "1";
    OpenCloseSettleFlag["DeliverySettlementEntry"] = "2";
})(OpenCloseSettleFlag = exports.OpenCloseSettleFlag || (exports.OpenCloseSettleFlag = {}));
var FinancialStatus;
(function (FinancialStatus) {
    FinancialStatus["Bankrupt"] = "1";
})(FinancialStatus = exports.FinancialStatus || (exports.FinancialStatus = {}));
var CorporateAction;
(function (CorporateAction) {
    CorporateAction["ExDividend"] = "A";
    CorporateAction["ExDistribution"] = "B";
    CorporateAction["ExRights"] = "C";
    CorporateAction["New"] = "D";
    CorporateAction["ExInterest"] = "E";
})(CorporateAction = exports.CorporateAction || (exports.CorporateAction = {}));
var QuoteAckStatus;
(function (QuoteAckStatus) {
    QuoteAckStatus[QuoteAckStatus["Accepted"] = 0] = "Accepted";
    QuoteAckStatus[QuoteAckStatus["CancelForSymbol"] = 1] = "CancelForSymbol";
    QuoteAckStatus[QuoteAckStatus["CanceledForSecurityType"] = 2] = "CanceledForSecurityType";
    QuoteAckStatus[QuoteAckStatus["CanceledForUnderlying"] = 3] = "CanceledForUnderlying";
    QuoteAckStatus[QuoteAckStatus["CanceledAll"] = 4] = "CanceledAll";
    QuoteAckStatus[QuoteAckStatus["Rejected"] = 5] = "Rejected";
})(QuoteAckStatus = exports.QuoteAckStatus || (exports.QuoteAckStatus = {}));
var QuoteCancelType;
(function (QuoteCancelType) {
    QuoteCancelType[QuoteCancelType["CancelForOneOrMoreSecurities"] = 1] = "CancelForOneOrMoreSecurities";
    QuoteCancelType[QuoteCancelType["CancelForSecurityType"] = 2] = "CancelForSecurityType";
    QuoteCancelType[QuoteCancelType["CancelForUnderlyingSecurity"] = 3] = "CancelForUnderlyingSecurity";
    QuoteCancelType[QuoteCancelType["CancelAllQuotes"] = 4] = "CancelAllQuotes";
})(QuoteCancelType = exports.QuoteCancelType || (exports.QuoteCancelType = {}));
var QuoteRejectReason;
(function (QuoteRejectReason) {
    QuoteRejectReason[QuoteRejectReason["UnknownSymbol"] = 1] = "UnknownSymbol";
    QuoteRejectReason[QuoteRejectReason["Exchange"] = 2] = "Exchange";
    QuoteRejectReason[QuoteRejectReason["QuoteRequestExceedsLimit"] = 3] = "QuoteRequestExceedsLimit";
    QuoteRejectReason[QuoteRejectReason["TooLateToEnter"] = 4] = "TooLateToEnter";
    QuoteRejectReason[QuoteRejectReason["UnknownQuote"] = 5] = "UnknownQuote";
    QuoteRejectReason[QuoteRejectReason["DuplicateQuote"] = 6] = "DuplicateQuote";
    QuoteRejectReason[QuoteRejectReason["InvalidBid"] = 7] = "InvalidBid";
    QuoteRejectReason[QuoteRejectReason["InvalidPrice"] = 8] = "InvalidPrice";
    QuoteRejectReason[QuoteRejectReason["NotAuthorizedToQuoteSecurity"] = 9] = "NotAuthorizedToQuoteSecurity";
})(QuoteRejectReason = exports.QuoteRejectReason || (exports.QuoteRejectReason = {}));
var QuoteResponseLevel;
(function (QuoteResponseLevel) {
    QuoteResponseLevel[QuoteResponseLevel["NoAcknowledgement"] = 0] = "NoAcknowledgement";
    QuoteResponseLevel[QuoteResponseLevel["AcknowledgeOnlyNegativeOrErroneousQuotes"] = 1] = "AcknowledgeOnlyNegativeOrErroneousQuotes";
    QuoteResponseLevel[QuoteResponseLevel["AcknowledgeEachQuoteMessage"] = 2] = "AcknowledgeEachQuoteMessage";
})(QuoteResponseLevel = exports.QuoteResponseLevel || (exports.QuoteResponseLevel = {}));
var QuoteRequestType;
(function (QuoteRequestType) {
    QuoteRequestType[QuoteRequestType["Manual"] = 1] = "Manual";
    QuoteRequestType[QuoteRequestType["Automatic"] = 2] = "Automatic";
})(QuoteRequestType = exports.QuoteRequestType || (exports.QuoteRequestType = {}));
var SecurityRequestType;
(function (SecurityRequestType) {
    SecurityRequestType[SecurityRequestType["RequestSecurityIdentityAndSpecifications"] = 0] = "RequestSecurityIdentityAndSpecifications";
    SecurityRequestType[SecurityRequestType["RequestSecurityIdentityForSpecifications"] = 1] = "RequestSecurityIdentityForSpecifications";
    SecurityRequestType[SecurityRequestType["RequestListSecurityTypes"] = 2] = "RequestListSecurityTypes";
    SecurityRequestType[SecurityRequestType["RequestListSecurities"] = 3] = "RequestListSecurities";
})(SecurityRequestType = exports.SecurityRequestType || (exports.SecurityRequestType = {}));
var SecurityResponseType;
(function (SecurityResponseType) {
    SecurityResponseType[SecurityResponseType["AcceptAsIs"] = 1] = "AcceptAsIs";
    SecurityResponseType[SecurityResponseType["AcceptWithRevisions"] = 2] = "AcceptWithRevisions";
    SecurityResponseType[SecurityResponseType["ListOfSecurityTypesReturnedPerRequest"] = 3] = "ListOfSecurityTypesReturnedPerRequest";
    SecurityResponseType[SecurityResponseType["ListOfSecuritiesReturnedPerRequest"] = 4] = "ListOfSecuritiesReturnedPerRequest";
    SecurityResponseType[SecurityResponseType["RejectSecurityProposal"] = 5] = "RejectSecurityProposal";
    SecurityResponseType[SecurityResponseType["CannotMatchSelectionCriteria"] = 6] = "CannotMatchSelectionCriteria";
})(SecurityResponseType = exports.SecurityResponseType || (exports.SecurityResponseType = {}));
var UnsolicitedIndicator;
(function (UnsolicitedIndicator) {
    UnsolicitedIndicator["MessageIsBeingSentAsAResultOfAPriorRequest"] = "N";
    UnsolicitedIndicator["MessageIsBeingSentUnsolicited"] = "Y";
})(UnsolicitedIndicator = exports.UnsolicitedIndicator || (exports.UnsolicitedIndicator = {}));
var SecurityTradingStatus;
(function (SecurityTradingStatus) {
    SecurityTradingStatus[SecurityTradingStatus["OpeningDelay"] = 1] = "OpeningDelay";
    SecurityTradingStatus[SecurityTradingStatus["TradingHalt"] = 2] = "TradingHalt";
    SecurityTradingStatus[SecurityTradingStatus["Resume"] = 3] = "Resume";
    SecurityTradingStatus[SecurityTradingStatus["NoOpen"] = 4] = "NoOpen";
    SecurityTradingStatus[SecurityTradingStatus["PriceIndication"] = 5] = "PriceIndication";
    SecurityTradingStatus[SecurityTradingStatus["TradingRangeIndication"] = 6] = "TradingRangeIndication";
    SecurityTradingStatus[SecurityTradingStatus["MarketImbalanceBuy"] = 7] = "MarketImbalanceBuy";
    SecurityTradingStatus[SecurityTradingStatus["MarketImbalanceSell"] = 8] = "MarketImbalanceSell";
    SecurityTradingStatus[SecurityTradingStatus["MarketOnCloseImbalanceBuy"] = 9] = "MarketOnCloseImbalanceBuy";
    SecurityTradingStatus[SecurityTradingStatus["MarketOnCloseImbalanceSell"] = 10] = "MarketOnCloseImbalanceSell";
    SecurityTradingStatus[SecurityTradingStatus["NoMarketImbalance"] = 12] = "NoMarketImbalance";
    SecurityTradingStatus[SecurityTradingStatus["NoMarketOnCloseImbalance"] = 13] = "NoMarketOnCloseImbalance";
    SecurityTradingStatus[SecurityTradingStatus["ItsPreOpening"] = 14] = "ItsPreOpening";
    SecurityTradingStatus[SecurityTradingStatus["NewPriceIndication"] = 15] = "NewPriceIndication";
    SecurityTradingStatus[SecurityTradingStatus["TradeDisseminationTime"] = 16] = "TradeDisseminationTime";
    SecurityTradingStatus[SecurityTradingStatus["ReadyToTrade"] = 17] = "ReadyToTrade";
    SecurityTradingStatus[SecurityTradingStatus["NotAvailableForTrading"] = 18] = "NotAvailableForTrading";
    SecurityTradingStatus[SecurityTradingStatus["NotTradedOnThisMarket"] = 19] = "NotTradedOnThisMarket";
    SecurityTradingStatus[SecurityTradingStatus["UnknownOrInvalid"] = 20] = "UnknownOrInvalid";
})(SecurityTradingStatus = exports.SecurityTradingStatus || (exports.SecurityTradingStatus = {}));
var HaltReason;
(function (HaltReason) {
    HaltReason["NewsDissemination"] = "D";
    HaltReason["OrderInflux"] = "E";
    HaltReason["OrderImbalance"] = "I";
    HaltReason["AdditionalInformation"] = "M";
    HaltReason["NewsPending"] = "P";
    HaltReason["EquipmentChangeover"] = "X";
})(HaltReason = exports.HaltReason || (exports.HaltReason = {}));
var InViewOfCommon;
(function (InViewOfCommon) {
    InViewOfCommon["HaltWasNotRelatedToAHaltOfTheCommonStock"] = "N";
    InViewOfCommon["HaltWasDueToCommonStockBeingHalted"] = "Y";
})(InViewOfCommon = exports.InViewOfCommon || (exports.InViewOfCommon = {}));
var DueToRelated;
(function (DueToRelated) {
    DueToRelated["NotRelatedToSecurityHalt"] = "N";
    DueToRelated["RelatedToSecurityHalt"] = "Y";
})(DueToRelated = exports.DueToRelated || (exports.DueToRelated = {}));
var Adjustment;
(function (Adjustment) {
    Adjustment[Adjustment["Cancel"] = 1] = "Cancel";
    Adjustment[Adjustment["Error"] = 2] = "Error";
    Adjustment[Adjustment["Correction"] = 3] = "Correction";
})(Adjustment = exports.Adjustment || (exports.Adjustment = {}));
var TradSesMethod;
(function (TradSesMethod) {
    TradSesMethod[TradSesMethod["Electronic"] = 1] = "Electronic";
    TradSesMethod[TradSesMethod["OpenOutcry"] = 2] = "OpenOutcry";
    TradSesMethod[TradSesMethod["TwoParty"] = 3] = "TwoParty";
})(TradSesMethod = exports.TradSesMethod || (exports.TradSesMethod = {}));
var TradSesMode;
(function (TradSesMode) {
    TradSesMode[TradSesMode["Testing"] = 1] = "Testing";
    TradSesMode[TradSesMode["Simulated"] = 2] = "Simulated";
    TradSesMode[TradSesMode["Production"] = 3] = "Production";
})(TradSesMode = exports.TradSesMode || (exports.TradSesMode = {}));
var TradSesStatus;
(function (TradSesStatus) {
    TradSesStatus[TradSesStatus["Halted"] = 1] = "Halted";
    TradSesStatus[TradSesStatus["Open"] = 2] = "Open";
    TradSesStatus[TradSesStatus["Closed"] = 3] = "Closed";
    TradSesStatus[TradSesStatus["PreOpen"] = 4] = "PreOpen";
    TradSesStatus[TradSesStatus["PreClose"] = 5] = "PreClose";
})(TradSesStatus = exports.TradSesStatus || (exports.TradSesStatus = {}));
var MessageEncoding;
(function (MessageEncoding) {
    MessageEncoding["Eucjp"] = "EUC-JP";
    MessageEncoding["Iso2022Jp"] = "ISO-2022-JP";
    MessageEncoding["ShiftJis"] = "Shift_JIS";
    MessageEncoding["Utf8"] = "UTF-8";
})(MessageEncoding = exports.MessageEncoding || (exports.MessageEncoding = {}));
var QuoteEntryRejectReason;
(function (QuoteEntryRejectReason) {
    QuoteEntryRejectReason[QuoteEntryRejectReason["UnknownSymbol"] = 1] = "UnknownSymbol";
    QuoteEntryRejectReason[QuoteEntryRejectReason["Exchange"] = 2] = "Exchange";
    QuoteEntryRejectReason[QuoteEntryRejectReason["QuoteExceedsLimit"] = 3] = "QuoteExceedsLimit";
    QuoteEntryRejectReason[QuoteEntryRejectReason["TooLateToEnter"] = 4] = "TooLateToEnter";
    QuoteEntryRejectReason[QuoteEntryRejectReason["UnknownQuote"] = 5] = "UnknownQuote";
    QuoteEntryRejectReason[QuoteEntryRejectReason["DuplicateQuote"] = 6] = "DuplicateQuote";
    QuoteEntryRejectReason[QuoteEntryRejectReason["InvalidBidAskSpread"] = 7] = "InvalidBidAskSpread";
    QuoteEntryRejectReason[QuoteEntryRejectReason["InvalidPrice"] = 8] = "InvalidPrice";
    QuoteEntryRejectReason[QuoteEntryRejectReason["NotAuthorizedToQuoteSecurity"] = 9] = "NotAuthorizedToQuoteSecurity";
})(QuoteEntryRejectReason = exports.QuoteEntryRejectReason || (exports.QuoteEntryRejectReason = {}));
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
    SessionRejectReason[SessionRejectReason["CompIdProblem"] = 9] = "CompIdProblem";
    SessionRejectReason[SessionRejectReason["SendingTimeAccuracyProblem"] = 10] = "SendingTimeAccuracyProblem";
    SessionRejectReason[SessionRejectReason["InvalidMsgType"] = 11] = "InvalidMsgType";
})(SessionRejectReason = exports.SessionRejectReason || (exports.SessionRejectReason = {}));
var BidRequestTransType;
(function (BidRequestTransType) {
    BidRequestTransType["Cancel"] = "C";
    BidRequestTransType["New"] = "N";
})(BidRequestTransType = exports.BidRequestTransType || (exports.BidRequestTransType = {}));
var SolicitedFlag;
(function (SolicitedFlag) {
    SolicitedFlag["WasNotSolicited"] = "N";
    SolicitedFlag["WasSolicited"] = "Y";
})(SolicitedFlag = exports.SolicitedFlag || (exports.SolicitedFlag = {}));
var ExecRestatementReason;
(function (ExecRestatementReason) {
    ExecRestatementReason[ExecRestatementReason["GtCorporateAction"] = 0] = "GtCorporateAction";
    ExecRestatementReason[ExecRestatementReason["GtRenewal"] = 1] = "GtRenewal";
    ExecRestatementReason[ExecRestatementReason["VerbalChange"] = 2] = "VerbalChange";
    ExecRestatementReason[ExecRestatementReason["RepricingOfOrder"] = 3] = "RepricingOfOrder";
    ExecRestatementReason[ExecRestatementReason["BrokerOption"] = 4] = "BrokerOption";
    ExecRestatementReason[ExecRestatementReason["PartialDeclineOfOrderQty"] = 5] = "PartialDeclineOfOrderQty";
})(ExecRestatementReason = exports.ExecRestatementReason || (exports.ExecRestatementReason = {}));
var BusinessRejectReason;
(function (BusinessRejectReason) {
    BusinessRejectReason[BusinessRejectReason["Other"] = 0] = "Other";
    BusinessRejectReason[BusinessRejectReason["UnknownId"] = 1] = "UnknownId";
    BusinessRejectReason[BusinessRejectReason["UnknownSecurity"] = 2] = "UnknownSecurity";
    BusinessRejectReason[BusinessRejectReason["UnsupportedMessageType"] = 3] = "UnsupportedMessageType";
    BusinessRejectReason[BusinessRejectReason["ApplicationNotAvailable"] = 4] = "ApplicationNotAvailable";
    BusinessRejectReason[BusinessRejectReason["ConditionallyRequiredFieldMissing"] = 5] = "ConditionallyRequiredFieldMissing";
})(BusinessRejectReason = exports.BusinessRejectReason || (exports.BusinessRejectReason = {}));
var MsgDirection;
(function (MsgDirection) {
    MsgDirection["Receive"] = "R";
    MsgDirection["Send"] = "S";
})(MsgDirection = exports.MsgDirection || (exports.MsgDirection = {}));
var DiscretionInst;
(function (DiscretionInst) {
    DiscretionInst["RelatedToDisplayedPrice"] = "0";
    DiscretionInst["RelatedToMarketPrice"] = "1";
    DiscretionInst["RelatedToPrimaryPrice"] = "2";
    DiscretionInst["RelatedToLocalPrimaryPrice"] = "3";
    DiscretionInst["RelatedToMidpointPrice"] = "4";
    DiscretionInst["RelatedToLastTradePrice"] = "5";
})(DiscretionInst = exports.DiscretionInst || (exports.DiscretionInst = {}));
var LiquidityIndType;
(function (LiquidityIndType) {
    LiquidityIndType[LiquidityIndType["FiveDayMovingAverage"] = 1] = "FiveDayMovingAverage";
    LiquidityIndType[LiquidityIndType["TwentyDayMovingAverage"] = 2] = "TwentyDayMovingAverage";
    LiquidityIndType[LiquidityIndType["NormalMarketSize"] = 3] = "NormalMarketSize";
    LiquidityIndType[LiquidityIndType["Other"] = 4] = "Other";
})(LiquidityIndType = exports.LiquidityIndType || (exports.LiquidityIndType = {}));
var ExchangeForPhysical;
(function (ExchangeForPhysical) {
    ExchangeForPhysical["False"] = "N";
    ExchangeForPhysical["True"] = "Y";
})(ExchangeForPhysical = exports.ExchangeForPhysical || (exports.ExchangeForPhysical = {}));
var ProgRptReqs;
(function (ProgRptReqs) {
    ProgRptReqs[ProgRptReqs["BuySideRequests"] = 1] = "BuySideRequests";
    ProgRptReqs[ProgRptReqs["SellSideSends"] = 2] = "SellSideSends";
    ProgRptReqs[ProgRptReqs["RealTimeExecutionReports"] = 3] = "RealTimeExecutionReports";
})(ProgRptReqs = exports.ProgRptReqs || (exports.ProgRptReqs = {}));
var IncTaxInd;
(function (IncTaxInd) {
    IncTaxInd[IncTaxInd["Net"] = 1] = "Net";
    IncTaxInd[IncTaxInd["Gross"] = 2] = "Gross";
})(IncTaxInd = exports.IncTaxInd || (exports.IncTaxInd = {}));
var TradeType;
(function (TradeType) {
    TradeType["Agency"] = "A";
    TradeType["VwapGuarantee"] = "G";
    TradeType["GuaranteedClose"] = "J";
    TradeType["RiskTrade"] = "R";
})(TradeType = exports.TradeType || (exports.TradeType = {}));
var BasisPxType;
(function (BasisPxType) {
    BasisPxType["ClosingPriceAtMorningSession"] = "2";
    BasisPxType["ClosingPrice"] = "3";
    BasisPxType["CurrentPrice"] = "4";
    BasisPxType["Sq"] = "5";
    BasisPxType["VwapThroughADay"] = "6";
    BasisPxType["VwapThroughAMorningSession"] = "7";
    BasisPxType["VwapThroughAnAfternoonSession"] = "8";
    BasisPxType["VwapThroughADayExcept"] = "9";
    BasisPxType["VwapThroughAMorningSessionExcept"] = "A";
    BasisPxType["VwapThroughAnAfternoonSessionExcept"] = "B";
    BasisPxType["Strike"] = "C";
    BasisPxType["Open"] = "D";
    BasisPxType["Others"] = "Z";
})(BasisPxType = exports.BasisPxType || (exports.BasisPxType = {}));
var PriceType;
(function (PriceType) {
    PriceType[PriceType["Percentage"] = 1] = "Percentage";
    PriceType[PriceType["PerUnit"] = 2] = "PerUnit";
    PriceType[PriceType["FixedAmount"] = 3] = "FixedAmount";
})(PriceType = exports.PriceType || (exports.PriceType = {}));
var GTBookingInst;
(function (GTBookingInst) {
    GTBookingInst[GTBookingInst["BookOutAllTradesOnDayOfExecution"] = 0] = "BookOutAllTradesOnDayOfExecution";
    GTBookingInst[GTBookingInst["AccumulateUntilFilledOrExpired"] = 1] = "AccumulateUntilFilledOrExpired";
    GTBookingInst[GTBookingInst["AccumulateUntilVerballlyNotifiedOtherwise"] = 2] = "AccumulateUntilVerballlyNotifiedOtherwise";
})(GTBookingInst = exports.GTBookingInst || (exports.GTBookingInst = {}));
var NetGrossInd;
(function (NetGrossInd) {
    NetGrossInd[NetGrossInd["Net"] = 1] = "Net";
    NetGrossInd[NetGrossInd["Gross"] = 2] = "Gross";
})(NetGrossInd = exports.NetGrossInd || (exports.NetGrossInd = {}));
var ListExecInstType;
(function (ListExecInstType) {
    ListExecInstType["Immediate"] = "1";
    ListExecInstType["WaitForInstruction"] = "2";
})(ListExecInstType = exports.ListExecInstType || (exports.ListExecInstType = {}));
var CxlRejResponseTo;
(function (CxlRejResponseTo) {
    CxlRejResponseTo["OrderCancelRequest"] = "1";
    CxlRejResponseTo["OrderCancel"] = "2";
})(CxlRejResponseTo = exports.CxlRejResponseTo || (exports.CxlRejResponseTo = {}));
var MultiLegReportingType;
(function (MultiLegReportingType) {
    MultiLegReportingType["SingleSecurity"] = "1";
    MultiLegReportingType["IndividualLegOfAMultiLegSecurity"] = "2";
    MultiLegReportingType["MultiLegSecurity"] = "3";
})(MultiLegReportingType = exports.MultiLegReportingType || (exports.MultiLegReportingType = {}));
//# sourceMappingURL=all-enum.js.map