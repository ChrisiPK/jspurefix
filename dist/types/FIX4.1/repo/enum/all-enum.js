"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoveredOrUncovered = exports.PutOrCall = exports.AllocLinkType = exports.StandInstDbType = exports.SecurityType = exports.SettlLocation = exports.SettlInstSource = exports.SettlInstTransType = exports.SettlInstMode = exports.ExecType = exports.ResetSeqNumFlag = exports.MiscFeeType = exports.IOINaturalFlag = exports.DKReason = exports.GapFillFlag = exports.ForexReq = exports.LocateReqd = exports.ReportToExch = exports.IOIQualifier = exports.OrdRejReason = exports.CxlRejReason = exports.EncryptMethod = exports.PossResend = exports.EmailType = exports.AllocRejCode = exports.AllocStatus = exports.ProcessCode = exports.OpenClose = exports.AllocTransType = exports.SettlmntTyp = exports.Urgency = exports.TimeInForce = exports.Side = exports.Rule80A = exports.PossDupFlag = exports.OrdType = exports.OrdStatus = exports.MsgType = exports.LastCapacity = exports.IOITransType = exports.IOIShares = exports.IOIQltyInd = exports.IOIOthSvc = exports.IDSource = exports.HandlInst = exports.ExecTransType = exports.ExecInst = exports.CommType = exports.AdvTransType = exports.AdvSide = void 0;
exports.AllocHandlInst = exports.NotifyBrokerOfCredit = exports.CustomerOrFirm = void 0;
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
    ExecInst["CustomerDisplayInstruction"] = "U";
    ExecInst["Netting"] = "V";
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
})(IDSource = exports.IDSource || (exports.IDSource = {}));
var IOIOthSvc;
(function (IOIOthSvc) {
    IOIOthSvc["Autex"] = "A";
    IOIOthSvc["Bridge"] = "B";
})(IOIOthSvc = exports.IOIOthSvc || (exports.IOIOthSvc = {}));
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
    MsgType["Logon"] = "A";
    MsgType["News"] = "B";
    MsgType["Email"] = "C";
    MsgType["NewOrderSingle"] = "D";
    MsgType["NewOrderList"] = "E";
    MsgType["OrderCancelRequest"] = "F";
    MsgType["OrderCancelReplaceRequest"] = "G";
    MsgType["OrderStatusRequest"] = "H";
    MsgType["AllocationInstruction"] = "J";
    MsgType["ListCancelRequest"] = "K";
    MsgType["ListExecute"] = "L";
    MsgType["ListStatusRequest"] = "M";
    MsgType["ListStatus"] = "N";
    MsgType["AllocationInstructionAck"] = "P";
    MsgType["DontKnowTrade"] = "Q";
    MsgType["QuoteRequest"] = "R";
    MsgType["Quote"] = "S";
    MsgType["SettlementInstructions"] = "T";
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
    SecurityType["BankersAcceptance"] = "BA";
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
//# sourceMappingURL=all-enum.js.map