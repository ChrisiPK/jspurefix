"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllocHandlInst = exports.NotifyBrokerOfCredit = exports.CoveredOrUncovered = exports.PutOrCall = exports.AllocLinkType = exports.SettlDeliveryType = exports.StandInstDbType = exports.SecurityType = exports.SettlInstSource = exports.SettlInstTransType = exports.SettlInstMode = exports.SettlCurrFxRateCalc = exports.ExecType = exports.ResetSeqNumFlag = exports.MiscFeeType = exports.IOINaturalFlag = exports.DKReason = exports.GapFillFlag = exports.ForexReq = exports.LocateReqd = exports.ReportToExch = exports.IOIQualifier = exports.OrdRejReason = exports.CxlRejReason = exports.EncryptMethod = exports.PossResend = exports.EmailType = exports.AllocRejCode = exports.AllocStatus = exports.ProcessCode = exports.PositionEffect = exports.AllocTransType = exports.SettlType = exports.Urgency = exports.TimeInForce = exports.Side = exports.PossDupFlag = exports.OrdType = exports.OrdStatus = exports.MsgType = exports.LastCapacity = exports.IOITransType = exports.IOIQty = exports.IOIQltyInd = exports.SecurityIDSource = exports.HandlInst = exports.ExecInst = exports.CommType = exports.AdvTransType = exports.AdvSide = void 0;
exports.BasisPxType = exports.BidTradeType = exports.IncTaxInd = exports.ProgRptReqs = exports.ExchangeForPhysical = exports.LiquidityIndType = exports.SideValueInd = exports.BidDescriptorType = exports.BidType = exports.DiscretionInst = exports.MsgDirection = exports.BusinessRejectReason = exports.ExecRestatementReason = exports.SolicitedFlag = exports.BidRequestTransType = exports.SessionRejectReason = exports.MessageEncoding = exports.TradSesStatus = exports.TradSesMode = exports.TradSesMethod = exports.Adjustment = exports.DueToRelated = exports.InViewOfCommon = exports.HaltReasonChar = exports.SecurityTradingStatus = exports.UnsolicitedIndicator = exports.SecurityResponseType = exports.SecurityRequestType = exports.QuoteRequestType = exports.QuoteResponseLevel = exports.QuoteRejectReason = exports.QuoteCancelType = exports.QuoteStatus = exports.CorporateAction = exports.FinancialStatus = exports.OpenCloseSettlFlag = exports.DeleteReason = exports.MDReqRejReason = exports.MDUpdateAction = exports.TradeCondition = exports.QuoteCondition = exports.TickDirection = exports.MDEntryType = exports.AggregatedBook = exports.MDUpdateType = exports.SubscriptionRequestType = exports.TradedFlatSwitch = exports.YieldType = exports.StipulationType = exports.RoutingType = void 0;
exports.CustOrderCapacity = exports.AccountType = exports.ClearingInstruction = exports.OddLot = exports.MatchType = exports.MatchStatus = exports.PreviouslyReported = exports.TradeRequestType = exports.TradSesStatusRejReason = exports.MultiLegRptTypeReq = exports.SecurityRequestResult = exports.SecurityListRequestType = exports.NoSides = exports.CrossPrioritization = exports.CrossType = exports.MDImplicitDelete = exports.Scope = exports.CashMargin = exports.QuoteType = exports.MassCancelRejectReason = exports.MassCancelResponse = exports.MassCancelRequestType = exports.OrderRestrictions = exports.OrderCapacity = exports.OwnerType = exports.ContAmtType = exports.OwnershipType = exports.RegistTransType = exports.RegistRejReasonCode = exports.RegistStatus = exports.FundRenewWaiv = exports.TaxAdvantageType = exports.PaymentMethod = exports.ExecPriceType = exports.MoneyLaunderingStatus = exports.CancellationRights = exports.DistribPaymentMethod = exports.RoundingDirection = exports.TestMessageIndicator = exports.Product = exports.PartyRole = exports.PartyIDSource = exports.MultiLegReportingType = exports.CxlRejResponseTo = exports.ListExecInstType = exports.ListOrderStatus = exports.NetGrossInd = exports.ListStatusType = exports.GTBookingInst = exports.PriceType = void 0;
exports.AllocIntermedReqType = exports.PartySubIDType = exports.AllocAccountType = exports.AllocCancReplaceReason = exports.AllocReportType = exports.SettlInstReqRejCode = exports.TerminationType = exports.DlvyInstType = exports.AllocSettlInstType = exports.BookingType = exports.ConfirmRejReason = exports.ConfirmType = exports.TrdRegTimestampType = exports.SideMultiLegReportingType = exports.TradeReportRejectReason = exports.TradeRequestStatus = exports.TradeRequestResult = exports.ExerciseMethod = exports.AssignmentMethod = exports.SettlPriceType = exports.PosReqStatus = exports.PosReqResult = exports.ResponseTransportType = exports.PosReqType = exports.PosMaintResult = exports.PosMaintStatus = exports.AdjustmentType = exports.SettlSessID = exports.PosMaintAction = exports.PosTransType = exports.PosAmtType = exports.PosQtyStatus = exports.PosType = exports.QuoteRespType = exports.QuotePriceType = exports.LegSwapType = exports.DeliveryForm = exports.ConfirmTransType = exports.ConfirmStatus = exports.AcctIDSource = exports.QuoteRequestRejectReason = exports.LegalConfirm = exports.PriorityIndicator = exports.WorkingIndicator = exports.ClearingFeeIndicator = exports.AllocType = exports.PreallocMethod = exports.BookingUnit = exports.DayBookingInst = exports.MassStatusReqType = void 0;
exports.CollInquiryResult = exports.CollInquiryStatus = exports.CollAction = exports.AffirmStatus = exports.TrdRptStatus = exports.NetworkStatusResponseType = exports.NetworkRequestType = exports.StatusValue = exports.UserStatus = exports.UserRequestType = exports.DeliveryType = exports.CollStatus = exports.CollAsgnRejectReason = exports.CollAsgnRespType = exports.CollAsgnTransType = exports.CollInquiryQualifier = exports.CollAsgnReason = exports.LastFragment = exports.MiscFeeBasis = exports.CPProgram = exports.InstrAttribType = exports.EventType = exports.AllocNoOrdersType = exports.TradeReportType = exports.QtyType = exports.ShortSaleReason = exports.PublishTrdIndicator = exports.LastLiquidityInd = exports.TargetStrategy = exports.DiscretionScope = exports.DiscretionRoundDirection = exports.DiscretionLimitType = exports.DiscretionOffsetType = exports.DiscretionMoveType = exports.PegScope = exports.PegRoundDirection = exports.PegLimitType = exports.PegOffsetType = exports.PegMoveType = exports.TrdType = exports.ExpirationCycle = exports.TradeAllocIndicator = exports.AvgPxIndicator = exports.ApplQueueAction = exports.ApplQueueResolution = void 0;
var AdvSide;
(function (AdvSide) {
    AdvSide["Buy"] = "B";
    AdvSide["Sell"] = "S";
    AdvSide["Cross"] = "X";
    AdvSide["Trade"] = "T";
})(AdvSide = exports.AdvSide || (exports.AdvSide = {}));
var AdvTransType;
(function (AdvTransType) {
    AdvTransType["New"] = "N";
    AdvTransType["Cancel"] = "C";
    AdvTransType["Replace"] = "R";
})(AdvTransType = exports.AdvTransType || (exports.AdvTransType = {}));
var CommType;
(function (CommType) {
    CommType["PerUnit"] = "1";
    CommType["Percentage"] = "2";
    CommType["Absolute"] = "3";
    CommType["E4"] = "4";
    CommType["E5"] = "5";
    CommType["PointsPerBondOrContractSupplyContractmultiplier"] = "6";
})(CommType = exports.CommType || (exports.CommType = {}));
var ExecInst;
(function (ExecInst) {
    ExecInst["StayOnOfferside"] = "0";
    ExecInst["NotHeld"] = "1";
    ExecInst["Work"] = "2";
    ExecInst["GoAlong"] = "3";
    ExecInst["OverTheDay"] = "4";
    ExecInst["Held"] = "5";
    ExecInst["ParticipateDontInitiate"] = "6";
    ExecInst["StrictScale"] = "7";
    ExecInst["TryToScale"] = "8";
    ExecInst["StayOnBidside"] = "9";
    ExecInst["NoCross"] = "A";
    ExecInst["OkToCross"] = "B";
    ExecInst["CallFirst"] = "C";
    ExecInst["PercentOfVolume"] = "D";
    ExecInst["DoNotIncrease"] = "E";
    ExecInst["DoNotReduce"] = "F";
    ExecInst["AllOrNone"] = "G";
    ExecInst["ReinstateOnSystemFailure"] = "H";
    ExecInst["InstitutionsOnly"] = "I";
    ExecInst["ReinstateOnTradingHalt"] = "J";
    ExecInst["CancelOnTradingHalt"] = "K";
    ExecInst["LastPeg"] = "L";
    ExecInst["MidPricePeg"] = "M";
    ExecInst["NonNegotiable"] = "N";
    ExecInst["OpeningPeg"] = "O";
    ExecInst["MarketPeg"] = "P";
    ExecInst["CancelOnSystemFailure"] = "Q";
    ExecInst["PrimaryPeg"] = "R";
    ExecInst["Suspend"] = "S";
    ExecInst["CustomerDisplayInstruction"] = "U";
    ExecInst["Netting"] = "V";
    ExecInst["PegToVwap"] = "W";
    ExecInst["TradeAlong"] = "X";
    ExecInst["TryToStop"] = "Y";
    ExecInst["CancelIfNotBest"] = "Z";
    ExecInst["TrailingStopPeg"] = "a";
    ExecInst["StrictLimit"] = "b";
    ExecInst["IgnorePriceValidityChecks"] = "c";
    ExecInst["PegToLimitPrice"] = "d";
    ExecInst["WorkToTargetStrategy"] = "e";
})(ExecInst = exports.ExecInst || (exports.ExecInst = {}));
var HandlInst;
(function (HandlInst) {
    HandlInst["AutomatedExecutionOrderPrivateNoBrokerIntervention"] = "1";
    HandlInst["AutomatedExecutionOrderPublicBrokerInterventionOk"] = "2";
    HandlInst["ManualOrderBestExecution"] = "3";
})(HandlInst = exports.HandlInst || (exports.HandlInst = {}));
var SecurityIDSource;
(function (SecurityIDSource) {
    SecurityIDSource["Cusip"] = "1";
    SecurityIDSource["Sedol"] = "2";
    SecurityIDSource["Quik"] = "3";
    SecurityIDSource["IsinNumber"] = "4";
    SecurityIDSource["RicCode"] = "5";
    SecurityIDSource["IsoCurrencyCode"] = "6";
    SecurityIDSource["IsoCountryCode"] = "7";
    SecurityIDSource["ExchangeSymbol"] = "8";
    SecurityIDSource["ConsolidatedTapeAssociation"] = "9";
    SecurityIDSource["BloombergSymbol"] = "A";
    SecurityIDSource["Wertpapier"] = "B";
    SecurityIDSource["Dutch"] = "C";
    SecurityIDSource["Valoren"] = "D";
    SecurityIDSource["Sicovam"] = "E";
    SecurityIDSource["Belgian"] = "F";
    SecurityIDSource["Common"] = "G";
    SecurityIDSource["ClearingHouse"] = "H";
    SecurityIDSource["IsdaFpmlProductSpecification"] = "I";
    SecurityIDSource["OptionsPriceReportingAuthority"] = "J";
})(SecurityIDSource = exports.SecurityIDSource || (exports.SecurityIDSource = {}));
var IOIQltyInd;
(function (IOIQltyInd) {
    IOIQltyInd["Low"] = "L";
    IOIQltyInd["Medium"] = "M";
    IOIQltyInd["High"] = "H";
})(IOIQltyInd = exports.IOIQltyInd || (exports.IOIQltyInd = {}));
var IOIQty;
(function (IOIQty) {
    IOIQty["Small"] = "S";
    IOIQty["Medium"] = "M";
    IOIQty["Large"] = "L";
})(IOIQty = exports.IOIQty || (exports.IOIQty = {}));
var IOITransType;
(function (IOITransType) {
    IOITransType["New"] = "N";
    IOITransType["Cancel"] = "C";
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
    MsgType["IndicationOfInterest"] = "6";
    MsgType["Advertisement"] = "7";
    MsgType["ExecutionReport"] = "8";
    MsgType["OrderCancelReject"] = "9";
    MsgType["Logon"] = "A";
    MsgType["News"] = "B";
    MsgType["Email"] = "C";
    MsgType["OrderSingle"] = "D";
    MsgType["OrderList"] = "E";
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
    MsgType["MarketDataRequest"] = "V";
    MsgType["MarketDataSnapshotFullRefresh"] = "W";
    MsgType["MarketDataIncrementalRefresh"] = "X";
    MsgType["MarketDataRequestReject"] = "Y";
    MsgType["QuoteCancel"] = "Z";
    MsgType["QuoteStatusRequest"] = "a";
    MsgType["MassQuoteAcknowledgement"] = "b";
    MsgType["SecurityDefinitionRequest"] = "c";
    MsgType["SecurityDefinition"] = "d";
    MsgType["SecurityStatusRequest"] = "e";
    MsgType["SecurityStatus"] = "f";
    MsgType["TradingSessionStatusRequest"] = "g";
    MsgType["TradingSessionStatus"] = "h";
    MsgType["MassQuote"] = "i";
    MsgType["BusinessMessageReject"] = "j";
    MsgType["BidRequest"] = "k";
    MsgType["BidResponse"] = "l";
    MsgType["ListStrikePrice"] = "m";
    MsgType["XmlMessage"] = "n";
    MsgType["RegistrationInstructions"] = "o";
    MsgType["RegistrationInstructionsResponse"] = "p";
    MsgType["OrderMassCancelRequest"] = "q";
    MsgType["OrderMassCancelReport"] = "r";
    MsgType["NewOrderS"] = "s";
    MsgType["CrossOrderCancelReplaceRequest"] = "t";
    MsgType["CrossOrderCancelRequest"] = "u";
    MsgType["SecurityTypeRequest"] = "v";
    MsgType["SecurityTypes"] = "w";
    MsgType["SecurityListRequest"] = "x";
    MsgType["SecurityList"] = "y";
    MsgType["DerivativeSecurityListRequest"] = "z";
    MsgType["DerivativeSecurityList"] = "AA";
    MsgType["NewOrderAb"] = "AB";
    MsgType["MultilegOrderCancelReplace"] = "AC";
    MsgType["TradeCaptureReportRequest"] = "AD";
    MsgType["TradeCaptureReport"] = "AE";
    MsgType["OrderMassStatusRequest"] = "AF";
    MsgType["QuoteRequestReject"] = "AG";
    MsgType["RfqRequest"] = "AH";
    MsgType["QuoteStatusReport"] = "AI";
    MsgType["QuoteResponse"] = "AJ";
    MsgType["Confirmation"] = "AK";
    MsgType["PositionMaintenanceRequest"] = "AL";
    MsgType["PositionMaintenanceReport"] = "AM";
    MsgType["RequestForPositions"] = "AN";
    MsgType["RequestForPositionsAck"] = "AO";
    MsgType["PositionReport"] = "AP";
    MsgType["TradeCaptureReportRequestAck"] = "AQ";
    MsgType["TradeCaptureReportAck"] = "AR";
    MsgType["AllocationReport"] = "AS";
    MsgType["AllocationReportAck"] = "AT";
    MsgType["ConfirmationAck"] = "AU";
    MsgType["SettlementInstructionRequest"] = "AV";
    MsgType["AssignmentReport"] = "AW";
    MsgType["CollateralRequest"] = "AX";
    MsgType["CollateralAssignment"] = "AY";
    MsgType["CollateralResponse"] = "AZ";
    MsgType["CollateralReport"] = "BA";
    MsgType["CollateralInquiry"] = "BB";
    MsgType["NetworkBc"] = "BC";
    MsgType["NetworkBd"] = "BD";
    MsgType["UserRequest"] = "BE";
    MsgType["UserResponse"] = "BF";
    MsgType["CollateralInquiryAck"] = "BG";
    MsgType["ConfirmationRequest"] = "BH";
})(MsgType = exports.MsgType || (exports.MsgType = {}));
var OrdStatus;
(function (OrdStatus) {
    OrdStatus["New"] = "0";
    OrdStatus["PartiallyFilled"] = "1";
    OrdStatus["Filled"] = "2";
    OrdStatus["DoneForDay"] = "3";
    OrdStatus["Canceled"] = "4";
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
    OrdType["WithOrWithout"] = "6";
    OrdType["LimitOrBetter"] = "7";
    OrdType["LimitWithOrWithout"] = "8";
    OrdType["OnBasis"] = "9";
    OrdType["PreviouslyQuoted"] = "D";
    OrdType["PreviouslyIndicated"] = "E";
    OrdType["Forex"] = "G";
    OrdType["Funari"] = "I";
    OrdType["MarketIfTouched"] = "J";
    OrdType["MarketWithLeftoverAsLimit"] = "K";
    OrdType["PreviousFundValuationPoint"] = "L";
    OrdType["NextFundValuationPoint"] = "M";
    OrdType["Pegged"] = "P";
})(OrdType = exports.OrdType || (exports.OrdType = {}));
var PossDupFlag;
(function (PossDupFlag) {
    PossDupFlag["Yes"] = "Y";
    PossDupFlag["No"] = "N";
})(PossDupFlag = exports.PossDupFlag || (exports.PossDupFlag = {}));
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
    Side["CrossShortExempt"] = "A";
    Side["AsDefined"] = "B";
    Side["Opposite"] = "C";
    Side["Subscribe"] = "D";
    Side["Redeem"] = "E";
    Side["Lend"] = "F";
    Side["Borrow"] = "G";
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
    TimeInForce["AtTheClose"] = "7";
})(TimeInForce = exports.TimeInForce || (exports.TimeInForce = {}));
var Urgency;
(function (Urgency) {
    Urgency["Normal"] = "0";
    Urgency["Flash"] = "1";
    Urgency["Background"] = "2";
})(Urgency = exports.Urgency || (exports.Urgency = {}));
var SettlType;
(function (SettlType) {
    SettlType["Regular"] = "0";
    SettlType["Cash"] = "1";
    SettlType["NextDay"] = "2";
    SettlType["TPlus2"] = "3";
    SettlType["TPlus3"] = "4";
    SettlType["TPlus4"] = "5";
    SettlType["Future"] = "6";
    SettlType["WhenAndIfIssued"] = "7";
    SettlType["SellersOption"] = "8";
    SettlType["TPlus5"] = "9";
})(SettlType = exports.SettlType || (exports.SettlType = {}));
var AllocTransType;
(function (AllocTransType) {
    AllocTransType["New"] = "0";
    AllocTransType["Replace"] = "1";
    AllocTransType["Cancel"] = "2";
})(AllocTransType = exports.AllocTransType || (exports.AllocTransType = {}));
var PositionEffect;
(function (PositionEffect) {
    PositionEffect["Open"] = "O";
    PositionEffect["Close"] = "C";
    PositionEffect["Rolled"] = "R";
    PositionEffect["Fifo"] = "F";
})(PositionEffect = exports.PositionEffect || (exports.PositionEffect = {}));
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
    AllocStatus[AllocStatus["Incomplete"] = 4] = "Incomplete";
    AllocStatus[AllocStatus["RejectedByIntermediary"] = 5] = "RejectedByIntermediary";
})(AllocStatus = exports.AllocStatus || (exports.AllocStatus = {}));
var AllocRejCode;
(function (AllocRejCode) {
    AllocRejCode[AllocRejCode["UnknownAccount"] = 0] = "UnknownAccount";
    AllocRejCode[AllocRejCode["IncorrectQuantity"] = 1] = "IncorrectQuantity";
    AllocRejCode[AllocRejCode["IncorrectAveragePrice"] = 2] = "IncorrectAveragePrice";
    AllocRejCode[AllocRejCode["UnknownExecutingBrokerMnemonic"] = 3] = "UnknownExecutingBrokerMnemonic";
    AllocRejCode[AllocRejCode["CommissionDifference"] = 4] = "CommissionDifference";
    AllocRejCode[AllocRejCode["UnknownOrderid"] = 5] = "UnknownOrderid";
    AllocRejCode[AllocRejCode["UnknownListid"] = 6] = "UnknownListid";
    AllocRejCode[AllocRejCode["Other"] = 7] = "Other";
    AllocRejCode[AllocRejCode["IncorrectAllocatedQuantity"] = 8] = "IncorrectAllocatedQuantity";
    AllocRejCode[AllocRejCode["CalculationDifference"] = 9] = "CalculationDifference";
    AllocRejCode[AllocRejCode["UnknownOrStaleExecid"] = 10] = "UnknownOrStaleExecid";
    AllocRejCode[AllocRejCode["MismatchedDataValue"] = 11] = "MismatchedDataValue";
    AllocRejCode[AllocRejCode["UnknownClordid"] = 12] = "UnknownClordid";
    AllocRejCode[AllocRejCode["WarehouseRequestRejected"] = 13] = "WarehouseRequestRejected";
})(AllocRejCode = exports.AllocRejCode || (exports.AllocRejCode = {}));
var EmailType;
(function (EmailType) {
    EmailType["New"] = "0";
    EmailType["Reply"] = "1";
    EmailType["AdminReply"] = "2";
})(EmailType = exports.EmailType || (exports.EmailType = {}));
var PossResend;
(function (PossResend) {
    PossResend["Yes"] = "Y";
    PossResend["No"] = "N";
})(PossResend = exports.PossResend || (exports.PossResend = {}));
var EncryptMethod;
(function (EncryptMethod) {
    EncryptMethod[EncryptMethod["None"] = 0] = "None";
    EncryptMethod[EncryptMethod["Pkcs"] = 1] = "Pkcs";
    EncryptMethod[EncryptMethod["Des"] = 2] = "Des";
    EncryptMethod[EncryptMethod["PkcsDes"] = 3] = "PkcsDes";
    EncryptMethod[EncryptMethod["PgpDes"] = 4] = "PgpDes";
    EncryptMethod[EncryptMethod["PgpDesMd5"] = 5] = "PgpDesMd5";
    EncryptMethod[EncryptMethod["PemDesMd5"] = 6] = "PemDesMd5";
})(EncryptMethod = exports.EncryptMethod || (exports.EncryptMethod = {}));
var CxlRejReason;
(function (CxlRejReason) {
    CxlRejReason[CxlRejReason["TooLateToCancel"] = 0] = "TooLateToCancel";
    CxlRejReason[CxlRejReason["UnknownOrder"] = 1] = "UnknownOrder";
    CxlRejReason[CxlRejReason["Broker"] = 2] = "Broker";
    CxlRejReason[CxlRejReason["OrderAlreadyInPendingCancelOrPendingReplaceStatus"] = 3] = "OrderAlreadyInPendingCancelOrPendingReplaceStatus";
    CxlRejReason[CxlRejReason["UnableToProcessOrderMassCancelRequest"] = 4] = "UnableToProcessOrderMassCancelRequest";
    CxlRejReason[CxlRejReason["Origordmodtime"] = 5] = "Origordmodtime";
    CxlRejReason[CxlRejReason["DuplicateClordid"] = 6] = "DuplicateClordid";
    CxlRejReason[CxlRejReason["Other"] = 99] = "Other";
})(CxlRejReason = exports.CxlRejReason || (exports.CxlRejReason = {}));
var OrdRejReason;
(function (OrdRejReason) {
    OrdRejReason[OrdRejReason["Broker"] = 0] = "Broker";
    OrdRejReason[OrdRejReason["UnknownSymbol"] = 1] = "UnknownSymbol";
    OrdRejReason[OrdRejReason["ExchangeClosed"] = 2] = "ExchangeClosed";
    OrdRejReason[OrdRejReason["OrderExceedsLimit"] = 3] = "OrderExceedsLimit";
    OrdRejReason[OrdRejReason["TooLateToEnter"] = 4] = "TooLateToEnter";
    OrdRejReason[OrdRejReason["UnknownOrder"] = 5] = "UnknownOrder";
    OrdRejReason[OrdRejReason["DuplicateOrder"] = 6] = "DuplicateOrder";
    OrdRejReason[OrdRejReason["DuplicateOfAVerballyCommunicatedOrder"] = 7] = "DuplicateOfAVerballyCommunicatedOrder";
    OrdRejReason[OrdRejReason["StaleOrder"] = 8] = "StaleOrder";
    OrdRejReason[OrdRejReason["TradeAlongRequired"] = 9] = "TradeAlongRequired";
    OrdRejReason[OrdRejReason["InvalidInvestorId"] = 10] = "InvalidInvestorId";
    OrdRejReason[OrdRejReason["UnsupportedOrderCharacteristic12SurveillenceOption"] = 11] = "UnsupportedOrderCharacteristic12SurveillenceOption";
    OrdRejReason[OrdRejReason["IncorrectQuantity"] = 13] = "IncorrectQuantity";
    OrdRejReason[OrdRejReason["IncorrectAllocatedQuantity"] = 14] = "IncorrectAllocatedQuantity";
    OrdRejReason[OrdRejReason["UnknownAccount"] = 15] = "UnknownAccount";
    OrdRejReason[OrdRejReason["Other"] = 99] = "Other";
})(OrdRejReason = exports.OrdRejReason || (exports.OrdRejReason = {}));
var IOIQualifier;
(function (IOIQualifier) {
    IOIQualifier["AllOrNone"] = "A";
    IOIQualifier["MarketOnClose"] = "B";
    IOIQualifier["AtTheClose"] = "C";
    IOIQualifier["Vwap"] = "D";
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
    ReportToExch["Yes"] = "Y";
    ReportToExch["No"] = "N";
})(ReportToExch = exports.ReportToExch || (exports.ReportToExch = {}));
var LocateReqd;
(function (LocateReqd) {
    LocateReqd["Yes"] = "Y";
    LocateReqd["No"] = "N";
})(LocateReqd = exports.LocateReqd || (exports.LocateReqd = {}));
var ForexReq;
(function (ForexReq) {
    ForexReq["Yes"] = "Y";
    ForexReq["No"] = "N";
})(ForexReq = exports.ForexReq || (exports.ForexReq = {}));
var GapFillFlag;
(function (GapFillFlag) {
    GapFillFlag["Yes"] = "Y";
    GapFillFlag["No"] = "N";
})(GapFillFlag = exports.GapFillFlag || (exports.GapFillFlag = {}));
var DKReason;
(function (DKReason) {
    DKReason["UnknownSymbol"] = "A";
    DKReason["WrongSide"] = "B";
    DKReason["QuantityExceedsOrder"] = "C";
    DKReason["NoMatchingOrder"] = "D";
    DKReason["PriceExceedsLimit"] = "E";
    DKReason["CalculationDifference"] = "F";
    DKReason["Other"] = "Z";
})(DKReason = exports.DKReason || (exports.DKReason = {}));
var IOINaturalFlag;
(function (IOINaturalFlag) {
    IOINaturalFlag["Yes"] = "Y";
    IOINaturalFlag["No"] = "N";
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
    MiscFeeType["PerTransaction"] = "10";
    MiscFeeType["Conversion"] = "11";
    MiscFeeType["Agent"] = "12";
})(MiscFeeType = exports.MiscFeeType || (exports.MiscFeeType = {}));
var ResetSeqNumFlag;
(function (ResetSeqNumFlag) {
    ResetSeqNumFlag["Yes"] = "Y";
    ResetSeqNumFlag["No"] = "N";
})(ResetSeqNumFlag = exports.ResetSeqNumFlag || (exports.ResetSeqNumFlag = {}));
var ExecType;
(function (ExecType) {
    ExecType["New"] = "0";
    ExecType["DoneForDay"] = "3";
    ExecType["Canceled"] = "4";
    ExecType["Replace"] = "5";
    ExecType["PendingCancel"] = "6";
    ExecType["Stopped"] = "7";
    ExecType["Rejected"] = "8";
    ExecType["Suspended"] = "9";
    ExecType["PendingNew"] = "A";
    ExecType["Calculated"] = "B";
    ExecType["Expired"] = "C";
    ExecType["Restated"] = "D";
    ExecType["PendingReplace"] = "E";
    ExecType["Trade"] = "F";
    ExecType["TradeCorrect"] = "G";
    ExecType["TradeCancel"] = "H";
    ExecType["OrderStatus"] = "I";
})(ExecType = exports.ExecType || (exports.ExecType = {}));
var SettlCurrFxRateCalc;
(function (SettlCurrFxRateCalc) {
    SettlCurrFxRateCalc["Multiply"] = "M";
    SettlCurrFxRateCalc["Divide"] = "D";
})(SettlCurrFxRateCalc = exports.SettlCurrFxRateCalc || (exports.SettlCurrFxRateCalc = {}));
var SettlInstMode;
(function (SettlInstMode) {
    SettlInstMode["StandingInstructionsProvided"] = "1";
    SettlInstMode["SpecificOrderForASingleAccount"] = "4";
    SettlInstMode["RequestReject"] = "5";
})(SettlInstMode = exports.SettlInstMode || (exports.SettlInstMode = {}));
var SettlInstTransType;
(function (SettlInstTransType) {
    SettlInstTransType["New"] = "N";
    SettlInstTransType["Cancel"] = "C";
    SettlInstTransType["Replace"] = "R";
    SettlInstTransType["Restate"] = "T";
})(SettlInstTransType = exports.SettlInstTransType || (exports.SettlInstTransType = {}));
var SettlInstSource;
(function (SettlInstSource) {
    SettlInstSource["BrokersInstructions"] = "1";
    SettlInstSource["InstitutionsInstructions"] = "2";
    SettlInstSource["Investor"] = "3";
})(SettlInstSource = exports.SettlInstSource || (exports.SettlInstSource = {}));
var SecurityType;
(function (SecurityType) {
    SecurityType["Future"] = "FUT";
    SecurityType["Option"] = "OPT";
    SecurityType["EuroSupranationalCoupons"] = "EUSUPRA";
    SecurityType["FederalAgencyCoupon"] = "FAC";
    SecurityType["FederalAgencyDiscountNote"] = "FADN";
    SecurityType["PrivateExportFunding"] = "PEF";
    SecurityType["UsdSupranationalCoupons"] = "SUPRA";
    SecurityType["CorporateBond"] = "CORP";
    SecurityType["CorporatePrivatePlacement"] = "CPP";
    SecurityType["ConvertibleBond"] = "CB";
    SecurityType["DualCurrency"] = "DUAL";
    SecurityType["EuroCorporateBond"] = "EUCORP";
    SecurityType["IndexedLinked"] = "XLINKD";
    SecurityType["StructuredNotes"] = "STRUCT";
    SecurityType["YankeeCorporateBond"] = "YANK";
    SecurityType["ForeignExchangeContract"] = "FOR";
    SecurityType["CommonStock"] = "CS";
    SecurityType["PreferredStock"] = "PS";
    SecurityType["BradyBond"] = "BRADY";
    SecurityType["EuroSovereigns"] = "EUSOV";
    SecurityType["UsTreasuryBond"] = "TBOND";
    SecurityType["InterestStripFromAnyBondOrNote"] = "TINT";
    SecurityType["TreasuryInflationProtectedSecurities"] = "TIPS";
    SecurityType["PrincipalStripOfACallableBondOrNote"] = "TCAL";
    SecurityType["PrincipalStripFromANonCallableBondOrNote"] = "TPRN";
    SecurityType["UsTreasuryNoteUst"] = "UST";
    SecurityType["UsTreasuryBillUstb"] = "USTB";
    SecurityType["UsTreasuryNoteTnote"] = "TNOTE";
    SecurityType["UsTreasuryBillTbill"] = "TBILL";
    SecurityType["Repurchase"] = "REPO";
    SecurityType["Forward"] = "FORWARD";
    SecurityType["BuySellback"] = "BUYSELL";
    SecurityType["SecuritiesLoan"] = "SECLOAN";
    SecurityType["SecuritiesPledge"] = "SECPLEDGE";
    SecurityType["TermLoan"] = "TERM";
    SecurityType["RevolverLoan"] = "RVLV";
    SecurityType["RevolverTermLoan"] = "RVLVTRM";
    SecurityType["BridgeLoan"] = "BRIDGE";
    SecurityType["LetterOfCredit"] = "LOFC";
    SecurityType["SwingLineFacility"] = "SWING";
    SecurityType["DebtorInPossession"] = "DINP";
    SecurityType["Defaulted"] = "DEFLTED";
    SecurityType["Withdrawn"] = "WITHDRN";
    SecurityType["Replaced"] = "REPLACD";
    SecurityType["Matured"] = "MATURED";
    SecurityType["AmendedRestated"] = "AMENDED";
    SecurityType["Retired"] = "RETIRED";
    SecurityType["BankersAcceptance"] = "BA";
    SecurityType["BankNotes"] = "BN";
    SecurityType["BillOfExchanges"] = "BOX";
    SecurityType["CertificateOfDeposit"] = "CD";
    SecurityType["CallLoans"] = "CL";
    SecurityType["CommercialPaper"] = "CP";
    SecurityType["DepositNotes"] = "DN";
    SecurityType["EuroCertificateOfDeposit"] = "EUCD";
    SecurityType["EuroCommercialPaper"] = "EUCP";
    SecurityType["LiquidityNote"] = "LQN";
    SecurityType["MediumTermNotes"] = "MTN";
    SecurityType["Overnight"] = "ONITE";
    SecurityType["PromissoryNote"] = "PN";
    SecurityType["PlazosFijos"] = "PZFJ";
    SecurityType["ShortTermLoanNote"] = "STN";
    SecurityType["TimeDeposit"] = "TD";
    SecurityType["ExtendedCommNote"] = "XCN";
    SecurityType["YankeeCertificateOfDeposit"] = "YCD";
    SecurityType["AssetBackedSecurities"] = "ABS";
    SecurityType["CorpMortgageBackedSecurities"] = "CMBS";
    SecurityType["CollateralizedMortgageObligation"] = "CMO";
    SecurityType["IoetteMortgage"] = "IET";
    SecurityType["MortgageBackedSecurities"] = "MBS";
    SecurityType["MortgageInterestOnly"] = "MIO";
    SecurityType["MortgagePrincipalOnly"] = "MPO";
    SecurityType["MortgagePrivatePlacement"] = "MPP";
    SecurityType["MiscellaneousPassThrough"] = "MPT";
    SecurityType["Pfandbriefe"] = "PFAND";
    SecurityType["ToBeAnnounced"] = "TBA";
    SecurityType["OtherAnticipationNotesBanGanEtc"] = "AN";
    SecurityType["CertificateOfObligation"] = "COFO";
    SecurityType["CertificateOfParticipation"] = "COFP";
    SecurityType["GeneralObligationBonds"] = "GO";
    SecurityType["MandatoryTender"] = "MT";
    SecurityType["RevenueAnticipationNote"] = "RAN";
    SecurityType["RevenueBonds"] = "REV";
    SecurityType["SpecialAssessment"] = "SPCLA";
    SecurityType["SpecialObligation"] = "SPCLO";
    SecurityType["SpecialTax"] = "SPCLT";
    SecurityType["TaxAnticipationNote"] = "TAN";
    SecurityType["TaxAllocation"] = "TAXA";
    SecurityType["TaxExemptCommercialPaper"] = "TECP";
    SecurityType["TaxRevenueAnticipationNote"] = "TRAN";
    SecurityType["VariableRateDemandNote"] = "VRDN";
    SecurityType["Warrant"] = "WAR";
    SecurityType["MutualFund"] = "MF";
    SecurityType["MultiLegInstrument"] = "MLEG";
    SecurityType["NoSecurityType"] = "NONE";
})(SecurityType = exports.SecurityType || (exports.SecurityType = {}));
var StandInstDbType;
(function (StandInstDbType) {
    StandInstDbType[StandInstDbType["Other"] = 0] = "Other";
    StandInstDbType[StandInstDbType["DtcSid"] = 1] = "DtcSid";
    StandInstDbType[StandInstDbType["ThomsonAlert"] = 2] = "ThomsonAlert";
    StandInstDbType[StandInstDbType["AGlobalCustodian"] = 3] = "AGlobalCustodian";
    StandInstDbType[StandInstDbType["Accountnet"] = 4] = "Accountnet";
})(StandInstDbType = exports.StandInstDbType || (exports.StandInstDbType = {}));
var SettlDeliveryType;
(function (SettlDeliveryType) {
    SettlDeliveryType[SettlDeliveryType["VersusPaymentDeliver"] = 0] = "VersusPaymentDeliver";
    SettlDeliveryType[SettlDeliveryType["FreeDeliver"] = 1] = "FreeDeliver";
    SettlDeliveryType[SettlDeliveryType["TriParty"] = 2] = "TriParty";
    SettlDeliveryType[SettlDeliveryType["HoldInCustody"] = 3] = "HoldInCustody";
})(SettlDeliveryType = exports.SettlDeliveryType || (exports.SettlDeliveryType = {}));
var AllocLinkType;
(function (AllocLinkType) {
    AllocLinkType[AllocLinkType["FXNetting"] = 0] = "FXNetting";
    AllocLinkType[AllocLinkType["FXSwap"] = 1] = "FXSwap";
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
var NotifyBrokerOfCredit;
(function (NotifyBrokerOfCredit) {
    NotifyBrokerOfCredit["Yes"] = "Y";
    NotifyBrokerOfCredit["No"] = "N";
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
var StipulationType;
(function (StipulationType) {
    StipulationType["Amt"] = "AMT";
    StipulationType["AutoReinvestmentAtRateOrBetter"] = "AUTOREINV";
    StipulationType["BankQualified"] = "BANKQUAL";
    StipulationType["BargainConditionsSee"] = "BGNCON";
    StipulationType["CouponRange"] = "COUPON";
    StipulationType["IsoCurrencyCode"] = "CURRENCY";
    StipulationType["CustomStartEndDate"] = "CUSTOMDATE";
    StipulationType["GeographicsAndRange"] = "GEOG";
    StipulationType["ValuationDiscount"] = "HAIRCUT";
    StipulationType["Insured"] = "INSURED";
    StipulationType["YearOrYearMonthOfIssue"] = "ISSUE";
    StipulationType["IssuersTicker"] = "ISSUER";
    StipulationType["IssueSizeRange"] = "ISSUESIZE";
    StipulationType["LookbackDays"] = "LOOKBACK";
    StipulationType["ExplicitLotIdentifier"] = "LOT";
    StipulationType["LotVariance"] = "LOTVAR";
    StipulationType["MaturityYearAndMonth"] = "MAT";
    StipulationType["MaturityRange"] = "MATURITY";
    StipulationType["MaximumSubstitutions"] = "MAXSUBS";
    StipulationType["MinimumQuantity"] = "MINQTY";
    StipulationType["MinimumIncrement"] = "MININCR";
    StipulationType["MinimumDenomination"] = "MINDNOM";
    StipulationType["PaymentFrequencyCalendar"] = "PAYFREQ";
    StipulationType["NumberOfPieces"] = "PIECES";
    StipulationType["PoolsMaximum"] = "PMAX";
    StipulationType["PoolsPerMillion"] = "PPM";
    StipulationType["PoolsPerLot"] = "PPL";
    StipulationType["PoolsPerTrade"] = "PPT";
    StipulationType["PriceRange"] = "PRICE";
    StipulationType["PricingFrequency"] = "PRICEFREQ";
    StipulationType["ProductionYear"] = "PROD";
    StipulationType["CallProtection"] = "PROTECT";
    StipulationType["Purpose"] = "PURPOSE";
    StipulationType["BenchmarkPriceSource"] = "PXSOURCE";
    StipulationType["RatingSourceAndRange"] = "RATING";
    StipulationType["TypeOfRedemptionValuesAreNoncallableCallablePrefundedEscrowedtomaturityPutableConvertible"] = "REDEMPTION";
    StipulationType["Restricted"] = "RESTRICTED";
    StipulationType["MarketSector"] = "SECTOR";
    StipulationType["SecuritytypeIncludedOrExcluded"] = "SECTYPE";
    StipulationType["Structure"] = "STRUCT";
    StipulationType["SubstitutionsFrequency"] = "SUBSFREQ";
    StipulationType["SubstitutionsLeft"] = "SUBSLEFT";
    StipulationType["FreeformText"] = "TEXT";
    StipulationType["TradeVariance"] = "TRDVAR";
    StipulationType["WeightedAverageCouponvalueInPercent"] = "WAC";
    StipulationType["WeightedAverageLifeCouponValueInPercent"] = "WAL";
    StipulationType["WeightedAverageLoanAgeValueInMonths"] = "WALA";
    StipulationType["WeightedAverageMaturityValueInMonths"] = "WAM";
    StipulationType["WholePool"] = "WHOLE";
    StipulationType["YieldRange"] = "YIELD";
})(StipulationType = exports.StipulationType || (exports.StipulationType = {}));
var YieldType;
(function (YieldType) {
    YieldType["AfterTaxYield"] = "AFTERTAX";
    YieldType["AnnualYield"] = "ANNUAL";
    YieldType["YieldAtIssue"] = "ATISSUE";
    YieldType["YieldToAverageMaturity"] = "AVGMATURITY";
    YieldType["BookYield"] = "BOOK";
    YieldType["YieldToNextCall"] = "CALL";
    YieldType["YieldChangeSinceClose"] = "CHANGE";
    YieldType["ClosingYield"] = "CLOSE";
    YieldType["CompoundYield"] = "COMPOUND";
    YieldType["CurrentYield"] = "CURRENT";
    YieldType["TrueGrossYield"] = "GROSS";
    YieldType["GovernmentEquivalentYield"] = "GOVTEQUIV";
    YieldType["YieldWithInflationAssumption"] = "INFLATION";
    YieldType["InverseFloaterBondYield"] = "INVERSEFLOATER";
    YieldType["MostRecentClosingYield"] = "LASTCLOSE";
    YieldType["ClosingYieldMostRecentMonth"] = "LASTMONTH";
    YieldType["ClosingYieldMostRecentQuarter"] = "LASTQUARTER";
    YieldType["ClosingYieldMostRecentYear"] = "LASTYEAR";
    YieldType["YieldToLongestAverageLife"] = "LONGAVGLIFE";
    YieldType["MarkToMarketYield"] = "MARK";
    YieldType["YieldToMaturity"] = "MATURITY";
    YieldType["YieldToNextRefund"] = "NEXTREFUND";
    YieldType["OpenAverageYield"] = "OPENAVG";
    YieldType["YieldToNextPut"] = "PUT";
    YieldType["PreviousCloseYield"] = "PREVCLOSE";
    YieldType["ProceedsYield"] = "PROCEEDS";
    YieldType["SemiAnnualYield"] = "SEMIANNUAL";
    YieldType["YieldToShortestAverageLife"] = "SHORTAVGLIFE";
    YieldType["SimpleYield"] = "SIMPLE";
    YieldType["TaxEquivalentYield"] = "TAXEQUIV";
    YieldType["YieldToTenderDate"] = "TENDER";
    YieldType["TrueYield"] = "TRUE";
    YieldType["YieldValueOf132"] = "VALUE1/32";
    YieldType["YieldToWorst"] = "WORST";
})(YieldType = exports.YieldType || (exports.YieldType = {}));
var TradedFlatSwitch;
(function (TradedFlatSwitch) {
    TradedFlatSwitch["Yes"] = "Y";
    TradedFlatSwitch["No"] = "N";
})(TradedFlatSwitch = exports.TradedFlatSwitch || (exports.TradedFlatSwitch = {}));
var SubscriptionRequestType;
(function (SubscriptionRequestType) {
    SubscriptionRequestType["Snapshot"] = "0";
    SubscriptionRequestType["SnapshotPlusUpdates"] = "1";
    SubscriptionRequestType["DisablePreviousSnapshotPlusUpdateRequest"] = "2";
})(SubscriptionRequestType = exports.SubscriptionRequestType || (exports.SubscriptionRequestType = {}));
var MDUpdateType;
(function (MDUpdateType) {
    MDUpdateType[MDUpdateType["FullRefresh"] = 0] = "FullRefresh";
    MDUpdateType[MDUpdateType["IncrementalRefresh"] = 1] = "IncrementalRefresh";
})(MDUpdateType = exports.MDUpdateType || (exports.MDUpdateType = {}));
var AggregatedBook;
(function (AggregatedBook) {
    AggregatedBook["Yes"] = "Y";
    AggregatedBook["No"] = "N";
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
    MDEntryType["Imbalance"] = "A";
    MDEntryType["TradeVolume"] = "B";
    MDEntryType["OpenInterest"] = "C";
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
    TradeCondition["ImbalanceMoreBuyers"] = "P";
    TradeCondition["ImbalanceMoreSellers"] = "Q";
    TradeCondition["OpeningPrice"] = "R";
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
    MDReqRejReason["DuplicateMdreqid"] = "1";
    MDReqRejReason["InsufficientBandwidth"] = "2";
    MDReqRejReason["InsufficientPermissions"] = "3";
    MDReqRejReason["UnsupportedSubscriptionrequesttype"] = "4";
    MDReqRejReason["UnsupportedMarketdepth"] = "5";
    MDReqRejReason["UnsupportedMdupdatetype"] = "6";
    MDReqRejReason["UnsupportedAggregatedbook"] = "7";
    MDReqRejReason["UnsupportedMdentrytype"] = "8";
    MDReqRejReason["UnsupportedTradingsessionid"] = "9";
    MDReqRejReason["UnsupportedScope"] = "A";
    MDReqRejReason["UnsupportedOpenclosesettleflag"] = "B";
    MDReqRejReason["UnsupportedMdimplicitdelete"] = "C";
})(MDReqRejReason = exports.MDReqRejReason || (exports.MDReqRejReason = {}));
var DeleteReason;
(function (DeleteReason) {
    DeleteReason["Cancelation"] = "0";
    DeleteReason["Error"] = "1";
})(DeleteReason = exports.DeleteReason || (exports.DeleteReason = {}));
var OpenCloseSettlFlag;
(function (OpenCloseSettlFlag) {
    OpenCloseSettlFlag["DailyOpen"] = "0";
    OpenCloseSettlFlag["SessionOpen"] = "1";
    OpenCloseSettlFlag["DeliverySettlementEntry"] = "2";
    OpenCloseSettlFlag["ExpectedEntry"] = "3";
    OpenCloseSettlFlag["EntryFromPreviousBusinessDay"] = "4";
    OpenCloseSettlFlag["TheoreticalPriceValue"] = "5";
})(OpenCloseSettlFlag = exports.OpenCloseSettlFlag || (exports.OpenCloseSettlFlag = {}));
var FinancialStatus;
(function (FinancialStatus) {
    FinancialStatus["Bankrupt"] = "1";
    FinancialStatus["PendingDelisting"] = "2";
})(FinancialStatus = exports.FinancialStatus || (exports.FinancialStatus = {}));
var CorporateAction;
(function (CorporateAction) {
    CorporateAction["ExDividend"] = "A";
    CorporateAction["ExDistribution"] = "B";
    CorporateAction["ExRights"] = "C";
    CorporateAction["New"] = "D";
    CorporateAction["ExInterest"] = "E";
})(CorporateAction = exports.CorporateAction || (exports.CorporateAction = {}));
var QuoteStatus;
(function (QuoteStatus) {
    QuoteStatus[QuoteStatus["Accepted"] = 0] = "Accepted";
    QuoteStatus[QuoteStatus["CanceledForSymbol"] = 1] = "CanceledForSymbol";
    QuoteStatus[QuoteStatus["CanceledForSecurityType"] = 2] = "CanceledForSecurityType";
    QuoteStatus[QuoteStatus["CanceledForUnderlying"] = 3] = "CanceledForUnderlying";
    QuoteStatus[QuoteStatus["CanceledAll"] = 4] = "CanceledAll";
    QuoteStatus[QuoteStatus["Rejected"] = 5] = "Rejected";
    QuoteStatus[QuoteStatus["RemovedFromMarket"] = 6] = "RemovedFromMarket";
    QuoteStatus[QuoteStatus["Expired"] = 7] = "Expired";
    QuoteStatus[QuoteStatus["Query"] = 8] = "Query";
    QuoteStatus[QuoteStatus["QuoteNotFound"] = 9] = "QuoteNotFound";
    QuoteStatus[QuoteStatus["Pending"] = 10] = "Pending";
    QuoteStatus[QuoteStatus["Pass"] = 11] = "Pass";
    QuoteStatus[QuoteStatus["LockedMarketWarning"] = 12] = "LockedMarketWarning";
    QuoteStatus[QuoteStatus["CrossMarketWarning"] = 13] = "CrossMarketWarning";
    QuoteStatus[QuoteStatus["CanceledDueToLockMarket"] = 14] = "CanceledDueToLockMarket";
    QuoteStatus[QuoteStatus["CanceledDueToCrossMarket"] = 15] = "CanceledDueToCrossMarket";
})(QuoteStatus = exports.QuoteStatus || (exports.QuoteStatus = {}));
var QuoteCancelType;
(function (QuoteCancelType) {
    QuoteCancelType[QuoteCancelType["CancelForSymbol"] = 1] = "CancelForSymbol";
    QuoteCancelType[QuoteCancelType["CancelForSecurityType"] = 2] = "CancelForSecurityType";
    QuoteCancelType[QuoteCancelType["CancelForUnderlyingSymbol"] = 3] = "CancelForUnderlyingSymbol";
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
    QuoteRejectReason[QuoteRejectReason["InvalidBidAskSpread"] = 7] = "InvalidBidAskSpread";
    QuoteRejectReason[QuoteRejectReason["InvalidPrice"] = 8] = "InvalidPrice";
    QuoteRejectReason[QuoteRejectReason["NotAuthorizedToQuoteSecurity"] = 9] = "NotAuthorizedToQuoteSecurity";
    QuoteRejectReason[QuoteRejectReason["Other"] = 99] = "Other";
})(QuoteRejectReason = exports.QuoteRejectReason || (exports.QuoteRejectReason = {}));
var QuoteResponseLevel;
(function (QuoteResponseLevel) {
    QuoteResponseLevel[QuoteResponseLevel["NoAcknowledgement"] = 0] = "NoAcknowledgement";
    QuoteResponseLevel[QuoteResponseLevel["AcknowledgeOnlyNegativeOrErroneousQuotes"] = 1] = "AcknowledgeOnlyNegativeOrErroneousQuotes";
    QuoteResponseLevel[QuoteResponseLevel["AcknowledgeEachQuoteMessages"] = 2] = "AcknowledgeEachQuoteMessages";
})(QuoteResponseLevel = exports.QuoteResponseLevel || (exports.QuoteResponseLevel = {}));
var QuoteRequestType;
(function (QuoteRequestType) {
    QuoteRequestType[QuoteRequestType["Manual"] = 1] = "Manual";
    QuoteRequestType[QuoteRequestType["Automatic"] = 2] = "Automatic";
})(QuoteRequestType = exports.QuoteRequestType || (exports.QuoteRequestType = {}));
var SecurityRequestType;
(function (SecurityRequestType) {
    SecurityRequestType[SecurityRequestType["RequestSecurityIdentityAndSpecifications"] = 0] = "RequestSecurityIdentityAndSpecifications";
    SecurityRequestType[SecurityRequestType["RequestSecurityIdentityForTheSpecificationsProvided"] = 1] = "RequestSecurityIdentityForTheSpecificationsProvided";
    SecurityRequestType[SecurityRequestType["RequestListSecurityTypes"] = 2] = "RequestListSecurityTypes";
    SecurityRequestType[SecurityRequestType["RequestListSecurities"] = 3] = "RequestListSecurities";
})(SecurityRequestType = exports.SecurityRequestType || (exports.SecurityRequestType = {}));
var SecurityResponseType;
(function (SecurityResponseType) {
    SecurityResponseType[SecurityResponseType["AcceptSecurityProposalAsIs"] = 1] = "AcceptSecurityProposalAsIs";
    SecurityResponseType[SecurityResponseType["AcceptSecurityProposalWithRevisionsAsIndicatedInTheMessage"] = 2] = "AcceptSecurityProposalWithRevisionsAsIndicatedInTheMessage";
    SecurityResponseType[SecurityResponseType["RejectSecurityProposal"] = 5] = "RejectSecurityProposal";
    SecurityResponseType[SecurityResponseType["CanNotMatchSelectionCriteria"] = 6] = "CanNotMatchSelectionCriteria";
})(SecurityResponseType = exports.SecurityResponseType || (exports.SecurityResponseType = {}));
var UnsolicitedIndicator;
(function (UnsolicitedIndicator) {
    UnsolicitedIndicator["Yes"] = "Y";
    UnsolicitedIndicator["No"] = "N";
})(UnsolicitedIndicator = exports.UnsolicitedIndicator || (exports.UnsolicitedIndicator = {}));
var SecurityTradingStatus;
(function (SecurityTradingStatus) {
    SecurityTradingStatus[SecurityTradingStatus["OpeningDelay"] = 1] = "OpeningDelay";
    SecurityTradingStatus[SecurityTradingStatus["TradingHalt"] = 2] = "TradingHalt";
    SecurityTradingStatus[SecurityTradingStatus["Resume"] = 3] = "Resume";
    SecurityTradingStatus[SecurityTradingStatus["NoOpenNoResume"] = 4] = "NoOpenNoResume";
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
    SecurityTradingStatus[SecurityTradingStatus["PreOpen"] = 21] = "PreOpen";
    SecurityTradingStatus[SecurityTradingStatus["OpeningRotation"] = 22] = "OpeningRotation";
    SecurityTradingStatus[SecurityTradingStatus["FastMarket"] = 23] = "FastMarket";
})(SecurityTradingStatus = exports.SecurityTradingStatus || (exports.SecurityTradingStatus = {}));
var HaltReasonChar;
(function (HaltReasonChar) {
    HaltReasonChar["OrderImbalance"] = "I";
    HaltReasonChar["EquipmentChangeover"] = "X";
    HaltReasonChar["NewsPending"] = "P";
    HaltReasonChar["NewsDissemination"] = "D";
    HaltReasonChar["OrderInflux"] = "E";
    HaltReasonChar["AdditionalInformation"] = "M";
})(HaltReasonChar = exports.HaltReasonChar || (exports.HaltReasonChar = {}));
var InViewOfCommon;
(function (InViewOfCommon) {
    InViewOfCommon["Yes"] = "Y";
    InViewOfCommon["No"] = "N";
})(InViewOfCommon = exports.InViewOfCommon || (exports.InViewOfCommon = {}));
var DueToRelated;
(function (DueToRelated) {
    DueToRelated["Yes"] = "Y";
    DueToRelated["No"] = "N";
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
    TradSesStatus[TradSesStatus["Unknown"] = 0] = "Unknown";
    TradSesStatus[TradSesStatus["Halted"] = 1] = "Halted";
    TradSesStatus[TradSesStatus["Open"] = 2] = "Open";
    TradSesStatus[TradSesStatus["Closed"] = 3] = "Closed";
    TradSesStatus[TradSesStatus["PreOpen"] = 4] = "PreOpen";
    TradSesStatus[TradSesStatus["PreClose"] = 5] = "PreClose";
    TradSesStatus[TradSesStatus["RequestRejected"] = 6] = "RequestRejected";
})(TradSesStatus = exports.TradSesStatus || (exports.TradSesStatus = {}));
var MessageEncoding;
(function (MessageEncoding) {
    MessageEncoding["Jis"] = "ISO-2022-JP";
    MessageEncoding["Euc"] = "EUC-JP";
    MessageEncoding["ForUsingSjis"] = "Shift_JIS";
    MessageEncoding["Unicode"] = "UTF-8";
})(MessageEncoding = exports.MessageEncoding || (exports.MessageEncoding = {}));
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
    SessionRejectReason[SessionRejectReason["CompidProblem"] = 9] = "CompidProblem";
    SessionRejectReason[SessionRejectReason["SendingtimeAccuracyProblem"] = 10] = "SendingtimeAccuracyProblem";
    SessionRejectReason[SessionRejectReason["InvalidMsgtype"] = 11] = "InvalidMsgtype";
    SessionRejectReason[SessionRejectReason["XmlValidationError"] = 12] = "XmlValidationError";
    SessionRejectReason[SessionRejectReason["TagAppearsMoreThanOnce"] = 13] = "TagAppearsMoreThanOnce";
    SessionRejectReason[SessionRejectReason["TagSpecifiedOutOfRequiredOrder"] = 14] = "TagSpecifiedOutOfRequiredOrder";
    SessionRejectReason[SessionRejectReason["RepeatingGroupFieldsOutOfOrder"] = 15] = "RepeatingGroupFieldsOutOfOrder";
    SessionRejectReason[SessionRejectReason["IncorrectNumingroupCountForRepeatingGroup"] = 16] = "IncorrectNumingroupCountForRepeatingGroup";
    SessionRejectReason[SessionRejectReason["NonDataValueIncludesFieldDelimiter"] = 17] = "NonDataValueIncludesFieldDelimiter";
    SessionRejectReason[SessionRejectReason["Other"] = 99] = "Other";
})(SessionRejectReason = exports.SessionRejectReason || (exports.SessionRejectReason = {}));
var BidRequestTransType;
(function (BidRequestTransType) {
    BidRequestTransType["New"] = "N";
    BidRequestTransType["Cancel"] = "C";
})(BidRequestTransType = exports.BidRequestTransType || (exports.BidRequestTransType = {}));
var SolicitedFlag;
(function (SolicitedFlag) {
    SolicitedFlag["Yes"] = "Y";
    SolicitedFlag["No"] = "N";
})(SolicitedFlag = exports.SolicitedFlag || (exports.SolicitedFlag = {}));
var ExecRestatementReason;
(function (ExecRestatementReason) {
    ExecRestatementReason[ExecRestatementReason["GtCorporateAction"] = 0] = "GtCorporateAction";
    ExecRestatementReason[ExecRestatementReason["GtRenewal"] = 1] = "GtRenewal";
    ExecRestatementReason[ExecRestatementReason["VerbalChange"] = 2] = "VerbalChange";
    ExecRestatementReason[ExecRestatementReason["RepricingOfOrder"] = 3] = "RepricingOfOrder";
    ExecRestatementReason[ExecRestatementReason["BrokerOption"] = 4] = "BrokerOption";
    ExecRestatementReason[ExecRestatementReason["PartialDeclineOfOrderqty"] = 5] = "PartialDeclineOfOrderqty";
    ExecRestatementReason[ExecRestatementReason["CancelOnTradingHalt"] = 6] = "CancelOnTradingHalt";
    ExecRestatementReason[ExecRestatementReason["CancelOnSystemFailure"] = 7] = "CancelOnSystemFailure";
    ExecRestatementReason[ExecRestatementReason["Market"] = 8] = "Market";
    ExecRestatementReason[ExecRestatementReason["CanceledNotBest"] = 9] = "CanceledNotBest";
    ExecRestatementReason[ExecRestatementReason["WarehouseRecap"] = 10] = "WarehouseRecap";
    ExecRestatementReason[ExecRestatementReason["Other"] = 99] = "Other";
})(ExecRestatementReason = exports.ExecRestatementReason || (exports.ExecRestatementReason = {}));
var BusinessRejectReason;
(function (BusinessRejectReason) {
    BusinessRejectReason[BusinessRejectReason["Other"] = 0] = "Other";
    BusinessRejectReason[BusinessRejectReason["UnkownId"] = 1] = "UnkownId";
    BusinessRejectReason[BusinessRejectReason["UnknownSecurity"] = 2] = "UnknownSecurity";
    BusinessRejectReason[BusinessRejectReason["UnsupportedMessageType"] = 3] = "UnsupportedMessageType";
    BusinessRejectReason[BusinessRejectReason["ApplicationNotAvailable"] = 4] = "ApplicationNotAvailable";
    BusinessRejectReason[BusinessRejectReason["ConditionallyRequiredFieldMissing"] = 5] = "ConditionallyRequiredFieldMissing";
    BusinessRejectReason[BusinessRejectReason["NotAuthorized"] = 6] = "NotAuthorized";
    BusinessRejectReason[BusinessRejectReason["DelivertoFirmNotAvailableAtThisTime"] = 7] = "DelivertoFirmNotAvailableAtThisTime";
})(BusinessRejectReason = exports.BusinessRejectReason || (exports.BusinessRejectReason = {}));
var MsgDirection;
(function (MsgDirection) {
    MsgDirection["Send"] = "S";
    MsgDirection["Receive"] = "R";
})(MsgDirection = exports.MsgDirection || (exports.MsgDirection = {}));
var DiscretionInst;
(function (DiscretionInst) {
    DiscretionInst["RelatedToDisplayedPrice"] = "0";
    DiscretionInst["RelatedToMarketPrice"] = "1";
    DiscretionInst["RelatedToPrimaryPrice"] = "2";
    DiscretionInst["RelatedToLocalPrimaryPrice"] = "3";
    DiscretionInst["RelatedToMidpointPrice"] = "4";
    DiscretionInst["RelatedToLastTradePrice"] = "5";
    DiscretionInst["RelatedToVwap"] = "6";
})(DiscretionInst = exports.DiscretionInst || (exports.DiscretionInst = {}));
var BidType;
(function (BidType) {
    BidType[BidType["NonDisclosedStyle"] = 1] = "NonDisclosedStyle";
    BidType[BidType["DisclosedStyle"] = 2] = "DisclosedStyle";
    BidType[BidType["NoBiddingProcess"] = 3] = "NoBiddingProcess";
})(BidType = exports.BidType || (exports.BidType = {}));
var BidDescriptorType;
(function (BidDescriptorType) {
    BidDescriptorType[BidDescriptorType["Sector"] = 1] = "Sector";
    BidDescriptorType[BidDescriptorType["Country"] = 2] = "Country";
    BidDescriptorType[BidDescriptorType["Index"] = 3] = "Index";
})(BidDescriptorType = exports.BidDescriptorType || (exports.BidDescriptorType = {}));
var SideValueInd;
(function (SideValueInd) {
    SideValueInd[SideValueInd["Sidevalue1"] = 1] = "Sidevalue1";
    SideValueInd[SideValueInd["Sidevalue2"] = 2] = "Sidevalue2";
})(SideValueInd = exports.SideValueInd || (exports.SideValueInd = {}));
var LiquidityIndType;
(function (LiquidityIndType) {
    LiquidityIndType[LiquidityIndType["E5DayMovingAverage"] = 1] = "E5DayMovingAverage";
    LiquidityIndType[LiquidityIndType["E20DayMovingAverage"] = 2] = "E20DayMovingAverage";
    LiquidityIndType[LiquidityIndType["NormalMarketSize"] = 3] = "NormalMarketSize";
    LiquidityIndType[LiquidityIndType["Other"] = 4] = "Other";
})(LiquidityIndType = exports.LiquidityIndType || (exports.LiquidityIndType = {}));
var ExchangeForPhysical;
(function (ExchangeForPhysical) {
    ExchangeForPhysical["Yes"] = "Y";
    ExchangeForPhysical["No"] = "N";
})(ExchangeForPhysical = exports.ExchangeForPhysical || (exports.ExchangeForPhysical = {}));
var ProgRptReqs;
(function (ProgRptReqs) {
    ProgRptReqs[ProgRptReqs["BuysideExplicitlyRequestsStatusUsingStatusrequest"] = 1] = "BuysideExplicitlyRequestsStatusUsingStatusrequest";
    ProgRptReqs[ProgRptReqs["SellsidePeriodicallySendsStatusUsingListstatusPeriodOptionallySpecifiedInProgressperiod"] = 2] = "SellsidePeriodicallySendsStatusUsingListstatusPeriodOptionallySpecifiedInProgressperiod";
    ProgRptReqs[ProgRptReqs["RealTimeExecutionReports"] = 3] = "RealTimeExecutionReports";
})(ProgRptReqs = exports.ProgRptReqs || (exports.ProgRptReqs = {}));
var IncTaxInd;
(function (IncTaxInd) {
    IncTaxInd[IncTaxInd["Net"] = 1] = "Net";
    IncTaxInd[IncTaxInd["Gross"] = 2] = "Gross";
})(IncTaxInd = exports.IncTaxInd || (exports.IncTaxInd = {}));
var BidTradeType;
(function (BidTradeType) {
    BidTradeType["RiskTrade"] = "R";
    BidTradeType["VwapGuarantee"] = "G";
    BidTradeType["Agency"] = "A";
    BidTradeType["GuaranteedClose"] = "J";
})(BidTradeType = exports.BidTradeType || (exports.BidTradeType = {}));
var BasisPxType;
(function (BasisPxType) {
    BasisPxType["ClosingPriceAtMorningSession"] = "2";
    BasisPxType["ClosingPrice"] = "3";
    BasisPxType["CurrentPrice"] = "4";
    BasisPxType["Sq"] = "5";
    BasisPxType["VwapThroughADay"] = "6";
    BasisPxType["VwapThroughAMorningSession"] = "7";
    BasisPxType["VwapThroughAnAfternoonSession"] = "8";
    BasisPxType["VwapThroughADayExceptYori"] = "9";
    BasisPxType["VwapThroughAMorningSessionExceptYori"] = "A";
    BasisPxType["VwapThroughAnAfternoonSessionExceptYori"] = "B";
    BasisPxType["Strike"] = "C";
    BasisPxType["Open"] = "D";
    BasisPxType["Others"] = "Z";
})(BasisPxType = exports.BasisPxType || (exports.BasisPxType = {}));
var PriceType;
(function (PriceType) {
    PriceType[PriceType["Percentage"] = 1] = "Percentage";
    PriceType[PriceType["PerUnit"] = 2] = "PerUnit";
    PriceType[PriceType["FixedAmount"] = 3] = "FixedAmount";
    PriceType[PriceType["DiscountPercentagePointsBelowPar"] = 4] = "DiscountPercentagePointsBelowPar";
    PriceType[PriceType["PremiumPercentagePointsOverPar"] = 5] = "PremiumPercentagePointsOverPar";
    PriceType[PriceType["Spread"] = 6] = "Spread";
    PriceType[PriceType["TedPrice"] = 7] = "TedPrice";
    PriceType[PriceType["TedYield"] = 8] = "TedYield";
    PriceType[PriceType["Yield"] = 9] = "Yield";
    PriceType[PriceType["FixedCabinetTradePrice"] = 10] = "FixedCabinetTradePrice";
    PriceType[PriceType["VariableCabinetTradePrice"] = 11] = "VariableCabinetTradePrice";
})(PriceType = exports.PriceType || (exports.PriceType = {}));
var GTBookingInst;
(function (GTBookingInst) {
    GTBookingInst[GTBookingInst["BookOutAllTradesOnDayOfExecution"] = 0] = "BookOutAllTradesOnDayOfExecution";
    GTBookingInst[GTBookingInst["AccumulateExecutionsUntilOrderIsFilledOrExpires"] = 1] = "AccumulateExecutionsUntilOrderIsFilledOrExpires";
    GTBookingInst[GTBookingInst["AccumulateUntilVerballyNotifiedOtherwise"] = 2] = "AccumulateUntilVerballyNotifiedOtherwise";
})(GTBookingInst = exports.GTBookingInst || (exports.GTBookingInst = {}));
var ListStatusType;
(function (ListStatusType) {
    ListStatusType[ListStatusType["Ack"] = 1] = "Ack";
    ListStatusType[ListStatusType["Response"] = 2] = "Response";
    ListStatusType[ListStatusType["Timed"] = 3] = "Timed";
    ListStatusType[ListStatusType["Execstarted"] = 4] = "Execstarted";
    ListStatusType[ListStatusType["Alldone"] = 5] = "Alldone";
    ListStatusType[ListStatusType["Alert"] = 6] = "Alert";
})(ListStatusType = exports.ListStatusType || (exports.ListStatusType = {}));
var NetGrossInd;
(function (NetGrossInd) {
    NetGrossInd[NetGrossInd["Net"] = 1] = "Net";
    NetGrossInd[NetGrossInd["Gross"] = 2] = "Gross";
})(NetGrossInd = exports.NetGrossInd || (exports.NetGrossInd = {}));
var ListOrderStatus;
(function (ListOrderStatus) {
    ListOrderStatus[ListOrderStatus["Inbiddingprocess"] = 1] = "Inbiddingprocess";
    ListOrderStatus[ListOrderStatus["Receivedforexecution"] = 2] = "Receivedforexecution";
    ListOrderStatus[ListOrderStatus["Executing"] = 3] = "Executing";
    ListOrderStatus[ListOrderStatus["Canceling"] = 4] = "Canceling";
    ListOrderStatus[ListOrderStatus["Alert"] = 5] = "Alert";
    ListOrderStatus[ListOrderStatus["AllDone"] = 6] = "AllDone";
    ListOrderStatus[ListOrderStatus["Reject"] = 7] = "Reject";
})(ListOrderStatus = exports.ListOrderStatus || (exports.ListOrderStatus = {}));
var ListExecInstType;
(function (ListExecInstType) {
    ListExecInstType["Immediate"] = "1";
    ListExecInstType["WaitForExecuteInstruction"] = "2";
    ListExecInstType["ExchangeSwitchCivOrderSellDriven"] = "3";
    ListExecInstType["ExchangeSwitchCivOrderBuyDrivenCashTopUp"] = "4";
    ListExecInstType["ExchangeSwitchCivOrderBuyDrivenCashWithdraw"] = "5";
})(ListExecInstType = exports.ListExecInstType || (exports.ListExecInstType = {}));
var CxlRejResponseTo;
(function (CxlRejResponseTo) {
    CxlRejResponseTo["OrderCancelRequest"] = "1";
    CxlRejResponseTo["OrderCancelReplaceRequest"] = "2";
})(CxlRejResponseTo = exports.CxlRejResponseTo || (exports.CxlRejResponseTo = {}));
var MultiLegReportingType;
(function (MultiLegReportingType) {
    MultiLegReportingType["SingleSecurity"] = "1";
    MultiLegReportingType["IndividualLegOfAMultiLegSecurity"] = "2";
    MultiLegReportingType["MultiLegSecurity"] = "3";
})(MultiLegReportingType = exports.MultiLegReportingType || (exports.MultiLegReportingType = {}));
var PartyIDSource;
(function (PartyIDSource) {
    PartyIDSource["KoreanInvestorId"] = "1";
    PartyIDSource["TaiwaneseQualifiedForeignInvestorIdQfii"] = "2";
    PartyIDSource["TaiwaneseTradingAccount"] = "3";
    PartyIDSource["MalaysianCentralDepository"] = "4";
    PartyIDSource["ChineseBShare"] = "5";
    PartyIDSource["UkNationalInsuranceOrPensionNumber"] = "6";
    PartyIDSource["UsSocialSecurityNumber"] = "7";
    PartyIDSource["UsEmployerIdentificationNumber"] = "8";
    PartyIDSource["AustralianBusinessNumber"] = "9";
    PartyIDSource["Bic"] = "B";
    PartyIDSource["GenerallyAcceptedMarketParticipantIdentifier"] = "C";
    PartyIDSource["ProprietaryCustomCode"] = "D";
    PartyIDSource["IsoCountryCode"] = "E";
    PartyIDSource["SettlementEntityLocation"] = "F";
    PartyIDSource["Mic"] = "G";
    PartyIDSource["CsdParticipantMemberCode"] = "H";
    PartyIDSource["AustralianTaxFileNumber"] = "A";
    PartyIDSource["DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument"] = "I";
})(PartyIDSource = exports.PartyIDSource || (exports.PartyIDSource = {}));
var PartyRole;
(function (PartyRole) {
    PartyRole[PartyRole["ExecutingFirm"] = 1] = "ExecutingFirm";
    PartyRole[PartyRole["BrokerOfCredit"] = 2] = "BrokerOfCredit";
    PartyRole[PartyRole["ClientId"] = 3] = "ClientId";
    PartyRole[PartyRole["ClearingFirm"] = 4] = "ClearingFirm";
    PartyRole[PartyRole["InvestorId"] = 5] = "InvestorId";
    PartyRole[PartyRole["IntroducingFirm"] = 6] = "IntroducingFirm";
    PartyRole[PartyRole["EnteringFirm"] = 7] = "EnteringFirm";
    PartyRole[PartyRole["LocateLendingFirm"] = 8] = "LocateLendingFirm";
    PartyRole[PartyRole["FundManagerClientId"] = 9] = "FundManagerClientId";
    PartyRole[PartyRole["SettlementLocation"] = 10] = "SettlementLocation";
    PartyRole[PartyRole["OrderOriginationTrader"] = 11] = "OrderOriginationTrader";
    PartyRole[PartyRole["ExecutingTrader"] = 12] = "ExecutingTrader";
    PartyRole[PartyRole["OrderOriginationFirm"] = 13] = "OrderOriginationFirm";
    PartyRole[PartyRole["GiveupClearingFirm"] = 14] = "GiveupClearingFirm";
    PartyRole[PartyRole["CorrespondantClearingFirm"] = 15] = "CorrespondantClearingFirm";
    PartyRole[PartyRole["ExecutingSystem"] = 16] = "ExecutingSystem";
    PartyRole[PartyRole["ContraFirm"] = 17] = "ContraFirm";
    PartyRole[PartyRole["ContraClearingFirm"] = 18] = "ContraClearingFirm";
    PartyRole[PartyRole["SponsoringFirm"] = 19] = "SponsoringFirm";
    PartyRole[PartyRole["UnderlyingContraFirm"] = 20] = "UnderlyingContraFirm";
    PartyRole[PartyRole["ClearingOrganization"] = 21] = "ClearingOrganization";
    PartyRole[PartyRole["Exchange"] = 22] = "Exchange";
    PartyRole[PartyRole["CustomerAccount"] = 24] = "CustomerAccount";
    PartyRole[PartyRole["CorrespondentClearingOrganization"] = 25] = "CorrespondentClearingOrganization";
    PartyRole[PartyRole["CorrespondentBroker"] = 26] = "CorrespondentBroker";
    PartyRole[PartyRole["BuyerSeller"] = 27] = "BuyerSeller";
    PartyRole[PartyRole["Custodian"] = 28] = "Custodian";
    PartyRole[PartyRole["Intermediary"] = 29] = "Intermediary";
    PartyRole[PartyRole["Agent"] = 30] = "Agent";
    PartyRole[PartyRole["SubCustodian"] = 31] = "SubCustodian";
    PartyRole[PartyRole["Beneficiary"] = 32] = "Beneficiary";
    PartyRole[PartyRole["InterestedParty"] = 33] = "InterestedParty";
    PartyRole[PartyRole["RegulatoryBody"] = 34] = "RegulatoryBody";
    PartyRole[PartyRole["LiquidityProvider"] = 35] = "LiquidityProvider";
    PartyRole[PartyRole["EnteringTrader"] = 36] = "EnteringTrader";
    PartyRole[PartyRole["ContraTrader"] = 37] = "ContraTrader";
    PartyRole[PartyRole["PositionAccount"] = 38] = "PositionAccount";
})(PartyRole = exports.PartyRole || (exports.PartyRole = {}));
var Product;
(function (Product) {
    Product[Product["Agency"] = 1] = "Agency";
    Product[Product["Commodity"] = 2] = "Commodity";
    Product[Product["Corporate"] = 3] = "Corporate";
    Product[Product["Currency"] = 4] = "Currency";
    Product[Product["Equity"] = 5] = "Equity";
    Product[Product["Government"] = 6] = "Government";
    Product[Product["Index"] = 7] = "Index";
    Product[Product["Loan"] = 8] = "Loan";
    Product[Product["Moneymarket"] = 9] = "Moneymarket";
    Product[Product["Mortgage"] = 10] = "Mortgage";
    Product[Product["Municipal"] = 11] = "Municipal";
    Product[Product["Other"] = 12] = "Other";
    Product[Product["Financing"] = 13] = "Financing";
})(Product = exports.Product || (exports.Product = {}));
var TestMessageIndicator;
(function (TestMessageIndicator) {
    TestMessageIndicator["Yes"] = "Y";
    TestMessageIndicator["No"] = "N";
})(TestMessageIndicator = exports.TestMessageIndicator || (exports.TestMessageIndicator = {}));
var RoundingDirection;
(function (RoundingDirection) {
    RoundingDirection["RoundToNearest"] = "0";
    RoundingDirection["RoundDown"] = "1";
    RoundingDirection["RoundUp"] = "2";
})(RoundingDirection = exports.RoundingDirection || (exports.RoundingDirection = {}));
var DistribPaymentMethod;
(function (DistribPaymentMethod) {
    DistribPaymentMethod[DistribPaymentMethod["Crest"] = 1] = "Crest";
    DistribPaymentMethod[DistribPaymentMethod["Nscc"] = 2] = "Nscc";
    DistribPaymentMethod[DistribPaymentMethod["Euroclear"] = 3] = "Euroclear";
    DistribPaymentMethod[DistribPaymentMethod["Clearstream"] = 4] = "Clearstream";
    DistribPaymentMethod[DistribPaymentMethod["Cheque"] = 5] = "Cheque";
    DistribPaymentMethod[DistribPaymentMethod["TelegraphicTransfer"] = 6] = "TelegraphicTransfer";
    DistribPaymentMethod[DistribPaymentMethod["Fedwire"] = 7] = "Fedwire";
    DistribPaymentMethod[DistribPaymentMethod["DirectCredit"] = 8] = "DirectCredit";
    DistribPaymentMethod[DistribPaymentMethod["AchCredit"] = 9] = "AchCredit";
    DistribPaymentMethod[DistribPaymentMethod["Bpay"] = 10] = "Bpay";
    DistribPaymentMethod[DistribPaymentMethod["HighValueClearingSystem"] = 11] = "HighValueClearingSystem";
    DistribPaymentMethod[DistribPaymentMethod["ReinvestInFund"] = 12] = "ReinvestInFund";
})(DistribPaymentMethod = exports.DistribPaymentMethod || (exports.DistribPaymentMethod = {}));
var CancellationRights;
(function (CancellationRights) {
    CancellationRights["Yes"] = "Y";
    CancellationRights["NoExecutionOnly"] = "N";
    CancellationRights["NoWaiverAgreement"] = "M";
    CancellationRights["NoInstitutional"] = "O";
})(CancellationRights = exports.CancellationRights || (exports.CancellationRights = {}));
var MoneyLaunderingStatus;
(function (MoneyLaunderingStatus) {
    MoneyLaunderingStatus["ExemptBelowTheLimit"] = "1";
    MoneyLaunderingStatus["ExemptClientMoneyTypeExemption"] = "2";
    MoneyLaunderingStatus["ExemptAuthorisedCreditOrFinancialInstitution"] = "3";
    MoneyLaunderingStatus["Passed"] = "Y";
    MoneyLaunderingStatus["NotChecked"] = "N";
})(MoneyLaunderingStatus = exports.MoneyLaunderingStatus || (exports.MoneyLaunderingStatus = {}));
var ExecPriceType;
(function (ExecPriceType) {
    ExecPriceType["BidPrice"] = "B";
    ExecPriceType["CreationPrice"] = "C";
    ExecPriceType["CreationPricePlusAdjustment"] = "D";
    ExecPriceType["CreationPricePlusAdjustmentAmount"] = "E";
    ExecPriceType["OfferPrice"] = "O";
    ExecPriceType["OfferPriceMinusAdjustment"] = "P";
    ExecPriceType["OfferPriceMinusAdjustmentAmount"] = "Q";
    ExecPriceType["SinglePrice"] = "S";
})(ExecPriceType = exports.ExecPriceType || (exports.ExecPriceType = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod[PaymentMethod["Crest"] = 1] = "Crest";
    PaymentMethod[PaymentMethod["Nscc"] = 2] = "Nscc";
    PaymentMethod[PaymentMethod["Euroclear"] = 3] = "Euroclear";
    PaymentMethod[PaymentMethod["Clearstream"] = 4] = "Clearstream";
    PaymentMethod[PaymentMethod["Cheque"] = 5] = "Cheque";
    PaymentMethod[PaymentMethod["TelegraphicTransfer"] = 6] = "TelegraphicTransfer";
    PaymentMethod[PaymentMethod["Fedwire"] = 7] = "Fedwire";
    PaymentMethod[PaymentMethod["DebitCard"] = 8] = "DebitCard";
    PaymentMethod[PaymentMethod["DirectDebit"] = 9] = "DirectDebit";
    PaymentMethod[PaymentMethod["DirectCredit"] = 10] = "DirectCredit";
    PaymentMethod[PaymentMethod["CreditCard"] = 11] = "CreditCard";
    PaymentMethod[PaymentMethod["AchDebit"] = 12] = "AchDebit";
    PaymentMethod[PaymentMethod["AchCredit"] = 13] = "AchCredit";
    PaymentMethod[PaymentMethod["Bpay"] = 14] = "Bpay";
    PaymentMethod[PaymentMethod["HighValueClearingSystem"] = 15] = "HighValueClearingSystem";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
var TaxAdvantageType;
(function (TaxAdvantageType) {
    TaxAdvantageType[TaxAdvantageType["NoneNotApplicable"] = 0] = "NoneNotApplicable";
    TaxAdvantageType[TaxAdvantageType["MaxiIsa"] = 1] = "MaxiIsa";
    TaxAdvantageType[TaxAdvantageType["Tessa"] = 2] = "Tessa";
    TaxAdvantageType[TaxAdvantageType["MiniCashIsa"] = 3] = "MiniCashIsa";
    TaxAdvantageType[TaxAdvantageType["MiniStocksAndSharesIsa"] = 4] = "MiniStocksAndSharesIsa";
    TaxAdvantageType[TaxAdvantageType["MiniInsuranceIsa"] = 5] = "MiniInsuranceIsa";
    TaxAdvantageType[TaxAdvantageType["CurrentYearPayment"] = 6] = "CurrentYearPayment";
    TaxAdvantageType[TaxAdvantageType["PriorYearPayment"] = 7] = "PriorYearPayment";
    TaxAdvantageType[TaxAdvantageType["AssetTransfer"] = 8] = "AssetTransfer";
    TaxAdvantageType[TaxAdvantageType["Employee"] = 9] = "Employee";
    TaxAdvantageType[TaxAdvantageType["EmployeeCurrentYear"] = 10] = "EmployeeCurrentYear";
    TaxAdvantageType[TaxAdvantageType["Employer"] = 11] = "Employer";
    TaxAdvantageType[TaxAdvantageType["EmployerCurrentYear"] = 12] = "EmployerCurrentYear";
    TaxAdvantageType[TaxAdvantageType["NonFundPrototypeIra"] = 13] = "NonFundPrototypeIra";
    TaxAdvantageType[TaxAdvantageType["NonFundQualifiedPlan"] = 14] = "NonFundQualifiedPlan";
    TaxAdvantageType[TaxAdvantageType["DefinedContributionPlan"] = 15] = "DefinedContributionPlan";
    TaxAdvantageType[TaxAdvantageType["IndividualRetirementAccount"] = 16] = "IndividualRetirementAccount";
    TaxAdvantageType[TaxAdvantageType["IndividualRetirementAccountRollover"] = 17] = "IndividualRetirementAccountRollover";
    TaxAdvantageType[TaxAdvantageType["Keogh"] = 18] = "Keogh";
    TaxAdvantageType[TaxAdvantageType["ProfitSharingPlan"] = 19] = "ProfitSharingPlan";
    TaxAdvantageType[TaxAdvantageType["E401K"] = 20] = "E401K";
    TaxAdvantageType[TaxAdvantageType["SelfDirectedIra"] = 21] = "SelfDirectedIra";
    TaxAdvantageType[TaxAdvantageType["E403"] = 22] = "E403";
    TaxAdvantageType[TaxAdvantageType["E457"] = 23] = "E457";
    TaxAdvantageType[TaxAdvantageType["RothIra24"] = 24] = "RothIra24";
    TaxAdvantageType[TaxAdvantageType["RothIra25"] = 25] = "RothIra25";
    TaxAdvantageType[TaxAdvantageType["RothConversionIra26"] = 26] = "RothConversionIra26";
    TaxAdvantageType[TaxAdvantageType["RothConversionIra27"] = 27] = "RothConversionIra27";
    TaxAdvantageType[TaxAdvantageType["EducationIra28"] = 28] = "EducationIra28";
    TaxAdvantageType[TaxAdvantageType["EducationIra29"] = 29] = "EducationIra29";
})(TaxAdvantageType = exports.TaxAdvantageType || (exports.TaxAdvantageType = {}));
var FundRenewWaiv;
(function (FundRenewWaiv) {
    FundRenewWaiv["Yes"] = "Y";
    FundRenewWaiv["No"] = "N";
})(FundRenewWaiv = exports.FundRenewWaiv || (exports.FundRenewWaiv = {}));
var RegistStatus;
(function (RegistStatus) {
    RegistStatus["Accepted"] = "A";
    RegistStatus["Rejected"] = "R";
    RegistStatus["Held"] = "H";
    RegistStatus["ReminderIeRegistrationInstructionsAreStillOutstanding"] = "N";
})(RegistStatus = exports.RegistStatus || (exports.RegistStatus = {}));
var RegistRejReasonCode;
(function (RegistRejReasonCode) {
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableAccountType"] = 1] = "InvalidUnacceptableAccountType";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableTaxExemptType"] = 2] = "InvalidUnacceptableTaxExemptType";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableOwnershipType"] = 3] = "InvalidUnacceptableOwnershipType";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableNoRegDetls"] = 4] = "InvalidUnacceptableNoRegDetls";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableRegSeqNo"] = 5] = "InvalidUnacceptableRegSeqNo";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableRegDtls"] = 6] = "InvalidUnacceptableRegDtls";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableMailingDtls"] = 7] = "InvalidUnacceptableMailingDtls";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableMailingInst"] = 8] = "InvalidUnacceptableMailingInst";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableInvestorId"] = 9] = "InvalidUnacceptableInvestorId";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableInvestorIdSource"] = 10] = "InvalidUnacceptableInvestorIdSource";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableDateOfBirth"] = 11] = "InvalidUnacceptableDateOfBirth";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableInvestorCountryOfResidence"] = 12] = "InvalidUnacceptableInvestorCountryOfResidence";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableNodistribinstns"] = 13] = "InvalidUnacceptableNodistribinstns";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableDistribPercentage"] = 14] = "InvalidUnacceptableDistribPercentage";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableDistribPaymentMethod"] = 15] = "InvalidUnacceptableDistribPaymentMethod";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableCashDistribAgentAcctName"] = 16] = "InvalidUnacceptableCashDistribAgentAcctName";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableCashDistribAgentCode"] = 17] = "InvalidUnacceptableCashDistribAgentCode";
    RegistRejReasonCode[RegistRejReasonCode["InvalidUnacceptableCashDistribAgentAcctNum"] = 18] = "InvalidUnacceptableCashDistribAgentAcctNum";
    RegistRejReasonCode[RegistRejReasonCode["Other"] = 99] = "Other";
})(RegistRejReasonCode = exports.RegistRejReasonCode || (exports.RegistRejReasonCode = {}));
var RegistTransType;
(function (RegistTransType) {
    RegistTransType["New"] = "0";
    RegistTransType["Replace"] = "1";
    RegistTransType["Cancel"] = "2";
})(RegistTransType = exports.RegistTransType || (exports.RegistTransType = {}));
var OwnershipType;
(function (OwnershipType) {
    OwnershipType["JointTrustees"] = "2";
    OwnershipType["JointInvestors"] = "J";
    OwnershipType["TenantsInCommon"] = "T";
})(OwnershipType = exports.OwnershipType || (exports.OwnershipType = {}));
var ContAmtType;
(function (ContAmtType) {
    ContAmtType[ContAmtType["CommissionAmount"] = 1] = "CommissionAmount";
    ContAmtType[ContAmtType["Commission"] = 2] = "Commission";
    ContAmtType[ContAmtType["InitialChargeAmount"] = 3] = "InitialChargeAmount";
    ContAmtType[ContAmtType["InitialCharge"] = 4] = "InitialCharge";
    ContAmtType[ContAmtType["DiscountAmount"] = 5] = "DiscountAmount";
    ContAmtType[ContAmtType["Discount"] = 6] = "Discount";
    ContAmtType[ContAmtType["DilutionLevyAmount"] = 7] = "DilutionLevyAmount";
    ContAmtType[ContAmtType["DilutionLevy"] = 8] = "DilutionLevy";
    ContAmtType[ContAmtType["ExitChargeAmount"] = 9] = "ExitChargeAmount";
    ContAmtType[ContAmtType["ExitCharge"] = 10] = "ExitCharge";
    ContAmtType[ContAmtType["FundBasedRenewalCommission"] = 11] = "FundBasedRenewalCommission";
    ContAmtType[ContAmtType["ProjectedFundValue"] = 12] = "ProjectedFundValue";
    ContAmtType[ContAmtType["FundBasedRenewalCommissionAmount13"] = 13] = "FundBasedRenewalCommissionAmount13";
    ContAmtType[ContAmtType["FundBasedRenewalCommissionAmount14"] = 14] = "FundBasedRenewalCommissionAmount14";
    ContAmtType[ContAmtType["NetSettlementAmount"] = 15] = "NetSettlementAmount";
})(ContAmtType = exports.ContAmtType || (exports.ContAmtType = {}));
var OwnerType;
(function (OwnerType) {
    OwnerType[OwnerType["IndividualInvestor"] = 1] = "IndividualInvestor";
    OwnerType[OwnerType["PublicCompany"] = 2] = "PublicCompany";
    OwnerType[OwnerType["PrivateCompany"] = 3] = "PrivateCompany";
    OwnerType[OwnerType["IndividualTrustee"] = 4] = "IndividualTrustee";
    OwnerType[OwnerType["CompanyTrustee"] = 5] = "CompanyTrustee";
    OwnerType[OwnerType["PensionPlan"] = 6] = "PensionPlan";
    OwnerType[OwnerType["CustodianUnderGiftsToMinorsAct"] = 7] = "CustodianUnderGiftsToMinorsAct";
    OwnerType[OwnerType["Trusts"] = 8] = "Trusts";
    OwnerType[OwnerType["Fiduciaries"] = 9] = "Fiduciaries";
    OwnerType[OwnerType["NetworkingSubAccount"] = 10] = "NetworkingSubAccount";
    OwnerType[OwnerType["NonProfitOrganization"] = 11] = "NonProfitOrganization";
    OwnerType[OwnerType["CorporateBody"] = 12] = "CorporateBody";
    OwnerType[OwnerType["Nominee"] = 13] = "Nominee";
})(OwnerType = exports.OwnerType || (exports.OwnerType = {}));
var OrderCapacity;
(function (OrderCapacity) {
    OrderCapacity["Agency"] = "A";
    OrderCapacity["Proprietary"] = "G";
    OrderCapacity["Individual"] = "I";
    OrderCapacity["Principal"] = "P";
    OrderCapacity["RisklessPrincipal"] = "R";
    OrderCapacity["AgentForOtherMember"] = "W";
})(OrderCapacity = exports.OrderCapacity || (exports.OrderCapacity = {}));
var OrderRestrictions;
(function (OrderRestrictions) {
    OrderRestrictions["ProgramTrade"] = "1";
    OrderRestrictions["IndexArbitrage"] = "2";
    OrderRestrictions["NonIndexArbitrage"] = "3";
    OrderRestrictions["CompetingMarketMaker"] = "4";
    OrderRestrictions["ActingAsMarketMakerOrSpecialistInTheSecurity"] = "5";
    OrderRestrictions["ActingAsMarketMakerOrSpecialistInTheUnderlyingSecurityOfADerivativeSecurity"] = "6";
    OrderRestrictions["ForeignEntity"] = "7";
    OrderRestrictions["ExternalMarketParticipant"] = "8";
    OrderRestrictions["ExternalInterConnectedMarketLinkage"] = "9";
    OrderRestrictions["RisklessArbitrage"] = "A";
})(OrderRestrictions = exports.OrderRestrictions || (exports.OrderRestrictions = {}));
var MassCancelRequestType;
(function (MassCancelRequestType) {
    MassCancelRequestType["CancelOrdersForASecurity"] = "1";
    MassCancelRequestType["CancelOrdersForAnUnderlyingSecurity"] = "2";
    MassCancelRequestType["CancelOrdersForAProduct"] = "3";
    MassCancelRequestType["CancelOrdersForACficode"] = "4";
    MassCancelRequestType["CancelOrdersForASecuritytype"] = "5";
    MassCancelRequestType["CancelOrdersForATradingSession"] = "6";
    MassCancelRequestType["CancelAllOrders"] = "7";
})(MassCancelRequestType = exports.MassCancelRequestType || (exports.MassCancelRequestType = {}));
var MassCancelResponse;
(function (MassCancelResponse) {
    MassCancelResponse["CancelRequestRejected"] = "0";
    MassCancelResponse["CancelOrdersForASecurity"] = "1";
    MassCancelResponse["CancelOrdersForAnUnderlyingSecurity"] = "2";
    MassCancelResponse["CancelOrdersForAProduct"] = "3";
    MassCancelResponse["CancelOrdersForACficode"] = "4";
    MassCancelResponse["CancelOrdersForASecuritytype"] = "5";
    MassCancelResponse["CancelOrdersForATradingSession"] = "6";
    MassCancelResponse["CancelAllOrders"] = "7";
})(MassCancelResponse = exports.MassCancelResponse || (exports.MassCancelResponse = {}));
var MassCancelRejectReason;
(function (MassCancelRejectReason) {
    MassCancelRejectReason["MassCancelNotSupported"] = "0";
    MassCancelRejectReason["InvalidOrUnknownSecurity"] = "1";
    MassCancelRejectReason["InvalidOrUnknownUnderlying"] = "2";
    MassCancelRejectReason["InvalidOrUnknownProduct"] = "3";
    MassCancelRejectReason["InvalidOrUnknownCficode"] = "4";
    MassCancelRejectReason["InvalidOrUnknownSecurityType"] = "5";
    MassCancelRejectReason["InvalidOrUnknownTradingSession"] = "6";
    MassCancelRejectReason["Other"] = "99";
})(MassCancelRejectReason = exports.MassCancelRejectReason || (exports.MassCancelRejectReason = {}));
var QuoteType;
(function (QuoteType) {
    QuoteType[QuoteType["Indicative"] = 0] = "Indicative";
    QuoteType[QuoteType["Tradeable"] = 1] = "Tradeable";
    QuoteType[QuoteType["RestrictedTradeable"] = 2] = "RestrictedTradeable";
    QuoteType[QuoteType["Counter"] = 3] = "Counter";
})(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
var CashMargin;
(function (CashMargin) {
    CashMargin["Cash"] = "1";
    CashMargin["MarginOpen"] = "2";
    CashMargin["MarginClose"] = "3";
})(CashMargin = exports.CashMargin || (exports.CashMargin = {}));
var Scope;
(function (Scope) {
    Scope["Local"] = "1";
    Scope["National"] = "2";
    Scope["Global"] = "3";
})(Scope = exports.Scope || (exports.Scope = {}));
var MDImplicitDelete;
(function (MDImplicitDelete) {
    MDImplicitDelete["Yes"] = "Y";
    MDImplicitDelete["No"] = "N";
})(MDImplicitDelete = exports.MDImplicitDelete || (exports.MDImplicitDelete = {}));
var CrossType;
(function (CrossType) {
    CrossType[CrossType["CrossTradeWhichIsExecutedCompletelyOrNotBothSidesAreTreatedInTheSameMannerThisIsEquivalentToAnAllOrNone"] = 1] = "CrossTradeWhichIsExecutedCompletelyOrNotBothSidesAreTreatedInTheSameMannerThisIsEquivalentToAnAllOrNone";
    CrossType[CrossType["CrossTradeWhichIsExecutedPartiallyAndTheRestIsCancelledOneSideIsFullyExecutedTheOtherSideIsPartiallyExecutedWithTheRemainderBeingCancelledThisIsEquivalentToAnImmediateOrCancelOnTheOtherSideNoteTheCrossprioritzation"] = 2] = "CrossTradeWhichIsExecutedPartiallyAndTheRestIsCancelledOneSideIsFullyExecutedTheOtherSideIsPartiallyExecutedWithTheRemainderBeingCancelledThisIsEquivalentToAnImmediateOrCancelOnTheOtherSideNoteTheCrossprioritzation";
    CrossType[CrossType["CrossTradeWhichIsPartiallyExecutedWithTheUnfilledPortionsRemainingActiveOneSideOfTheCrossIsFullyExecuted"] = 3] = "CrossTradeWhichIsPartiallyExecutedWithTheUnfilledPortionsRemainingActiveOneSideOfTheCrossIsFullyExecuted";
    CrossType[CrossType["CrossTradeIsExecutedWithExistingOrdersWithTheSamePriceInTheCaseOtherOrdersExistWithTheSamePriceTheQuantityOfTheCrossIsExecutedAgainstTheExistingOrdersAndQuotesTheRemainderOfTheCrossIsExecutedAgainstTheOtherSideOfTheCrossTheTwoSidesPotentiallyHaveDifferentQuantities"] = 4] = "CrossTradeIsExecutedWithExistingOrdersWithTheSamePriceInTheCaseOtherOrdersExistWithTheSamePriceTheQuantityOfTheCrossIsExecutedAgainstTheExistingOrdersAndQuotesTheRemainderOfTheCrossIsExecutedAgainstTheOtherSideOfTheCrossTheTwoSidesPotentiallyHaveDifferentQuantities";
})(CrossType = exports.CrossType || (exports.CrossType = {}));
var CrossPrioritization;
(function (CrossPrioritization) {
    CrossPrioritization[CrossPrioritization["None"] = 0] = "None";
    CrossPrioritization[CrossPrioritization["BuySideIsPrioritized"] = 1] = "BuySideIsPrioritized";
    CrossPrioritization[CrossPrioritization["SellSideIsPrioritized"] = 2] = "SellSideIsPrioritized";
})(CrossPrioritization = exports.CrossPrioritization || (exports.CrossPrioritization = {}));
var NoSides;
(function (NoSides) {
    NoSides[NoSides["OneSide"] = 1] = "OneSide";
    NoSides[NoSides["BothSides"] = 2] = "BothSides";
})(NoSides = exports.NoSides || (exports.NoSides = {}));
var SecurityListRequestType;
(function (SecurityListRequestType) {
    SecurityListRequestType[SecurityListRequestType["Symbol"] = 0] = "Symbol";
    SecurityListRequestType[SecurityListRequestType["SecuritytypeAndOrCficode"] = 1] = "SecuritytypeAndOrCficode";
    SecurityListRequestType[SecurityListRequestType["Product"] = 2] = "Product";
    SecurityListRequestType[SecurityListRequestType["Tradingsessionid"] = 3] = "Tradingsessionid";
    SecurityListRequestType[SecurityListRequestType["AllSecurities"] = 4] = "AllSecurities";
})(SecurityListRequestType = exports.SecurityListRequestType || (exports.SecurityListRequestType = {}));
var SecurityRequestResult;
(function (SecurityRequestResult) {
    SecurityRequestResult[SecurityRequestResult["ValidRequest"] = 0] = "ValidRequest";
    SecurityRequestResult[SecurityRequestResult["InvalidOrUnsupportedRequest"] = 1] = "InvalidOrUnsupportedRequest";
    SecurityRequestResult[SecurityRequestResult["NoInstrumentsFoundThatMatchSelectionCriteria"] = 2] = "NoInstrumentsFoundThatMatchSelectionCriteria";
    SecurityRequestResult[SecurityRequestResult["NotAuthorizedToRetrieveInstrumentData"] = 3] = "NotAuthorizedToRetrieveInstrumentData";
    SecurityRequestResult[SecurityRequestResult["InstrumentDataTemporarilyUnavailable"] = 4] = "InstrumentDataTemporarilyUnavailable";
    SecurityRequestResult[SecurityRequestResult["RequestForInstrumentDataNotSupported"] = 5] = "RequestForInstrumentDataNotSupported";
})(SecurityRequestResult = exports.SecurityRequestResult || (exports.SecurityRequestResult = {}));
var MultiLegRptTypeReq;
(function (MultiLegRptTypeReq) {
    MultiLegRptTypeReq[MultiLegRptTypeReq["ReportByMulitlegSecurityOnly"] = 0] = "ReportByMulitlegSecurityOnly";
    MultiLegRptTypeReq[MultiLegRptTypeReq["ReportByMultilegSecurityAndByInstrumentLegsBelongingToTheMultilegSecurity"] = 1] = "ReportByMultilegSecurityAndByInstrumentLegsBelongingToTheMultilegSecurity";
    MultiLegRptTypeReq[MultiLegRptTypeReq["ReportByInstrumentLegsBelongingToTheMultilegSecurityOnly"] = 2] = "ReportByInstrumentLegsBelongingToTheMultilegSecurityOnly";
})(MultiLegRptTypeReq = exports.MultiLegRptTypeReq || (exports.MultiLegRptTypeReq = {}));
var TradSesStatusRejReason;
(function (TradSesStatusRejReason) {
    TradSesStatusRejReason[TradSesStatusRejReason["UnknownOrInvalidTradingsessionid"] = 1] = "UnknownOrInvalidTradingsessionid";
    TradSesStatusRejReason[TradSesStatusRejReason["Other"] = 99] = "Other";
})(TradSesStatusRejReason = exports.TradSesStatusRejReason || (exports.TradSesStatusRejReason = {}));
var TradeRequestType;
(function (TradeRequestType) {
    TradeRequestType[TradeRequestType["AllTrades"] = 0] = "AllTrades";
    TradeRequestType[TradeRequestType["MatchedTradesMatchingCriteriaProvidedOnRequest"] = 1] = "MatchedTradesMatchingCriteriaProvidedOnRequest";
    TradeRequestType[TradeRequestType["UnmatchedTradesThatMatchCriteria"] = 2] = "UnmatchedTradesThatMatchCriteria";
    TradeRequestType[TradeRequestType["UnreportedTradesThatMatchCriteria"] = 3] = "UnreportedTradesThatMatchCriteria";
    TradeRequestType[TradeRequestType["AdvisoriesThatMatchCriteria"] = 4] = "AdvisoriesThatMatchCriteria";
})(TradeRequestType = exports.TradeRequestType || (exports.TradeRequestType = {}));
var PreviouslyReported;
(function (PreviouslyReported) {
    PreviouslyReported["Yes"] = "Y";
    PreviouslyReported["No"] = "N";
})(PreviouslyReported = exports.PreviouslyReported || (exports.PreviouslyReported = {}));
var MatchStatus;
(function (MatchStatus) {
    MatchStatus["ComparedMatchedOrAffirmed"] = "0";
    MatchStatus["UncomparedUnmatchedOrUnaffirmed"] = "1";
    MatchStatus["AdvisoryOrAlert"] = "2";
})(MatchStatus = exports.MatchStatus || (exports.MatchStatus = {}));
var MatchType;
(function (MatchType) {
    MatchType["ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusFourBadgesAndExecutionTime"] = "A1";
    MatchType["ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusFourBadges"] = "A2";
    MatchType["ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusTwoBadgesAndExecutionTime"] = "A3";
    MatchType["ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusTwoBadges"] = "A4";
    MatchType["ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusExecutionTime"] = "A5";
    MatchType["ComparedRecordsResultingFromStampedAdvisoriesOrSpecialistAcceptsPairOffs"] = "AQ";
    MatchType["SummarizedMatchUsingA1ExactMatchCriteriaExceptQuantityIsSummarized"] = "S1";
    MatchType["SummarizedMatchUsingA2ExactMatchCriteriaExceptQuantityIsSummarized"] = "S2";
    MatchType["SummarizedMatchUsingA3ExactMatchCriteriaExceptQuantityIsSummarized"] = "S3";
    MatchType["SummarizedMatchUsingA4ExactMatchCriteriaExceptQuantityIsSummarized"] = "S4";
    MatchType["SummarizedMatchUsingA5ExactMatchCriteriaExceptQuantityIsSummarized"] = "S5";
    MatchType["ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorMinusBadgesAndTimesActM1Match"] = "M1";
    MatchType["SummarizedMatchMinusBadgesAndTimesActM2Match"] = "M2";
    MatchType["OcsLockedInNonAct"] = "MT";
    MatchType["ActAcceptedTrade"] = "M3";
    MatchType["ActDefaultTrade"] = "M4";
    MatchType["ActDefaultAfterM2"] = "M5";
    MatchType["ActM6Match"] = "M6";
})(MatchType = exports.MatchType || (exports.MatchType = {}));
var OddLot;
(function (OddLot) {
    OddLot["Yes"] = "Y";
    OddLot["No"] = "N";
})(OddLot = exports.OddLot || (exports.OddLot = {}));
var ClearingInstruction;
(function (ClearingInstruction) {
    ClearingInstruction[ClearingInstruction["ProcessNormally"] = 0] = "ProcessNormally";
    ClearingInstruction[ClearingInstruction["ExcludeFromAllNetting"] = 1] = "ExcludeFromAllNetting";
    ClearingInstruction[ClearingInstruction["BilateralNettingOnly"] = 2] = "BilateralNettingOnly";
    ClearingInstruction[ClearingInstruction["ExClearing"] = 3] = "ExClearing";
    ClearingInstruction[ClearingInstruction["SpecialTrade"] = 4] = "SpecialTrade";
    ClearingInstruction[ClearingInstruction["MultilateralNetting"] = 5] = "MultilateralNetting";
    ClearingInstruction[ClearingInstruction["ClearAgainstCentralCounterparty"] = 6] = "ClearAgainstCentralCounterparty";
    ClearingInstruction[ClearingInstruction["ExcludeFromCentralCounterparty"] = 7] = "ExcludeFromCentralCounterparty";
    ClearingInstruction[ClearingInstruction["ManualMode"] = 8] = "ManualMode";
    ClearingInstruction[ClearingInstruction["AutomaticPostingMode"] = 9] = "AutomaticPostingMode";
    ClearingInstruction[ClearingInstruction["AutomaticGiveUpMode"] = 10] = "AutomaticGiveUpMode";
    ClearingInstruction[ClearingInstruction["QualifiedServiceRepresentative"] = 11] = "QualifiedServiceRepresentative";
    ClearingInstruction[ClearingInstruction["CustomerTrade"] = 12] = "CustomerTrade";
    ClearingInstruction[ClearingInstruction["SelfClearing"] = 13] = "SelfClearing";
})(ClearingInstruction = exports.ClearingInstruction || (exports.ClearingInstruction = {}));
var AccountType;
(function (AccountType) {
    AccountType[AccountType["AccountIsCarriedOnCustomerSideOfBooks"] = 1] = "AccountIsCarriedOnCustomerSideOfBooks";
    AccountType[AccountType["AccountIsCarriedOnNonCustomerSideOfBooks"] = 2] = "AccountIsCarriedOnNonCustomerSideOfBooks";
    AccountType[AccountType["HouseTrader"] = 3] = "HouseTrader";
    AccountType[AccountType["FloorTrader"] = 4] = "FloorTrader";
    AccountType[AccountType["AccountIsCarriedOnNonCustomerSideOfBooksAndIsCrossMargined"] = 6] = "AccountIsCarriedOnNonCustomerSideOfBooksAndIsCrossMargined";
    AccountType[AccountType["AccountIsHouseTraderAndIsCrossMargined"] = 7] = "AccountIsHouseTraderAndIsCrossMargined";
    AccountType[AccountType["JointBackofficeAccount"] = 8] = "JointBackofficeAccount";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
var CustOrderCapacity;
(function (CustOrderCapacity) {
    CustOrderCapacity[CustOrderCapacity["MemberTradingForTheirOwnAccount"] = 1] = "MemberTradingForTheirOwnAccount";
    CustOrderCapacity[CustOrderCapacity["ClearingFirmTradingForItsProprietaryAccount"] = 2] = "ClearingFirmTradingForItsProprietaryAccount";
    CustOrderCapacity[CustOrderCapacity["MemberTradingForAnotherMember"] = 3] = "MemberTradingForAnotherMember";
    CustOrderCapacity[CustOrderCapacity["AllOther"] = 4] = "AllOther";
})(CustOrderCapacity = exports.CustOrderCapacity || (exports.CustOrderCapacity = {}));
var MassStatusReqType;
(function (MassStatusReqType) {
    MassStatusReqType[MassStatusReqType["StatusForOrdersForASecurity"] = 1] = "StatusForOrdersForASecurity";
    MassStatusReqType[MassStatusReqType["StatusForOrdersForAnUnderlyingSecurity"] = 2] = "StatusForOrdersForAnUnderlyingSecurity";
    MassStatusReqType[MassStatusReqType["StatusForOrdersForAProduct"] = 3] = "StatusForOrdersForAProduct";
    MassStatusReqType[MassStatusReqType["StatusForOrdersForACficode"] = 4] = "StatusForOrdersForACficode";
    MassStatusReqType[MassStatusReqType["StatusForOrdersForASecuritytype"] = 5] = "StatusForOrdersForASecuritytype";
    MassStatusReqType[MassStatusReqType["StatusForOrdersForATradingSession"] = 6] = "StatusForOrdersForATradingSession";
    MassStatusReqType[MassStatusReqType["StatusForAllOrders"] = 7] = "StatusForAllOrders";
    MassStatusReqType[MassStatusReqType["StatusForOrdersForAPartyid"] = 8] = "StatusForOrdersForAPartyid";
})(MassStatusReqType = exports.MassStatusReqType || (exports.MassStatusReqType = {}));
var DayBookingInst;
(function (DayBookingInst) {
    DayBookingInst["CanTriggerBookingWithoutReferenceToTheOrderInitiator"] = "0";
    DayBookingInst["SpeakWithOrderInitiatorBeforeBooking"] = "1";
    DayBookingInst["Accumulate"] = "2";
})(DayBookingInst = exports.DayBookingInst || (exports.DayBookingInst = {}));
var BookingUnit;
(function (BookingUnit) {
    BookingUnit["EachPartialExecutionIsABookableUnit"] = "0";
    BookingUnit["AggregatePartialExecutionsOnThisOrderAndBookOneTradePerOrder"] = "1";
    BookingUnit["AggregateExecutionsForThisSymbolSideAndSettlementDate"] = "2";
})(BookingUnit = exports.BookingUnit || (exports.BookingUnit = {}));
var PreallocMethod;
(function (PreallocMethod) {
    PreallocMethod["ProRata"] = "0";
    PreallocMethod["DoNotProRataDiscussFirst"] = "1";
})(PreallocMethod = exports.PreallocMethod || (exports.PreallocMethod = {}));
var AllocType;
(function (AllocType) {
    AllocType[AllocType["Calculated"] = 1] = "Calculated";
    AllocType[AllocType["Preliminary"] = 2] = "Preliminary";
    AllocType[AllocType["ReadyToBook"] = 5] = "ReadyToBook";
    AllocType[AllocType["WarehouseInstruction"] = 7] = "WarehouseInstruction";
    AllocType[AllocType["RequestToIntermediary"] = 8] = "RequestToIntermediary";
})(AllocType = exports.AllocType || (exports.AllocType = {}));
var ClearingFeeIndicator;
(function (ClearingFeeIndicator) {
    ClearingFeeIndicator["E1stYearDelegateTradingForHisOwnAccount"] = "1";
    ClearingFeeIndicator["E2ndYearDelegateTradingForHisOwnAccount"] = "2";
    ClearingFeeIndicator["E3rdYearDelegateTradingForHisOwnAccount"] = "3";
    ClearingFeeIndicator["E4thYearDelegateTradingForHisOwnAccount"] = "4";
    ClearingFeeIndicator["E5thYearDelegateTradingForHisOwnAccount"] = "5";
    ClearingFeeIndicator["E6thYearAndBeyondDelegateTradingForHisOwnAccount"] = "9";
    ClearingFeeIndicator["CboeMember"] = "B";
    ClearingFeeIndicator["NonMemberAndCustomer"] = "C";
    ClearingFeeIndicator["EquityMemberAndClearingMember"] = "E";
    ClearingFeeIndicator["FullAndAssociateMemberTradingForOwnAccountAndAsFloorBrokers"] = "F";
    ClearingFeeIndicator["E106HAnd106JFirms"] = "H";
    ClearingFeeIndicator["GimIdemAndComMembershipInterestHolders"] = "I";
    ClearingFeeIndicator["LesseeAnd106FEmployees"] = "L";
    ClearingFeeIndicator["AllOtherOwnershipTypes"] = "M";
})(ClearingFeeIndicator = exports.ClearingFeeIndicator || (exports.ClearingFeeIndicator = {}));
var WorkingIndicator;
(function (WorkingIndicator) {
    WorkingIndicator["Yes"] = "Y";
    WorkingIndicator["No"] = "N";
})(WorkingIndicator = exports.WorkingIndicator || (exports.WorkingIndicator = {}));
var PriorityIndicator;
(function (PriorityIndicator) {
    PriorityIndicator[PriorityIndicator["PriorityUnchanged"] = 0] = "PriorityUnchanged";
    PriorityIndicator[PriorityIndicator["LostPriorityAsResultOfOrderChange"] = 1] = "LostPriorityAsResultOfOrderChange";
})(PriorityIndicator = exports.PriorityIndicator || (exports.PriorityIndicator = {}));
var LegalConfirm;
(function (LegalConfirm) {
    LegalConfirm["Yes"] = "Y";
    LegalConfirm["No"] = "N";
})(LegalConfirm = exports.LegalConfirm || (exports.LegalConfirm = {}));
var QuoteRequestRejectReason;
(function (QuoteRequestRejectReason) {
    QuoteRequestRejectReason[QuoteRequestRejectReason["UnknownSymbol"] = 1] = "UnknownSymbol";
    QuoteRequestRejectReason[QuoteRequestRejectReason["Exchange"] = 2] = "Exchange";
    QuoteRequestRejectReason[QuoteRequestRejectReason["QuoteRequestExceedsLimit"] = 3] = "QuoteRequestExceedsLimit";
    QuoteRequestRejectReason[QuoteRequestRejectReason["TooLateToEnter"] = 4] = "TooLateToEnter";
    QuoteRequestRejectReason[QuoteRequestRejectReason["InvalidPrice"] = 5] = "InvalidPrice";
    QuoteRequestRejectReason[QuoteRequestRejectReason["NotAuthorizedToRequestQuote"] = 6] = "NotAuthorizedToRequestQuote";
    QuoteRequestRejectReason[QuoteRequestRejectReason["NoMatchForInquiry"] = 7] = "NoMatchForInquiry";
    QuoteRequestRejectReason[QuoteRequestRejectReason["NoMarketForInstrument"] = 8] = "NoMarketForInstrument";
    QuoteRequestRejectReason[QuoteRequestRejectReason["NoInventory"] = 9] = "NoInventory";
    QuoteRequestRejectReason[QuoteRequestRejectReason["Pass"] = 10] = "Pass";
    QuoteRequestRejectReason[QuoteRequestRejectReason["Other"] = 99] = "Other";
})(QuoteRequestRejectReason = exports.QuoteRequestRejectReason || (exports.QuoteRequestRejectReason = {}));
var AcctIDSource;
(function (AcctIDSource) {
    AcctIDSource[AcctIDSource["Bic"] = 1] = "Bic";
    AcctIDSource[AcctIDSource["SidCode"] = 2] = "SidCode";
    AcctIDSource[AcctIDSource["Tfm"] = 3] = "Tfm";
    AcctIDSource[AcctIDSource["Omgeo"] = 4] = "Omgeo";
    AcctIDSource[AcctIDSource["DtccCode"] = 5] = "DtccCode";
    AcctIDSource[AcctIDSource["Other"] = 99] = "Other";
})(AcctIDSource = exports.AcctIDSource || (exports.AcctIDSource = {}));
var ConfirmStatus;
(function (ConfirmStatus) {
    ConfirmStatus[ConfirmStatus["Received"] = 1] = "Received";
    ConfirmStatus[ConfirmStatus["MismatchedAccount"] = 2] = "MismatchedAccount";
    ConfirmStatus[ConfirmStatus["MissingSettlementInstructions"] = 3] = "MissingSettlementInstructions";
    ConfirmStatus[ConfirmStatus["Confirmed"] = 4] = "Confirmed";
    ConfirmStatus[ConfirmStatus["RequestRejected"] = 5] = "RequestRejected";
})(ConfirmStatus = exports.ConfirmStatus || (exports.ConfirmStatus = {}));
var ConfirmTransType;
(function (ConfirmTransType) {
    ConfirmTransType[ConfirmTransType["New"] = 0] = "New";
    ConfirmTransType[ConfirmTransType["Replace"] = 1] = "Replace";
    ConfirmTransType[ConfirmTransType["Cancel"] = 2] = "Cancel";
})(ConfirmTransType = exports.ConfirmTransType || (exports.ConfirmTransType = {}));
var DeliveryForm;
(function (DeliveryForm) {
    DeliveryForm[DeliveryForm["Bookentry"] = 1] = "Bookentry";
    DeliveryForm[DeliveryForm["Bearer"] = 2] = "Bearer";
})(DeliveryForm = exports.DeliveryForm || (exports.DeliveryForm = {}));
var LegSwapType;
(function (LegSwapType) {
    LegSwapType[LegSwapType["ParForPar"] = 1] = "ParForPar";
    LegSwapType[LegSwapType["ModifiedDuration"] = 2] = "ModifiedDuration";
    LegSwapType[LegSwapType["Risk"] = 4] = "Risk";
    LegSwapType[LegSwapType["Proceeds"] = 5] = "Proceeds";
})(LegSwapType = exports.LegSwapType || (exports.LegSwapType = {}));
var QuotePriceType;
(function (QuotePriceType) {
    QuotePriceType[QuotePriceType["Percent"] = 1] = "Percent";
    QuotePriceType[QuotePriceType["PerShare"] = 2] = "PerShare";
    QuotePriceType[QuotePriceType["FixedAmount"] = 3] = "FixedAmount";
    QuotePriceType[QuotePriceType["DiscountPercentagePointsBelowPar"] = 4] = "DiscountPercentagePointsBelowPar";
    QuotePriceType[QuotePriceType["PremiumPercentagePointsOverPar"] = 5] = "PremiumPercentagePointsOverPar";
    QuotePriceType[QuotePriceType["BasisPointsRelativeToBenchmark"] = 6] = "BasisPointsRelativeToBenchmark";
    QuotePriceType[QuotePriceType["TedPrice"] = 7] = "TedPrice";
    QuotePriceType[QuotePriceType["TedYield"] = 8] = "TedYield";
    QuotePriceType[QuotePriceType["YieldSpread"] = 9] = "YieldSpread";
    QuotePriceType[QuotePriceType["Yield"] = 10] = "Yield";
})(QuotePriceType = exports.QuotePriceType || (exports.QuotePriceType = {}));
var QuoteRespType;
(function (QuoteRespType) {
    QuoteRespType[QuoteRespType["HitLift"] = 1] = "HitLift";
    QuoteRespType[QuoteRespType["Counter"] = 2] = "Counter";
    QuoteRespType[QuoteRespType["Expired"] = 3] = "Expired";
    QuoteRespType[QuoteRespType["Cover"] = 4] = "Cover";
    QuoteRespType[QuoteRespType["DoneAway"] = 5] = "DoneAway";
    QuoteRespType[QuoteRespType["Pass"] = 6] = "Pass";
})(QuoteRespType = exports.QuoteRespType || (exports.QuoteRespType = {}));
var PosType;
(function (PosType) {
    PosType["TransactionQuantity"] = "TQ";
    PosType["IntraSpreadQty"] = "IAS";
    PosType["InterSpreadQty"] = "IES";
    PosType["EndOfDayQty"] = "FIN";
    PosType["StartOfDayQty"] = "SOD";
    PosType["OptionExerciseQty"] = "EX";
    PosType["OptionAssignment"] = "AS";
    PosType["TransactionFromExercise"] = "TX";
    PosType["TransactionFromAssignment"] = "TA";
    PosType["PitTradeQty"] = "PIT";
    PosType["TransferTradeQty"] = "TRF";
    PosType["ElectronicTradeQty"] = "ETR";
    PosType["AllocationTradeQty"] = "ALC";
    PosType["AdjustmentQty"] = "PA";
    PosType["AsOfTradeQty"] = "ASF";
    PosType["DeliveryQty"] = "DLV";
    PosType["TotalTransactionQty"] = "TOT";
    PosType["CrossMarginQty"] = "XM";
    PosType["IntegralSplit"] = "SPL";
})(PosType = exports.PosType || (exports.PosType = {}));
var PosQtyStatus;
(function (PosQtyStatus) {
    PosQtyStatus[PosQtyStatus["Submitted"] = 0] = "Submitted";
    PosQtyStatus[PosQtyStatus["Accepted"] = 1] = "Accepted";
    PosQtyStatus[PosQtyStatus["Rejected"] = 2] = "Rejected";
})(PosQtyStatus = exports.PosQtyStatus || (exports.PosQtyStatus = {}));
var PosAmtType;
(function (PosAmtType) {
    PosAmtType["FinalMarkToMarketAmount"] = "FMTM";
    PosAmtType["IncrementalMarkToMarketAmount"] = "IMTM";
    PosAmtType["TradeVariationAmount"] = "TVAR";
    PosAmtType["StartOfDayMarkToMarketAmount"] = "SMTM";
    PosAmtType["PremiumAmount"] = "PREM";
    PosAmtType["CashResidualAmount"] = "CRES";
    PosAmtType["CashAmount"] = "CASH";
    PosAmtType["ValueAdjustedAmount"] = "VADJ";
})(PosAmtType = exports.PosAmtType || (exports.PosAmtType = {}));
var PosTransType;
(function (PosTransType) {
    PosTransType[PosTransType["Exercise"] = 1] = "Exercise";
    PosTransType[PosTransType["DoNotExercise"] = 2] = "DoNotExercise";
    PosTransType[PosTransType["PositionAdjustment"] = 3] = "PositionAdjustment";
    PosTransType[PosTransType["PositionChangeSubmissionMarginDisposition"] = 4] = "PositionChangeSubmissionMarginDisposition";
    PosTransType[PosTransType["Pledge"] = 5] = "Pledge";
})(PosTransType = exports.PosTransType || (exports.PosTransType = {}));
var PosMaintAction;
(function (PosMaintAction) {
    PosMaintAction[PosMaintAction["NewUsedToIncrementTheOverallTransactionQuantity"] = 1] = "NewUsedToIncrementTheOverallTransactionQuantity";
    PosMaintAction[PosMaintAction["ReplaceUsedToOverrideTheOverallTransactionQuantityOrSpecificAddMessagesBasedOnTheReferenceId"] = 2] = "ReplaceUsedToOverrideTheOverallTransactionQuantityOrSpecificAddMessagesBasedOnTheReferenceId";
    PosMaintAction[PosMaintAction["CancelUsedToRemoveTheOverallTransactionOrSpecificAddMessagesBasedOnReferenceId"] = 3] = "CancelUsedToRemoveTheOverallTransactionOrSpecificAddMessagesBasedOnReferenceId";
})(PosMaintAction = exports.PosMaintAction || (exports.PosMaintAction = {}));
var SettlSessID;
(function (SettlSessID) {
    SettlSessID["Intraday"] = "ITD";
    SettlSessID["RegularTradingHours"] = "RTH";
    SettlSessID["ElectronicTradingHours"] = "ETH";
})(SettlSessID = exports.SettlSessID || (exports.SettlSessID = {}));
var AdjustmentType;
(function (AdjustmentType) {
    AdjustmentType[AdjustmentType["ProcessRequestAsMarginDisposition"] = 0] = "ProcessRequestAsMarginDisposition";
    AdjustmentType[AdjustmentType["DeltaPlus"] = 1] = "DeltaPlus";
    AdjustmentType[AdjustmentType["DeltaMinus"] = 2] = "DeltaMinus";
    AdjustmentType[AdjustmentType["Final"] = 3] = "Final";
})(AdjustmentType = exports.AdjustmentType || (exports.AdjustmentType = {}));
var PosMaintStatus;
(function (PosMaintStatus) {
    PosMaintStatus[PosMaintStatus["Accepted"] = 0] = "Accepted";
    PosMaintStatus[PosMaintStatus["AcceptedWithWarnings"] = 1] = "AcceptedWithWarnings";
    PosMaintStatus[PosMaintStatus["Rejected"] = 2] = "Rejected";
    PosMaintStatus[PosMaintStatus["Completed"] = 3] = "Completed";
    PosMaintStatus[PosMaintStatus["CompletedWithWarnings"] = 4] = "CompletedWithWarnings";
})(PosMaintStatus = exports.PosMaintStatus || (exports.PosMaintStatus = {}));
var PosMaintResult;
(function (PosMaintResult) {
    PosMaintResult[PosMaintResult["SuccessfulCompletion"] = 0] = "SuccessfulCompletion";
    PosMaintResult[PosMaintResult["Rejected"] = 1] = "Rejected";
    PosMaintResult[PosMaintResult["Other"] = 99] = "Other";
})(PosMaintResult = exports.PosMaintResult || (exports.PosMaintResult = {}));
var PosReqType;
(function (PosReqType) {
    PosReqType[PosReqType["Positions"] = 0] = "Positions";
    PosReqType[PosReqType["Trades"] = 1] = "Trades";
    PosReqType[PosReqType["Exercises"] = 2] = "Exercises";
    PosReqType[PosReqType["Assignments"] = 3] = "Assignments";
})(PosReqType = exports.PosReqType || (exports.PosReqType = {}));
var ResponseTransportType;
(function (ResponseTransportType) {
    ResponseTransportType[ResponseTransportType["InbandTransportTheRequestWasSentOver"] = 0] = "InbandTransportTheRequestWasSentOver";
    ResponseTransportType[ResponseTransportType["OutOfBandPreArrangedOutOfBandDeliveryMechanism"] = 1] = "OutOfBandPreArrangedOutOfBandDeliveryMechanism";
})(ResponseTransportType = exports.ResponseTransportType || (exports.ResponseTransportType = {}));
var PosReqResult;
(function (PosReqResult) {
    PosReqResult[PosReqResult["ValidRequest"] = 0] = "ValidRequest";
    PosReqResult[PosReqResult["InvalidOrUnsupportedRequest"] = 1] = "InvalidOrUnsupportedRequest";
    PosReqResult[PosReqResult["NoPositionsFoundThatMatchCriteria"] = 2] = "NoPositionsFoundThatMatchCriteria";
    PosReqResult[PosReqResult["NotAuthorizedToRequestPositions"] = 3] = "NotAuthorizedToRequestPositions";
    PosReqResult[PosReqResult["RequestForPositionNotSupported"] = 4] = "RequestForPositionNotSupported";
    PosReqResult[PosReqResult["Other"] = 99] = "Other";
})(PosReqResult = exports.PosReqResult || (exports.PosReqResult = {}));
var PosReqStatus;
(function (PosReqStatus) {
    PosReqStatus[PosReqStatus["Completed"] = 0] = "Completed";
    PosReqStatus[PosReqStatus["CompletedWithWarnings"] = 1] = "CompletedWithWarnings";
    PosReqStatus[PosReqStatus["Rejected"] = 2] = "Rejected";
})(PosReqStatus = exports.PosReqStatus || (exports.PosReqStatus = {}));
var SettlPriceType;
(function (SettlPriceType) {
    SettlPriceType[SettlPriceType["Final"] = 1] = "Final";
    SettlPriceType[SettlPriceType["Theoretical"] = 2] = "Theoretical";
})(SettlPriceType = exports.SettlPriceType || (exports.SettlPriceType = {}));
var AssignmentMethod;
(function (AssignmentMethod) {
    AssignmentMethod["Random"] = "R";
    AssignmentMethod["Prorata"] = "P";
})(AssignmentMethod = exports.AssignmentMethod || (exports.AssignmentMethod = {}));
var ExerciseMethod;
(function (ExerciseMethod) {
    ExerciseMethod["Automatic"] = "A";
    ExerciseMethod["Manual"] = "M";
})(ExerciseMethod = exports.ExerciseMethod || (exports.ExerciseMethod = {}));
var TradeRequestResult;
(function (TradeRequestResult) {
    TradeRequestResult[TradeRequestResult["Successful"] = 0] = "Successful";
    TradeRequestResult[TradeRequestResult["InvalidOrUnknownInstrument"] = 1] = "InvalidOrUnknownInstrument";
    TradeRequestResult[TradeRequestResult["InvalidTypeOfTradeRequested"] = 2] = "InvalidTypeOfTradeRequested";
    TradeRequestResult[TradeRequestResult["InvalidParties"] = 3] = "InvalidParties";
    TradeRequestResult[TradeRequestResult["InvalidTransportTypeRequested"] = 4] = "InvalidTransportTypeRequested";
    TradeRequestResult[TradeRequestResult["InvalidDestinationRequested"] = 5] = "InvalidDestinationRequested";
    TradeRequestResult[TradeRequestResult["TraderequesttypeNotSupported"] = 8] = "TraderequesttypeNotSupported";
    TradeRequestResult[TradeRequestResult["UnauthorizedForTradeCaptureReportRequest"] = 9] = "UnauthorizedForTradeCaptureReportRequest";
    TradeRequestResult[TradeRequestResult["Other"] = 99] = "Other";
})(TradeRequestResult = exports.TradeRequestResult || (exports.TradeRequestResult = {}));
var TradeRequestStatus;
(function (TradeRequestStatus) {
    TradeRequestStatus[TradeRequestStatus["Accepted"] = 0] = "Accepted";
    TradeRequestStatus[TradeRequestStatus["Completed"] = 1] = "Completed";
    TradeRequestStatus[TradeRequestStatus["Rejected"] = 2] = "Rejected";
})(TradeRequestStatus = exports.TradeRequestStatus || (exports.TradeRequestStatus = {}));
var TradeReportRejectReason;
(function (TradeReportRejectReason) {
    TradeReportRejectReason[TradeReportRejectReason["Successful"] = 0] = "Successful";
    TradeReportRejectReason[TradeReportRejectReason["InvalidPartyInformation"] = 1] = "InvalidPartyInformation";
    TradeReportRejectReason[TradeReportRejectReason["UnknownInstrument"] = 2] = "UnknownInstrument";
    TradeReportRejectReason[TradeReportRejectReason["UnauthorizedToReportTrades"] = 3] = "UnauthorizedToReportTrades";
    TradeReportRejectReason[TradeReportRejectReason["InvalidTradeType"] = 4] = "InvalidTradeType";
    TradeReportRejectReason[TradeReportRejectReason["Other"] = 99] = "Other";
})(TradeReportRejectReason = exports.TradeReportRejectReason || (exports.TradeReportRejectReason = {}));
var SideMultiLegReportingType;
(function (SideMultiLegReportingType) {
    SideMultiLegReportingType[SideMultiLegReportingType["SingleSecurity"] = 1] = "SingleSecurity";
    SideMultiLegReportingType[SideMultiLegReportingType["IndividualLegOfAMultiLegSecurity"] = 2] = "IndividualLegOfAMultiLegSecurity";
    SideMultiLegReportingType[SideMultiLegReportingType["MultiLegSecurity"] = 3] = "MultiLegSecurity";
})(SideMultiLegReportingType = exports.SideMultiLegReportingType || (exports.SideMultiLegReportingType = {}));
var TrdRegTimestampType;
(function (TrdRegTimestampType) {
    TrdRegTimestampType[TrdRegTimestampType["ExecutionTime"] = 1] = "ExecutionTime";
    TrdRegTimestampType[TrdRegTimestampType["TimeIn"] = 2] = "TimeIn";
    TrdRegTimestampType[TrdRegTimestampType["TimeOut"] = 3] = "TimeOut";
    TrdRegTimestampType[TrdRegTimestampType["BrokerReceipt"] = 4] = "BrokerReceipt";
    TrdRegTimestampType[TrdRegTimestampType["BrokerExecution"] = 5] = "BrokerExecution";
})(TrdRegTimestampType = exports.TrdRegTimestampType || (exports.TrdRegTimestampType = {}));
var ConfirmType;
(function (ConfirmType) {
    ConfirmType[ConfirmType["Status"] = 1] = "Status";
    ConfirmType[ConfirmType["Confirmation"] = 2] = "Confirmation";
    ConfirmType[ConfirmType["ConfirmationRequestRejected"] = 3] = "ConfirmationRequestRejected";
})(ConfirmType = exports.ConfirmType || (exports.ConfirmType = {}));
var ConfirmRejReason;
(function (ConfirmRejReason) {
    ConfirmRejReason[ConfirmRejReason["MismatchedAccount"] = 1] = "MismatchedAccount";
    ConfirmRejReason[ConfirmRejReason["MissingSettlementInstructions"] = 2] = "MissingSettlementInstructions";
    ConfirmRejReason[ConfirmRejReason["Other"] = 99] = "Other";
})(ConfirmRejReason = exports.ConfirmRejReason || (exports.ConfirmRejReason = {}));
var BookingType;
(function (BookingType) {
    BookingType[BookingType["RegularBooking"] = 0] = "RegularBooking";
    BookingType[BookingType["Cfd"] = 1] = "Cfd";
    BookingType[BookingType["TotalReturnSwap"] = 2] = "TotalReturnSwap";
})(BookingType = exports.BookingType || (exports.BookingType = {}));
var AllocSettlInstType;
(function (AllocSettlInstType) {
    AllocSettlInstType[AllocSettlInstType["UseDefaultInstructions"] = 0] = "UseDefaultInstructions";
    AllocSettlInstType[AllocSettlInstType["DeriveFromParametersProvided"] = 1] = "DeriveFromParametersProvided";
    AllocSettlInstType[AllocSettlInstType["FullDetailsProvided"] = 2] = "FullDetailsProvided";
    AllocSettlInstType[AllocSettlInstType["SsiDbIdsProvided"] = 3] = "SsiDbIdsProvided";
    AllocSettlInstType[AllocSettlInstType["PhoneForInstructions"] = 4] = "PhoneForInstructions";
})(AllocSettlInstType = exports.AllocSettlInstType || (exports.AllocSettlInstType = {}));
var DlvyInstType;
(function (DlvyInstType) {
    DlvyInstType["Securities"] = "S";
    DlvyInstType["Cash"] = "C";
})(DlvyInstType = exports.DlvyInstType || (exports.DlvyInstType = {}));
var TerminationType;
(function (TerminationType) {
    TerminationType[TerminationType["Overnight"] = 1] = "Overnight";
    TerminationType[TerminationType["Term"] = 2] = "Term";
    TerminationType[TerminationType["Flexible"] = 3] = "Flexible";
    TerminationType[TerminationType["Open"] = 4] = "Open";
})(TerminationType = exports.TerminationType || (exports.TerminationType = {}));
var SettlInstReqRejCode;
(function (SettlInstReqRejCode) {
    SettlInstReqRejCode[SettlInstReqRejCode["UnableToProcessRequest"] = 0] = "UnableToProcessRequest";
    SettlInstReqRejCode[SettlInstReqRejCode["UnknownAccount"] = 1] = "UnknownAccount";
    SettlInstReqRejCode[SettlInstReqRejCode["NoMatchingSettlementInstructionsFound"] = 2] = "NoMatchingSettlementInstructionsFound";
    SettlInstReqRejCode[SettlInstReqRejCode["Other"] = 99] = "Other";
})(SettlInstReqRejCode = exports.SettlInstReqRejCode || (exports.SettlInstReqRejCode = {}));
var AllocReportType;
(function (AllocReportType) {
    AllocReportType[AllocReportType["SellsideCalculatedUsingPreliminary"] = 3] = "SellsideCalculatedUsingPreliminary";
    AllocReportType[AllocReportType["SellsideCalculatedWithoutPreliminary"] = 4] = "SellsideCalculatedWithoutPreliminary";
    AllocReportType[AllocReportType["WarehouseRecap"] = 5] = "WarehouseRecap";
    AllocReportType[AllocReportType["RequestToIntermediary"] = 8] = "RequestToIntermediary";
})(AllocReportType = exports.AllocReportType || (exports.AllocReportType = {}));
var AllocCancReplaceReason;
(function (AllocCancReplaceReason) {
    AllocCancReplaceReason[AllocCancReplaceReason["OriginalDetailsIncompleteIncorrect"] = 1] = "OriginalDetailsIncompleteIncorrect";
    AllocCancReplaceReason[AllocCancReplaceReason["ChangeInUnderlyingOrderDetails"] = 2] = "ChangeInUnderlyingOrderDetails";
    AllocCancReplaceReason[AllocCancReplaceReason["Other"] = 99] = "Other";
})(AllocCancReplaceReason = exports.AllocCancReplaceReason || (exports.AllocCancReplaceReason = {}));
var AllocAccountType;
(function (AllocAccountType) {
    AllocAccountType[AllocAccountType["AccountIsCarriedOnCustomerSideOfBooks"] = 1] = "AccountIsCarriedOnCustomerSideOfBooks";
    AllocAccountType[AllocAccountType["AccountIsCarriedOnNonCustomerSideOfBooks"] = 2] = "AccountIsCarriedOnNonCustomerSideOfBooks";
    AllocAccountType[AllocAccountType["HouseTrader"] = 3] = "HouseTrader";
    AllocAccountType[AllocAccountType["FloorTrader"] = 4] = "FloorTrader";
    AllocAccountType[AllocAccountType["AccountIsCarriedOnNonCustomerSideOfBooksAndIsCrossMargined"] = 6] = "AccountIsCarriedOnNonCustomerSideOfBooksAndIsCrossMargined";
    AllocAccountType[AllocAccountType["AccountIsHouseTraderAndIsCrossMargined"] = 7] = "AccountIsHouseTraderAndIsCrossMargined";
    AllocAccountType[AllocAccountType["JointBackofficeAccount"] = 8] = "JointBackofficeAccount";
})(AllocAccountType = exports.AllocAccountType || (exports.AllocAccountType = {}));
var PartySubIDType;
(function (PartySubIDType) {
    PartySubIDType[PartySubIDType["Firm"] = 1] = "Firm";
    PartySubIDType[PartySubIDType["Person"] = 2] = "Person";
    PartySubIDType[PartySubIDType["System"] = 3] = "System";
    PartySubIDType[PartySubIDType["Application"] = 4] = "Application";
    PartySubIDType[PartySubIDType["FullLegalNameOfFirm"] = 5] = "FullLegalNameOfFirm";
    PartySubIDType[PartySubIDType["PostalAddress"] = 6] = "PostalAddress";
    PartySubIDType[PartySubIDType["PhoneNumber"] = 7] = "PhoneNumber";
    PartySubIDType[PartySubIDType["EmailAddress"] = 8] = "EmailAddress";
    PartySubIDType[PartySubIDType["ContactName"] = 9] = "ContactName";
    PartySubIDType[PartySubIDType["SecuritiesAccountNumber"] = 10] = "SecuritiesAccountNumber";
    PartySubIDType[PartySubIDType["RegistrationNumber"] = 11] = "RegistrationNumber";
    PartySubIDType[PartySubIDType["RegisteredAddress12"] = 12] = "RegisteredAddress12";
    PartySubIDType[PartySubIDType["RegulatoryStatus"] = 13] = "RegulatoryStatus";
    PartySubIDType[PartySubIDType["RegistrationName"] = 14] = "RegistrationName";
    PartySubIDType[PartySubIDType["CashAccountNumber"] = 15] = "CashAccountNumber";
    PartySubIDType[PartySubIDType["Bic"] = 16] = "Bic";
    PartySubIDType[PartySubIDType["CsdParticipantMemberCode"] = 17] = "CsdParticipantMemberCode";
    PartySubIDType[PartySubIDType["RegisteredAddress18"] = 18] = "RegisteredAddress18";
    PartySubIDType[PartySubIDType["FundAccountName"] = 19] = "FundAccountName";
    PartySubIDType[PartySubIDType["TelexNumber"] = 20] = "TelexNumber";
    PartySubIDType[PartySubIDType["FaxNumber"] = 21] = "FaxNumber";
    PartySubIDType[PartySubIDType["SecuritiesAccountName"] = 22] = "SecuritiesAccountName";
    PartySubIDType[PartySubIDType["CashAccountName"] = 23] = "CashAccountName";
    PartySubIDType[PartySubIDType["Department"] = 24] = "Department";
    PartySubIDType[PartySubIDType["Location"] = 25] = "Location";
    PartySubIDType[PartySubIDType["PositionAccountType"] = 26] = "PositionAccountType";
})(PartySubIDType = exports.PartySubIDType || (exports.PartySubIDType = {}));
var AllocIntermedReqType;
(function (AllocIntermedReqType) {
    AllocIntermedReqType[AllocIntermedReqType["PendingAccept"] = 1] = "PendingAccept";
    AllocIntermedReqType[AllocIntermedReqType["PendingRelease"] = 2] = "PendingRelease";
    AllocIntermedReqType[AllocIntermedReqType["PendingReversal"] = 3] = "PendingReversal";
    AllocIntermedReqType[AllocIntermedReqType["Accept"] = 4] = "Accept";
    AllocIntermedReqType[AllocIntermedReqType["BlockLevelReject"] = 5] = "BlockLevelReject";
    AllocIntermedReqType[AllocIntermedReqType["AccountLevelReject"] = 6] = "AccountLevelReject";
})(AllocIntermedReqType = exports.AllocIntermedReqType || (exports.AllocIntermedReqType = {}));
var ApplQueueResolution;
(function (ApplQueueResolution) {
    ApplQueueResolution[ApplQueueResolution["NoActionTaken"] = 0] = "NoActionTaken";
    ApplQueueResolution[ApplQueueResolution["QueueFlushed"] = 1] = "QueueFlushed";
    ApplQueueResolution[ApplQueueResolution["OverlayLast"] = 2] = "OverlayLast";
    ApplQueueResolution[ApplQueueResolution["EndSession"] = 3] = "EndSession";
})(ApplQueueResolution = exports.ApplQueueResolution || (exports.ApplQueueResolution = {}));
var ApplQueueAction;
(function (ApplQueueAction) {
    ApplQueueAction[ApplQueueAction["NoActionTaken"] = 0] = "NoActionTaken";
    ApplQueueAction[ApplQueueAction["QueueFlushed"] = 1] = "QueueFlushed";
    ApplQueueAction[ApplQueueAction["OverlayLast"] = 2] = "OverlayLast";
    ApplQueueAction[ApplQueueAction["EndSession"] = 3] = "EndSession";
})(ApplQueueAction = exports.ApplQueueAction || (exports.ApplQueueAction = {}));
var AvgPxIndicator;
(function (AvgPxIndicator) {
    AvgPxIndicator[AvgPxIndicator["NoAveragePricing"] = 0] = "NoAveragePricing";
    AvgPxIndicator[AvgPxIndicator["TradeIsPartOfAnAveragePriceGroupIdentifiedByTheTradelinkid"] = 1] = "TradeIsPartOfAnAveragePriceGroupIdentifiedByTheTradelinkid";
    AvgPxIndicator[AvgPxIndicator["LastTradeInTheAveragePriceGroupIdentifiedByTheTradelinkid"] = 2] = "LastTradeInTheAveragePriceGroupIdentifiedByTheTradelinkid";
})(AvgPxIndicator = exports.AvgPxIndicator || (exports.AvgPxIndicator = {}));
var TradeAllocIndicator;
(function (TradeAllocIndicator) {
    TradeAllocIndicator[TradeAllocIndicator["AllocationNotRequired"] = 0] = "AllocationNotRequired";
    TradeAllocIndicator[TradeAllocIndicator["AllocationRequired"] = 1] = "AllocationRequired";
    TradeAllocIndicator[TradeAllocIndicator["UseAllocationProvidedWithTheTrade"] = 2] = "UseAllocationProvidedWithTheTrade";
})(TradeAllocIndicator = exports.TradeAllocIndicator || (exports.TradeAllocIndicator = {}));
var ExpirationCycle;
(function (ExpirationCycle) {
    ExpirationCycle[ExpirationCycle["ExpireOnTradingSessionClose"] = 0] = "ExpireOnTradingSessionClose";
    ExpirationCycle[ExpirationCycle["ExpireOnTradingSessionOpen"] = 1] = "ExpireOnTradingSessionOpen";
})(ExpirationCycle = exports.ExpirationCycle || (exports.ExpirationCycle = {}));
var TrdType;
(function (TrdType) {
    TrdType[TrdType["RegularTrade"] = 0] = "RegularTrade";
    TrdType[TrdType["BlockTrade"] = 1] = "BlockTrade";
    TrdType[TrdType["Efp"] = 2] = "Efp";
    TrdType[TrdType["Transfer"] = 3] = "Transfer";
    TrdType[TrdType["LateTrade"] = 4] = "LateTrade";
    TrdType[TrdType["TTrade"] = 5] = "TTrade";
    TrdType[TrdType["WeightedAveragePriceTrade"] = 6] = "WeightedAveragePriceTrade";
    TrdType[TrdType["BunchedTrade"] = 7] = "BunchedTrade";
    TrdType[TrdType["LateBunchedTrade"] = 8] = "LateBunchedTrade";
    TrdType[TrdType["PriorReferencePriceTrade"] = 9] = "PriorReferencePriceTrade";
    TrdType[TrdType["AfterHoursTrade"] = 10] = "AfterHoursTrade";
})(TrdType = exports.TrdType || (exports.TrdType = {}));
var PegMoveType;
(function (PegMoveType) {
    PegMoveType[PegMoveType["Floating"] = 0] = "Floating";
    PegMoveType[PegMoveType["Fixed"] = 1] = "Fixed";
})(PegMoveType = exports.PegMoveType || (exports.PegMoveType = {}));
var PegOffsetType;
(function (PegOffsetType) {
    PegOffsetType[PegOffsetType["Price"] = 0] = "Price";
    PegOffsetType[PegOffsetType["BasisPoints"] = 1] = "BasisPoints";
    PegOffsetType[PegOffsetType["Ticks"] = 2] = "Ticks";
    PegOffsetType[PegOffsetType["PriceTier"] = 3] = "PriceTier";
})(PegOffsetType = exports.PegOffsetType || (exports.PegOffsetType = {}));
var PegLimitType;
(function (PegLimitType) {
    PegLimitType[PegLimitType["OrBetter"] = 0] = "OrBetter";
    PegLimitType[PegLimitType["StrictLimitIsAStrictLimit"] = 1] = "StrictLimitIsAStrictLimit";
    PegLimitType[PegLimitType["OrWorseForABuyThePegLimitIsAMinimumAndForASellThePegLimitIsAMaximum"] = 2] = "OrWorseForABuyThePegLimitIsAMinimumAndForASellThePegLimitIsAMaximum";
})(PegLimitType = exports.PegLimitType || (exports.PegLimitType = {}));
var PegRoundDirection;
(function (PegRoundDirection) {
    PegRoundDirection[PegRoundDirection["MoreAggressiveOnABuyOrderRoundThePriceUpRoundUpToTheNearestTickOnASellRoundDownToTheNearestTick"] = 1] = "MoreAggressiveOnABuyOrderRoundThePriceUpRoundUpToTheNearestTickOnASellRoundDownToTheNearestTick";
    PegRoundDirection[PegRoundDirection["MorePassiveOnABuyOrderRoundDownToNearestTickOnASellOrderRoundUpToNearestTick"] = 2] = "MorePassiveOnABuyOrderRoundDownToNearestTickOnASellOrderRoundUpToNearestTick";
})(PegRoundDirection = exports.PegRoundDirection || (exports.PegRoundDirection = {}));
var PegScope;
(function (PegScope) {
    PegScope[PegScope["Local"] = 1] = "Local";
    PegScope[PegScope["National"] = 2] = "National";
    PegScope[PegScope["Global"] = 3] = "Global";
    PegScope[PegScope["NationalExcludingLocal"] = 4] = "NationalExcludingLocal";
})(PegScope = exports.PegScope || (exports.PegScope = {}));
var DiscretionMoveType;
(function (DiscretionMoveType) {
    DiscretionMoveType[DiscretionMoveType["Floating"] = 0] = "Floating";
    DiscretionMoveType[DiscretionMoveType["Fixed"] = 1] = "Fixed";
})(DiscretionMoveType = exports.DiscretionMoveType || (exports.DiscretionMoveType = {}));
var DiscretionOffsetType;
(function (DiscretionOffsetType) {
    DiscretionOffsetType[DiscretionOffsetType["Price"] = 0] = "Price";
    DiscretionOffsetType[DiscretionOffsetType["BasisPoints"] = 1] = "BasisPoints";
    DiscretionOffsetType[DiscretionOffsetType["Ticks"] = 2] = "Ticks";
    DiscretionOffsetType[DiscretionOffsetType["PriceTier"] = 3] = "PriceTier";
})(DiscretionOffsetType = exports.DiscretionOffsetType || (exports.DiscretionOffsetType = {}));
var DiscretionLimitType;
(function (DiscretionLimitType) {
    DiscretionLimitType[DiscretionLimitType["OrBetter"] = 0] = "OrBetter";
    DiscretionLimitType[DiscretionLimitType["StrictLimitIsAStrictLimit"] = 1] = "StrictLimitIsAStrictLimit";
    DiscretionLimitType[DiscretionLimitType["OrWorseForABuyTheDiscretionPriceIsAMinimumAndForASellTheDiscretionPriceIsAMaximum"] = 2] = "OrWorseForABuyTheDiscretionPriceIsAMinimumAndForASellTheDiscretionPriceIsAMaximum";
})(DiscretionLimitType = exports.DiscretionLimitType || (exports.DiscretionLimitType = {}));
var DiscretionRoundDirection;
(function (DiscretionRoundDirection) {
    DiscretionRoundDirection[DiscretionRoundDirection["MoreAggressiveOnABuyOrderRoundThePriceUpRoundUpToTheNearestTickOnASellRoundDownToTheNearestTick"] = 1] = "MoreAggressiveOnABuyOrderRoundThePriceUpRoundUpToTheNearestTickOnASellRoundDownToTheNearestTick";
    DiscretionRoundDirection[DiscretionRoundDirection["MorePassiveOnABuyOrderRoundDownToNearestTickOnASellOrderRoundUpToNearestTick"] = 2] = "MorePassiveOnABuyOrderRoundDownToNearestTickOnASellOrderRoundUpToNearestTick";
})(DiscretionRoundDirection = exports.DiscretionRoundDirection || (exports.DiscretionRoundDirection = {}));
var DiscretionScope;
(function (DiscretionScope) {
    DiscretionScope[DiscretionScope["Local"] = 1] = "Local";
    DiscretionScope[DiscretionScope["National"] = 2] = "National";
    DiscretionScope[DiscretionScope["Global"] = 3] = "Global";
    DiscretionScope[DiscretionScope["NationalExcludingLocal"] = 4] = "NationalExcludingLocal";
})(DiscretionScope = exports.DiscretionScope || (exports.DiscretionScope = {}));
var TargetStrategy;
(function (TargetStrategy) {
    TargetStrategy[TargetStrategy["Vwap"] = 1] = "Vwap";
    TargetStrategy[TargetStrategy["Participate"] = 2] = "Participate";
    TargetStrategy[TargetStrategy["MininizeMarketImpact"] = 3] = "MininizeMarketImpact";
})(TargetStrategy = exports.TargetStrategy || (exports.TargetStrategy = {}));
var LastLiquidityInd;
(function (LastLiquidityInd) {
    LastLiquidityInd[LastLiquidityInd["AddedLiquidity"] = 1] = "AddedLiquidity";
    LastLiquidityInd[LastLiquidityInd["RemovedLiquidity"] = 2] = "RemovedLiquidity";
    LastLiquidityInd[LastLiquidityInd["LiquidityRoutedOut"] = 3] = "LiquidityRoutedOut";
})(LastLiquidityInd = exports.LastLiquidityInd || (exports.LastLiquidityInd = {}));
var PublishTrdIndicator;
(function (PublishTrdIndicator) {
    PublishTrdIndicator["Yes"] = "Y";
    PublishTrdIndicator["No"] = "N";
})(PublishTrdIndicator = exports.PublishTrdIndicator || (exports.PublishTrdIndicator = {}));
var ShortSaleReason;
(function (ShortSaleReason) {
    ShortSaleReason[ShortSaleReason["DealerSoldShort"] = 0] = "DealerSoldShort";
    ShortSaleReason[ShortSaleReason["DealerSoldShortExempt"] = 1] = "DealerSoldShortExempt";
    ShortSaleReason[ShortSaleReason["SellingCustomerSoldShort"] = 2] = "SellingCustomerSoldShort";
    ShortSaleReason[ShortSaleReason["SellingCustomerSoldShortExempt"] = 3] = "SellingCustomerSoldShortExempt";
    ShortSaleReason[ShortSaleReason["QualifedServiceRepresentative"] = 4] = "QualifedServiceRepresentative";
    ShortSaleReason[ShortSaleReason["QsrOrAguContraSideSoldShortExempt"] = 5] = "QsrOrAguContraSideSoldShortExempt";
})(ShortSaleReason = exports.ShortSaleReason || (exports.ShortSaleReason = {}));
var QtyType;
(function (QtyType) {
    QtyType[QtyType["Units"] = 0] = "Units";
    QtyType[QtyType["Contracts"] = 1] = "Contracts";
})(QtyType = exports.QtyType || (exports.QtyType = {}));
var TradeReportType;
(function (TradeReportType) {
    TradeReportType[TradeReportType["Submit"] = 0] = "Submit";
    TradeReportType[TradeReportType["Alleged"] = 1] = "Alleged";
    TradeReportType[TradeReportType["Accept"] = 2] = "Accept";
    TradeReportType[TradeReportType["Decline"] = 3] = "Decline";
    TradeReportType[TradeReportType["Addendum"] = 4] = "Addendum";
    TradeReportType[TradeReportType["NoWas"] = 5] = "NoWas";
    TradeReportType[TradeReportType["TradeReportCancel"] = 6] = "TradeReportCancel";
    TradeReportType[TradeReportType["LockedInTradeBreak"] = 7] = "LockedInTradeBreak";
})(TradeReportType = exports.TradeReportType || (exports.TradeReportType = {}));
var AllocNoOrdersType;
(function (AllocNoOrdersType) {
    AllocNoOrdersType[AllocNoOrdersType["NotSpecified"] = 0] = "NotSpecified";
    AllocNoOrdersType[AllocNoOrdersType["ExplicitListProvided"] = 1] = "ExplicitListProvided";
})(AllocNoOrdersType = exports.AllocNoOrdersType || (exports.AllocNoOrdersType = {}));
var EventType;
(function (EventType) {
    EventType[EventType["Put"] = 1] = "Put";
    EventType[EventType["Call"] = 2] = "Call";
    EventType[EventType["Tender"] = 3] = "Tender";
    EventType[EventType["SinkingFundCall"] = 4] = "SinkingFundCall";
    EventType[EventType["Other"] = 99] = "Other";
})(EventType = exports.EventType || (exports.EventType = {}));
var InstrAttribType;
(function (InstrAttribType) {
    InstrAttribType[InstrAttribType["Flat"] = 1] = "Flat";
    InstrAttribType[InstrAttribType["ZeroCoupon"] = 2] = "ZeroCoupon";
    InstrAttribType[InstrAttribType["InterestBearing"] = 3] = "InterestBearing";
    InstrAttribType[InstrAttribType["NoPeriodicPayments"] = 4] = "NoPeriodicPayments";
    InstrAttribType[InstrAttribType["VariableRate"] = 5] = "VariableRate";
    InstrAttribType[InstrAttribType["LessFeeForPut"] = 6] = "LessFeeForPut";
    InstrAttribType[InstrAttribType["SteppedCoupon"] = 7] = "SteppedCoupon";
    InstrAttribType[InstrAttribType["CouponPeriod"] = 8] = "CouponPeriod";
    InstrAttribType[InstrAttribType["WhenAndIfIssued"] = 9] = "WhenAndIfIssued";
    InstrAttribType[InstrAttribType["OriginalIssueDiscount"] = 10] = "OriginalIssueDiscount";
    InstrAttribType[InstrAttribType["CallablePuttable"] = 11] = "CallablePuttable";
    InstrAttribType[InstrAttribType["EscrowedToMaturity"] = 12] = "EscrowedToMaturity";
    InstrAttribType[InstrAttribType["EscrowedToRedemptionDateCallableSupplyRedemptionDateInTheInstrattribvalue"] = 13] = "EscrowedToRedemptionDateCallableSupplyRedemptionDateInTheInstrattribvalue";
    InstrAttribType[InstrAttribType["Prerefunded"] = 14] = "Prerefunded";
    InstrAttribType[InstrAttribType["InDefault"] = 15] = "InDefault";
    InstrAttribType[InstrAttribType["Unrated"] = 16] = "Unrated";
    InstrAttribType[InstrAttribType["Taxable"] = 17] = "Taxable";
    InstrAttribType[InstrAttribType["Indexed"] = 18] = "Indexed";
    InstrAttribType[InstrAttribType["SubjectToAlternativeMinimumTax"] = 19] = "SubjectToAlternativeMinimumTax";
    InstrAttribType[InstrAttribType["OriginalIssueDiscountPriceSupplyPriceInTheInstrattribvalue"] = 20] = "OriginalIssueDiscountPriceSupplyPriceInTheInstrattribvalue";
    InstrAttribType[InstrAttribType["CallableBelowMaturityValue"] = 21] = "CallableBelowMaturityValue";
    InstrAttribType[InstrAttribType["CallableWithoutNoticeByMailToHolderUnlessRegistered"] = 22] = "CallableWithoutNoticeByMailToHolderUnlessRegistered";
    InstrAttribType[InstrAttribType["TextSupplyTheTextOfTheAttributeOrDisclaimerInTheInstrattribvalue"] = 99] = "TextSupplyTheTextOfTheAttributeOrDisclaimerInTheInstrattribvalue";
})(InstrAttribType = exports.InstrAttribType || (exports.InstrAttribType = {}));
var CPProgram;
(function (CPProgram) {
    CPProgram[CPProgram["E3"] = 1] = "E3";
    CPProgram[CPProgram["E4"] = 2] = "E4";
    CPProgram[CPProgram["Other"] = 99] = "Other";
})(CPProgram = exports.CPProgram || (exports.CPProgram = {}));
var MiscFeeBasis;
(function (MiscFeeBasis) {
    MiscFeeBasis[MiscFeeBasis["Absolute"] = 0] = "Absolute";
    MiscFeeBasis[MiscFeeBasis["PerUnit"] = 1] = "PerUnit";
    MiscFeeBasis[MiscFeeBasis["Percentage"] = 2] = "Percentage";
})(MiscFeeBasis = exports.MiscFeeBasis || (exports.MiscFeeBasis = {}));
var LastFragment;
(function (LastFragment) {
    LastFragment["Yes"] = "Y";
    LastFragment["No"] = "N";
})(LastFragment = exports.LastFragment || (exports.LastFragment = {}));
var CollAsgnReason;
(function (CollAsgnReason) {
    CollAsgnReason[CollAsgnReason["Initial"] = 0] = "Initial";
    CollAsgnReason[CollAsgnReason["Scheduled"] = 1] = "Scheduled";
    CollAsgnReason[CollAsgnReason["TimeWarning"] = 2] = "TimeWarning";
    CollAsgnReason[CollAsgnReason["MarginDeficiency"] = 3] = "MarginDeficiency";
    CollAsgnReason[CollAsgnReason["MarginExcess"] = 4] = "MarginExcess";
    CollAsgnReason[CollAsgnReason["ForwardCollateralDemand"] = 5] = "ForwardCollateralDemand";
    CollAsgnReason[CollAsgnReason["EventOfDefault"] = 6] = "EventOfDefault";
    CollAsgnReason[CollAsgnReason["AdverseTaxEvent"] = 7] = "AdverseTaxEvent";
})(CollAsgnReason = exports.CollAsgnReason || (exports.CollAsgnReason = {}));
var CollInquiryQualifier;
(function (CollInquiryQualifier) {
    CollInquiryQualifier[CollInquiryQualifier["Tradedate"] = 0] = "Tradedate";
    CollInquiryQualifier[CollInquiryQualifier["GcInstrument"] = 1] = "GcInstrument";
    CollInquiryQualifier[CollInquiryQualifier["Collateralinstrument"] = 2] = "Collateralinstrument";
    CollInquiryQualifier[CollInquiryQualifier["SubstitutionEligible"] = 3] = "SubstitutionEligible";
    CollInquiryQualifier[CollInquiryQualifier["NotAssigned"] = 4] = "NotAssigned";
    CollInquiryQualifier[CollInquiryQualifier["PartiallyAssigned"] = 5] = "PartiallyAssigned";
    CollInquiryQualifier[CollInquiryQualifier["FullyAssigned"] = 6] = "FullyAssigned";
    CollInquiryQualifier[CollInquiryQualifier["OutstandingTrades"] = 7] = "OutstandingTrades";
})(CollInquiryQualifier = exports.CollInquiryQualifier || (exports.CollInquiryQualifier = {}));
var CollAsgnTransType;
(function (CollAsgnTransType) {
    CollAsgnTransType[CollAsgnTransType["New"] = 0] = "New";
    CollAsgnTransType[CollAsgnTransType["Replace"] = 1] = "Replace";
    CollAsgnTransType[CollAsgnTransType["Cancel"] = 2] = "Cancel";
    CollAsgnTransType[CollAsgnTransType["Release"] = 3] = "Release";
    CollAsgnTransType[CollAsgnTransType["Reverse"] = 4] = "Reverse";
})(CollAsgnTransType = exports.CollAsgnTransType || (exports.CollAsgnTransType = {}));
var CollAsgnRespType;
(function (CollAsgnRespType) {
    CollAsgnRespType[CollAsgnRespType["Received"] = 0] = "Received";
    CollAsgnRespType[CollAsgnRespType["Accepted"] = 1] = "Accepted";
    CollAsgnRespType[CollAsgnRespType["Declined"] = 2] = "Declined";
    CollAsgnRespType[CollAsgnRespType["Rejected"] = 3] = "Rejected";
})(CollAsgnRespType = exports.CollAsgnRespType || (exports.CollAsgnRespType = {}));
var CollAsgnRejectReason;
(function (CollAsgnRejectReason) {
    CollAsgnRejectReason[CollAsgnRejectReason["UnknownDeal"] = 0] = "UnknownDeal";
    CollAsgnRejectReason[CollAsgnRejectReason["UnknownOrInvalidInstrument"] = 1] = "UnknownOrInvalidInstrument";
    CollAsgnRejectReason[CollAsgnRejectReason["UnauthorizedTransaction"] = 2] = "UnauthorizedTransaction";
    CollAsgnRejectReason[CollAsgnRejectReason["InsufficientCollateral"] = 3] = "InsufficientCollateral";
    CollAsgnRejectReason[CollAsgnRejectReason["InvalidTypeOfCollateral"] = 4] = "InvalidTypeOfCollateral";
    CollAsgnRejectReason[CollAsgnRejectReason["ExcessiveSubstitution"] = 5] = "ExcessiveSubstitution";
    CollAsgnRejectReason[CollAsgnRejectReason["Other"] = 99] = "Other";
})(CollAsgnRejectReason = exports.CollAsgnRejectReason || (exports.CollAsgnRejectReason = {}));
var CollStatus;
(function (CollStatus) {
    CollStatus[CollStatus["Unassigned"] = 0] = "Unassigned";
    CollStatus[CollStatus["PartiallyAssigned"] = 1] = "PartiallyAssigned";
    CollStatus[CollStatus["AssignmentProposed"] = 2] = "AssignmentProposed";
    CollStatus[CollStatus["Assigned"] = 3] = "Assigned";
    CollStatus[CollStatus["Challenged"] = 4] = "Challenged";
})(CollStatus = exports.CollStatus || (exports.CollStatus = {}));
var DeliveryType;
(function (DeliveryType) {
    DeliveryType[DeliveryType["VersusPaymentDeliver"] = 0] = "VersusPaymentDeliver";
    DeliveryType[DeliveryType["FreeDeliver"] = 1] = "FreeDeliver";
    DeliveryType[DeliveryType["TriParty"] = 2] = "TriParty";
    DeliveryType[DeliveryType["HoldInCustody"] = 3] = "HoldInCustody";
})(DeliveryType = exports.DeliveryType || (exports.DeliveryType = {}));
var UserRequestType;
(function (UserRequestType) {
    UserRequestType[UserRequestType["Logonuser"] = 1] = "Logonuser";
    UserRequestType[UserRequestType["Logoffuser"] = 2] = "Logoffuser";
    UserRequestType[UserRequestType["Changepasswordforuser"] = 3] = "Changepasswordforuser";
    UserRequestType[UserRequestType["RequestIndividualUserStatus"] = 4] = "RequestIndividualUserStatus";
})(UserRequestType = exports.UserRequestType || (exports.UserRequestType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["LoggedIn"] = 1] = "LoggedIn";
    UserStatus[UserStatus["NotLoggedIn"] = 2] = "NotLoggedIn";
    UserStatus[UserStatus["UserNotRecognised"] = 3] = "UserNotRecognised";
    UserStatus[UserStatus["PasswordIncorrect"] = 4] = "PasswordIncorrect";
    UserStatus[UserStatus["PasswordChanged"] = 5] = "PasswordChanged";
    UserStatus[UserStatus["Other"] = 6] = "Other";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var StatusValue;
(function (StatusValue) {
    StatusValue[StatusValue["Connected"] = 1] = "Connected";
    StatusValue[StatusValue["NotConnectedDownExpectedUp"] = 2] = "NotConnectedDownExpectedUp";
    StatusValue[StatusValue["NotConnectedDownExpectedDown"] = 3] = "NotConnectedDownExpectedDown";
    StatusValue[StatusValue["InProcess"] = 4] = "InProcess";
})(StatusValue = exports.StatusValue || (exports.StatusValue = {}));
var NetworkRequestType;
(function (NetworkRequestType) {
    NetworkRequestType[NetworkRequestType["Snapshot"] = 1] = "Snapshot";
    NetworkRequestType[NetworkRequestType["Subscribe"] = 2] = "Subscribe";
    NetworkRequestType[NetworkRequestType["StopSubscribing"] = 4] = "StopSubscribing";
    NetworkRequestType[NetworkRequestType["LevelOfDetailThenNocompidsBecomesRequired"] = 8] = "LevelOfDetailThenNocompidsBecomesRequired";
})(NetworkRequestType = exports.NetworkRequestType || (exports.NetworkRequestType = {}));
var NetworkStatusResponseType;
(function (NetworkStatusResponseType) {
    NetworkStatusResponseType[NetworkStatusResponseType["Full"] = 1] = "Full";
    NetworkStatusResponseType[NetworkStatusResponseType["IncrementalUpdate"] = 2] = "IncrementalUpdate";
})(NetworkStatusResponseType = exports.NetworkStatusResponseType || (exports.NetworkStatusResponseType = {}));
var TrdRptStatus;
(function (TrdRptStatus) {
    TrdRptStatus[TrdRptStatus["Accepted"] = 0] = "Accepted";
    TrdRptStatus[TrdRptStatus["Rejected"] = 1] = "Rejected";
})(TrdRptStatus = exports.TrdRptStatus || (exports.TrdRptStatus = {}));
var AffirmStatus;
(function (AffirmStatus) {
    AffirmStatus[AffirmStatus["Received"] = 1] = "Received";
    AffirmStatus[AffirmStatus["ConfirmRejectedIeNotAffirmed"] = 2] = "ConfirmRejectedIeNotAffirmed";
    AffirmStatus[AffirmStatus["Affirmed"] = 3] = "Affirmed";
})(AffirmStatus = exports.AffirmStatus || (exports.AffirmStatus = {}));
var CollAction;
(function (CollAction) {
    CollAction[CollAction["Retain"] = 0] = "Retain";
    CollAction[CollAction["Add"] = 1] = "Add";
    CollAction[CollAction["Remove"] = 2] = "Remove";
})(CollAction = exports.CollAction || (exports.CollAction = {}));
var CollInquiryStatus;
(function (CollInquiryStatus) {
    CollInquiryStatus[CollInquiryStatus["Accepted"] = 0] = "Accepted";
    CollInquiryStatus[CollInquiryStatus["AcceptedWithWarnings"] = 1] = "AcceptedWithWarnings";
    CollInquiryStatus[CollInquiryStatus["Completed"] = 2] = "Completed";
    CollInquiryStatus[CollInquiryStatus["CompletedWithWarnings"] = 3] = "CompletedWithWarnings";
    CollInquiryStatus[CollInquiryStatus["Rejected"] = 4] = "Rejected";
})(CollInquiryStatus = exports.CollInquiryStatus || (exports.CollInquiryStatus = {}));
var CollInquiryResult;
(function (CollInquiryResult) {
    CollInquiryResult[CollInquiryResult["Successful"] = 0] = "Successful";
    CollInquiryResult[CollInquiryResult["InvalidOrUnknownInstrument"] = 1] = "InvalidOrUnknownInstrument";
    CollInquiryResult[CollInquiryResult["InvalidOrUnknownCollateralType"] = 2] = "InvalidOrUnknownCollateralType";
    CollInquiryResult[CollInquiryResult["InvalidParties"] = 3] = "InvalidParties";
    CollInquiryResult[CollInquiryResult["InvalidTransportTypeRequested"] = 4] = "InvalidTransportTypeRequested";
    CollInquiryResult[CollInquiryResult["InvalidDestinationRequested"] = 5] = "InvalidDestinationRequested";
    CollInquiryResult[CollInquiryResult["NoCollateralFoundForTheTradeSpecified"] = 6] = "NoCollateralFoundForTheTradeSpecified";
    CollInquiryResult[CollInquiryResult["NoCollateralFoundForTheOrderSpecified"] = 7] = "NoCollateralFoundForTheOrderSpecified";
    CollInquiryResult[CollInquiryResult["CollateralInquiryTypeNotSupported"] = 8] = "CollateralInquiryTypeNotSupported";
    CollInquiryResult[CollInquiryResult["UnauthorizedForCollateralInquiry"] = 9] = "UnauthorizedForCollateralInquiry";
    CollInquiryResult[CollInquiryResult["Other"] = 99] = "Other";
})(CollInquiryResult = exports.CollInquiryResult || (exports.CollInquiryResult = {}));
//# sourceMappingURL=all-enum.js.map