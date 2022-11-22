export declare enum AdvSide {
    Buy = "B",
    Sell = "S",
    Trade = "T",
    Cross = "X"
}
export declare enum AdvTransType {
    New = "N",
    Cancel = "C",
    Replace = "R"
}
export declare enum CommType {
    AmountPerUnit = "1",
    Percent = "2",
    Absolute = "3",
    PercentageWaivedCashDiscountBasis = "4",
    PercentageWaivedEnhancedUnitsBasis = "5",
    PointsPerBondOrContract = "6",
    BasisPoints = "7",
    AmountPerContract = "8"
}
export declare enum ExecInst {
    StayOnOfferSide = "0",
    NotHeld = "1",
    Work = "2",
    GoAlong = "3",
    OverTheDay = "4",
    Held = "5",
    ParticipateDontInitiate = "6",
    StrictScale = "7",
    TryToScale = "8",
    StayOnBidSide = "9",
    NoCross = "A",
    OkToCross = "B",
    CallFirst = "C",
    PercentOfVolume = "D",
    DoNotIncreaseDni = "E",
    DoNotReduceDnr = "F",
    AllOrNoneAon = "G",
    ReinstateOnSystemFailure = "H",
    InstitutionsOnly = "I",
    ReinstateOnTradingHalt = "J",
    CancelOnTradingHalt = "K",
    LastPegLastSale = "L",
    MidPricePegMidpriceOfInsideQuote = "M",
    NonNegotiable = "N",
    OpeningPeg = "O",
    MarketPeg = "P",
    CancelOnSystemFailure = "Q",
    PrimaryPeg = "R",
    Suspend = "S",
    FixedPegToLocalBestBidOrOfferAtTimeOfOrder = "T",
    CustomerDisplayInstruction = "U",
    NettingForForex = "V",
    PegToVwap = "W",
    TradeAlong = "X",
    TryToStop = "Y",
    CancelIfNotBest = "Z",
    TrailingStopPeg = "a",
    StrictLimit = "b",
    IgnorePriceValidityChecks = "c",
    PegToLimitPrice = "d",
    WorkToTargetStrategy = "e",
    IntermarketSweep = "f",
    ExternalRoutingAllowed = "g",
    ExternalRoutingNotAllowed = "h",
    ImbalanceOnly = "i",
    SingleExecutionRequestedForBlockTrade = "j",
    BestExecution = "k",
    SuspendOnSystemFailure = "l",
    SuspendOnTradingHalt = "m",
    ReinstateOnConnectionLoss = "n",
    CancelOnConnectionLoss = "o",
    SuspendOnConnectionLoss = "p",
    Release = "q",
    ExecuteAsDeltaNeutralUsingVolatilityProvided = "r",
    ExecuteAsDurationNeutral = "s",
    ExecuteAsFxNeutral = "t",
    MinimumGuaranteedFillEligible = "u",
    BypassNonDisplayedLiquidity = "v",
    Lock = "w",
    IgnoreNotionalValueChecks = "x",
    TradeAtReferencePrice = "y"
}
export declare enum HandlInst {
    AutomatedExecutionOrderPrivateNoBrokerIntervention = "1",
    AutomatedExecutionOrderPublicBrokerInterventionOk = "2",
    ManualOrderBestExecution = "3"
}
export declare enum SecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum IOIQltyInd {
    High = "H",
    Low = "L",
    Medium = "M"
}
export declare enum IOIQty {
    Small = "S",
    Medium = "M",
    Large = "L",
    UndisclosedQuantity = "U"
}
export declare enum IOITransType {
    New = "N",
    Cancel = "C",
    Replace = "R"
}
export declare enum LastCapacity {
    Agent = "1",
    CrossAsAgent = "2",
    CrossAsPrincipal = "3",
    Principal = "4",
    RisklessPrincipal = "5"
}
export declare enum MsgType {
    Heartbeat = "0",
    TestRequest = "1",
    ResendRequest = "2",
    Reject = "3",
    SequenceReset = "4",
    Logout = "5",
    Ioi = "6",
    Advertisement = "7",
    ExecutionReport = "8",
    OrderCancelReject = "9",
    Logon = "A",
    News = "B",
    Email = "C",
    NewOrderSingle = "D",
    NewOrderList = "E",
    OrderCancelRequest = "F",
    OrderCancelReplaceRequest = "G",
    OrderStatusRequest = "H",
    AllocationInstruction = "J",
    ListCancelRequest = "K",
    ListExecute = "L",
    ListStatusRequest = "M",
    ListStatus = "N",
    AllocationInstructionAck = "P",
    DontKnowTrade = "Q",
    QuoteRequest = "R",
    Quote = "S",
    SettlementInstructions = "T",
    MarketDataRequest = "V",
    MarketDataSnapshotFullRefresh = "W",
    MarketDataIncrementalRefresh = "X",
    MarketDataRequestReject = "Y",
    QuoteCancel = "Z",
    QuoteStatusRequest = "a",
    MassQuoteAck = "b",
    SecurityDefinitionRequest = "c",
    SecurityDefinition = "d",
    SecurityStatusRequest = "e",
    SecurityStatus = "f",
    TradingSessionStatusRequest = "g",
    TradingSessionStatus = "h",
    MassQuote = "i",
    BusinessMessageReject = "j",
    BidRequest = "k",
    BidResponse = "l",
    ListStrikePrice = "m",
    XmLnonFix = "n",
    RegistrationInstructions = "o",
    RegistrationInstructionsResponse = "p",
    OrderMassCancelRequest = "q",
    OrderMassCancelReport = "r",
    NewOrderCross = "s",
    CrossOrderCancelReplaceRequest = "t",
    CrossOrderCancelRequest = "u",
    SecurityTypeRequest = "v",
    SecurityTypes = "w",
    SecurityListRequest = "x",
    SecurityList = "y",
    DerivativeSecurityListRequest = "z",
    DerivativeSecurityList = "AA",
    NewOrderMultileg = "AB",
    MultilegOrderCancelReplace = "AC",
    TradeCaptureReportRequest = "AD",
    TradeCaptureReport = "AE",
    OrderMassStatusRequest = "AF",
    QuoteRequestReject = "AG",
    RfqRequest = "AH",
    QuoteStatusReport = "AI",
    QuoteResponse = "AJ",
    Confirmation = "AK",
    PositionMaintenanceRequest = "AL",
    PositionMaintenanceReport = "AM",
    RequestForPositions = "AN",
    RequestForPositionsAck = "AO",
    PositionReport = "AP",
    TradeCaptureReportRequestAck = "AQ",
    TradeCaptureReportAck = "AR",
    AllocationReport = "AS",
    AllocationReportAck = "AT",
    ConfirmationAck = "AU",
    SettlementInstructionRequest = "AV",
    AssignmentReport = "AW",
    CollateralRequest = "AX",
    CollateralAssignment = "AY",
    CollateralResponse = "AZ",
    CollateralReport = "BA",
    CollateralInquiry = "BB",
    NetworkCounterpartySystemStatusRequest = "BC",
    NetworkCounterpartySystemStatusResponse = "BD",
    UserRequest = "BE",
    UserResponse = "BF",
    CollateralInquiryAck = "BG",
    ConfirmationRequest = "BH",
    ContraryIntentionReport = "BO",
    SecurityDefinitionUpdateReport = "BP",
    SecurityListUpdateReport = "BK",
    AdjustedPositionReport = "BL",
    AllocationInstructionAlert = "BM",
    ExecutionAck = "BN",
    TradingSessionList = "BJ",
    TradingSessionListRequest = "BI",
    SettlementObligationReport = "BQ",
    DerivativeSecurityListUpdateReport = "BR",
    TradingSessionListUpdateReport = "BS",
    MarketDefinitionRequest = "BT",
    MarketDefinition = "BU",
    MarketDefinitionUpdateReport = "BV",
    ApplicationMessageRequest = "BW",
    ApplicationMessageRequestAck = "BX",
    ApplicationMessageReport = "BY",
    OrderMassActionReport = "BZ",
    OrderMassActionRequest = "CA",
    UserNotification = "CB",
    StreamAssignmentRequest = "CC",
    StreamAssignmentReport = "CD",
    StreamAssignmentReportAck = "CE",
    PartyDetailsListRequest = "CF",
    PartyDetailsListReport = "CG",
    MarginRequirementInquiry = "CH",
    MarginRequirementInquiryAck = "CI",
    MarginRequirementReport = "CJ",
    PartyDetailsListUpdateReport = "CK",
    PartyRiskLimitsRequest = "CL",
    PartyRiskLimitsReport = "CM",
    SecurityMassStatusRequest = "CN",
    SecurityMassStatus = "CO",
    AccountSummaryReport = "CQ",
    PartyRiskLimitsUpdateReport = "CR",
    PartyRiskLimitsDefinitionRequest = "CS",
    PartyRiskLimitsDefinitionRequestAck = "CT",
    PartyEntitlementsRequest = "CU",
    PartyEntitlementsReport = "CV",
    QuoteAck = "CW",
    PartyDetailsDefinitionRequest = "CX",
    PartyDetailsDefinitionRequestAck = "CY",
    PartyEntitlementsUpdateReport = "CZ",
    PartyEntitlementsDefinitionRequest = "DA",
    PartyEntitlementsDefinitionRequestAck = "DB",
    TradeMatchReport = "DC",
    TradeMatchReportAck = "DD",
    PartyRiskLimitsReportAck = "DE",
    PartyRiskLimitCheckRequest = "DF",
    PartyRiskLimitCheckRequestAck = "DG",
    PartyActionRequest = "DH",
    PartyActionReport = "DI",
    MassOrder = "DJ",
    MassOrderAck = "DK",
    PositionTransferInstruction = "DL",
    PositionTransferInstructionAck = "DM",
    PositionTransferReport = "DN",
    MarketDataStatisticsRequest = "DO",
    MarketDataStatisticsReport = "DP",
    CollateralReportAck = "DQ",
    MarketDataReport = "DR",
    CrossRequest = "DS",
    CrossRequestAck = "DT"
}
export declare enum OrdStatus {
    New = "0",
    PartiallyFilled = "1",
    Filled = "2",
    DoneForDay = "3",
    Canceled = "4",
    ReplacedNoLongerUsed = "5",
    PendingCancelIEResultOfOrderCancelRequest = "6",
    Stopped = "7",
    Rejected = "8",
    Suspended = "9",
    PendingNew = "A",
    Calculated = "B",
    Expired = "C",
    AcceptedForBidding = "D",
    PendingReplaceIEResultOfOrderCancelReplaceRequest = "E"
}
export declare enum OrdType {
    Market = "1",
    Limit = "2",
    StopStopLoss = "3",
    StopLimit = "4",
    MarketOnCloseNoLongerUsed = "5",
    WithOrWithout = "6",
    LimitOrBetter = "7",
    LimitWithOrWithout = "8",
    OnBasis = "9",
    OnCloseNoLongerUsed = "A",
    LimitOnCloseNoLongerUsed = "B",
    ForexMarketNoLongerUsed = "C",
    PreviouslyQuoted = "D",
    PreviouslyIndicated = "E",
    ForexLimitNoLongerUsed = "F",
    ForexSwap = "G",
    ForexPreviouslyQuotedNoLongerUsed = "H",
    FunariLimitDayOrderWithUnexecutedPortionHandlesAsMarketOnCloseEGJapan = "I",
    MarketIfTouchedMit = "J",
    MarketWithLeftOverAsLimitMarketOrderWithUnexecutedQuantityBecomingLimitOrderAtLastPrice = "K",
    PreviousFundValuationPointHistoricPricingForCiv = "L",
    NextFundValuationPointForwardPricingForCiv = "M",
    Pegged = "P",
    CounterOrderSelection = "Q",
    StopOnBidOrOffer = "R",
    StopLimitOnBidOrOffer = "S"
}
export declare enum PossDupFlag {
    OriginalTransmission = "N",
    PossibleDuplicate = "Y"
}
export declare enum Side {
    Buy = "1",
    Sell = "2",
    BuyMinus = "3",
    SellPlus = "4",
    SellShort = "5",
    SellShortExempt = "6",
    Undisclosed = "7",
    CrossOrdersWhereCounterpartyIsAnExchangeValidForAllMessagesExceptIoIs = "8",
    CrossShort = "9",
    CrossShortExempt = "A",
    AsDefinedForUseWithMultilegInstruments = "B",
    OppositeForUseWithMultilegInstruments = "C",
    SubscribeEGCiv = "D",
    RedeemEGCiv = "E",
    LendFinancingIdentifiesDirectionOfCollateral = "F",
    BorrowFinancingIdentifiesDirectionOfCollateral = "G",
    SellUndisclosed = "H"
}
export declare enum TimeInForce {
    DayOrSession = "0",
    GoodTillCancelGtc = "1",
    AtTheOpeningOpg = "2",
    ImmediateOrCancelIoc = "3",
    FillOrKillFok = "4",
    GoodTillCrossingGtx = "5",
    GoodTillDateGtd = "6",
    AtTheClose = "7",
    GoodThroughCrossing = "8",
    AtCrossing = "9",
    GoodForTimeGft = "A",
    GoodForAuctionGfa = "B"
}
export declare enum Urgency {
    Normal = "0",
    Flash = "1",
    Background = "2"
}
export declare enum SettlType {
    RegularFxSpotSettlementT1OrT2DependingOnCurrency = "0",
    CashTodT0 = "1",
    NextDayTomT1 = "2",
    T2 = "3",
    T3 = "4",
    T4 = "5",
    Future = "6",
    WhenAndIfIssued = "7",
    SellersOption = "8",
    T5 = "9",
    BrokenDate = "B",
    FxSpotNextSettlementSpot1AkaNextDay = "C"
}
export declare enum SymbolSfx {
    EucpWithLumpSumInterestRatherThanDiscountPrice = "CD",
    WhenIssuedForASecurityToBeReissuedUnderAnOldCusipOrIsin = "WI"
}
export declare enum AllocTransType {
    New = "0",
    Replace = "1",
    Cancel = "2",
    PreliminaryWithoutMiscFeesAndNetMoneyRemovedReplaced = "3",
    CalculatedIncludesMiscFeesAndNetMoneyRemovedReplaced = "4",
    CalculatedWithoutPreliminarySentUnsolicitedByBrokerIncludesMiscFeesAndNetMoneyRemovedReplaced = "5",
    Reversal = "6"
}
export declare enum PositionEffect {
    Close = "C",
    Fifo = "F",
    Open = "O",
    Rolled = "R",
    CloseButNotifyOnOpen = "N",
    Default = "D"
}
export declare enum ProcessCode {
    Regular = "0",
    SoftDollar = "1",
    StepIn = "2",
    StepOut = "3",
    SoftDollarStepIn = "4",
    SoftDollarStepOut = "5",
    PlanSponsor = "6"
}
export declare enum AllocStatus {
    AcceptedSuccessfullyProcessed = 0,
    BlockLevelReject = 1,
    AccountLevelReject = 2,
    ReceivedReceivedNotYetProcessed = 3,
    Incomplete = 4,
    RejectedByIntermediary = 5,
    AllocationPending = 6,
    Reversed = 7,
    CancelledByIntermediary = 8,
    Claimed = 9,
    Refused = 10,
    PendingGiveUpApproval = 11,
    Cancelled = 12,
    PendingTakeUpApproval = 13,
    ReversalPending = 14
}
export declare enum AllocRejCode {
    UnknownOrMissingAccountS = 0,
    IncorrectOrMissingBlockQuantity = 1,
    IncorrectOrMissingAveragePrice = 2,
    UnknownExecutingBrokerMnemonic = 3,
    IncorrectOrMissingCommission = 4,
    UnknownOrderId37 = 5,
    UnknownListId66 = 6,
    OtherFurtherInText58 = 7,
    IncorrectOrMissingAllocatedQuantity = 8,
    CalculationDifference = 9,
    UnknownOrStaleExecId = 10,
    MismatchedData = 11,
    UnknownClOrdId = 12,
    WarehouseRequestRejected = 13,
    DuplicateOrMissingIndividualAllocId467 = 14,
    TradeNotRecognized = 15,
    TradePreviouslyAllocated = 16,
    IncorrectOrMissingInstrument = 17,
    IncorrectOrMissingSettlementDate = 18,
    IncorrectOrMissingFundIdOrFundName = 19,
    IncorrectOrMissingSettlementInstructions = 20,
    IncorrectOrMissingFees = 21,
    IncorrectOrMissingTax = 22,
    UnknownOrMissingParty = 23,
    IncorrectOrMissingSide = 24,
    IncorrectOrMissingNetMoney = 25,
    IncorrectOrMissingTradeDate = 26,
    IncorrectOrMissingSettlementCurrencyInstructions = 27,
    IncorrrectOrMissingProcessCode81 = 28,
    Other = 99
}
export declare enum EmailType {
    New = "0",
    Reply = "1",
    AdminReply = "2"
}
export declare enum PossResend {
    OriginalTransmission = "N",
    PossibleResend = "Y"
}
export declare enum CxlRejReason {
    TooLateToCancel = 0,
    UnknownOrder = 1,
    BrokerExchangeOption = 2,
    OrderAlreadyInPendingCancelOrPendingReplaceStatus = 3,
    UnableToProcessOrderMassCancelRequest = 4,
    OrigOrdModTime586DidNotMatchLastTransactTime60OfOrder = 5,
    DuplicateClOrdId11Received = 6,
    PriceExceedsCurrentPrice = 7,
    PriceExceedsCurrentPriceBand = 8,
    InvalidPriceIncrement = 18,
    Other = 99
}
export declare enum OrdRejReason {
    BrokerExchangeOption = 0,
    UnknownSymbol = 1,
    ExchangeClosed = 2,
    OrderExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownOrder = 5,
    DuplicateOrderEGDupeClOrdId = 6,
    DuplicateOfAVerballyCommunicatedOrder = 7,
    StaleOrder = 8,
    TradeAlongRequired = 9,
    InvalidInvestorId = 10,
    UnsupportedOrderCharacteristic = 11,
    SurveillanceOption = 12,
    IncorrectQuantity = 13,
    IncorrectAllocatedQuantity = 14,
    UnknownAccountS = 15,
    PriceExceedsCurrentPriceBand = 16,
    InvalidPriceIncrement = 18,
    ReferencePriceNotAvailable = 19,
    NotionalValueExceedsThreshold = 20,
    AlgorithmRiskThresholdBreached = 21,
    ShortSellNotPermitted = 22,
    ShortSellRejectedDueToSecurityPreBorrowRestriction = 23,
    ShortSellRejectedDueToAccountPreBorrowRestriction = 24,
    InsufficientCreditLimit = 25,
    ExceededClipSizeLimit = 26,
    ExceededMaximumNotionalOrderAmount = 27,
    ExceededDv01Pv01Limit = 28,
    ExceededCs01Limit = 29,
    Other = 99
}
export declare enum IOIQualifier {
    QuantityIsNegotiable = "1",
    AllowLateBids = "2",
    ImmediateOrCounter = "3",
    AutoTrade = "4",
    AllOrNoneAon = "A",
    MarketOnCloseMocHeldToClose = "B",
    AtTheCloseAroundNotHeldToClose = "C",
    VwapVolumeWeightedAveragePrice = "D",
    Axe = "E",
    AxeOnBid = "F",
    AxeOnOffer = "G",
    ClientNaturalWorking = "H",
    InTouchWith = "I",
    PositionWanted = "J",
    MarketMaking = "K",
    Limit = "L",
    MoreBehind = "M",
    ClientNaturalBlock = "N",
    AtTheOpen = "O",
    TakingAPosition = "P",
    AtTheMarketPreviouslyCalledCurrentQuote = "Q",
    ReadyToTrade = "R",
    InventoryOrPortfolioShown = "S",
    ThroughTheDay = "T",
    Unwind = "U",
    Versus = "V",
    IndicationWorkingAway = "W",
    CrossingOpportunity = "X",
    AtTheMidpoint = "Y",
    PreOpen = "Z",
    AutomaticSpot = "a",
    PlatformCalculatedSpot = "b",
    OutsideSpread = "c",
    DeferredSpot = "d",
    NegotiatedSpot = "n"
}
export declare enum ReportToExch {
    IndicatesThePartySendingMessageWillReportTrade = "N",
    IndicatesThePartyReceivingMessageMustReportTrade = "Y"
}
export declare enum LocateReqd {
    IndicatesTheBrokerIsNotRequiredToLocate = "N",
    IndicatesTheBrokerIsResponsibleForLocatingTheStock = "Y"
}
export declare enum ForexReq {
    DoNotExecuteForexAfterSecurityTrade = "N",
    ExecuteForexAfterSecurityTrade = "Y"
}
export declare enum DKReason {
    UnknownSecurity = "A",
    WrongSide = "B",
    QuantityExceedsOrder = "C",
    NoMatchingOrder = "D",
    PriceExceedsLimit = "E",
    CalculationDifference = "F",
    NoMatchingExecutionReport358 = "G",
    Other = "Z"
}
export declare enum IOINaturalFlag {
    NotNatural = "N",
    Natural = "Y"
}
export declare enum MiscFeeType {
    RegulatoryEGSec = "1",
    Tax = "2",
    LocalCommission = "3",
    ExchangeFees = "4",
    Stamp = "5",
    Levy = "6",
    Other = "7",
    Markup = "8",
    ConsumptionTax = "9",
    PerTransaction = "10",
    Conversion = "11",
    Agent = "12",
    TransferFee = "13",
    SecurityLending = "14",
    TradeReporting = "15",
    TaxOnPrincipalAmount = "16",
    TaxOnAccruedInterestAmount = "17",
    NewIssuanceFee = "18",
    ServiceFee = "19",
    OddLotFee = "20",
    AuctionFee = "21",
    ValueAddedTaxVat = "22",
    SalesTax = "23"
}
export declare enum ExecType {
    New = "0",
    DoneForDay = "3",
    Canceled = "4",
    Replaced = "5",
    PendingCancelEGResultOfOrderCancelRequest = "6",
    Stopped = "7",
    Rejected = "8",
    Suspended = "9",
    PendingNew = "A",
    Calculated = "B",
    Expired = "C",
    RestatedExecutionReportSentUnsolicitedBySellsideWithExecRestatementReason378Set = "D",
    PendingReplaceEGResultOfOrderCancelReplaceRequest = "E",
    TradePartialFillOrFill = "F",
    TradeCorrect = "G",
    TradeCancel = "H",
    OrderStatus = "I",
    TradeInAClearingHold = "J",
    TradeHasBeenReleasedToClearing = "K",
    TriggeredOrActivatedBySystem = "L",
    Locked = "M",
    Released = "N"
}
export declare enum SettlCurrFxRateCalc {
    Multiply = "M",
    Divide = "D"
}
export declare enum SettlInstMode {
    DefaultReplaced = "0",
    StandingInstructionsProvided = "1",
    SpecificAllocationAccountOverridingReplaced = "2",
    SpecificAllocationAccountStandingReplaced = "3",
    SpecificOrderForASingleAccountForCiv = "4",
    RequestReject = "5"
}
export declare enum SettlInstTransType {
    New = "N",
    Cancel = "C",
    Replace = "R",
    Restate = "T"
}
export declare enum SettlInstSource {
    BrokersInstructions = "1",
    InstitutionsInstructions = "2",
    InvestorEGCivUse = "3"
}
export declare enum SecurityType {
    EuroSupranationalCoupons = "EUSUPRA",
    CorporateBond = "CORP",
    ForeignExchangeContract = "FOR",
    CommonStock = "CS",
    Repurchase = "REPO",
    BradyBond = "BRADY",
    TermLoan = "TERM",
    BankersAcceptance = "BA",
    AssetBackedSecurities = "ABS",
    OtherAnticipationNotesBanGanEtc = "AN",
    MutualFund = "MF",
    FederalAgencyCoupon = "FAC",
    CorporatePrivatePlacement = "CPP",
    PreferredStock = "PS",
    Forward = "FORWARD",
    CanadianTreasuryNotes = "CAN",
    RevolverLoan = "RVLV",
    BankDepositoryNote = "BDN",
    CanadianMortgageBonds = "CMB",
    CertificateOfObligation = "COFO",
    MultilegInstrument = "MLEG",
    NonDeliverableForward = "FXNDF",
    Cap = "CAP",
    FederalAgencyDiscountNote = "FADN",
    ConvertibleBond = "CB",
    CreditDefaultSwap = "CDS",
    BuySellback = "BUYSELL",
    CanadianTreasuryBills = "CTB",
    RevolverTermLoan = "RVLVTRM",
    BankNotes = "BN",
    CorpMortgageBackedSecurities = "CMBS",
    CertificateOfParticipation = "COFP",
    NoSecurityType = "NONE",
    FxSpot = "FXSPOT",
    UsTreasuryNoteDeprecatedValueUseTnote = "UST",
    PrivateExportFunding = "PEF",
    DualCurrency = "DUAL",
    SecuritiesLoan = "SECLOAN",
    EuroSovereigns = "EUSOV",
    BridgeLoan = "BRIDGE",
    BillOfExchanges = "BOX",
    CollateralizedMortgageObligation = "CMO",
    GeneralObligationBonds = "GO",
    FxForward = "FXFWD",
    Collar = "CLLR",
    UsTreasuryBillDeprecatedValueUseTbill = "USTB",
    UsdSupranationalCoupons = "SUPRA",
    EuroCorporateBond = "EUCORP",
    SecuritiesPledge = "SECPLEDGE",
    CanadianProvincialBonds = "PROV",
    LetterOfCredit = "LOFC",
    CanadianMoneyMarkets = "CAMM",
    IoetteMortgage = "IET",
    MandatoryTender = "MT",
    FxSwap = "FXSWAP",
    CommoditySwap = "CMDTYSWAP",
    EuroCorporateFloatingRateNotes = "EUFRN",
    TreasuryBillNonUs = "TB",
    SwingLineFacility = "SWING",
    CertificateOfDeposit = "CD",
    MortgageBackedSecurities = "MBS",
    RevenueAnticipationNote = "RAN",
    WildcardEntryForUseOnSecurityDefinitionRequest = "?",
    DeliveryVersusPledge = "DVPLDG",
    Exotic = "EXOTIC",
    UsCorporateFloatingRateNotes = "FRN",
    OptionsOnCombo = "OOC",
    UsTreasuryBond = "TBOND",
    DebtorInPossession = "DINP",
    CallLoans = "CL",
    MortgageInterestOnly = "MIO",
    RevenueBonds = "REV",
    Cash = "CASH",
    Floor = "FLR",
    CollateralBasket = "COLLBSKT",
    IndexedLinked = "XLINKD",
    InterestStripFromAnyBondOrNote = "TINT",
    Defaulted = "DEFLTED",
    CommercialPaper = "CP",
    MortgagePrincipalOnly = "MPO",
    SpecialAssessment = "SPCLA",
    ForwardRateAgreement = "FRA",
    StructuredNotes = "STRUCT",
    Future = "FUT",
    UsTreasuryBill = "TBILL",
    TreasuryInflationProtectedSecurities = "TIPS",
    Withdrawn = "WITHDRN",
    DepositNotes = "DN",
    MortgagePrivatePlacement = "MPP",
    SpecialObligation = "SPCLO",
    YankeeCorporateBond = "YANK",
    PrincipalStripOfACallableBondOrNote = "TCAL",
    Replaced = "REPLACD",
    EuroCertificateOfDeposit = "EUCD",
    MiscellaneousPassThrough = "MPT",
    SpecialTax = "SPCLT",
    DerivativeForward = "FWD",
    InterestRateSwap = "IRS",
    PrincipalStripFromANonCallableBondOrNote = "TPRN",
    Matured = "MATURED",
    EuroCommercialPaper = "EUCP",
    Pfandbriefe = "PFAND",
    TaxAnticipationNote = "TAN",
    TotalReturnSwap = "TRS",
    UsTreasuryNote = "TNOTE",
    AmendedRestated = "AMENDED",
    LiquidityNote = "LQN",
    ToBeAnnounced = "TBA",
    TaxAllocation = "TAXA",
    LoanLease = "LOANLEASE",
    Retired = "RETIRED",
    MediumTermNotes = "MTN",
    TaxExemptCommercialPaper = "TECP",
    OptionsOnFutures = "OOF",
    Overnight = "ONITE",
    TaxableMunicipalCp = "TMCP",
    OptionsOnPhysicalUseNotRecommended = "OOP",
    PromissoryNote = "PN",
    ShortTermLoanNote = "STN",
    TaxRevenueAnticipationNote = "TRAN",
    Option = "OPT",
    PlazosFijos = "PZFJ",
    VariableRateDemandNote = "VRDN",
    SecuredLiquidityNote = "SLQN",
    Warrant = "WAR",
    SpotForward = "SPOTFWD",
    TimeDeposit = "TD",
    SwapOption = "SWAPTION",
    Transmission = "XMISSION",
    TermLiquidityNote = "TLQN",
    GeneralTypeForAContractBasedOnAnEstablishedIndex = "INDEX",
    ExtendedCommNote = "XCN",
    BondBasket = "BDBSKT",
    YankeeCertificateOfDeposit = "YCD",
    ContractForDifference = "CFD",
    CorrelationSwap = "CRLTNSWAP",
    DividendSwap = "DVDNDSWAP",
    EquityBasket = "EQBSKT",
    EquityForward = "EQFWD",
    ReturnSwap = "RTRNSWAP",
    VarianceSwap = "VARSWAP"
}
export declare enum StandInstDbType {
    Other = 0,
    DtcSid = 1,
    ThomsonAlert = 2,
    AGlobalCustodianStandInstDbName70MustBeProvided = 3,
    AccountNet = 4
}
export declare enum SettlDeliveryType {
    VersusPaymentDeliverIfSellOrReceiveIfBuyVsAgainstPayment = 0,
    FreeDeliverIfSellOrReceiveIfBuyFree = 1,
    TriParty = 2,
    HoldInCustody = 3
}
export declare enum AllocLinkType {
    FxNetting = 0,
    FxSwap = 1
}
export declare enum PutOrCall {
    Put = 0,
    Call = 1
}
export declare enum CoveredOrUncovered {
    Covered = 0,
    Uncovered = 1
}
export declare enum NotifyBrokerOfCredit {
    DetailsShouldNotBeCommunicated = "N",
    DetailsShouldBeCommunicated = "Y"
}
export declare enum AllocHandlInst {
    Match = 1,
    Forward = 2,
    ForwardAndMatch = 3
}
export declare enum RoutingType {
    TargetFirm = 1,
    TargetList = 2,
    BlockFirm = 3,
    BlockList = 4,
    TargetPerson = 5,
    BlockPerson = 6
}
export declare enum BenchmarkCurveName {
    Eonia = "EONIA",
    Eurepo = "EUREPO",
    EuriborDeprecatedUseEnumEuriborInstead = "Euribor",
    FutureSwap = "FutureSWAP",
    Libid = "LIBID",
    LiborLondonInterBankOffer = "LIBOR",
    MuniAaa = "MuniAAA",
    Other = "OTHER",
    Pfandbriefe = "Pfandbriefe",
    Sonia = "SONIA",
    Swap = "SWAP",
    Treasury = "Treasury",
    UsFederalReserveFedFundsEffectiveRate = "FEDEFF",
    UsFedFundsTargetRate = "FEDOPEN",
    EuroInterbankOfferRate = "EURIBOR"
}
export declare enum StipulationType {
    AlternativeMinimumTaxYN = "AMT",
    AbsolutePrepaymentSpeed = "ABS",
    IncurredRecoveryYN = "INCURRCVY",
    AutoReinvestmentAtRateOrBetter = "AUTOREINV",
    ConstantPrepaymentPenalty = "CPP",
    AdditionalTerm = "ADDTRM",
    BankQualifiedYN = "BANKQUAL",
    ConstantPrepaymentRate = "CPR",
    ModifiedEquityDelivery = "MODEQTYDLVY",
    BargainConditionsSeeStipulationValue234ForValues = "BGNCON",
    ConstantPrepaymentYield = "CPY",
    NoReferenceObligationYN = "NOREFOBLIG",
    CouponRange = "COUPON",
    FinalCprOfHomeEquityPrepaymentCurve = "HEP",
    UnknownReferenceObligationYN = "UNKREFOBLIG",
    IsoCurrencyCode = "CURRENCY",
    PercentOfManufacturedHousingPrepaymentCurve = "MHP",
    AllGuaranteesYN = "ALLGUARANTEES",
    CustomStartEndDate = "CUSTOMDATE",
    MonthlyPrepaymentRate = "MPR",
    ReferencePriceYN = "REFPX",
    GeographicsAndRangeEx234Ca080MinimumOf80CaliforniaAssets = "GEOG",
    PercentOfProspectusPrepaymentCurve = "PPC",
    ReferencePolicyYN = "REFPOLICY",
    ValuationDiscount = "HAIRCUT",
    PercentOfBmaPrepaymentCurve = "PSA",
    SecuredListYN = "SECRDLIST",
    InsuredYN = "INSURED",
    SingleMonthlyMortality = "SMM",
    YearOrYearMonthOfIssueEx234200209 = "ISSUE",
    IssuersTicker = "ISSUER",
    IssueSizeRange = "ISSUESIZE",
    LookbackDays = "LOOKBACK",
    ExplicitLotIdentifier = "LOT",
    LotVarianceValueInPercentMaximumOverOrUnderAllocationAllowed = "LOTVAR",
    MaturityYearAndMonth = "MAT",
    MaturityRange = "MATURITY",
    MaximumSubstitutionsRepo = "MAXSUBS",
    MinimumDenomination = "MINDNOM",
    MinimumIncrement = "MININCR",
    MinimumQuantity = "MINQTY",
    PaymentFrequencyCalendar = "PAYFREQ",
    NumberOfPieces = "PIECES",
    PoolsMaximum = "PMAX",
    PoolsPerLot = "PPL",
    PoolsPerMillion = "PPM",
    PoolsPerTrade = "PPT",
    PriceRange = "PRICE",
    PricingFrequency = "PRICEFREQ",
    ProductionYear = "PROD",
    CallProtection = "PROTECT",
    Purpose = "PURPOSE",
    BenchmarkPriceSource = "PXSOURCE",
    RatingSourceAndRange = "RATING",
    TypeOfRedemptionValuesAreNonCallablePrefundedEscrowedToMaturityPutableConvertible = "REDEMPTION",
    RestrictedYN = "RESTRICTED",
    MarketSector = "SECTOR",
    SecurityTypeIncludedOrExcluded = "SECTYPE",
    Structure = "STRUCT",
    SubstitutionsFrequencyRepo = "SUBSFREQ",
    SubstitutionsLeftRepo = "SUBSLEFT",
    FreeformText = "TEXT",
    TradeVarianceValueInPercentMaximumOverOrUnderAllocationAllowed = "TRDVAR",
    WeightedAverageCouponValueInPercentExactOrRangePlusGrossOrNetOfServicingSpreadTheDefaultEx23465NetMinimumOf65NetOfServicingFee = "WAC",
    WeightedAverageLifeCouponValueInPercentExactOrRange = "WAL",
    WeightedAverageLoanAgeValueInMonthsExactOrRange = "WALA",
    WeightedAverageMaturityValueInMonthsExactOrRange = "WAM",
    WholePoolYN = "WHOLE",
    YieldRange = "YIELD",
    AverageFicoScore = "AVFICO",
    OriginalAmount = "ORIGAMT",
    AverageLoanSize = "AVSIZE",
    PoolEffectiveDate = "POOLEFFDT",
    MaximumLoanBalance = "MAXBAL",
    PoolInitialFactor = "POOLINITFCTR",
    PoolIdentifier = "POOL",
    TrancheIdentifier = "TRANCHE",
    TypeOfRollTrade = "ROLLTYPE",
    SubstitutionYN = "SUBSTITUTION",
    ReferenceToRollingOrClosingTrade = "REFTRADE",
    MultipleExchangeFallbackYN = "MULTEXCHFLLBCK",
    PrincipalOfRollingOrClosingTrade = "REFPRIN",
    ComponentSecurityFallbackYN = "COMPSECFLLBCK",
    InterestOfRollingOrClosingTrade = "REFINT",
    LocalJurisdictionYN = "LOCLJRSDCTN",
    AvailableOfferQuantityToBeShownToTheStreet = "AVAILQTY",
    RelevantJurisdictionYN = "RELVJRSDCTN",
    BrokersSalesCredit = "BROKERCREDIT",
    OfferPriceToBeShownToInternalBrokers = "INTERNALPX",
    OfferQuantityToBeShownToInternalBrokers = "INTERNALQTY",
    TheMinimumResidualOfferQuantity = "LEAVEQTY",
    MaximumOrderSize = "MAXORDQTY",
    OrderQuantityIncrement = "ORDRINCR",
    PrimaryOrSecondaryMarketIndicator = "PRIMARY",
    BrokerSalesCreditOverride = "SALESCREDITOVR",
    TradersCredit = "TRADERCREDIT",
    DiscountRateWhenPriceIsDenominatedInPercentOfPar = "DISCOUNT",
    YieldToMaturityWhenYieldType235AndYield236ShowADifferentYield = "YTM"
}
export declare enum YieldType {
    AfterTaxYieldMunicipals = "AFTERTAX",
    AnnualYield = "ANNUAL",
    YieldAtIssueMunicipals = "ATISSUE",
    YieldToAvgMaturity = "AVGMATURITY",
    BookYield = "BOOK",
    YieldToNextCall = "CALL",
    YieldChangeSinceClose = "CHANGE",
    ClosingYield = "CLOSE",
    CompoundYield = "COMPOUND",
    CurrentYield = "CURRENT",
    GvntEquivalentYield = "GOVTEQUIV",
    TrueGrossYield = "GROSS",
    YieldWithInflationAssumption = "INFLATION",
    InverseFloaterBondYield = "INVERSEFLOATER",
    MostRecentClosingYield = "LASTCLOSE",
    ClosingYieldMostRecentMonth = "LASTMONTH",
    ClosingYieldMostRecentQuarter = "LASTQUARTER",
    ClosingYieldMostRecentYear = "LASTYEAR",
    YieldToLongestAverageLife = "LONGAVGLIFE",
    MarkToMarketYield = "MARK",
    YieldToMaturity = "MATURITY",
    YieldToNextRefundSinkingFundBonds = "NEXTREFUND",
    OpenAverageYield = "OPENAVG",
    PreviousCloseYield = "PREVCLOSE",
    ProceedsYield = "PROCEEDS",
    YieldToNextPut = "PUT",
    SemiAnnualYield = "SEMIANNUAL",
    YieldToShortestAverageLife = "SHORTAVGLIFE",
    SimpleYield = "SIMPLE",
    TaxEquivalentYield = "TAXEQUIV",
    YieldToTenderDate = "TENDER",
    TrueYield = "TRUE",
    YieldValueOf132 = "VALUE1_32",
    YieldToWorst = "WORST"
}
export declare enum TradedFlatSwitch {
    NotTradedFlat = "N",
    TradedFlat = "Y"
}
export declare enum SubscriptionRequestType {
    Snapshot = "0",
    SnapshotUpdatesSubscribe = "1",
    DisablePreviousSnapshotUpdateRequestUnsubscribe = "2"
}
export declare enum MDUpdateType {
    FullRefresh = 0,
    IncrementalRefresh = 1
}
export declare enum AggregatedBook {
    BookEntriesToBeAggregated = "Y",
    BookEntriesShouldNotBeAggregated = "N"
}
export declare enum MDEntryType {
    Bid = "0",
    Offer = "1",
    Trade = "2",
    IndexValue = "3",
    OpeningPrice = "4",
    ClosingPrice = "5",
    SettlementPrice = "6",
    TradingSessionHighPrice = "7",
    TradingSessionLowPrice = "8",
    TradingSessionVolumeWeightedAveragePriceVwap = "9",
    Imbalance = "A",
    TradeVolume = "B",
    OpenInterest = "C",
    CompositeUnderlyingPrice = "D",
    SimulatedSellPrice = "E",
    SimulatedBuyPrice = "F",
    MarginRate = "G",
    MidPrice = "H",
    EmptyBook = "J",
    SettleHighPrice = "K",
    SettleLowPrice = "L",
    PriorSettlePrice = "M",
    SessionHighBid = "N",
    SessionLowOffer = "O",
    EarlyPrices = "P",
    AuctionClearingPrice = "Q",
    SwapValueFactorSvfForSwapsClearedThroughACentralCounterpartyCcp = "S",
    DailyValueAdjustmentForLongPositions = "R",
    CumulativeValueAdjustmentForLongPositions = "T",
    DailyValueAdjustmentForShortPositions = "U",
    CumulativeValueAdjustmentForShortPositions = "V",
    FixingPrice = "W",
    CashRate = "X",
    RecoveryRate = "Y",
    RecoveryRateForLongPositions = "Z",
    RecoveryRateForShortPositions = "a",
    MarketBid = "b",
    MarketOffer = "c",
    ShortSaleMinimumPrice = "d",
    PreviousClosingPrice = "e"
}
export declare enum TickDirection {
    PlusTick = "0",
    ZeroPlusTick = "1",
    MinusTick = "2",
    ZeroMinusTick = "3"
}
export declare enum QuoteCondition {
    ReservedSam = "0",
    NoActiveSam = "1",
    Restricted = "2",
    RestOfBookVwap = "3",
    BetterPricesInConditionalOrders = "4",
    MedianPrice = "5",
    FullCurve = "6",
    FlatCurve = "7",
    OpenActive = "A",
    ClosedInactive = "B",
    ExchangeBest = "C",
    ConsolidatedBest = "D",
    Locked = "E",
    Crossed = "F",
    Depth = "G",
    FastTrading = "H",
    NonFirm = "I",
    ManualSlowQuote = "L",
    OutrightPrice = "J",
    ImpliedPrice = "K",
    DepthOnOffer = "M",
    DepthOnBid = "N",
    Closing = "O",
    NewsDissemination = "P",
    TradingRange = "Q",
    OrderInflux = "R",
    DueToRelated = "S",
    NewsPending = "T",
    AdditionalInfo = "U",
    AdditionalInfoDueToRelated = "V",
    Resume = "W",
    ViewOfCommon = "X",
    VolumeAlert = "Y",
    OrderImbalance = "Z",
    EquipmentChangeover = "a",
    NoOpenNoResume = "b",
    RegularEth = "c",
    AutomaticExecution = "d",
    AutomaticExecutionEth = "e",
    FastMarketEth = "f ",
    InactiveEth = "g",
    Rotation = "h",
    RotationEth = "i",
    Halt = "j",
    HaltEth = "k",
    DueToNewsDissemination = "l",
    DueToNewsPending = "m",
    TradingResume = "n",
    OutOfSequence = "o",
    BidSpecialist = "p",
    OfferSpecialist = "q",
    BidOfferSpecialist = "r",
    EndOfDaySam = "s",
    ForbiddenSam = "t",
    FrozenSam = "u",
    PreOpeningSam = "v",
    OpeningSam = "w",
    OpenSam = "x",
    SurveillanceSam = "y",
    SuspendedSam = "z"
}
export declare enum TradeCondition {
    Cancel = "0",
    ImpliedTrade = "1",
    MarketplaceEnteredTrade = "2",
    MultiAssetClassMultilegTrade = "3",
    MultilegToMultilegTrade = "4",
    ShortSaleMinimumPrice = "5",
    Benchmark = "6",
    CashOnlyMarket = "A",
    AveragePriceTrade = "B",
    CashTradeSameDayClearing = "C",
    NextDayOnlyMarket = "D",
    OpeningReopeningTradeDetail = "E",
    IntradayTradeDetail = "F",
    Rule127TradeNyse = "G",
    Rule155TradeAmex = "H",
    SoldLastLateReporting = "I",
    NextDayTradeNextDayClearing = "J",
    OpenedLateReportOfOpenedTrade = "K",
    Seller = "L",
    SoldOutOfSequence = "M",
    StoppedStockGuaranteeOfPriceButDoesNotExecuteTheOrder = "N",
    ImbalanceMoreBuyersCannotBeUsedInCombinationWithQ = "P",
    ImbalanceMoreSellersCannotBeUsedInCombinationWithP = "Q",
    OpeningPrice = "R",
    BargainConditionLse = "S",
    ConvertedPriceIndicator = "T",
    ExchangeLast = "U",
    FinalPriceOfSession = "V",
    ExPit = "W",
    Crossed = "X",
    TradesResultingFromManualSlowQuote = "Y",
    TradesResultingFromIntermarketSweep = "Z",
    VolumeOnly = "a",
    DirectPlus = "b",
    Acquisition = "c",
    Bunched = "d",
    Distribution = "e",
    BunchedSale = "f",
    SplitTrade = "g",
    CancelStopped = "h",
    CancelEth = "i",
    CancelStoppedEth = "j",
    OutOfSequenceEth = "k",
    CancelLastEth = "l",
    SoldLastSaleEth = "m",
    CancelLast = "n",
    SoldLastSale = "o",
    CancelOpen = "p",
    CancelOpenEth = "q",
    OpenedSaleEth = "r",
    CancelOnly = "s",
    CancelOnlyEth = "t",
    LateOpenEth = "u",
    AutoExecutionEth = "v",
    Reopen = "w",
    ReopenEth = "x",
    Adjusted = "y",
    AdjustedEth = "z",
    Spread = "AA",
    SpreadEth = "AB",
    Straddle = "AC",
    StraddleEth = "AD",
    Stopped = "AE",
    StoppedEth = "AF",
    RegularEth = "AG",
    Combo = "AH",
    ComboEth = "AI",
    OfficialClosingPrice = "AJ",
    PriorReferencePrice = "AK",
    StoppedSoldLast = "AL",
    StoppedOutOfSequence = "AM",
    OfficalClosingPriceDuplicateEnumerationUseAjInstead = "AN",
    CrossedDuplicateEnumerationUseXInstead = "AO",
    FastMarket = "AP",
    AutomaticExecution = "AQ",
    FormT = "AR",
    BasketIndex = "AS",
    BurstBasket = "AT",
    TradeThroughExempt = "AU",
    QuoteSpread = "AV",
    LastAuctionPrice = "AW",
    HighPrice = "AX",
    LowPrice = "AY",
    SystematicInternaliserSi = "AZ",
    AwayMarket = "BA",
    MidPointPrice = "BB",
    TradedBeforeIssueDate = "BC",
    PreviousClosingPrice = "BD",
    NationalBestBidAndOffer = "BE"
}
export declare enum MDUpdateAction {
    New = "0",
    Change = "1",
    Delete = "2",
    DeleteThru = "3",
    DeleteFrom = "4",
    Overlay = "5"
}
export declare enum MDReqRejReason {
    UnknownSymbol = "0",
    DuplicateMdReqId = "1",
    InsufficientBandwidth = "2",
    InsufficientPermissions = "3",
    UnsupportedSubscriptionRequestType = "4",
    UnsupportedMarketDepth = "5",
    UnsupportedMdUpdateType = "6",
    UnsupportedAggregatedBook = "7",
    UnsupportedMdEntryType = "8",
    UnsupportedTradingSessionId = "9",
    UnsupportedScope = "A",
    UnsupportedOpenCloseSettleFlag = "B",
    UnsupportedMdImplicitDelete = "C",
    InsufficientCredit = "D"
}
export declare enum DeleteReason {
    CancellationTradeBust = "0",
    Error = "1"
}
export declare enum OpenCloseSettlFlag {
    DailyOpenCloseSettlementEntry = "0",
    SessionOpenCloseSettlementEntry = "1",
    DeliverySettlementEntry = "2",
    ExpectedEntry = "3",
    EntryFromPreviousBusinessDay = "4",
    TheoreticalPriceValue = "5"
}
export declare enum FinancialStatus {
    Bankrupt = "1",
    PendingDelisting = "2",
    Restricted = "3"
}
export declare enum CorporateAction {
    ExDividend = "A",
    ExDistribution = "B",
    ExRights = "C",
    New = "D",
    ExInterest = "E",
    CashDividend = "F",
    StockDividend = "G",
    NonIntegerStockSplit = "H",
    ReverseStockSplit = "I",
    StandardIntegerStockSplit = "J",
    PositionConsolidation = "K",
    LiquidationReorganization = "L",
    MergerReorganization = "M",
    RightsOffering = "N",
    ShareholderMeeting = "O",
    Spinoff = "P",
    TenderOffer = "Q",
    Warrant = "R",
    SpecialAction = "S",
    SymbolConversion = "T",
    CusipNameChange = "U",
    LeapRollover = "V",
    SuccessionEvent = "W"
}
export declare enum QuoteStatus {
    Accepted = 0,
    CanceledForSpecificSecurities = 1,
    CanceledForSpecificSecurityTypes167 = 2,
    CanceledForUnderlying = 3,
    CanceledAll = 4,
    Rejected = 5,
    RemovedFromMarket = 6,
    Expired = 7,
    Query = 8,
    QuoteNotFound = 9,
    Pending = 10,
    Pass = 11,
    LockedMarketWarning = 12,
    CrossedMarketWarning = 13,
    CanceledDueToLockedMarket = 14,
    CanceledDueToCrossedMarket = 15,
    Active = 16,
    Canceled = 17,
    UnsolicitedQuoteReplenishment = 18,
    PendingEndTrade = 19,
    TooLateToEnd = 20,
    Traded = 21,
    TradedAndRemoved = 22
}
export declare enum QuoteCancelType {
    CancelForOneOrMoreSecurities = 1,
    CancelForSecurityTypeS = 2,
    CancelForUnderlyingSecurity = 3,
    CancelAllQuotes = 4,
    CancelSpecifiedSingleQuote = 5,
    CancelByTypeOfQuote = 6,
    CancelForSecurityIssuer = 7,
    CancelForIssuerOfUnderlyingSecurity = 8
}
export declare enum QuoteRejectReason {
    UnknownSymbolSecurity = 1,
    ExchangeSecurityClosed = 2,
    QuoteRequestExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownQuote = 5,
    DuplicateQuote = 6,
    InvalidBidAskSpread = 7,
    InvalidPrice = 8,
    NotAuthorizedToQuoteSecurity = 9,
    PriceExceedsCurrentPriceBand = 10,
    QuoteLockedUnableToUpdateCancel = 11,
    InvalidOrUnknownSecurityIssuer = 12,
    InvalidOrUnknownIssuerOfUnderlyingSecurity = 13,
    NotionalValueExceedsThreshold = 14,
    PriceExceedsCurrentPriceBand2 = 15,
    ReferencePriceNotAvailable = 16,
    InsufficientCreditLimit = 17,
    ExceededClipSizeLimit = 18,
    ExceededMaximumNotionalOrderAmount = 19,
    ExceededDv01Pv01Limit = 20,
    ExceededCs01Limit = 21,
    Other = 99
}
export declare enum QuoteResponseLevel {
    NoAcknowledgement = 0,
    AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
    AcknowledgeEachQuoteMessage = 2,
    SummaryAcknowledgement = 3
}
export declare enum QuoteRequestType {
    Manual = 1,
    Automatic = 2,
    ConfirmQuote = 3
}
export declare enum UnderlyingSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum UnderlyingSecurityType {
    EuroSupranationalCoupons = "EUSUPRA",
    CorporateBond = "CORP",
    ForeignExchangeContract = "FOR",
    CommonStock = "CS",
    Repurchase = "REPO",
    BradyBond = "BRADY",
    TermLoan = "TERM",
    BankersAcceptance = "BA",
    AssetBackedSecurities = "ABS",
    OtherAnticipationNotesBanGanEtc = "AN",
    MutualFund = "MF",
    FederalAgencyCoupon = "FAC",
    CorporatePrivatePlacement = "CPP",
    PreferredStock = "PS",
    Forward = "FORWARD",
    CanadianTreasuryNotes = "CAN",
    RevolverLoan = "RVLV",
    BankDepositoryNote = "BDN",
    CanadianMortgageBonds = "CMB",
    CertificateOfObligation = "COFO",
    MultilegInstrument = "MLEG",
    NonDeliverableForward = "FXNDF",
    Cap = "CAP",
    FederalAgencyDiscountNote = "FADN",
    ConvertibleBond = "CB",
    CreditDefaultSwap = "CDS",
    BuySellback = "BUYSELL",
    CanadianTreasuryBills = "CTB",
    RevolverTermLoan = "RVLVTRM",
    BankNotes = "BN",
    CorpMortgageBackedSecurities = "CMBS",
    CertificateOfParticipation = "COFP",
    NoSecurityType = "NONE",
    FxSpot = "FXSPOT",
    UsTreasuryNoteDeprecatedValueUseTnote = "UST",
    PrivateExportFunding = "PEF",
    DualCurrency = "DUAL",
    SecuritiesLoan = "SECLOAN",
    EuroSovereigns = "EUSOV",
    BridgeLoan = "BRIDGE",
    BillOfExchanges = "BOX",
    CollateralizedMortgageObligation = "CMO",
    GeneralObligationBonds = "GO",
    FxForward = "FXFWD",
    Collar = "CLLR",
    UsTreasuryBillDeprecatedValueUseTbill = "USTB",
    UsdSupranationalCoupons = "SUPRA",
    EuroCorporateBond = "EUCORP",
    SecuritiesPledge = "SECPLEDGE",
    CanadianProvincialBonds = "PROV",
    LetterOfCredit = "LOFC",
    CanadianMoneyMarkets = "CAMM",
    IoetteMortgage = "IET",
    MandatoryTender = "MT",
    FxSwap = "FXSWAP",
    CommoditySwap = "CMDTYSWAP",
    EuroCorporateFloatingRateNotes = "EUFRN",
    TreasuryBillNonUs = "TB",
    SwingLineFacility = "SWING",
    CertificateOfDeposit = "CD",
    MortgageBackedSecurities = "MBS",
    RevenueAnticipationNote = "RAN",
    WildcardEntryForUseOnSecurityDefinitionRequest = "?",
    DeliveryVersusPledge = "DVPLDG",
    Exotic = "EXOTIC",
    UsCorporateFloatingRateNotes = "FRN",
    OptionsOnCombo = "OOC",
    UsTreasuryBond = "TBOND",
    DebtorInPossession = "DINP",
    CallLoans = "CL",
    MortgageInterestOnly = "MIO",
    RevenueBonds = "REV",
    Cash = "CASH",
    Floor = "FLR",
    CollateralBasket = "COLLBSKT",
    IndexedLinked = "XLINKD",
    InterestStripFromAnyBondOrNote = "TINT",
    Defaulted = "DEFLTED",
    CommercialPaper = "CP",
    MortgagePrincipalOnly = "MPO",
    SpecialAssessment = "SPCLA",
    ForwardRateAgreement = "FRA",
    StructuredNotes = "STRUCT",
    Future = "FUT",
    UsTreasuryBill = "TBILL",
    TreasuryInflationProtectedSecurities = "TIPS",
    Withdrawn = "WITHDRN",
    DepositNotes = "DN",
    MortgagePrivatePlacement = "MPP",
    SpecialObligation = "SPCLO",
    YankeeCorporateBond = "YANK",
    PrincipalStripOfACallableBondOrNote = "TCAL",
    Replaced = "REPLACD",
    EuroCertificateOfDeposit = "EUCD",
    MiscellaneousPassThrough = "MPT",
    SpecialTax = "SPCLT",
    DerivativeForward = "FWD",
    InterestRateSwap = "IRS",
    PrincipalStripFromANonCallableBondOrNote = "TPRN",
    Matured = "MATURED",
    EuroCommercialPaper = "EUCP",
    Pfandbriefe = "PFAND",
    TaxAnticipationNote = "TAN",
    TotalReturnSwap = "TRS",
    UsTreasuryNote = "TNOTE",
    AmendedRestated = "AMENDED",
    LiquidityNote = "LQN",
    ToBeAnnounced = "TBA",
    TaxAllocation = "TAXA",
    LoanLease = "LOANLEASE",
    Retired = "RETIRED",
    MediumTermNotes = "MTN",
    TaxExemptCommercialPaper = "TECP",
    OptionsOnFutures = "OOF",
    Overnight = "ONITE",
    TaxableMunicipalCp = "TMCP",
    OptionsOnPhysicalUseNotRecommended = "OOP",
    PromissoryNote = "PN",
    ShortTermLoanNote = "STN",
    TaxRevenueAnticipationNote = "TRAN",
    Option = "OPT",
    PlazosFijos = "PZFJ",
    VariableRateDemandNote = "VRDN",
    SecuredLiquidityNote = "SLQN",
    Warrant = "WAR",
    SpotForward = "SPOTFWD",
    TimeDeposit = "TD",
    SwapOption = "SWAPTION",
    Transmission = "XMISSION",
    TermLiquidityNote = "TLQN",
    GeneralTypeForAContractBasedOnAnEstablishedIndex = "INDEX",
    ExtendedCommNote = "XCN",
    BondBasket = "BDBSKT",
    YankeeCertificateOfDeposit = "YCD",
    ContractForDifference = "CFD",
    CorrelationSwap = "CRLTNSWAP",
    DividendSwap = "DVDNDSWAP",
    EquityBasket = "EQBSKT",
    EquityForward = "EQFWD",
    ReturnSwap = "RTRNSWAP",
    VarianceSwap = "VARSWAP"
}
export declare enum UnderlyingSymbolSfx {
    EucpWithLumpSumInterestRatherThanDiscountPrice = "CD",
    WhenIssuedForASecurityToBeReissuedUnderAnOldCusipOrIsin = "WI"
}
export declare enum UnderlyingPutOrCall {
    Put = 0,
    Call = 1
}
export declare enum SecurityRequestType {
    RequestSecurityIdentityAndSpecifications = 0,
    RequestSecurityIdentityForTheSpecificationsProvidedNameOfTheSecurityIsNotSupplied = 1,
    RequestListSecurityTypes = 2,
    RequestListSecuritiesCanBeQualifiedWithSymbolSecurityTypeTradingSessionIdSecurityExchangeIfProvidedThenOnlyListSecuritiesForTheSpecificType = 3,
    Symbol = 4,
    SecurityTypeAndOrCfiCode = 5,
    Product = 6,
    TradingSessionId = 7,
    AllSecurities = 8,
    MarketIdOrMarketIdMarketSegmentId = 9
}
export declare enum SecurityResponseType {
    AcceptSecurityProposalAsIs = 1,
    AcceptSecurityProposalWithRevisionsAsIndicatedInTheMessage = 2,
    ListOfSecurityTypesReturnedPerRequest = 3,
    ListOfSecuritiesReturnedPerRequest = 4,
    RejectSecurityProposal = 5,
    CannotMatchSelectionCriteria = 6
}
export declare enum UnsolicitedIndicator {
    MessageIsBeingSentAsAResultOfAPriorRequest = "N",
    MessageIsBeingSentUnsolicited = "Y"
}
export declare enum SecurityTradingStatus {
    OpeningDelay = 1,
    TradingHalt = 2,
    Resume = 3,
    NoOpenNoResume = 4,
    PriceIndication = 5,
    TradingRangeIndication = 6,
    MarketImbalanceBuy = 7,
    MarketImbalanceSell = 8,
    MarketOnCloseImbalanceBuy = 9,
    MarketOnCloseImbalanceSell = 10,
    NoMarketImbalance = 12,
    NoMarketOnCloseImbalance = 13,
    ItsPreOpening = 14,
    NewPriceIndication = 15,
    TradeDisseminationTime = 16,
    ReadyToTradeStartOfSession = 17,
    NotAvailableForTradingEndOfSession = 18,
    NotTradedOnThisMarket = 19,
    UnknownOrInvalid = 20,
    PreOpen = 21,
    OpeningRotation = 22,
    FastMarket = 23,
    PreCrossSystemIsInAPreCrossStateAllowingMarketToRespondToEitherSideOfCross = 24,
    CrossSystemHasCrossedAPercentageOfTheOrdersAndAllowsMarketToRespondPriorToCrossingRemainingPortion = 25,
    PostClose = 26,
    NoCancel = 27
}
export declare enum HaltReason {
    NewsDissemination = 0,
    OrderInflux = 1,
    OrderImbalance = 2,
    AdditionalInformation = 3,
    NewsPending = 4,
    EquipmentChangeover = 5
}
export declare enum InViewOfCommon {
    HaltWasNotRelatedToAHaltOfTheCommonStock = "N",
    HaltWasDueToCommonStockBeingHalted = "Y"
}
export declare enum DueToRelated {
    HaltWasNotRelatedToAHaltOfTheRelatedSecurity = "N",
    HaltWasDueToRelatedSecurityBeingHalted = "Y"
}
export declare enum Adjustment {
    Cancel = 1,
    Error = 2,
    Correction = 3
}
export declare enum TradingSessionID {
    Day = "1",
    HalfDay = "2",
    Morning = "3",
    Afternoon = "4",
    Evening = "5",
    AfterHours = "6",
    Holiday = "7"
}
export declare enum TradSesMethod {
    Electronic = 1,
    OpenOutcry = 2,
    TwoParty = 3
}
export declare enum TradSesMode {
    Testing = 1,
    Simulated = 2,
    Production = 3
}
export declare enum TradSesStatus {
    Unknown = 0,
    Halted = 1,
    Open = 2,
    Closed = 3,
    PreOpen = 4,
    PreClose = 5,
    RequestRejected = 6
}
export declare enum QuoteEntryRejectReason {
    UnknownSymbolSecurity = 1,
    ExchangeSecurityClosed = 2,
    QuoteRequestExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownQuote = 5,
    DuplicateQuote = 6,
    InvalidBidAskSpread = 7,
    InvalidPrice = 8,
    NotAuthorizedToQuoteSecurity = 9,
    PriceExceedsCurrentPriceBand = 10,
    QuoteLockedUnableToUpdateCancel = 11,
    InvalidOrUnknownSecurityIssuer = 12,
    InvalidOrUnknownIssuerOfUnderlyingSecurity = 13,
    NotionalValueExceedsThreshold = 14,
    PriceExceedsCurrentPriceBand2 = 15,
    ReferencePriceNotAvailable = 16,
    InsufficientCreditLimit = 17,
    ExceededClipSizeLimit = 18,
    ExceededMaximumNotionalOrderAmount = 19,
    ExceededDv01Pv01Limit = 20,
    ExceededCs01Limit = 21,
    Other = 99
}
export declare enum RefMsgType {
    Heartbeat = "0",
    TestRequest = "1",
    ResendRequest = "2",
    Reject = "3",
    SequenceReset = "4",
    Logout = "5",
    Ioi = "6",
    Advertisement = "7",
    ExecutionReport = "8",
    OrderCancelReject = "9",
    Logon = "A",
    News = "B",
    Email = "C",
    NewOrderSingle = "D",
    NewOrderList = "E",
    OrderCancelRequest = "F",
    OrderCancelReplaceRequest = "G",
    OrderStatusRequest = "H",
    AllocationInstruction = "J",
    ListCancelRequest = "K",
    ListExecute = "L",
    ListStatusRequest = "M",
    ListStatus = "N",
    AllocationInstructionAck = "P",
    DontKnowTrade = "Q",
    QuoteRequest = "R",
    Quote = "S",
    SettlementInstructions = "T",
    MarketDataRequest = "V",
    MarketDataSnapshotFullRefresh = "W",
    MarketDataIncrementalRefresh = "X",
    MarketDataRequestReject = "Y",
    QuoteCancel = "Z",
    QuoteStatusRequest = "a",
    MassQuoteAck = "b",
    SecurityDefinitionRequest = "c",
    SecurityDefinition = "d",
    SecurityStatusRequest = "e",
    SecurityStatus = "f",
    TradingSessionStatusRequest = "g",
    TradingSessionStatus = "h",
    MassQuote = "i",
    BusinessMessageReject = "j",
    BidRequest = "k",
    BidResponse = "l",
    ListStrikePrice = "m",
    XmLnonFix = "n",
    RegistrationInstructions = "o",
    RegistrationInstructionsResponse = "p",
    OrderMassCancelRequest = "q",
    OrderMassCancelReport = "r",
    NewOrderCross = "s",
    CrossOrderCancelReplaceRequest = "t",
    CrossOrderCancelRequest = "u",
    SecurityTypeRequest = "v",
    SecurityTypes = "w",
    SecurityListRequest = "x",
    SecurityList = "y",
    DerivativeSecurityListRequest = "z",
    DerivativeSecurityList = "AA",
    NewOrderMultileg = "AB",
    MultilegOrderCancelReplace = "AC",
    TradeCaptureReportRequest = "AD",
    TradeCaptureReport = "AE",
    OrderMassStatusRequest = "AF",
    QuoteRequestReject = "AG",
    RfqRequest = "AH",
    QuoteStatusReport = "AI",
    QuoteResponse = "AJ",
    Confirmation = "AK",
    PositionMaintenanceRequest = "AL",
    PositionMaintenanceReport = "AM",
    RequestForPositions = "AN",
    RequestForPositionsAck = "AO",
    PositionReport = "AP",
    TradeCaptureReportRequestAck = "AQ",
    TradeCaptureReportAck = "AR",
    AllocationReport = "AS",
    AllocationReportAck = "AT",
    ConfirmationAck = "AU",
    SettlementInstructionRequest = "AV",
    AssignmentReport = "AW",
    CollateralRequest = "AX",
    CollateralAssignment = "AY",
    CollateralResponse = "AZ",
    CollateralReport = "BA",
    CollateralInquiry = "BB",
    NetworkCounterpartySystemStatusRequest = "BC",
    NetworkCounterpartySystemStatusResponse = "BD",
    UserRequest = "BE",
    UserResponse = "BF",
    CollateralInquiryAck = "BG",
    ConfirmationRequest = "BH",
    ContraryIntentionReport = "BO",
    SecurityDefinitionUpdateReport = "BP",
    SecurityListUpdateReport = "BK",
    AdjustedPositionReport = "BL",
    AllocationInstructionAlert = "BM",
    ExecutionAck = "BN",
    TradingSessionList = "BJ",
    TradingSessionListRequest = "BI",
    SettlementObligationReport = "BQ",
    DerivativeSecurityListUpdateReport = "BR",
    TradingSessionListUpdateReport = "BS",
    MarketDefinitionRequest = "BT",
    MarketDefinition = "BU",
    MarketDefinitionUpdateReport = "BV",
    ApplicationMessageRequest = "BW",
    ApplicationMessageRequestAck = "BX",
    ApplicationMessageReport = "BY",
    OrderMassActionReport = "BZ",
    OrderMassActionRequest = "CA",
    UserNotification = "CB",
    StreamAssignmentRequest = "CC",
    StreamAssignmentReport = "CD",
    StreamAssignmentReportAck = "CE",
    PartyDetailsListRequest = "CF",
    PartyDetailsListReport = "CG",
    MarginRequirementInquiry = "CH",
    MarginRequirementInquiryAck = "CI",
    MarginRequirementReport = "CJ",
    PartyDetailsListUpdateReport = "CK",
    PartyRiskLimitsRequest = "CL",
    PartyRiskLimitsReport = "CM",
    SecurityMassStatusRequest = "CN",
    SecurityMassStatus = "CO",
    AccountSummaryReport = "CQ",
    PartyRiskLimitsUpdateReport = "CR",
    PartyRiskLimitsDefinitionRequest = "CS",
    PartyRiskLimitsDefinitionRequestAck = "CT",
    PartyEntitlementsRequest = "CU",
    PartyEntitlementsReport = "CV",
    QuoteAck = "CW",
    PartyDetailsDefinitionRequest = "CX",
    PartyDetailsDefinitionRequestAck = "CY",
    PartyEntitlementsUpdateReport = "CZ",
    PartyEntitlementsDefinitionRequest = "DA",
    PartyEntitlementsDefinitionRequestAck = "DB",
    TradeMatchReport = "DC",
    TradeMatchReportAck = "DD",
    PartyRiskLimitsReportAck = "DE",
    PartyRiskLimitCheckRequest = "DF",
    PartyRiskLimitCheckRequestAck = "DG",
    PartyActionRequest = "DH",
    PartyActionReport = "DI",
    MassOrder = "DJ",
    MassOrderAck = "DK",
    PositionTransferInstruction = "DL",
    PositionTransferInstructionAck = "DM",
    PositionTransferReport = "DN",
    MarketDataStatisticsRequest = "DO",
    MarketDataStatisticsReport = "DP",
    CollateralReportAck = "DQ",
    MarketDataReport = "DR",
    CrossRequest = "DS",
    CrossRequestAck = "DT"
}
export declare enum BidRequestTransType {
    Cancel = "C",
    New = "N"
}
export declare enum SolicitedFlag {
    WasNotSolicited = "N",
    WasSolicited = "Y"
}
export declare enum ExecRestatementReason {
    GtCorporateAction = 0,
    GtRenewalRestatementNoCorporateAction = 1,
    VerbalChange = 2,
    RepricingOfOrder = 3,
    BrokerOption = 4,
    PartialDeclineOfOrderQtyEGExchangeInitiatedPartialCancel = 5,
    CancelOnTradingHalt = 6,
    CancelOnSystemFailure = 7,
    MarketExchangeOption = 8,
    CanceledNotBest = 9,
    WarehouseRecap = 10,
    PegRefresh = 11,
    CancelOnConnectionLoss = 12,
    CancelOnLogout = 13,
    AssignTimePriority = 14,
    CancelledTradePriceViolation = 15,
    CancelledCrossImbalance = 16,
    Other = 99
}
export declare enum BusinessRejectReason {
    Other = 0,
    UnknownId = 1,
    UnknownSecurity = 2,
    UnsupportedMessageType = 3,
    ApplicationNotAvailable = 4,
    ConditionallyRequiredFieldMissing = 5,
    NotAuthorized = 6,
    DeliverToFirmNotAvailableAtThisTime = 7,
    ThrottleLimitExceeded = 8,
    ThrottleLimitExceededSessionWillBeDisconnected = 9,
    ThrottledMessagesRejectedOnRequest = 10,
    InvalidPriceIncrement = 18
}
export declare enum DiscretionInst {
    RelatedToDisplayedPrice = "0",
    RelatedToMarketPrice = "1",
    RelatedToPrimaryPrice = "2",
    RelatedToLocalPrimaryPrice = "3",
    RelatedToMidpointPrice = "4",
    RelatedToLastTradePrice = "5",
    RelatedToVwap = "6",
    AveragePriceGuarantee = "7"
}
export declare enum BidType {
    NonDisclosedStyleEGUsEuropean = 1,
    DisclosedSytleEGJapanese = 2,
    NoBiddingProcess = 3
}
export declare enum BidDescriptorType {
    Sector = 1,
    Country = 2,
    Index = 3
}
export declare enum SideValueInd {
    SideValue1 = 1,
    SideValue2 = 2
}
export declare enum LiquidityIndType {
    E5DayMovingAverage = 1,
    E20DayMovingAverage = 2,
    NormalMarketSize = 3,
    Other = 4
}
export declare enum ExchangeForPhysical {
    False = "N",
    True = "Y"
}
export declare enum ProgRptReqs {
    BuySideExplicitlyRequestsStatusUsingStatueRequestDefaultTheSellSideFirmCanHoweverSendADoneStatusListSTatusResponseInAnUnsolicitedFashion = 1,
    SellSidePeriodicallySendsStatusUsingListStatusPeriodOptionallySpecifiedInProgressPeriod = 2,
    RealTimeExecutionReportsToBeDiscourage = 3
}
export declare enum IncTaxInd {
    Net = 1,
    Gross = 2
}
export declare enum BidTradeType {
    Agency = "A",
    VwapGuarantee = "G",
    GuaranteedClose = "J",
    RiskTrade = "R"
}
export declare enum BasisPxType {
    ClosingPriceAtMorningSession = "2",
    ClosingPrice = "3",
    CurrentPrice = "4",
    Sq = "5",
    VwapThroughADay = "6",
    VwapThroughAMorningSession = "7",
    VwapThroughAnAfternoonSession = "8",
    VwapThroughADayExceptYoriAnOpeningAuction = "9",
    VwapThroughAMorningSessionExceptYoriAnOpeningAuction = "A",
    VwapThroughAnAfternoonSessionExceptYoriAnOpeningAuction = "B",
    Strike = "C",
    Open = "D",
    Others = "Z"
}
export declare enum PriceType {
    PercentageIEPercentOfParOftenCalledDollarPriceForFixedIncome = 1,
    PerUnitIEPerShareOrContract = 2,
    FixedAmountAbsoluteValue = 3,
    DiscountPercentagePointsBelowPar = 4,
    PremiumPercentagePointsOverPar = 5,
    SpreadBasisPointsSpread = 6,
    TedPrice = 7,
    TedYield = 8,
    Yield = 9,
    FixedCabinetTradePricePrimarilyForListedFuturesAndOptions = 10,
    VariableCabinetTradePricePrimarilyForListedFuturesAndOptions = 11,
    PriceSpread = 12,
    ProductTicksInHalves = 13,
    ProductTicksInFourths = 14,
    ProductTicksInEighths = 15,
    ProductTicksInSixteenths = 16,
    ProductTicksInThirtySeconds = 17,
    ProductTicksInSixtyFourths = 18,
    ProductTicksInOneTwentyEighths = 19,
    NormalRateRepresentationEGFxRate = 20,
    InverseRateRepresentationEGFxRate = 21,
    BasisPoints = 22,
    UpFrontPoints = 23,
    InterestRate = 24,
    PercentageOfNotional = 25
}
export declare enum GTBookingInst {
    BookOutAllTradesOnDayOfExecution = 0,
    AccumulateExecutionsUntilOrderIsFilledOrExpires = 1,
    AccumulateUntilVerballyNotifiedOtherwise = 2
}
export declare enum ListStatusType {
    Ack = 1,
    Response = 2,
    Timed = 3,
    ExecStarted = 4,
    AllDone = 5,
    Alert = 6
}
export declare enum NetGrossInd {
    Net = 1,
    Gross = 2
}
export declare enum ListOrderStatus {
    InBiddingProcess = 1,
    ReceivedForExecution = 2,
    Executing = 3,
    Cancelling = 4,
    Alert = 5,
    AllDone = 6,
    Reject = 7
}
export declare enum ListExecInstType {
    Immediate = "1",
    WaitForExecutInstructionIEAListExecutMessageOrPhoneCallBeforeProceedingWithExecutionOfTheList = "2",
    ExchangeSwitchCivOrderSellDriven = "3",
    ExchangeSwitchCivOrderBuyDrivenCashTopUpIEAdditionalCashWillBeProvidedToFulfillTheOrder = "4",
    ExchangeSwitchCivOrderBuyDrivenCashWithdrawIEAdditionalCashWillNotBeProvidedToFulfillTheOrder = "5"
}
export declare enum CxlRejResponseTo {
    OrderCancelRequest = "1",
    OrderCancelReplaceRequest = "2"
}
export declare enum MultiLegReportingType {
    SingleSecurityDefaultIfNotSpecified = "1",
    IndividualLegOfAMultiLegSecurity = "2",
    MultiLegSecurity = "3"
}
export declare enum PartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum PartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum SecurityAltIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum UnderlyingSecurityAltIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum Product {
    Agency = 1,
    Commodity = 2,
    Corporate = 3,
    Currency = 4,
    Equity = 5,
    Government = 6,
    Index = 7,
    Loan = 8,
    Moneymarket = 9,
    Mortgage = 10,
    Municipal = 11,
    Other = 12,
    Financing = 13
}
export declare enum UnderlyingProduct {
    Agency = 1,
    Commodity = 2,
    Corporate = 3,
    Currency = 4,
    Equity = 5,
    Government = 6,
    Index = 7,
    Loan = 8,
    Moneymarket = 9,
    Mortgage = 10,
    Municipal = 11,
    Other = 12,
    Financing = 13
}
export declare enum RoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum DistribPaymentMethod {
    Crest = 1,
    Nscc = 2,
    Euroclear = 3,
    Clearstream = 4,
    Cheque = 5,
    TelegraphicTransfer = 6,
    FedWire = 7,
    DirectCreditBecsBacs = 8,
    AchCredit = 9,
    Bpay = 10,
    HighValueClearingSystemHvacs = 11,
    ReinvestInFund = 12
}
export declare enum CancellationRights {
    Yes = "Y",
    NoExecutionOnly = "N",
    NoWaiverAgreement = "M",
    NoInstitutional = "O"
}
export declare enum MoneyLaunderingStatus {
    ExemptBelowTheLimit = "1",
    ExemptClientMoneyTypeExemption = "2",
    ExemptAuthorisedCreditOrFinancialInstitution = "3",
    Passed = "Y",
    NotChecked = "N"
}
export declare enum ExecPriceType {
    BidPrice = "B",
    CreationPrice = "C",
    CreationPricePlusAdjustmentPercent = "D",
    CreationPricePlusAdjustmentAmount = "E",
    OfferPrice = "O",
    OfferPriceMinusAdjustmentPercent = "P",
    OfferPriceMinusAdjustmentAmount = "Q",
    SinglePrice = "S"
}
export declare enum TradeReportTransType {
    New = 0,
    Cancel = 1,
    Replace = 2,
    Release = 3,
    Reverse = 4,
    CancelDueToBackOutOfTrade = 5
}
export declare enum PaymentMethod {
    Crest = 1,
    Nscc = 2,
    Euroclear = 3,
    Clearstream = 4,
    Cheque = 5,
    TelegraphicTransfer = 6,
    FedWire = 7,
    DebitCard = 8,
    DirectDebitBecs = 9,
    DirectCreditBecs = 10,
    CreditCard = 11,
    AchDebit = 12,
    AchCredit = 13,
    Bpay = 14,
    HighValueClearingSystemHvacs = 15,
    Chips = 16,
    SWIFT = 17,
    Chaps = 18,
    Sic = 19,
    EuroSic = 20
}
export declare enum TaxAdvantageType {
    NoneNotApplicableDefault = 0,
    MaxiIsaUk = 1,
    TessaUk = 2,
    MiniCashIsaUk = 3,
    MiniStocksAndSharesIsaUk = 4,
    MiniInsuranceIsaUk = 5,
    CurrentYearPaymentUs = 6,
    PriorYearPaymentUs = 7,
    AssetTransferUs = 8,
    EmployeePriorYearUs = 9,
    EmployeeCurrentYearUs = 10,
    EmployerPriorYearUs = 11,
    EmployerCurrentYearUs = 12,
    NonFundPrototypeIraUs = 13,
    NonFundQualifiedPlanUs = 14,
    DefinedContributionPlanUs = 15,
    IndividualRetirementAccountUs = 16,
    IndividualRetirementAccountRolloverUs = 17,
    KeoghUs = 18,
    ProfitSharingPlanUs = 19,
    E401KUs = 20,
    SelfDirectedIraUs = 21,
    E403BUs = 22,
    E457Us = 23,
    RothIraFundPrototypeUs = 24,
    RothIraNonPrototypeUs = 25,
    RothConversionIraFundPrototypeUs = 26,
    RothConversionIraNonPrototypeUs = 27,
    EducationIraFundPrototypeUs = 28,
    EducationIraNonPrototypeUs = 29,
    Other = 999
}
export declare enum FundRenewWaiv {
    No = "N",
    Yes = "Y"
}
export declare enum RegistStatus {
    Accepted = "A",
    Rejected = "R",
    Held = "H",
    ReminderIERegistrationInstructionsAreStillOutstanding = "N"
}
export declare enum RegistRejReasonCode {
    InvalidUnacceptableAccountType = 1,
    InvalidUnacceptableTaxExemptType = 2,
    InvalidUnacceptableOwnershipType = 3,
    InvalidUnacceptableNoRegDetails = 4,
    InvalidUnacceptableRegSeqNo = 5,
    InvalidUnacceptableRegDetails = 6,
    InvalidUnacceptableMailingDetails = 7,
    InvalidUnacceptableMailingInstructions = 8,
    InvalidUnacceptableInvestorId = 9,
    InvalidUnaceeptableInvestorIdSource = 10,
    InvalidUnacceptableDateOfBirth = 11,
    InvalidUnacceptableInvestorCountryOfResidence = 12,
    InvalidUnacceptableNoDistribInstns = 13,
    InvalidUnacceptableDistribPercentage = 14,
    InvalidUnacceptableDistribPaymentMethod = 15,
    InvalidUnacceptableCashDistribAgentAcctName = 16,
    InvalidUnacceptableCashDistribAgentCode = 17,
    InvalidUnacceptableCashDistribAgentAcctNum = 18,
    Other = 99
}
export declare enum RegistTransType {
    New = "0",
    Replace = "1",
    Cancel = "2"
}
export declare enum OwnershipType {
    JointTrustees = "2",
    JointInvestors = "J",
    TenantsInCommon = "T"
}
export declare enum ContAmtType {
    CommissionAmountActual = 1,
    CommissionPercentActual = 2,
    InitialChargeAmount = 3,
    InitialChargePercent = 4,
    DiscountAmount = 5,
    DiscountPercent = 6,
    DilutionLevyAmount = 7,
    DilutionLevyPercent = 8,
    ExitChargeAmount = 9,
    ExitChargePercent = 10,
    FundBasedRenewalCommissionPercentAKATrailCommission = 11,
    ProjectedFundValueIEForInvestmentsIntendedToRealiseOrExceedASpecificFutureValue = 12,
    FundBasedRenewalCommissionAmountBasedOnOrderValue = 13,
    FundBasedRenewalCommissionAmountBasedOnProjectedFundValue = 14,
    NetSettlementAmount = 15
}
export declare enum OwnerType {
    IndividualInvestor = 1,
    PublicCompany = 2,
    PrivateCompany = 3,
    IndividualTrustee = 4,
    CompanyTrustee = 5,
    PensionPlan = 6,
    CustodianUnderGiftsToMinorsAct = 7,
    Trusts = 8,
    Fiduciaries = 9,
    NetworkingSubAccount = 10,
    NonProfitOrganization = 11,
    CorporateBody = 12,
    Nominee = 13,
    InstitutionalCustomer = 14,
    Combined = 15,
    MemberFirmEmployeeOrAssociatedPerson = 16,
    MarketMakingAccount = 17,
    ProprietaryAccount = 18,
    NonBrokerDealer = 19,
    UnknownBeneficialOwnerType = 20,
    ErrorAccountOfFirm = 21
}
export declare enum NestedPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum OrderCapacity {
    Agency = "A",
    Proprietary = "G",
    Individual = "I",
    Principal = "P",
    RisklessPrincipal = "R",
    AgentForOtherMember = "W",
    MixedCapacity = "M"
}
export declare enum OrderRestrictions {
    ProgramTrade = "1",
    IndexArbitrage = "2",
    NonIndexArbitrage = "3",
    CompetingMarketMaker = "4",
    ActingAsMarketMakerOrSpecialistInTheSecurity = "5",
    ActingAsMarketMakerOrSpecialistInTheUnderlyingSecurityOfADerivativeSecurity = "6",
    ForeignEntityOfForeignGovernmentOrRegulatoryJurisdiction = "7",
    ExternalMarketParticipant = "8",
    ExternalInterConnectedMarketLinkage = "9",
    RisklessArbitrage = "A",
    IssuerHolding = "B",
    IssuePriceStabilization = "C",
    NonAlgorithmic = "D",
    Algorithmic = "E",
    Cross = "F",
    InsiderAccount = "G",
    SignificantShareholder = "H",
    NormalCourseIssuerBidNcib = "I"
}
export declare enum MassCancelRequestType {
    CancelOrdersForASecurity = "1",
    CancelOrdersForAnUnderlyingSecurity = "2",
    CancelOrdersForAProduct = "3",
    CancelOrdersForACfiCode = "4",
    CancelOrdersForASecurityType = "5",
    CancelOrdersForATradingSession = "6",
    CancelAllOrders = "7",
    CancelOrdersForAMarket = "8",
    CancelOrdersForAMarketSegment = "9",
    CancelOrdersForASecurityGroup = "A",
    CancelForSecurityIssuer = "B",
    CancelForIssuerOfUnderlyingSecurity = "C"
}
export declare enum MassCancelResponse {
    CancelRequestRejectedSeeMassCancelRejectReason532 = "0",
    CancelOrdersForASecurity = "1",
    CancelOrdersForAnUnderlyingSecurity = "2",
    CancelOrdersForAProduct = "3",
    CancelOrdersForACfiCode = "4",
    CancelOrdersForASecurityType = "5",
    CancelOrdersForATradingSession = "6",
    CancelAllOrders = "7",
    CancelOrdersForAMarket = "8",
    CancelOrdersForAMarketSegment = "9",
    CancelOrdersForASecurityGroup = "A",
    CancelOrdersForASecuritiesIssuer = "B",
    CancelOrdersForIssuerOfUnderlyingSecurity = "C"
}
export declare enum MassCancelRejectReason {
    MassCancelNotSupported = 0,
    InvalidOrUnknownSecurity = 1,
    InvalidOrUnkownUnderlyingSecurity = 2,
    InvalidOrUnknownProduct = 3,
    InvalidOrUnknownCfiCode = 4,
    InvalidOrUnknownSecurityType = 5,
    InvalidOrUnknownTradingSession = 6,
    InvalidOrUnknownMarket = 7,
    InvalidOrUnkownMarketSegment = 8,
    InvalidOrUnknownSecurityGroup = 9,
    InvalidOrUnknownSecurityIssuer = 10,
    InvalidOrUnknownIssuerOfUnderlyingSecurity = 11,
    Other = 99
}
export declare enum QuoteType {
    Indicative = 0,
    Tradeable = 1,
    RestrictedTradeable = 2,
    CounterTradeable = 3,
    InitiallyTradeable = 4
}
export declare enum NestedPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum CashMargin {
    Cash = "1",
    MarginOpen = "2",
    MarginClose = "3"
}
export declare enum Scope {
    LocalMarketExchangeEcnAts = "1",
    National = "2",
    Global = "3"
}
export declare enum MDImplicitDelete {
    ServerMustSendAnExplicitDeleteForBidsOrOffersFallingOutsideTheRequestedMarketDepthOfTheRequest = "N",
    ClientHasResponsibilityForImplicitlyDeletingBidsOrOffersFallingOutsideTheMarketDepthOfTheRequest = "Y"
}
export declare enum CrossType {
    AllOrNoneCross = 1,
    ImmediateOrCancelCross = 2,
    OneSidedCross = 3,
    CrossExecutedAgainstBook = 4,
    BasisCross = 5,
    ContingentCross = 6,
    VolumeWeightedAveragePriceVwapCross = 7,
    SpecialTradingSessionCross = 8,
    CustomerToCustomerCross = 9
}
export declare enum CrossPrioritization {
    None = 0,
    BuySideIsPrioritized = 1,
    SellSideIsPrioritized = 2
}
export declare enum SecurityListRequestType {
    Symbol = 0,
    SecurityTypeAndOrCfiCode = 1,
    Product = 2,
    TradingSessionId = 3,
    AllSecurities = 4,
    MarketIdOrMarketIdMarketSegmentId = 5
}
export declare enum SecurityRequestResult {
    ValidRequest = 0,
    InvalidOrUnsupportedRequest = 1,
    NoInstrumentsFoundThatMatchSelectionCriteria = 2,
    NotAuthorizedToRetrieveInstrumentData = 3,
    InstrumentDataTemporarilyUnavailable = 4,
    RequestForInstrumentDataNotSupported = 5
}
export declare enum MultiLegRptTypeReq {
    ReportByMulitlegSecurityOnlyDoNotReportLegs = 0,
    ReportByMultilegSecurityAndByInstrumentLegsBelongingToTheMultilegSecurity = 1,
    ReportByInstrumentLegsBelongingToTheMultilegSecurityOnlyDoNotReportStatusOfMultilegSecurity = 2
}
export declare enum LegPositionEffect {
    Close = "C",
    Fifo = "F",
    Open = "O",
    Rolled = "R",
    CloseButNotifyOnOpen = "N",
    Default = "D"
}
export declare enum LegCoveredOrUncovered {
    Covered = 0,
    Uncovered = 1
}
export declare enum TradSesStatusRejReason {
    UnknownOrInvalidTradingSessionId = 1,
    Other = 99
}
export declare enum TradeRequestType {
    AllTrades = 0,
    MatchedTradesMatchingCriteriaProvidedOnRequestPartiesExecIdTradeIdOrderIdInstrumentInputSourceEtc = 1,
    UnmatchedTradesThatMatchCriteria = 2,
    UnreportedTradesThatMatchCriteria = 3,
    AdvisoriesThatMatchCriteria = 4
}
export declare enum PreviouslyReported {
    NotReportedToCounterpartyOrMarket = "N",
    PreviouslyReportedToCounterpartyOrMarket = "Y"
}
export declare enum MatchStatus {
    ComparedMatchedOrAffirmed = "0",
    UncomparedUnmatchedOrUnaffirmed = "1",
    AdvisoryOrAlert = "2"
}
export declare enum MatchType {
    OnePartyTradeReportPrivatelyNegotiatedTrade = "1",
    TwoPartyTradeReportPrivatelyNegotiatedTrade = "2",
    ConfirmedTradeReportReportingFromRecognizedMarkets = "3",
    AutoMatch = "4",
    CrossAuction = "5",
    CounterOrderSelection = "6",
    CallAuction = "7",
    IssuingBuyBackAuction = "8",
    SystematicInternaliserSi = "9",
    AutoMatchWithLastLook = "10",
    CrossAuctionWithLastLook = "11",
    ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusFourBadgesAndExecutionTimeWithinTwoMinuteWindow = "A1",
    ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusFourBadges = "A2",
    ActAcceptedTrade = "M3",
    ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusTwoBadgesAndExecutionTimeWithinTwoMinuteWindow = "A3",
    ActDefaultTrade = "M4",
    ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusTwoBadges = "A4",
    ActDefaultAfterM2 = "M5",
    ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusExecutionTimeWithinTwoMinuteWindow = "A5",
    ActM6Match = "M6",
    ComparedRecordsResultingFromStampedAdvisoriesOrSpecialistAcceptsPairOffs = "AQ",
    SummarizedMatchUsingA1ExactMatchCriteriaExceptQuantityIsSummaried = "S1",
    SummarizedMatchUsingA2ExactMatchCriteriaExceptQuantityIsSummarized = "S2",
    SummarizedMatchUsingA3ExactMatchCriteriaExceptQuantityIsSummarized = "S3",
    SummarizedMatchUsingA4ExactMatchCriteriaExceptQuantityIsSummarized = "S4",
    SummarizedMatchUsingA5ExactMatchCriteriaExceptQuantityIsSummarized = "S5",
    ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorMinusBadgesAndTimesActM1Match = "M1",
    SummarizedMatchMinusBadgesAndTimesActM2Match = "M2",
    OcsLockedInNonAct = "MT"
}
export declare enum OddLot {
    TreatAsRoundLotDefault = "N",
    TreatAsOddLot = "Y"
}
export declare enum ClearingInstruction {
    ProcessNormally = 0,
    ExcludeFromAllNetting = 1,
    BilateralNettingOnly = 2,
    ExClearing = 3,
    SpecialTrade = 4,
    MultilateralNetting = 5,
    ClearAgainstCentralCounterparty = 6,
    ExcludeFromCentralCounterparty = 7,
    ManualModePrePostingAndOrPreGiveup = 8,
    AutomaticPostingModeTradePostingToThePositionAccountNumberSpecified = 9,
    AutomaticGiveUpModeTradeGiveUpToTheGiveUpDestinationNumberSpecified = 10,
    QualifiedServiceRepresentativeQsr = 11,
    CustomerTrade = 12,
    SelfClearing = 13,
    BuyIn = 14
}
export declare enum AccountType {
    AccountIsCarriedOnCustomerSideOfTheBooks = 1,
    AccountIsCarriedOnNonCustomerSideOfBooks = 2,
    HouseTrader = 3,
    FloorTrader = 4,
    AccountIsCarriedOnNonCustomerSideOfBooksAndIsCrossMargined = 6,
    AccountIsHouseTraderAndIsCrossMargined = 7,
    JointBackOfficeAccountJbo = 8,
    EquitiesSpecialist = 9,
    OptionsMarketMaker = 10,
    OptionsFirmAccount = 11
}
export declare enum CustOrderCapacity {
    MemberTradingForTheirOwnAccount = 1,
    ClearingFirmTradingForItsProprietaryAccount = 2,
    MemberTradingForAnotherMember = 3,
    AllOther = 4,
    RetailCustomer = 5
}
export declare enum MassStatusReqType {
    StatusForOrdersForASecurity = 1,
    StatusForOrdersForAnUnderlyingSecurity = 2,
    StatusForOrdersForAProduct = 3,
    StatusForOrdersForACfiCode = 4,
    StatusForOrdersForASecurityType = 5,
    StatusForOrdersForATradingSession = 6,
    StatusForAllOrders = 7,
    StatusForOrdersForAPartyId = 8,
    StatusForSecurityIssuer = 9,
    StatusForIssuerOfUnderlyingSecurity = 10
}
export declare enum LegSettlType {
    RegularFxSpotSettlementT1OrT2DependingOnCurrency = "0",
    CashTodT0 = "1",
    NextDayTomT1 = "2",
    T2 = "3",
    T3 = "4",
    T4 = "5",
    Future = "6",
    WhenAndIfIssued = "7",
    SellersOption = "8",
    T5 = "9",
    BrokenDate = "B",
    FxSpotNextSettlementSpot1AkaNextDay = "C"
}
export declare enum DayBookingInst {
    CanTriggerBookingWithoutReferenceToTheOrderInitiatorAuto = "0",
    SpeakWithOrderInitiatorBeforeBookingSpeakFirst = "1",
    Accumulate = "2"
}
export declare enum BookingUnit {
    EachPartialExecutionIsABookableUnit = "0",
    AggregatePartialExecutionsOnThisOrderAndBookOneTradePerOrder = "1",
    AggregateExecutionsForThisSymbolSideAndSettlementDate = "2"
}
export declare enum PreallocMethod {
    ProRata = "0",
    DoNotProRataDiscussFirst = "1"
}
export declare enum LegSymbolSfx {
    EucpWithLumpSumInterestRatherThanDiscountPrice = "CD",
    WhenIssuedForASecurityToBeReissuedUnderAnOldCusipOrIsin = "WI"
}
export declare enum LegSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum LegSecurityAltIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum LegProduct {
    Agency = 1,
    Commodity = 2,
    Corporate = 3,
    Currency = 4,
    Equity = 5,
    Government = 6,
    Index = 7,
    Loan = 8,
    Moneymarket = 9,
    Mortgage = 10,
    Municipal = 11,
    Other = 12,
    Financing = 13
}
export declare enum LegSecurityType {
    EuroSupranationalCoupons = "EUSUPRA",
    CorporateBond = "CORP",
    ForeignExchangeContract = "FOR",
    CommonStock = "CS",
    Repurchase = "REPO",
    BradyBond = "BRADY",
    TermLoan = "TERM",
    BankersAcceptance = "BA",
    AssetBackedSecurities = "ABS",
    OtherAnticipationNotesBanGanEtc = "AN",
    MutualFund = "MF",
    FederalAgencyCoupon = "FAC",
    CorporatePrivatePlacement = "CPP",
    PreferredStock = "PS",
    Forward = "FORWARD",
    CanadianTreasuryNotes = "CAN",
    RevolverLoan = "RVLV",
    BankDepositoryNote = "BDN",
    CanadianMortgageBonds = "CMB",
    CertificateOfObligation = "COFO",
    MultilegInstrument = "MLEG",
    NonDeliverableForward = "FXNDF",
    Cap = "CAP",
    FederalAgencyDiscountNote = "FADN",
    ConvertibleBond = "CB",
    CreditDefaultSwap = "CDS",
    BuySellback = "BUYSELL",
    CanadianTreasuryBills = "CTB",
    RevolverTermLoan = "RVLVTRM",
    BankNotes = "BN",
    CorpMortgageBackedSecurities = "CMBS",
    CertificateOfParticipation = "COFP",
    NoSecurityType = "NONE",
    FxSpot = "FXSPOT",
    UsTreasuryNoteDeprecatedValueUseTnote = "UST",
    PrivateExportFunding = "PEF",
    DualCurrency = "DUAL",
    SecuritiesLoan = "SECLOAN",
    EuroSovereigns = "EUSOV",
    BridgeLoan = "BRIDGE",
    BillOfExchanges = "BOX",
    CollateralizedMortgageObligation = "CMO",
    GeneralObligationBonds = "GO",
    FxForward = "FXFWD",
    Collar = "CLLR",
    UsTreasuryBillDeprecatedValueUseTbill = "USTB",
    UsdSupranationalCoupons = "SUPRA",
    EuroCorporateBond = "EUCORP",
    SecuritiesPledge = "SECPLEDGE",
    CanadianProvincialBonds = "PROV",
    LetterOfCredit = "LOFC",
    CanadianMoneyMarkets = "CAMM",
    IoetteMortgage = "IET",
    MandatoryTender = "MT",
    FxSwap = "FXSWAP",
    CommoditySwap = "CMDTYSWAP",
    EuroCorporateFloatingRateNotes = "EUFRN",
    TreasuryBillNonUs = "TB",
    SwingLineFacility = "SWING",
    CertificateOfDeposit = "CD",
    MortgageBackedSecurities = "MBS",
    RevenueAnticipationNote = "RAN",
    WildcardEntryForUseOnSecurityDefinitionRequest = "?",
    DeliveryVersusPledge = "DVPLDG",
    Exotic = "EXOTIC",
    UsCorporateFloatingRateNotes = "FRN",
    OptionsOnCombo = "OOC",
    UsTreasuryBond = "TBOND",
    DebtorInPossession = "DINP",
    CallLoans = "CL",
    MortgageInterestOnly = "MIO",
    RevenueBonds = "REV",
    Cash = "CASH",
    Floor = "FLR",
    CollateralBasket = "COLLBSKT",
    IndexedLinked = "XLINKD",
    InterestStripFromAnyBondOrNote = "TINT",
    Defaulted = "DEFLTED",
    CommercialPaper = "CP",
    MortgagePrincipalOnly = "MPO",
    SpecialAssessment = "SPCLA",
    ForwardRateAgreement = "FRA",
    StructuredNotes = "STRUCT",
    Future = "FUT",
    UsTreasuryBill = "TBILL",
    TreasuryInflationProtectedSecurities = "TIPS",
    Withdrawn = "WITHDRN",
    DepositNotes = "DN",
    MortgagePrivatePlacement = "MPP",
    SpecialObligation = "SPCLO",
    YankeeCorporateBond = "YANK",
    PrincipalStripOfACallableBondOrNote = "TCAL",
    Replaced = "REPLACD",
    EuroCertificateOfDeposit = "EUCD",
    MiscellaneousPassThrough = "MPT",
    SpecialTax = "SPCLT",
    DerivativeForward = "FWD",
    InterestRateSwap = "IRS",
    PrincipalStripFromANonCallableBondOrNote = "TPRN",
    Matured = "MATURED",
    EuroCommercialPaper = "EUCP",
    Pfandbriefe = "PFAND",
    TaxAnticipationNote = "TAN",
    TotalReturnSwap = "TRS",
    UsTreasuryNote = "TNOTE",
    AmendedRestated = "AMENDED",
    LiquidityNote = "LQN",
    ToBeAnnounced = "TBA",
    TaxAllocation = "TAXA",
    LoanLease = "LOANLEASE",
    Retired = "RETIRED",
    MediumTermNotes = "MTN",
    TaxExemptCommercialPaper = "TECP",
    OptionsOnFutures = "OOF",
    Overnight = "ONITE",
    TaxableMunicipalCp = "TMCP",
    OptionsOnPhysicalUseNotRecommended = "OOP",
    PromissoryNote = "PN",
    ShortTermLoanNote = "STN",
    TaxRevenueAnticipationNote = "TRAN",
    Option = "OPT",
    PlazosFijos = "PZFJ",
    VariableRateDemandNote = "VRDN",
    SecuredLiquidityNote = "SLQN",
    Warrant = "WAR",
    SpotForward = "SPOTFWD",
    TimeDeposit = "TD",
    SwapOption = "SWAPTION",
    Transmission = "XMISSION",
    TermLiquidityNote = "TLQN",
    GeneralTypeForAContractBasedOnAnEstablishedIndex = "INDEX",
    ExtendedCommNote = "XCN",
    BondBasket = "BDBSKT",
    YankeeCertificateOfDeposit = "YCD",
    ContractForDifference = "CFD",
    CorrelationSwap = "CRLTNSWAP",
    DividendSwap = "DVDNDSWAP",
    EquityBasket = "EQBSKT",
    EquityForward = "EQFWD",
    ReturnSwap = "RTRNSWAP",
    VarianceSwap = "VARSWAP"
}
export declare enum LegSide {
    Buy = "1",
    Sell = "2",
    BuyMinus = "3",
    SellPlus = "4",
    SellShort = "5",
    SellShortExempt = "6",
    Undisclosed = "7",
    CrossOrdersWhereCounterpartyIsAnExchangeValidForAllMessagesExceptIoIs = "8",
    CrossShort = "9",
    CrossShortExempt = "A",
    AsDefinedForUseWithMultilegInstruments = "B",
    OppositeForUseWithMultilegInstruments = "C",
    SubscribeEGCiv = "D",
    RedeemEGCiv = "E",
    LendFinancingIdentifiesDirectionOfCollateral = "F",
    BorrowFinancingIdentifiesDirectionOfCollateral = "G",
    SellUndisclosed = "H"
}
export declare enum TradingSessionSubID {
    PreTrading = "1",
    OpeningOrOpeningAuction = "2",
    ContinuousTrading = "3",
    ClosingOrClosingAuction = "4",
    PostTrading = "5",
    ScheduledIntradayAuction = "6",
    Quiescent = "7",
    AnyAuction = "8",
    UnscheduledIntradayAuction = "9",
    OutOfMainSessionTrading = "10",
    PrivateAuction = "11",
    PublicAuction = "12",
    GroupAuction = "13"
}
export declare enum AllocType {
    CalculatedIncludesMiscFeesAndNetMoney = 1,
    PreliminaryWithoutMiscFeesAndNetMoney = 2,
    SellsideCalculatedUsingPreliminaryIncludesMiscFeesAndNetMoneyReplaced = 3,
    SellsideCalculateddWithoutPreliminarySentUnsolicitedBySellsideIncludesMiscFeesAndNetMoneyReplaced = 4,
    ReadyToBookSingleOrder = 5,
    BuysideReadyToBookCombinedSetOfOrdersReplaced = 6,
    WarehouseInstruction = 7,
    RequestToIntermediary = 8,
    Accept = 9,
    Reject = 10,
    AcceptPending = 11,
    IncompleteGroup = 12,
    CompleteGroup = 13,
    ReversalPending = 14,
    ReopenGroup = 15,
    CancelGroup = 16,
    GiveUp = 17,
    TakeUp = 18,
    RefuseTakeUp = 19,
    InitiateReversal = 20,
    Reverse = 21,
    RefuseReversal = 22,
    SubAllocationGiveUp = 23,
    ApproveGiveUp = 24,
    ApproveTakeUp = 25
}
export declare enum ClearingFeeIndicator {
    E1stYearDelegateTradingForOwnAccount = "1",
    E2ndYearDelegateTradingForOwnAccount = "2",
    E3rdYearDelegateTradingForOwnAccount = "3",
    E4thYearDelegateTradingForOwnAccount = "4",
    E5thYearDelegateTradingForOwnAccount = "5",
    E6thYearDelegateTradingForOwnAccount = "9",
    CboeMember = "B",
    NonMemberAndCustomer = "C",
    EquityMemberAndClearingMember = "E",
    FullAndAssociateMemberTradingForOwnAccountAndAsFloorBrokers = "F",
    E106HAnd106JFirms = "H",
    GimIdemAndComMembershipInterestHolders = "I",
    Lessee106FEmployees = "L",
    AllOtherOwnershipTypes = "M"
}
export declare enum WorkingIndicator {
    OrderHasBeenAcceptedButNotYetInAWorkingState = "N",
    OrderIsCurrentlyBeingWorked = "Y"
}
export declare enum PriorityIndicator {
    PriorityUnchanged = 0,
    LostPriorityAsResultOfOrderChange = 1
}
export declare enum LegalConfirm {
    DoesNotConsituteALegalConfirm = "N",
    LegalConfirm = "Y"
}
export declare enum QuoteRequestRejectReason {
    UnknownSymbolSecurity = 1,
    ExchangeSecurityClosed = 2,
    QuoteRequestExceedsLimit = 3,
    TooLateToEnter = 4,
    InvalidPrice = 5,
    NotAuthorizedToRequestQuote = 6,
    NoMatchForInquiry = 7,
    NoMarketForInstrument = 8,
    NoInventory = 9,
    Pass = 10,
    InsufficientCredit = 11,
    ExceededClipSizeLimit = 12,
    ExceededMaximumNotionalOrderAmount = 13,
    ExceededDv01Pv01Limit = 14,
    ExceededCs01Limit = 15,
    Other = 99
}
export declare enum AcctIDSource {
    Bic = 1,
    SidCode = 2,
    TfmGspta = 3,
    OmgeoAlertId = 4,
    DtccCode = 5,
    OtherCustomOrProprietary = 99
}
export declare enum AllocAcctIDSource {
    Bic = 1,
    SidCode = 2,
    TfmGspta = 3,
    OmgeoAlertId = 4,
    DtccCode = 5,
    OtherCustomOrProprietary = 99
}
export declare enum BenchmarkPriceType {
    PercentageIEPercentOfParOftenCalledDollarPriceForFixedIncome = 1,
    PerUnitIEPerShareOrContract = 2,
    FixedAmountAbsoluteValue = 3,
    DiscountPercentagePointsBelowPar = 4,
    PremiumPercentagePointsOverPar = 5,
    SpreadBasisPointsSpread = 6,
    TedPrice = 7,
    TedYield = 8,
    Yield = 9,
    FixedCabinetTradePricePrimarilyForListedFuturesAndOptions = 10,
    VariableCabinetTradePricePrimarilyForListedFuturesAndOptions = 11,
    PriceSpread = 12,
    ProductTicksInHalves = 13,
    ProductTicksInFourths = 14,
    ProductTicksInEighths = 15,
    ProductTicksInSixteenths = 16,
    ProductTicksInThirtySeconds = 17,
    ProductTicksInSixtyFourths = 18,
    ProductTicksInOneTwentyEighths = 19,
    NormalRateRepresentationEGFxRate = 20,
    InverseRateRepresentationEGFxRate = 21,
    BasisPoints = 22,
    UpFrontPoints = 23,
    InterestRate = 24,
    PercentageOfNotional = 25
}
export declare enum ConfirmStatus {
    Received = 1,
    MismatchedAccount = 2,
    MissingSettlementInstructions = 3,
    Confirmed = 4,
    RequestRejected = 5
}
export declare enum ConfirmTransType {
    New = 0,
    Replace = 1,
    Cancel = 2
}
export declare enum DeliveryForm {
    BookEntryDefault = 1,
    Bearer = 2
}
export declare enum LegBenchmarkCurveName {
    Eonia = "EONIA",
    Eurepo = "EUREPO",
    EuriborDeprecatedUseEnumEuriborInstead = "Euribor",
    FutureSwap = "FutureSWAP",
    Libid = "LIBID",
    LiborLondonInterBankOffer = "LIBOR",
    MuniAaa = "MuniAAA",
    Other = "OTHER",
    Pfandbriefe = "Pfandbriefe",
    Sonia = "SONIA",
    Swap = "SWAP",
    Treasury = "Treasury",
    UsFederalReserveFedFundsEffectiveRate = "FEDEFF",
    UsFedFundsTargetRate = "FEDOPEN",
    EuroInterbankOfferRate = "EURIBOR"
}
export declare enum LegBenchmarkPriceType {
    PercentageIEPercentOfParOftenCalledDollarPriceForFixedIncome = 1,
    PerUnitIEPerShareOrContract = 2,
    FixedAmountAbsoluteValue = 3,
    DiscountPercentagePointsBelowPar = 4,
    PremiumPercentagePointsOverPar = 5,
    SpreadBasisPointsSpread = 6,
    TedPrice = 7,
    TedYield = 8,
    Yield = 9,
    FixedCabinetTradePricePrimarilyForListedFuturesAndOptions = 10,
    VariableCabinetTradePricePrimarilyForListedFuturesAndOptions = 11,
    PriceSpread = 12,
    ProductTicksInHalves = 13,
    ProductTicksInFourths = 14,
    ProductTicksInEighths = 15,
    ProductTicksInSixteenths = 16,
    ProductTicksInThirtySeconds = 17,
    ProductTicksInSixtyFourths = 18,
    ProductTicksInOneTwentyEighths = 19,
    NormalRateRepresentationEGFxRate = 20,
    InverseRateRepresentationEGFxRate = 21,
    BasisPoints = 22,
    UpFrontPoints = 23,
    InterestRate = 24,
    PercentageOfNotional = 25
}
export declare enum LegIOIQty {
    Small = "S",
    Medium = "M",
    Large = "L",
    UndisclosedQuantity = "U"
}
export declare enum LegPriceType {
    PercentageIEPercentOfParOftenCalledDollarPriceForFixedIncome = 1,
    PerUnitIEPerShareOrContract = 2,
    FixedAmountAbsoluteValue = 3,
    DiscountPercentagePointsBelowPar = 4,
    PremiumPercentagePointsOverPar = 5,
    SpreadBasisPointsSpread = 6,
    TedPrice = 7,
    TedYield = 8,
    Yield = 9,
    FixedCabinetTradePricePrimarilyForListedFuturesAndOptions = 10,
    VariableCabinetTradePricePrimarilyForListedFuturesAndOptions = 11,
    PriceSpread = 12,
    ProductTicksInHalves = 13,
    ProductTicksInFourths = 14,
    ProductTicksInEighths = 15,
    ProductTicksInSixteenths = 16,
    ProductTicksInThirtySeconds = 17,
    ProductTicksInSixtyFourths = 18,
    ProductTicksInOneTwentyEighths = 19,
    NormalRateRepresentationEGFxRate = 20,
    InverseRateRepresentationEGFxRate = 21,
    BasisPoints = 22,
    UpFrontPoints = 23,
    InterestRate = 24,
    PercentageOfNotional = 25
}
export declare enum LegStipulationType {
    AlternativeMinimumTaxYN = "AMT",
    AbsolutePrepaymentSpeed = "ABS",
    IncurredRecoveryYN = "INCURRCVY",
    AutoReinvestmentAtRateOrBetter = "AUTOREINV",
    ConstantPrepaymentPenalty = "CPP",
    AdditionalTerm = "ADDTRM",
    BankQualifiedYN = "BANKQUAL",
    ConstantPrepaymentRate = "CPR",
    ModifiedEquityDelivery = "MODEQTYDLVY",
    BargainConditionsSeeStipulationValue234ForValues = "BGNCON",
    ConstantPrepaymentYield = "CPY",
    NoReferenceObligationYN = "NOREFOBLIG",
    CouponRange = "COUPON",
    FinalCprOfHomeEquityPrepaymentCurve = "HEP",
    UnknownReferenceObligationYN = "UNKREFOBLIG",
    IsoCurrencyCode = "CURRENCY",
    PercentOfManufacturedHousingPrepaymentCurve = "MHP",
    AllGuaranteesYN = "ALLGUARANTEES",
    CustomStartEndDate = "CUSTOMDATE",
    MonthlyPrepaymentRate = "MPR",
    ReferencePriceYN = "REFPX",
    GeographicsAndRangeEx234Ca080MinimumOf80CaliforniaAssets = "GEOG",
    PercentOfProspectusPrepaymentCurve = "PPC",
    ReferencePolicyYN = "REFPOLICY",
    ValuationDiscount = "HAIRCUT",
    PercentOfBmaPrepaymentCurve = "PSA",
    SecuredListYN = "SECRDLIST",
    InsuredYN = "INSURED",
    SingleMonthlyMortality = "SMM",
    YearOrYearMonthOfIssueEx234200209 = "ISSUE",
    IssuersTicker = "ISSUER",
    IssueSizeRange = "ISSUESIZE",
    LookbackDays = "LOOKBACK",
    ExplicitLotIdentifier = "LOT",
    LotVarianceValueInPercentMaximumOverOrUnderAllocationAllowed = "LOTVAR",
    MaturityYearAndMonth = "MAT",
    MaturityRange = "MATURITY",
    MaximumSubstitutionsRepo = "MAXSUBS",
    MinimumDenomination = "MINDNOM",
    MinimumIncrement = "MININCR",
    MinimumQuantity = "MINQTY",
    PaymentFrequencyCalendar = "PAYFREQ",
    NumberOfPieces = "PIECES",
    PoolsMaximum = "PMAX",
    PoolsPerLot = "PPL",
    PoolsPerMillion = "PPM",
    PoolsPerTrade = "PPT",
    PriceRange = "PRICE",
    PricingFrequency = "PRICEFREQ",
    ProductionYear = "PROD",
    CallProtection = "PROTECT",
    Purpose = "PURPOSE",
    BenchmarkPriceSource = "PXSOURCE",
    RatingSourceAndRange = "RATING",
    TypeOfRedemptionValuesAreNonCallablePrefundedEscrowedToMaturityPutableConvertible = "REDEMPTION",
    RestrictedYN = "RESTRICTED",
    MarketSector = "SECTOR",
    SecurityTypeIncludedOrExcluded = "SECTYPE",
    Structure = "STRUCT",
    SubstitutionsFrequencyRepo = "SUBSFREQ",
    SubstitutionsLeftRepo = "SUBSLEFT",
    FreeformText = "TEXT",
    TradeVarianceValueInPercentMaximumOverOrUnderAllocationAllowed = "TRDVAR",
    WeightedAverageCouponValueInPercentExactOrRangePlusGrossOrNetOfServicingSpreadTheDefaultEx23465NetMinimumOf65NetOfServicingFee = "WAC",
    WeightedAverageLifeCouponValueInPercentExactOrRange = "WAL",
    WeightedAverageLoanAgeValueInMonthsExactOrRange = "WALA",
    WeightedAverageMaturityValueInMonthsExactOrRange = "WAM",
    WholePoolYN = "WHOLE",
    YieldRange = "YIELD",
    AverageFicoScore = "AVFICO",
    OriginalAmount = "ORIGAMT",
    AverageLoanSize = "AVSIZE",
    PoolEffectiveDate = "POOLEFFDT",
    MaximumLoanBalance = "MAXBAL",
    PoolInitialFactor = "POOLINITFCTR",
    PoolIdentifier = "POOL",
    TrancheIdentifier = "TRANCHE",
    TypeOfRollTrade = "ROLLTYPE",
    SubstitutionYN = "SUBSTITUTION",
    ReferenceToRollingOrClosingTrade = "REFTRADE",
    MultipleExchangeFallbackYN = "MULTEXCHFLLBCK",
    PrincipalOfRollingOrClosingTrade = "REFPRIN",
    ComponentSecurityFallbackYN = "COMPSECFLLBCK",
    InterestOfRollingOrClosingTrade = "REFINT",
    LocalJurisdictionYN = "LOCLJRSDCTN",
    AvailableOfferQuantityToBeShownToTheStreet = "AVAILQTY",
    RelevantJurisdictionYN = "RELVJRSDCTN",
    BrokersSalesCredit = "BROKERCREDIT",
    OfferPriceToBeShownToInternalBrokers = "INTERNALPX",
    OfferQuantityToBeShownToInternalBrokers = "INTERNALQTY",
    TheMinimumResidualOfferQuantity = "LEAVEQTY",
    MaximumOrderSize = "MAXORDQTY",
    OrderQuantityIncrement = "ORDRINCR",
    PrimaryOrSecondaryMarketIndicator = "PRIMARY",
    BrokerSalesCreditOverride = "SALESCREDITOVR",
    TradersCredit = "TRADERCREDIT",
    DiscountRateWhenPriceIsDenominatedInPercentOfPar = "DISCOUNT",
    YieldToMaturityWhenYieldType235AndYield236ShowADifferentYield = "YTM"
}
export declare enum LegSwapType {
    ParForPar = 1,
    ModifiedDuration = 2,
    Risk = 4,
    Proceeds = 5
}
export declare enum QuotePriceType {
    PercentageIEPercentOfParOftenCalledDollarPriceForFixedIncome = 1,
    PerUnitIEPerShareOrContract = 2,
    FixedAmountAbsoluteValue = 3,
    DiscountPercentagePointsBelowPar = 4,
    PremiumPercentagePointsOverPar = 5,
    SpreadBasisPointsRelativeToBenchmark = 6,
    TedPrice = 7,
    TedYield = 8,
    YieldSpreadSwaps = 9,
    Yield = 10,
    PriceSpread = 12,
    ProductTicksInHalves = 13,
    ProductTicksInFourths = 14,
    ProductTicksInEighths = 15,
    ProductTicksInSixteenths = 16,
    ProductTicksInThirtySeconds = 17,
    ProductTicksInSixtyFourths = 18,
    ProductTicksInOneTwentyEighths = 19,
    NormalRateRepresentationEGFxRate = 20,
    InverseRateRepresentationEGFxRate = 21,
    BasisPoints = 22,
    UpFrontPoints = 23,
    InterestRate = 24,
    PercentageOfNotional = 25
}
export declare enum QuoteRespType {
    HitLift = 1,
    Counter = 2,
    Expired = 3,
    Cover = 4,
    DoneAway = 5,
    Pass = 6,
    EndTrade = 7,
    TimedOut = 8,
    Tied = 9,
    TiedCover = 10
}
export declare enum QuoteQualifier {
    QuantityIsNegotiable = "1",
    AllowLateBids = "2",
    ImmediateOrCounter = "3",
    AutoTrade = "4",
    AllOrNoneAon = "A",
    MarketOnCloseMocHeldToClose = "B",
    AtTheCloseAroundNotHeldToClose = "C",
    VwapVolumeWeightedAveragePrice = "D",
    Axe = "E",
    AxeOnBid = "F",
    AxeOnOffer = "G",
    ClientNaturalWorking = "H",
    InTouchWith = "I",
    PositionWanted = "J",
    MarketMaking = "K",
    Limit = "L",
    MoreBehind = "M",
    ClientNaturalBlock = "N",
    AtTheOpen = "O",
    TakingAPosition = "P",
    AtTheMarketPreviouslyCalledCurrentQuote = "Q",
    ReadyToTrade = "R",
    InventoryOrPortfolioShown = "S",
    ThroughTheDay = "T",
    Unwind = "U",
    Versus = "V",
    IndicationWorkingAway = "W",
    CrossingOpportunity = "X",
    AtTheMidpoint = "Y",
    PreOpen = "Z",
    AutomaticSpot = "a",
    PlatformCalculatedSpot = "b",
    OutsideSpread = "c",
    DeferredSpot = "d",
    NegotiatedSpot = "n"
}
export declare enum YieldRedemptionPriceType {
    PercentageIEPercentOfParOftenCalledDollarPriceForFixedIncome = 1,
    PerUnitIEPerShareOrContract = 2,
    FixedAmountAbsoluteValue = 3,
    DiscountPercentagePointsBelowPar = 4,
    PremiumPercentagePointsOverPar = 5,
    SpreadBasisPointsSpread = 6,
    TedPrice = 7,
    TedYield = 8,
    Yield = 9,
    FixedCabinetTradePricePrimarilyForListedFuturesAndOptions = 10,
    VariableCabinetTradePricePrimarilyForListedFuturesAndOptions = 11,
    PriceSpread = 12,
    ProductTicksInHalves = 13,
    ProductTicksInFourths = 14,
    ProductTicksInEighths = 15,
    ProductTicksInSixteenths = 16,
    ProductTicksInThirtySeconds = 17,
    ProductTicksInSixtyFourths = 18,
    ProductTicksInOneTwentyEighths = 19,
    NormalRateRepresentationEGFxRate = 20,
    InverseRateRepresentationEGFxRate = 21,
    BasisPoints = 22,
    UpFrontPoints = 23,
    InterestRate = 24,
    PercentageOfNotional = 25
}
export declare enum PosType {
    AllocationTradeQty = "ALC",
    OptionAssignment = "AS",
    AsOfTradeQty = "ASF",
    DeliveryQty = "DLV",
    ElectronicTradeQty = "ETR",
    OptionExerciseQty = "EX",
    EndOfDayQty = "FIN",
    IntraSpreadQty = "IAS",
    InterSpreadQty = "IES",
    AdjustmentQty = "PA",
    PitTradeQty = "PIT",
    StartOfDayQty = "SOD",
    IntegralSplit = "SPL",
    TransactionFromAssignment = "TA",
    TotalTransactionQty = "TOT",
    TransactionQuantity = "TQ",
    TransferTradeQty = "TRF",
    TransactionFromExercise = "TX",
    CrossMarginQty = "XM",
    ReceiveQuantity = "RCV",
    CorporateActionAdjustment = "CAA",
    DeliveryNoticeQty = "DN",
    ExchangeForPhysicalQty = "EP",
    PrivatelyNegotiatedTradeQtyNonRegulated = "PNTN",
    NetDeltaQty = "DLT",
    CreditEventAdjustment = "CEA",
    SuccessionEventAdjustment = "SEA",
    NetQty = "NET",
    GrossQty = "GRS",
    IntradayQty = "ITD",
    GrossNonDeltaAdjustedSwaptionPosition = "NDAS",
    DeltaAdjustedPairedSwaptionPosition = "DAS",
    ExpiringQuantity = "EXP",
    QuantityNotExercised = "UNEX",
    RequestedExerciseQuantity = "REQ",
    CashFuturesEquivalentQuantity = "CFE"
}
export declare enum PosQtyStatus {
    Submitted = 0,
    Accepted = 1,
    Rejected = 2
}
export declare enum PosAmtType {
    CashAmountCorporateEvent = "CASH",
    CashResidualAmount = "CRES",
    FinalMarkToMarketAmount = "FMTM",
    IncrementalMarkToMarket = "IMTM",
    PremiumAmount = "PREM",
    StartOfDayMarkToMarket = "SMTM",
    TradeVariationAmount = "TVAR",
    ValueAdjustedAmount = "VADJ",
    SettlementValue = "SETL",
    InitialTradeCouponAmount = "ICPN",
    AccruedCouponAmount = "ACPN",
    CouponAmount = "CPN",
    IncrementalAccruedCoupon = "IACPN",
    CollateralizedMarkToMarket = "CMTM",
    IncrementalCollateralizedMarkToMarket = "ICMTM",
    CompensationAmount = "DLV",
    TotalBankedAmount = "BANK",
    TotalCollateralizedAmount = "COLAT",
    LongPairedSwapOrSwaptionNotionalValue = "LSNV",
    ShortPairedSwapOrSwaptionNotionalValue = "SSNV",
    StartOfDayAccruedCoupon = "SACPN",
    NetPresentValue = "NPV",
    StartOfDayNetPresentValue = "SNPV",
    NetCashFlow = "NCF",
    PresentValueOfAllFees = "PVFEES",
    PresentValueOfOneBasisPoints = "PV01",
    TheFiveYearEquivalentNotionalAmount = "5YREN",
    UndiscountedMarkToMarket = "UMTM",
    MarkToModel = "MTD",
    MarkToMarketVariance = "VMTM",
    MarkToModelVariance = "VMTD",
    UpfrontPayment = "UPFRNT"
}
export declare enum PosTransType {
    Exercise = 1,
    DoNotExercise = 2,
    PositionAdjustment = 3,
    PositionChangeSubmissionMarginDisposition = 4,
    Pledge = 5,
    LargeTraderSubmission = 6,
    LargePositionsReportingSubmission = 7,
    LongHoldings = 8,
    InternalTransfer = 9,
    TransferOfFirm = 10,
    ExternalTransfer = 11,
    CorporateAction = 12,
    Notification = 13,
    PositionCreation = 14,
    CloseOut = 15,
    Reopen = 16
}
export declare enum PosMaintAction {
    New = 1,
    Replace = 2,
    Cancel = 3,
    Reverse = 4
}
export declare enum SettlSessID {
    Intraday = "ITD",
    RegularTradingHours = "RTH",
    ElectronicTradingHours = "ETH",
    EndOfDay = "EOD"
}
export declare enum AdjustmentType {
    ProcessRequestAsMarginDisposition = 0,
    DeltaPlus = 1,
    DeltaMinus = 2,
    Final = 3,
    CustomerSpecificPosition = 4
}
export declare enum PosMaintStatus {
    Accepted = 0,
    AcceptedWithWarnings = 1,
    Rejected = 2,
    Completed = 3,
    CompletedWithWarnings = 4
}
export declare enum PosMaintResult {
    SuccessfulCompletionNoWarningsOrErrors = 0,
    Rejected = 1,
    Other = 99
}
export declare enum PosReqType {
    Positions = 0,
    Trades = 1,
    Exercises = 2,
    Assignments = 3,
    SettlementActivity = 4,
    BackoutMessage = 5,
    DeltaPositions = 6,
    NetPosition = 7,
    LargePositionsReporting = 8,
    ExercisePositionReportingSubmission = 9,
    PositionLimitReportingSubmission = 10
}
export declare enum ResponseTransportType {
    InBandDefault = 0,
    OutOfBand = 1
}
export declare enum PosReqResult {
    ValidRequest = 0,
    InvalidOrUnsupportedRequest = 1,
    NoPositionsFoundThatMatchCriteria = 2,
    NotAuthorizedToRequestPositions = 3,
    RequestForPositionNotSupported = 4,
    OtherUseText58InConjunctionWithThisCodeForAnExplaination = 99
}
export declare enum PosReqStatus {
    Completed = 0,
    CompletedWithWarnings = 1,
    Rejected = 2
}
export declare enum SettlPriceType {
    Final = 1,
    Theoretical = 2
}
export declare enum UnderlyingSettlPriceType {
    Final = 1,
    Theoretical = 2
}
export declare enum AssignmentMethod {
    ProRata = "P",
    Random = "R"
}
export declare enum ExerciseMethod {
    Automatic = "A",
    Manual = "M"
}
export declare enum TradeRequestResult {
    SuccessfulDefault = 0,
    InvalidOrUnknownInstrument = 1,
    InvalidTypeOfTradeRequested = 2,
    InvalidParties = 3,
    InvalidTransportTypeRequested = 4,
    InvalidDestinationRequested = 5,
    TradeRequestTypeNotSupported = 8,
    NotAuthorized = 9,
    Other = 99
}
export declare enum TradeRequestStatus {
    Accepted = 0,
    Completed = 1,
    Rejected = 2
}
export declare enum TradeReportRejectReason {
    SuccessfulDefault = 0,
    InvalidPartyInformation = 1,
    UnknownInstrument = 2,
    UnauthorizedToReportTrades = 3,
    InvalidTradeType = 4,
    PriceExceedsCurrentPriceBand = 5,
    ReferencePriceNotAvailable = 6,
    NotionalValueExceedsThreshold = 7,
    Other = 99
}
export declare enum SideMultiLegReportingType {
    SingleSecurityDefaultIfNotSpecified = 1,
    IndividualLegOfAMultilegSecurity = 2,
    MultilegSecurity = 3
}
export declare enum Nested2PartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum Nested2PartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum BenchmarkSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum TrdRegTimestampType {
    ExecutionTime = 1,
    TimeIn = 2,
    TimeOut = 3,
    BrokerReceipt = 4,
    BrokerExecution = 5,
    DeskReceipt = 6,
    SubmissionToClearing = 7,
    TimePriority = 8,
    OrderbookEntryTime = 9,
    OrderSubmissionTime = 10,
    PubliclyReported = 11,
    PublicReportUpdated = 12,
    NonPubliclyReported = 13,
    NonPublicReportUpdated = 14,
    SubmittedForConfirmation = 15,
    UpdatedForConfirmation = 16,
    Confirmed = 17,
    UpdatedForClearing = 18,
    Cleared = 19,
    AllocationsSubmitted = 20,
    AllocationsUpdated = 21,
    ApplicationCompleted = 22,
    SubmittedToRepository = 23,
    PostTradeContinuationEvent = 24,
    PostTradeValuation = 25,
    PreviousTimePriority = 26
}
export declare enum ConfirmType {
    Status = 1,
    Confirmation = 2,
    ConfirmationRequestRejectedReasonCanBeStatedInText58Field = 3
}
export declare enum ConfirmRejReason {
    IncorrectOrMissingAccount = 1,
    IncorrectOrMissingSettlementInstructions = 2,
    UnknownOrMissingIndividualAllocId467 = 3,
    TransactionNotRecognized = 4,
    DuplicateTransaction = 5,
    IncorrectOrMissingInstrument = 6,
    IncorrectOrMissingPrice = 7,
    IncorrectOrMissingCommission = 8,
    IncorrectOrMissingSettlementDate = 9,
    IncorrectOrMissingFundIdOrFundName = 10,
    IncorrectOrMissingQuantity = 11,
    IncorrectOrMissingFees = 12,
    IncorrectOrMissingTax = 13,
    IncorrectOrMissingParty = 14,
    IncorrectOrMissingSide = 15,
    IncorrectOrMissingNetMoney = 16,
    IncorrectOrMissingTradeDate = 17,
    IncorrectOrMissingSettlementCurrencyInstructions = 18,
    IncorrectOrMissingCapacity = 19,
    Other = 99
}
export declare enum BookingType {
    RegularBooking = 0,
    CfdContractForDifference = 1,
    TotalReturnSwap = 2
}
export declare enum IndividualAllocRejCode {
    UnknownOrMissingAccountS = 0,
    IncorrectOrMissingBlockQuantity = 1,
    IncorrectOrMissingAveragePrice = 2,
    UnknownExecutingBrokerMnemonic = 3,
    IncorrectOrMissingCommission = 4,
    UnknownOrderId37 = 5,
    UnknownListId66 = 6,
    OtherFurtherInText58 = 7,
    IncorrectOrMissingAllocatedQuantity = 8,
    CalculationDifference = 9,
    UnknownOrStaleExecId = 10,
    MismatchedData = 11,
    UnknownClOrdId = 12,
    WarehouseRequestRejected = 13,
    DuplicateOrMissingIndividualAllocId467 = 14,
    TradeNotRecognized = 15,
    TradePreviouslyAllocated = 16,
    IncorrectOrMissingInstrument = 17,
    IncorrectOrMissingSettlementDate = 18,
    IncorrectOrMissingFundIdOrFundName = 19,
    IncorrectOrMissingSettlementInstructions = 20,
    IncorrectOrMissingFees = 21,
    IncorrectOrMissingTax = 22,
    UnknownOrMissingParty = 23,
    IncorrectOrMissingSide = 24,
    IncorrectOrMissingNetMoney = 25,
    IncorrectOrMissingTradeDate = 26,
    IncorrectOrMissingSettlementCurrencyInstructions = 27,
    IncorrrectOrMissingProcessCode81 = 28,
    Other = 99
}
export declare enum AllocSettlInstType {
    UseDefaultInstructions = 0,
    DeriveFromParametersProvided = 1,
    FullDetailsProvided = 2,
    SsiDbIDsProvided = 3,
    PhoneForInstructions = 4
}
export declare enum SettlPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum SettlPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum SettlPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum DlvyInstType {
    Cash = "C",
    Securities = "S"
}
export declare enum TerminationType {
    Overnight = 1,
    Term = 2,
    Flexible = 3,
    Open = 4
}
export declare enum SettlInstReqRejCode {
    UnableToProcessRequest = 0,
    UnknownAccount = 1,
    NoMatchingSettlementInstructionsFound = 2,
    Other = 99
}
export declare enum AllocReportType {
    PreliminaryRequestToIntermediary = 2,
    SellsideCalculatedUsingPreliminaryIncludesMiscFeesAndNetMoney = 3,
    SellsideCalculatedWithoutPreliminarySentUnsolicitedBySellsideIncludesMiscFeesAndNetMoney = 4,
    WarehouseRecap = 5,
    RequestToIntermediary = 8,
    Accept = 9,
    Reject = 10,
    AcceptPending = 11,
    Complete = 12,
    ReversePending = 14,
    GiveUp = 15,
    TakeUp = 16,
    Reversal = 17,
    AllegedReversal = 18,
    SubAllocationGiveUp = 19
}
export declare enum AllocCancReplaceReason {
    OriginalDetailsIncompleteIncorrect = 1,
    ChangeInUnderlyingOrderDetails = 2,
    CancelledByGiveUpFirm = 3,
    Other = 99
}
export declare enum AllocAccountType {
    AccountIsCarriedPnCustomerSideOfBooks = 1,
    AccountIsCarriedOnNonCustomerSideOfBooks = 2,
    HouseTrader = 3,
    FloorTrader = 4,
    AccountIsCarriedOnNonCustomerSideOfBooksAndIsCrossMargined = 6,
    AccountIsHouseTraderAndIsCrossMargined = 7,
    JointBackOfficeAccountJbo = 8
}
export declare enum PartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum NestedPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum Nested2PartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum AllocIntermedReqType {
    PendingAccept = 1,
    PendingRelease = 2,
    PendingReversal = 3,
    Accept = 4,
    BlockLevelReject = 5,
    AccountLevelReject = 6
}
export declare enum ApplQueueResolution {
    NoActionTaken = 0,
    QueueFlushed = 1,
    OverlayLast = 2,
    EndSession = 3
}
export declare enum ApplQueueAction {
    NoActionTaken = 0,
    QueueFlushed = 1,
    OverlayLast = 2,
    EndSession = 3
}
export declare enum AvgPxIndicator {
    NoAveragePricing = 0,
    TradeIsPartOfAnAveragePriceGroupIdentifiedByTheAvgPxGroupId1731 = 1,
    LastTradeIsTheAveragePriceGroupIdentifiedByTheAvgPxGroupId1731 = 2
}
export declare enum TradeAllocIndicator {
    AllocationNotRequired = 0,
    AllocationRequiredGiveUpTradeAllocationInformationNotProvidedIncomplete = 1,
    UseAllocationProvidedWithTheTrade = 2,
    AllocationGiveUpExecutor = 3,
    AllocationFromExecutor = 4,
    AllocationToClaimAccount = 5,
    TradeSplit = 6
}
export declare enum ExpirationCycle {
    ExpireOnTradingSessionCloseDefault = 0,
    ExpireOnTradingSessionOpen = 1,
    TradingEligibilityExpirationSpecifiedInTheDateAndTimeFieldsEventDate866AndEventTime1145AssociatedWithEventType8657LastEligibleTradeDate = 2
}
export declare enum TrdType {
    RegularTrade = 0,
    BlockTrade = 1,
    ExchangeForPhysicalEfp = 2,
    Transfer = 3,
    LateTrade = 4,
    TTrade = 5,
    WeightedAveragePriceTrade = 6,
    BunchedTrade = 7,
    LateBunchedTrade = 8,
    PriorReferencePriceTrade = 9,
    AfterHoursTrade = 10,
    ExchangeForRiskEfr = 11,
    ExchangeForSwapEfs = 12,
    ExchangeOfFuturesForInMarketFuturesEfm = 13,
    ExchangeOfOptionsForOptionsEoo = 14,
    TradingAtSettlement = 15,
    AllOrNone = 16,
    FuturesLargeOrderExecution = 17,
    ExchangeOfFuturesForExternalMarketFuturesEff = 18,
    OptionInterimTrade = 19,
    OptionCabinetTrade = 20,
    PrivatelyNegotiatedTrade = 22,
    SubstitutionOfFuturesForForwards = 23,
    ErrorTrade = 24,
    SpecialCumDividendCd = 25,
    SpecialExDividendXd = 26,
    SpecialCumCouponCc = 27,
    SpecialExCouponXc = 28,
    CashSettlementCs = 29,
    SpecialPriceSp = 30,
    GuaranteedDeliveryGd = 31,
    SpecialCumRightsCr = 32,
    SpecialExRightsXr = 33,
    SpecialCumCapitalRepaymentsCp = 34,
    SpecialExCapitalRepaymentsXp = 35,
    SpecialCumBonusCb = 36,
    SpecialExBonusXb = 37,
    BlockTrade2 = 38,
    WorkedPrincipalTrade = 39,
    BlockTrades = 40,
    NameChange = 41,
    PortfolioTransfer = 42,
    ProrogationBuy = 43,
    ProrogationSell = 44,
    OptionExercise = 45,
    DeltaNeutralTransaction = 46,
    FinancingTransaction = 47,
    NonStandardSettlement = 48,
    DerivativeRelatedTransaction = 49,
    PortfolioTrade = 50,
    VolumeWeightedAverageTrade = 51,
    ExchangeGrantedTrade = 52,
    RepurchaseAgreement = 53,
    Otc = 54,
    ExchangeBasisFacilityEbf = 55,
    OpeningTrade = 56,
    NettedTrade = 57,
    BlockSwapTrade = 58,
    CreditEventTrade = 59,
    SuccessionEventTrade = 60,
    GiveUpGiveInTrade = 61,
    DarkTrade = 62,
    TechnicalTrade = 63,
    Benchmark = 64,
    PackageTrade = 65
}
export declare enum TrdSubType {
    Cmta = 0,
    InternalTransferOrAdjustment = 1,
    ExternalTransferOrTransferOfAccount = 2,
    RejectForSubmittingSide = 3,
    AdvisoryForContraSide = 4,
    OffsetDueToAnAllocation = 5,
    OnsetDueToAnAllocation = 6,
    DifferentialSpread = 7,
    ImpliedSpreadLegExecutedAgainstAnOutright = 8,
    TransactionFromExercise = 9,
    TransactionFromAssignment = 10,
    Acats = 11,
    AiAutomatedInputFacilityDisabledInResponseToAnExchangeRequest = 14,
    BTransactionBetweenTwoMemberFirmsWhereNeitherMemberFirmIsRegisteredAsAMarketMakerInTheSecurityInQuestionAndNeitherIsADesignatedFundManagerAlsoUsedByBrokerDealersWhenDealingWithAnotherBrokerWhichIsNotAMemberFirmNonOrderBookSecuritiesOnly = 15,
    KTransactionUsingBlockTradeFacility = 16,
    LcCorrectionSubmittedMoreThanThreeDaysAfterPublicationOfTheOriginalTradeReport = 17,
    MTransactionOtherThanATransactionResultingFromAStockSwapOrStockSwitchBetweenTwoMarketMakersRegisteredInThatSecurityIncludingIdbOrAPublicDisplaySystemTradesNonOrderBookSecuritiesOnly = 18,
    NNonProtectedPortfolioTransactionOrAFullyDisclosedPortfolioTransaction = 19,
    NmITransactionWhereExchangeHasGrantedPermissionForNonPublicationIiIdbIsReportingAsSellerIiiSubmittingATransactionReportToTheExchangeWhereTheTransactionReportIsNotAlsoATradeReport = 20,
    NrNonRiskTransactionInASeatsSecurityOtherThanAnAimSecurity = 21,
    PProtectedPortfolioTransactionOrAWorkedPrincipalAgreementToEffectAPortfolioTransactionWhichIncludesOrderBookSecurities = 22,
    PaProtectedTransactionNotification = 23,
    PcContraTradeForTransactionWhichTookPlaceOnAPreviousDayAndWhichWasAutomaticallyExecutedOnTheExchangeTradingSystem = 24,
    PnWorkedPrincipalNotificationForAPortfolioTransactionWhichIncludesOrderBookSecurities = 25,
    RIRisklessPrincipalTransactionBetweenNonMembersWhereTheBuyingAndSellingTransactionsAreExecutedAtDifferentPricesOrOnDifferentTermsRequiresATradeReportWithTradeTypeIndicatorRForEachTransactionIiMarketMakerIsReportingAllTheLegsOfARisklessPrincipalTransactionWhereTheBuyingAndSellingTransactionsAreExecutedAtDifferentPricesRequiresATradeReportWithTradeTypeIndicatorRForEachTransactionOrIiiMarketMakerIsReportingTheOnwardLegOfARisklessPrincipalTransactionWhereTheLegsAreExecutedAtDifferentPricesAndAnotherMarketMakerHasSubmittedATradeReportUsingTradeTypeIndicatorMForTheFirstLegThisRequiresASingleTradeReportWithTradeTypeIndicatorR = 26,
    RoTransactionWhichResultedFromTheExerciseOfATraditionalOptionOrAStockSettledCoveredWarrant = 27,
    RtRiskTransactionInASeatsSecurityExcludingAimSecurityReportedByAMarketMakerRegisteredInThatSecurity = 28,
    SwTransactionsResultingFromStockSwapOrAStockSwitchOneReportIsRequiredForEachLineOfStock = 29,
    TIfReportingASingleProtectedTransaction = 30,
    WnWorkedPrincipalNotificationForASingleOrderBookSecurity = 31,
    WtWorkedPrincipalTransactionOtherThanAPortfolioTransaction = 32,
    OffHoursTrade = 33,
    OnHoursTrade = 34,
    OtcQuote = 35,
    ConvertedSwap = 36,
    CrossedTradeX = 37,
    InterimProtectedTradeI = 38,
    LargeInScaleL = 39,
    WashTrade = 40,
    TradeAtSettlementTas = 41,
    AuctionTrade = 42,
    TradeAtMarkerTam = 43,
    DefaultCreditEvent = 44,
    RestructuringCreditEvent = 45,
    MergerSuccessionEvent = 46,
    SpinOffSuccessionEvent = 47,
    MultilateralCompression = 48,
    Balancing = 50,
    BasisTradeIndexCloseBtic = 51
}
export declare enum PegMoveType {
    FloatingDefault = 0,
    Fixed = 1
}
export declare enum PegOffsetType {
    PriceDefault = 0,
    BasisPoints = 1,
    Ticks = 2,
    PriceTierLevel = 3,
    Percentage = 4
}
export declare enum PegLimitType {
    OrBetterDefaultPriceImprovementAllowed = 0,
    StrictLimitIsAStrictLimit = 1,
    OrWorseForABuyThePegLimitIsAMinimumAndForASellThePegLimitIsAMaximumForUseForOrdersWhichHaveAPriceRange = 2
}
export declare enum PegRoundDirection {
    MoreAggressiveOnABuyOrderRoundThePriceUpToTheNearestTickOnASellOrderRoundDownToTheNearestTick = 1,
    MorePassiveOnABuyOrderRoundDownToTheNearestTickOnASellOrderRoundUpToTheNearestTick = 2
}
export declare enum PegScope {
    LocalExchangeEcnAts = 1,
    National = 2,
    Global = 3,
    NationalExcludingLocal = 4
}
export declare enum DiscretionMoveType {
    FloatingDefault = 0,
    Fixed = 1
}
export declare enum DiscretionOffsetType {
    PriceDefault = 0,
    BasisPoints = 1,
    Ticks = 2,
    PriceTierLevel = 3
}
export declare enum DiscretionLimitType {
    OrBetterDefaultPriceImprovementAllowed = 0,
    StrictLimitIsAStrictLimit = 1,
    OrWorseForABuyTheDiscretionPriceIsAMinimumAndForASellTheDiscretionPriceIsAMaximumForUseForOrdersWhichHaveAPriceRange = 2
}
export declare enum DiscretionRoundDirection {
    MoreAggressiveOnABuyOrderRoundThePriceUpToTheNearestTickOnASellRoundDownToTheNearestTick = 1,
    MorePassiveOnABuyOrderRoundDownToTheNearestTickOnASellOrderRoundUpToTheNearestTick = 2
}
export declare enum DiscretionScope {
    LocalExchangeEcnAts = 1,
    National = 2,
    Global = 3,
    NationalExcludingLocal = 4
}
export declare enum TargetStrategy {
    Vwap = 1,
    ParticipateIEAimToBeXPercentOfTheMarketVolume = 2,
    MininizeMarketImpact = 3
}
export declare enum LastLiquidityInd {
    AddedLiquidity = 1,
    RemovedLiquidity = 2,
    LiquidityRoutedOut = 3,
    Auction = 4,
    TriggeredStopOrder = 5,
    TriggeredContingencyOrder = 6,
    TriggeredMarketOrder = 7
}
export declare enum PublishTrdIndicator {
    DoNotReportTrade = "N",
    ReportTrade = "Y"
}
export declare enum ShortSaleReason {
    DealerSoldShort = 0,
    DealerSoldShortExempt = 1,
    SellingCustomerSoldShort = 2,
    SellingCustomerSoldShortExempt = 3,
    QualifiedServiceRepresentativeQsrOrAutomaticGiveUpAguContraSideSoldShort = 4,
    QsrOrAguContraSideSoldShortExempt = 5
}
export declare enum QtyType {
    UnitsSharesParCurrency = 0,
    Contracts = 1,
    UnitOfMeasurePerTimeUnit = 2
}
export declare enum SecondaryTrdType {
    RegularTrade = 0,
    BlockTrade = 1,
    ExchangeForPhysicalEfp = 2,
    Transfer = 3,
    LateTrade = 4,
    TTrade = 5,
    WeightedAveragePriceTrade = 6,
    BunchedTrade = 7,
    LateBunchedTrade = 8,
    PriorReferencePriceTrade = 9,
    AfterHoursTrade = 10,
    ExchangeForRiskEfr = 11,
    ExchangeForSwapEfs = 12,
    ExchangeOfFuturesForInMarketFuturesEfm = 13,
    ExchangeOfOptionsForOptionsEoo = 14,
    TradingAtSettlement = 15,
    AllOrNone = 16,
    FuturesLargeOrderExecution = 17,
    ExchangeOfFuturesForExternalMarketFuturesEff = 18,
    OptionInterimTrade = 19,
    OptionCabinetTrade = 20,
    PrivatelyNegotiatedTrade = 22,
    SubstitutionOfFuturesForForwards = 23,
    ErrorTrade = 24,
    SpecialCumDividendCd = 25,
    SpecialExDividendXd = 26,
    SpecialCumCouponCc = 27,
    SpecialExCouponXc = 28,
    CashSettlementCs = 29,
    SpecialPriceSp = 30,
    GuaranteedDeliveryGd = 31,
    SpecialCumRightsCr = 32,
    SpecialExRightsXr = 33,
    SpecialCumCapitalRepaymentsCp = 34,
    SpecialExCapitalRepaymentsXp = 35,
    SpecialCumBonusCb = 36,
    SpecialExBonusXb = 37,
    BlockTrade2 = 38,
    WorkedPrincipalTrade = 39,
    BlockTrades = 40,
    NameChange = 41,
    PortfolioTransfer = 42,
    ProrogationBuy = 43,
    ProrogationSell = 44,
    OptionExercise = 45,
    DeltaNeutralTransaction = 46,
    FinancingTransaction = 47,
    NonStandardSettlement = 48,
    DerivativeRelatedTransaction = 49,
    PortfolioTrade = 50,
    VolumeWeightedAverageTrade = 51,
    ExchangeGrantedTrade = 52,
    RepurchaseAgreement = 53,
    Otc = 54,
    ExchangeBasisFacilityEbf = 55,
    OpeningTrade = 56,
    NettedTrade = 57,
    BlockSwapTrade = 58,
    CreditEventTrade = 59,
    SuccessionEventTrade = 60,
    GiveUpGiveInTrade = 61,
    DarkTrade = 62,
    TechnicalTrade = 63,
    Benchmark = 64,
    PackageTrade = 65
}
export declare enum TradeReportType {
    Submit = 0,
    Alleged = 1,
    Accept = 2,
    Decline = 3,
    Addendum = 4,
    NoWas = 5,
    TradeReportCancel = 6,
    LockedInTradeBreak = 7,
    Defaulted = 8,
    InvalidCmta = 9,
    Pended = 10,
    AllegedNew = 11,
    AllegedAddendum = 12,
    AllegedNoWas = 13,
    AllegedTradeReportCancel = 14,
    AllegedLockedInTradeBreak = 15,
    Verify = 16,
    Dispute = 17
}
export declare enum AllocNoOrdersType {
    NotSpecified = 0,
    ExplicitListProvided = 1
}
export declare enum EventType {
    Put = 1,
    Call = 2,
    Tender = 3,
    SinkingFundCall = 4,
    Activation = 5,
    Inactivation = 6,
    LastEligibleTradeDate = 7,
    SwapStartDate = 8,
    SwapEndDate = 9,
    SwapRollDate = 10,
    SwapNextStartDate = 11,
    SwapNextRollDate = 12,
    FirstDeliveryDate = 13,
    LastDeliveryDate = 14,
    InitialInventoryDueDate = 15,
    FinalInventoryDueDate = 16,
    FirstIntentDate = 17,
    LastIntentDate = 18,
    PositionRemovalDate = 19,
    MinimumNotice = 20,
    DeliveryStartTime = 21,
    DeliveryEndTime = 22,
    FirstNoticeDate = 23,
    LastNoticeDate = 24,
    FirstExerciseDate = 25,
    RedemptionDate = 26,
    TradeContinuationEffectiveDate = 27,
    Other = 99
}
export declare enum InstrAttribType {
    FlatSecuritiesPayInterestOnACurrentBasisButAreTradedWithoutInterest = 1,
    ZeroCoupon = 2,
    InterestBearingForEuroCommercialPaperWhenNotIssuedAtDiscount = 3,
    NoPeriodicPayments = 4,
    VariableRate = 5,
    LessFeeForPut = 6,
    SteppedCoupon = 7,
    CouponPeriodIfNotSemiAnnual = 8,
    WhenAndIfIssued = 9,
    OriginalIssueDiscount = 10,
    CallablePuttable = 11,
    EscrowedToMaturity = 12,
    EscrowedToRedemptionDateCallable = 13,
    PreRefunded = 14,
    InDefault = 15,
    Unrated = 16,
    Taxable = 17,
    Indexed = 18,
    SubjectToAlternativeMinimumTax = 19,
    OriginalIssueDiscountPrice = 20,
    CallableBelowMaturityValue = 21,
    CallableWithoutNoticeByMailToHolderUnlessRegistered = 22,
    PriceTickRulesForSecurity = 23,
    TradeTypeEligibilityDetailsForSecurity = 24,
    InstrumentDenominator = 25,
    InstrumentNumerator = 26,
    InstrumentPricePrecision = 27,
    InstrumentStrikePrice = 28,
    TradeableIndicator = 29,
    InstrumentIsEligibleToAcceptAnonymousOrders = 30,
    MinimumGuaranteedFillVolume = 31,
    MinimumGuaranteedFillStatus = 32,
    TradeAtSettlementTasEligibility = 33,
    TestInstrument = 34,
    DummyInstrument = 35,
    NegativeSettlementPriceEligibility = 36,
    NegativeStrikePriceEligibility = 37,
    UsStandardContractIndicator = 38,
    Text = 99
}
export declare enum CPProgram {
    E3A3 = 1,
    E42 = 2,
    E3A2 = 3,
    E3A33C7 = 4,
    E3A4 = 5,
    E3A5 = 6,
    E3A7 = 7,
    E3C7 = 8,
    Other = 99
}
export declare enum UnderlyingCPProgram {
    E3A3 = 1,
    E42 = 2,
    E3A2 = 3,
    E3A33C7 = 4,
    E3A4 = 5,
    E3A5 = 6,
    E3A7 = 7,
    E3C7 = 8,
    Other = 99
}
export declare enum UnderlyingStipType {
    AlternativeMinimumTaxYN = "AMT",
    AbsolutePrepaymentSpeed = "ABS",
    IncurredRecoveryYN = "INCURRCVY",
    AutoReinvestmentAtRateOrBetter = "AUTOREINV",
    ConstantPrepaymentPenalty = "CPP",
    AdditionalTerm = "ADDTRM",
    BankQualifiedYN = "BANKQUAL",
    ConstantPrepaymentRate = "CPR",
    ModifiedEquityDelivery = "MODEQTYDLVY",
    BargainConditionsSeeStipulationValue234ForValues = "BGNCON",
    ConstantPrepaymentYield = "CPY",
    NoReferenceObligationYN = "NOREFOBLIG",
    CouponRange = "COUPON",
    FinalCprOfHomeEquityPrepaymentCurve = "HEP",
    UnknownReferenceObligationYN = "UNKREFOBLIG",
    IsoCurrencyCode = "CURRENCY",
    PercentOfManufacturedHousingPrepaymentCurve = "MHP",
    AllGuaranteesYN = "ALLGUARANTEES",
    CustomStartEndDate = "CUSTOMDATE",
    MonthlyPrepaymentRate = "MPR",
    ReferencePriceYN = "REFPX",
    GeographicsAndRangeEx234Ca080MinimumOf80CaliforniaAssets = "GEOG",
    PercentOfProspectusPrepaymentCurve = "PPC",
    ReferencePolicyYN = "REFPOLICY",
    ValuationDiscount = "HAIRCUT",
    PercentOfBmaPrepaymentCurve = "PSA",
    SecuredListYN = "SECRDLIST",
    InsuredYN = "INSURED",
    SingleMonthlyMortality = "SMM",
    YearOrYearMonthOfIssueEx234200209 = "ISSUE",
    IssuersTicker = "ISSUER",
    IssueSizeRange = "ISSUESIZE",
    LookbackDays = "LOOKBACK",
    ExplicitLotIdentifier = "LOT",
    LotVarianceValueInPercentMaximumOverOrUnderAllocationAllowed = "LOTVAR",
    MaturityYearAndMonth = "MAT",
    MaturityRange = "MATURITY",
    MaximumSubstitutionsRepo = "MAXSUBS",
    MinimumDenomination = "MINDNOM",
    MinimumIncrement = "MININCR",
    MinimumQuantity = "MINQTY",
    PaymentFrequencyCalendar = "PAYFREQ",
    NumberOfPieces = "PIECES",
    PoolsMaximum = "PMAX",
    PoolsPerLot = "PPL",
    PoolsPerMillion = "PPM",
    PoolsPerTrade = "PPT",
    PriceRange = "PRICE",
    PricingFrequency = "PRICEFREQ",
    ProductionYear = "PROD",
    CallProtection = "PROTECT",
    Purpose = "PURPOSE",
    BenchmarkPriceSource = "PXSOURCE",
    RatingSourceAndRange = "RATING",
    TypeOfRedemptionValuesAreNonCallablePrefundedEscrowedToMaturityPutableConvertible = "REDEMPTION",
    RestrictedYN = "RESTRICTED",
    MarketSector = "SECTOR",
    SecurityTypeIncludedOrExcluded = "SECTYPE",
    Structure = "STRUCT",
    SubstitutionsFrequencyRepo = "SUBSFREQ",
    SubstitutionsLeftRepo = "SUBSLEFT",
    FreeformText = "TEXT",
    TradeVarianceValueInPercentMaximumOverOrUnderAllocationAllowed = "TRDVAR",
    WeightedAverageCouponValueInPercentExactOrRangePlusGrossOrNetOfServicingSpreadTheDefaultEx23465NetMinimumOf65NetOfServicingFee = "WAC",
    WeightedAverageLifeCouponValueInPercentExactOrRange = "WAL",
    WeightedAverageLoanAgeValueInMonthsExactOrRange = "WALA",
    WeightedAverageMaturityValueInMonthsExactOrRange = "WAM",
    WholePoolYN = "WHOLE",
    YieldRange = "YIELD",
    AverageFicoScore = "AVFICO",
    OriginalAmount = "ORIGAMT",
    AverageLoanSize = "AVSIZE",
    PoolEffectiveDate = "POOLEFFDT",
    MaximumLoanBalance = "MAXBAL",
    PoolInitialFactor = "POOLINITFCTR",
    PoolIdentifier = "POOL",
    TrancheIdentifier = "TRANCHE",
    TypeOfRollTrade = "ROLLTYPE",
    SubstitutionYN = "SUBSTITUTION",
    ReferenceToRollingOrClosingTrade = "REFTRADE",
    MultipleExchangeFallbackYN = "MULTEXCHFLLBCK",
    PrincipalOfRollingOrClosingTrade = "REFPRIN",
    ComponentSecurityFallbackYN = "COMPSECFLLBCK",
    InterestOfRollingOrClosingTrade = "REFINT",
    LocalJurisdictionYN = "LOCLJRSDCTN",
    AvailableOfferQuantityToBeShownToTheStreet = "AVAILQTY",
    RelevantJurisdictionYN = "RELVJRSDCTN",
    BrokersSalesCredit = "BROKERCREDIT",
    OfferPriceToBeShownToInternalBrokers = "INTERNALPX",
    OfferQuantityToBeShownToInternalBrokers = "INTERNALQTY",
    TheMinimumResidualOfferQuantity = "LEAVEQTY",
    MaximumOrderSize = "MAXORDQTY",
    OrderQuantityIncrement = "ORDRINCR",
    PrimaryOrSecondaryMarketIndicator = "PRIMARY",
    BrokerSalesCreditOverride = "SALESCREDITOVR",
    TradersCredit = "TRADERCREDIT",
    DiscountRateWhenPriceIsDenominatedInPercentOfPar = "DISCOUNT",
    YieldToMaturityWhenYieldType235AndYield236ShowADifferentYield = "YTM"
}
export declare enum MiscFeeBasis {
    Absolute = 0,
    PerUnit = 1,
    Percentage = 2
}
export declare enum LastFragment {
    NotLastMessage = "N",
    LastMessage = "Y"
}
export declare enum CollAsgnReason {
    Initial = 0,
    Scheduled = 1,
    TimeWarning = 2,
    MarginDeficiency = 3,
    MarginExcess = 4,
    ForwardCollateralDemand = 5,
    EventOfDefault = 6,
    AdverseTaxEvent = 7,
    TransferDeposit = 8,
    TransferWithdrawal = 9,
    Pledge = 10
}
export declare enum CollInquiryQualifier {
    TradeDate = 0,
    GcInstrument = 1,
    CollateralInstrument = 2,
    SubstitutionEligible = 3,
    NotAssigned = 4,
    PartiallyAssigned = 5,
    FullyAssigned = 6,
    OutstandingTradesTodayEndDate = 7
}
export declare enum CollAsgnTransType {
    New = 0,
    Replace = 1,
    Cancel = 2,
    Release = 3,
    Reverse = 4
}
export declare enum CollAsgnRespType {
    Received = 0,
    Accepted = 1,
    Declined = 2,
    Rejected = 3,
    TransactionPending = 4,
    TransactionCompletedWithWarningSeeText58ForFurtherInformation = 5
}
export declare enum CollAsgnRejectReason {
    UnknownDealOrderTrade = 0,
    UnknownOrInvalidInstrument = 1,
    UnauthorizedTransaction = 2,
    InsufficientCollateral = 3,
    InvalidTypeOfCollateral = 4,
    ExcessiveSubstitution = 5,
    Other = 99
}
export declare enum CollStatus {
    Unassigned = 0,
    PartiallyAssigned = 1,
    AssignmentProposed = 2,
    AssignedAccepted = 3,
    Challenged = 4
}
export declare enum LastRptRequested {
    NotLastMessage = "N",
    LastMessage = "Y"
}
export declare enum DeliveryType {
    VersusPaymentDeliverIfSellOrReceiveIfBuyVsAgainstPayment = 0,
    FreeDeliverIfSellOrReceiveIfBuyFree = 1,
    TriParty = 2,
    HoldInCustody = 3
}
export declare enum UserRequestType {
    LogOnUser = 1,
    LogOffUser = 2,
    ChangePasswordForUser = 3,
    RequestIndividualUserStatus = 4,
    RequestThrottleLimit = 5
}
export declare enum UserStatus {
    LoggedIn = 1,
    NotLoggedIn = 2,
    UserNotRecognised = 3,
    PasswordIncorrect = 4,
    PasswordChanged = 5,
    Other = 6,
    ForcedUserLogoutByExchange = 7,
    SessionShutdownWarning = 8,
    ThrottleParametersChanged = 9
}
export declare enum StatusValue {
    Connected = 1,
    NotConnectedDownExpectedUp = 2,
    NotConnectedDownExpectedDown = 3,
    InProcess = 4
}
export declare enum NetworkRequestType {
    Snapshot = 1,
    Subscribe = 2,
    StopSubscribing = 4,
    LevelOfDetailThenNoCompIDsBecomesRequired = 8
}
export declare enum NetworkStatusResponseType {
    Full = 1,
    IncrementalUpdate = 2
}
export declare enum TrdRptStatus {
    Accepted = 0,
    Rejected = 1,
    Cancelled = 2,
    AcceptedWithErrors = 3,
    PendingNew = 4,
    PendingCancel = 5,
    PendingReplace = 6,
    Terminated = 7,
    PendingVerification = 8,
    DeemedVerified = 9,
    Verified = 10,
    Disputed = 11
}
export declare enum AffirmStatus {
    Received = 1,
    ConfirmRejectedIENotAffirmed = 2,
    Affirmed = 3
}
export declare enum CollAction {
    Retain = 0,
    Add = 1,
    Remove = 2
}
export declare enum CollInquiryStatus {
    Accepted = 0,
    AcceptedWithWarnings = 1,
    Completed = 2,
    CompletedWithWarnings = 3,
    Rejected = 4
}
export declare enum CollInquiryResult {
    SuccessfulDefault = 0,
    InvalidOrUnknownInstrument = 1,
    InvalidOrUnknownCollateralType = 2,
    InvalidParties = 3,
    InvalidTransportTypeRequested = 4,
    InvalidDestinationRequested = 5,
    NoCollateralFoundForTheTradeSpecified = 6,
    NoCollateralFoundForTheOrderSpecified = 7,
    CollateralInquiryTypeNotSupported = 8,
    UnauthorizedForCollateralInquiry = 9,
    OtherFurtherInformationInText58Field = 99
}
export declare enum Nested3PartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum Nested3PartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum Nested3PartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum StrategyParameterType {
    Int = 1,
    Length = 2,
    NumInGroup = 3,
    SeqNum = 4,
    TagNum = 5,
    Float = 6,
    Qty = 7,
    Price = 8,
    PriceOffset = 9,
    Amt = 10,
    Percentage = 11,
    Char = 12,
    Boolean = 13,
    String = 14,
    MultipleCharValue = 15,
    Currency = 16,
    Exchange = 17,
    MonthYear = 18,
    UtcTimestamp = 19,
    UtcTimeOnly = 20,
    LocalMktDate = 21,
    UtcDateOnly = 22,
    Data = 23,
    MultipleStringValue = 24,
    Country = 25,
    Language = 26,
    TzTimeOnly = 27,
    TzTimestamp = 28,
    Tenor = 29
}
export declare enum SecurityStatus {
    Active = "1",
    Inactive = "2",
    ActiveClosingOrdersOnly = "3",
    Expired = "4",
    Delisted = "5",
    KnockedOut = "6",
    KnockOutRevoked = "7",
    PendingExpiry = "8",
    Suspended = "9",
    Published = "10",
    PendingDeletion = "11"
}
export declare enum UnderlyingCashType {
    Fixed = "FIXED",
    Diff = "DIFF"
}
export declare enum UnderlyingSettlementType {
    T1 = 2,
    T3 = 4,
    T4 = 5
}
export declare enum SecurityUpdateAction {
    Add = "A",
    Delete = "D",
    Modify = "M"
}
export declare enum ExpirationQtyType {
    AutoExercise = 1,
    NonAutoExercise = 2,
    FinalWillBeExercised = 3,
    ContraryIntention = 4,
    Difference = 5
}
export declare enum IndividualAllocType {
    SubAllocate = 1,
    ThirdPartyAllocation = 2
}
export declare enum UnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum TimeUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum UnderlyingUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingTimeUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum LegTimeUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum AllocMethod {
    Automatic = 1,
    Guarantor = 2,
    Manual = 3,
    BrokerAssigned = 4
}
export declare enum SideTrdSubTyp {
    Cmta = 0,
    InternalTransferOrAdjustment = 1,
    ExternalTransferOrTransferOfAccount = 2,
    RejectForSubmittingSide = 3,
    AdvisoryForContraSide = 4,
    OffsetDueToAnAllocation = 5,
    OnsetDueToAnAllocation = 6,
    DifferentialSpread = 7,
    ImpliedSpreadLegExecutedAgainstAnOutright = 8,
    TransactionFromExercise = 9,
    TransactionFromAssignment = 10,
    Acats = 11,
    AiAutomatedInputFacilityDisabledInResponseToAnExchangeRequest = 14,
    BTransactionBetweenTwoMemberFirmsWhereNeitherMemberFirmIsRegisteredAsAMarketMakerInTheSecurityInQuestionAndNeitherIsADesignatedFundManagerAlsoUsedByBrokerDealersWhenDealingWithAnotherBrokerWhichIsNotAMemberFirmNonOrderBookSecuritiesOnly = 15,
    KTransactionUsingBlockTradeFacility = 16,
    LcCorrectionSubmittedMoreThanThreeDaysAfterPublicationOfTheOriginalTradeReport = 17,
    MTransactionOtherThanATransactionResultingFromAStockSwapOrStockSwitchBetweenTwoMarketMakersRegisteredInThatSecurityIncludingIdbOrAPublicDisplaySystemTradesNonOrderBookSecuritiesOnly = 18,
    NNonProtectedPortfolioTransactionOrAFullyDisclosedPortfolioTransaction = 19,
    NmITransactionWhereExchangeHasGrantedPermissionForNonPublicationIiIdbIsReportingAsSellerIiiSubmittingATransactionReportToTheExchangeWhereTheTransactionReportIsNotAlsoATradeReport = 20,
    NrNonRiskTransactionInASeatsSecurityOtherThanAnAimSecurity = 21,
    PProtectedPortfolioTransactionOrAWorkedPrincipalAgreementToEffectAPortfolioTransactionWhichIncludesOrderBookSecurities = 22,
    PaProtectedTransactionNotification = 23,
    PcContraTradeForTransactionWhichTookPlaceOnAPreviousDayAndWhichWasAutomaticallyExecutedOnTheExchangeTradingSystem = 24,
    PnWorkedPrincipalNotificationForAPortfolioTransactionWhichIncludesOrderBookSecurities = 25,
    RIRisklessPrincipalTransactionBetweenNonMembersWhereTheBuyingAndSellingTransactionsAreExecutedAtDifferentPricesOrOnDifferentTermsRequiresATradeReportWithTradeTypeIndicatorRForEachTransactionIiMarketMakerIsReportingAllTheLegsOfARisklessPrincipalTransactionWhereTheBuyingAndSellingTransactionsAreExecutedAtDifferentPricesRequiresATradeReportWithTradeTypeIndicatorRForEachTransactionOrIiiMarketMakerIsReportingTheOnwardLegOfARisklessPrincipalTransactionWhereTheLegsAreExecutedAtDifferentPricesAndAnotherMarketMakerHasSubmittedATradeReportUsingTradeTypeIndicatorMForTheFirstLegThisRequiresASingleTradeReportWithTradeTypeIndicatorR = 26,
    RoTransactionWhichResultedFromTheExerciseOfATraditionalOptionOrAStockSettledCoveredWarrant = 27,
    RtRiskTransactionInASeatsSecurityExcludingAimSecurityReportedByAMarketMakerRegisteredInThatSecurity = 28,
    SwTransactionsResultingFromStockSwapOrAStockSwitchOneReportIsRequiredForEachLineOfStock = 29,
    TIfReportingASingleProtectedTransaction = 30,
    WnWorkedPrincipalNotificationForASingleOrderBookSecurity = 31,
    WtWorkedPrincipalTransactionOtherThanAPortfolioTransaction = 32,
    OffHoursTrade = 33,
    OnHoursTrade = 34,
    OtcQuote = 35,
    ConvertedSwap = 36,
    CrossedTradeX = 37,
    InterimProtectedTradeI = 38,
    LargeInScaleL = 39,
    WashTrade = 40,
    TradeAtSettlementTas = 41,
    AuctionTrade = 42,
    TradeAtMarkerTam = 43,
    DefaultCreditEvent = 44,
    RestructuringCreditEvent = 45,
    MergerSuccessionEvent = 46,
    SpinOffSuccessionEvent = 47,
    MultilateralCompression = 48,
    Balancing = 50,
    BasisTradeIndexCloseBtic = 51
}
export declare enum SideTrdRegTimestampType {
    ExecutionTime = 1,
    TimeIn = 2,
    TimeOut = 3,
    BrokerReceipt = 4,
    BrokerExecution = 5,
    DeskReceipt = 6,
    SubmissionToClearing = 7,
    TimePriority = 8,
    OrderbookEntryTime = 9,
    OrderSubmissionTime = 10,
    PubliclyReported = 11,
    PublicReportUpdated = 12,
    NonPubliclyReported = 13,
    NonPublicReportUpdated = 14,
    SubmittedForConfirmation = 15,
    UpdatedForConfirmation = 16,
    Confirmed = 17,
    UpdatedForClearing = 18,
    Cleared = 19,
    AllocationsSubmitted = 20,
    AllocationsUpdated = 21,
    ApplicationCompleted = 22,
    SubmittedToRepository = 23,
    PostTradeContinuationEvent = 24,
    PostTradeValuation = 25,
    PreviousTimePriority = 26
}
export declare enum AsOfIndicator {
    FalseTradeIsNotAnAsOfTrade = "0",
    TrueTradeIsAnAsOfTrade = "1"
}
export declare enum MDBookType {
    TopOfBook = 1,
    PriceDepth = 2,
    OrderDepth = 3
}
export declare enum MDOriginType {
    Book = 0,
    OffBook = 1,
    Cross = 2,
    QuoteDrivenMarket = 3,
    DarkOrderBook = 4,
    AuctionDrivenMarket = 5,
    QuoteNegotiation = 6,
    VoiceNegotiation = 7,
    HybridMarket = 8
}
export declare enum CustOrderHandlingInst {
    PhoneSimple = "A",
    GOrderFinraOatsFcmApiOrFixFiaExecutionSource = "G",
    AddOnOrder = "ADD",
    PhoneComplex = "B",
    AllOrNone = "AON",
    FcmProvidedScreen = "C",
    OtherProvidedScreen = "D",
    ConditionalOrder = "CND",
    CashNotHeld = "CNH",
    ClientProvidedPlatformControlledByFcm = "E",
    ClientProvidedPlatformDirectToExchange = "F",
    DeliveryInstructionsCash = "CSH",
    DirectedOrder = "DIR",
    AlgoEngine = "H",
    DiscretionaryLimitOrder = "DLO",
    ExchangeForPhysicalTransaction = "E.W",
    PriceAtExecutionPriceAddedAtInitialOrderEntryTradingMiddleOfficeOrTimeOfGiveUp = "J",
    FillOrKill = "FOK",
    DeskElectronic = "W",
    DeskPit = "X",
    ClientElectronic = "Y",
    IntradayCross = "IDX",
    ImbalanceOnly = "IO",
    ClientPit = "Z",
    ImmediateOrCancel = "IOC",
    IntermarketSweepOrder = "ISO",
    LimitOnOpen = "LOO",
    LimitOnClose = "LOC",
    MarketAtOpen = "MAO",
    MarketAtClose = "MAC",
    MarketOnOpen = "MOO",
    MarketOnClose = "MOC",
    MergerRelatedTransferPosition = "MPT",
    MinimumQuantity = "MQT",
    MarketToLimit = "MTL",
    DeliveryInstructionsNextDay = "ND",
    NotHeld = "NH",
    OptionsRelatedTransaction = "OPT",
    OverTheDay = "OVD",
    Pegged = "PEG",
    ReserveSizeOrder = "RSV",
    StopStockTransaction = "S.W",
    Scale = "SCL",
    DeliveryInstructionsSellersOption = "SLR",
    TimeOrder = "TMO",
    TrailingStop = "TS",
    Work = "WRK",
    StayOnOfferside = "F0",
    GoAlong = "F3",
    ParticipateDoNotInitiate = "F6",
    StrictScale = "F7",
    TryToScale = "F8",
    StayOnBidside = "F9",
    NoCross = "FA",
    OkToCross = "FB",
    CallFirst = "FC",
    PercentOfVolume = "FD",
    ReinstateOnSystemFailure = "FH",
    InstitutionOnly = "FI",
    ReinstateOnTradingHalt = "FJ",
    CancelOnTradingHalf = "FK",
    LastPeg = "FL",
    MidPricePeg = "FM",
    NonNegotiable = "FN",
    OpeningPeg = "FO",
    MarketPeg = "FP",
    CancelOnSystemFailure = "FQ",
    PrimaryPeg = "FR",
    Suspend = "FS",
    FixedPegToLocalBestBidOrOfferAtTimeOfOrder = "FT",
    PegToVwap = "FW",
    TradeAlong = "FX",
    TryToStop = "FY",
    CancelIfNotBest = "FZ",
    StrictLimit = "Fb",
    IgnorePriceValidityChecks = "Fc",
    PegToLimitPrice = "Fd",
    WorkToTargetStrategy = "Fe"
}
export declare enum OrderHandlingInstSource {
    FinraOats = 1,
    FiaExecutionSourceCode = 2
}
export declare enum DeskType {
    Agency = "A",
    Arbitrage = "AR",
    BlockTrading = "B",
    ConvertibleDesk = "C",
    CentralRiskBooks = "CR",
    Derivatives = "D",
    EquityCapitalMarkets = "EC",
    International = "IN",
    Institutional = "IS",
    Other = "O",
    PreferredTrading = "PF",
    Proprietary = "PR",
    ProgramTrading = "PT",
    Sales = "S",
    Swaps = "SW",
    TradingDeskOrSystemNonMarketMaker = "T",
    Treasury = "TR"
}
export declare enum DeskTypeSource {
    FinraOats = 1
}
export declare enum DeskOrderHandlingInst {
    PhoneSimple = "A",
    GOrderFinraOatsFcmApiOrFixFiaExecutionSource = "G",
    AddOnOrder = "ADD",
    PhoneComplex = "B",
    AllOrNone = "AON",
    FcmProvidedScreen = "C",
    OtherProvidedScreen = "D",
    ConditionalOrder = "CND",
    CashNotHeld = "CNH",
    ClientProvidedPlatformControlledByFcm = "E",
    ClientProvidedPlatformDirectToExchange = "F",
    DeliveryInstructionsCash = "CSH",
    DirectedOrder = "DIR",
    AlgoEngine = "H",
    DiscretionaryLimitOrder = "DLO",
    ExchangeForPhysicalTransaction = "E.W",
    PriceAtExecutionPriceAddedAtInitialOrderEntryTradingMiddleOfficeOrTimeOfGiveUp = "J",
    FillOrKill = "FOK",
    DeskElectronic = "W",
    DeskPit = "X",
    ClientElectronic = "Y",
    IntradayCross = "IDX",
    ImbalanceOnly = "IO",
    ClientPit = "Z",
    ImmediateOrCancel = "IOC",
    IntermarketSweepOrder = "ISO",
    LimitOnOpen = "LOO",
    LimitOnClose = "LOC",
    MarketAtOpen = "MAO",
    MarketAtClose = "MAC",
    MarketOnOpen = "MOO",
    MarketOnClose = "MOC",
    MergerRelatedTransferPosition = "MPT",
    MinimumQuantity = "MQT",
    MarketToLimit = "MTL",
    DeliveryInstructionsNextDay = "ND",
    NotHeld = "NH",
    OptionsRelatedTransaction = "OPT",
    OverTheDay = "OVD",
    Pegged = "PEG",
    ReserveSizeOrder = "RSV",
    StopStockTransaction = "S.W",
    Scale = "SCL",
    DeliveryInstructionsSellersOption = "SLR",
    TimeOrder = "TMO",
    TrailingStop = "TS",
    Work = "WRK",
    StayOnOfferside = "F0",
    GoAlong = "F3",
    ParticipateDoNotInitiate = "F6",
    StrictScale = "F7",
    TryToScale = "F8",
    StayOnBidside = "F9",
    NoCross = "FA",
    OkToCross = "FB",
    CallFirst = "FC",
    PercentOfVolume = "FD",
    ReinstateOnSystemFailure = "FH",
    InstitutionOnly = "FI",
    ReinstateOnTradingHalt = "FJ",
    CancelOnTradingHalf = "FK",
    LastPeg = "FL",
    MidPricePeg = "FM",
    NonNegotiable = "FN",
    OpeningPeg = "FO",
    MarketPeg = "FP",
    CancelOnSystemFailure = "FQ",
    PrimaryPeg = "FR",
    Suspend = "FS",
    FixedPegToLocalBestBidOrOfferAtTimeOfOrder = "FT",
    PegToVwap = "FW",
    TradeAlong = "FX",
    TryToStop = "FY",
    CancelIfNotBest = "FZ",
    StrictLimit = "Fb",
    IgnorePriceValidityChecks = "Fc",
    PegToLimitPrice = "Fd",
    WorkToTargetStrategy = "Fe"
}
export declare enum ExecAckStatus {
    ReceivedNotYetProcessed = "0",
    Accepted = "1",
    DontKnowRejected = "2"
}
export declare enum UnderlyingSettlMethod {
    CashSettlementRequired = "C",
    PhysicalSettlementRequired = "P",
    ElectionAtExercise = "E"
}
export declare enum CollApplType {
    SpecificDeposit = 0,
    General = 1
}
export declare enum UnderlyingFXRateCalc {
    Divide = "D",
    Multiply = "M"
}
export declare enum AllocPositionEffect {
    Open = "O",
    Close = "C",
    Rolled = "R",
    Fifo = "F"
}
export declare enum DealingCapacity {
    Agent = "A",
    Principal = "P",
    RisklessPrincipal = "R"
}
export declare enum InstrmtAssignmentMethod {
    ProRata = "P",
    Random = "R"
}
export declare enum InstrumentPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum InstrumentPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum InstrumentPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum AggressorIndicator {
    OrderInitiatorIsAggressor = "Y",
    OrderInitiatorIsPassive = "N"
}
export declare enum UnderlyingInstrumentPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum UnderlyingInstrumentPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum UnderlyingInstrumentPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum MDQuoteType {
    Indicative = 0,
    Tradeable = 1,
    RestrictedTradeable = 2,
    Counter = 3,
    IndicativeAndTradeable = 4
}
export declare enum RefOrderIDSource {
    SecondaryOrderId198 = "0",
    OrderId37 = "1",
    MdEntryId278 = "2",
    QuoteEntryId299 = "3",
    OriginalOrderId = "4",
    QuoteId117 = "5",
    QuoteReqId131 = "6"
}
export declare enum DisplayWhen {
    ImmediateAfterEachFill = "1",
    ExhaustWhenDisplayQty0 = "2"
}
export declare enum DisplayMethod {
    InitialUseOriginalDisplayQty = "1",
    NewUseRefreshQty = "2",
    RandomRandomizeValue = "3",
    UndisclosedInvisibleOrder = "4"
}
export declare enum PriceProtectionScope {
    None = "0",
    LocalExchangeEcnAts = "1",
    NationalAcrossAllNationalMarkets = "2",
    GlobalAcrossAllMarkets = "3"
}
export declare enum LotType {
    OddLot = "1",
    RoundLot = "2",
    BlockLot = "3",
    RoundLotBasedUponUnitOfMeasure996 = "4"
}
export declare enum PegPriceType {
    LastPegLastSale = 1,
    MidPricePegMidpriceOfInsideQuote = 2,
    OpeningPeg = 3,
    MarketPeg = 4,
    PrimaryPegPrimaryMarketBuyAtBidOrSellAtOffer = 5,
    PegToVwap = 7,
    TrailingStopPeg = 8,
    PegToLimitPrice = 9,
    ShortSaleMinimumPricePeg = 10
}
export declare enum PegSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum TriggerType {
    PartialExecution = "1",
    SpecifiedTradingSession = "2",
    NextAuction = "3",
    PriceMovement = "4",
    OnOrderEntryOrOrderModificationEntry = "5"
}
export declare enum TriggerAction {
    Activate = "1",
    Modify = "2",
    Cancel = "3"
}
export declare enum TriggerSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum TriggerPriceType {
    BestOffer = "1",
    LastTrade = "2",
    BestBid = "3",
    BestBidOrLastTrade = "4",
    BestOfferOrLastTrade = "5",
    BestMid = "6"
}
export declare enum TriggerPriceTypeScope {
    None = "0",
    LocalExchangeEcnAts = "1",
    NationalAcrossAllNationalMarkets = "2",
    GlobalAcrossAllMarkets = "3"
}
export declare enum TriggerPriceDirection {
    TriggerIfThePriceOfTheSpecifiedTypeGoesUpToOrThroughTheSpecifiedTriggerPrice = "U",
    TriggerIfThePriceOfTheSpecifiedTypeGoesDownToOrThroughTheSpecifiedTriggerPrice = "D"
}
export declare enum TriggerOrderType {
    Market = "1",
    Limit = "2"
}
export declare enum OrderCategory {
    Order = "1",
    Quote = "2",
    PrivatelyNegotiatedTrade = "3",
    MultilegOrder = "4",
    LinkedOrder = "5",
    QuoteRequest = "6",
    ImpliedOrder = "7",
    CrossOrder = "8",
    StreamingPriceQuote = "9",
    InternalCrossOrder = "A"
}
export declare enum RootPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum RootPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum RootPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum TradeHandlingInstr {
    TradeConfirmation = "0",
    TwoPartyReport = "1",
    OnePartyReportForMatching = "2",
    OnePartyReportForPassThrough = "3",
    AutomatedFloorOrderRouting = "4",
    TwoPartyReportForClaim = "5",
    OnePartyReport = "6",
    ThirdPartyReportForPassThrough = "7",
    OnePartyReportForAutoMatch = "8"
}
export declare enum OrigTradeHandlingInstr {
    TradeConfirmation = "0",
    TwoPartyReport = "1",
    OnePartyReportForMatching = "2",
    OnePartyReportForPassThrough = "3",
    AutomatedFloorOrderRouting = "4",
    TwoPartyReportForClaim = "5",
    OnePartyReport = "6",
    ThirdPartyReportForPassThrough = "7",
    OnePartyReportForAutoMatch = "8"
}
export declare enum ApplVerID {
    Fix27 = "0",
    Fix30 = "1",
    Fix40 = "2",
    Fix41 = "3",
    Fix42 = "4",
    Fix43 = "5",
    Fix44 = "6",
    Fix50 = "7",
    Fix50Sp1 = "8",
    Fix50Sp2 = "9"
}
export declare enum RefApplVerID {
    Fix27 = "0",
    Fix30 = "1",
    Fix40 = "2",
    Fix41 = "3",
    Fix42 = "4",
    Fix43 = "5",
    Fix44 = "6",
    Fix50 = "7",
    Fix50Sp1 = "8",
    Fix50Sp2 = "9"
}
export declare enum ExDestinationIDSource {
    BicBankIdentificationCodeIso9362 = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    MicIso10383MarketIdentifierCode = "G"
}
export declare enum DefaultApplVerID {
    Fix27 = "0",
    Fix30 = "1",
    Fix40 = "2",
    Fix41 = "3",
    Fix42 = "4",
    Fix43 = "5",
    Fix44 = "6",
    Fix50 = "7",
    Fix50Sp1 = "8",
    Fix50Sp2 = "9"
}
export declare enum ImpliedMarketIndicator {
    NotImplied = 0,
    ImpliedInTheExistenceOfAMultiLegInstrumentIsImpliedByTheLegsOfThatInstrument = 1,
    ImpliedOutTheExistenceOfTheUnderlyingLegsAreImpliedByTheMultiLegInstrument = 2,
    BothImpliedInAndImpliedOut = 3
}
export declare enum SettlObligMode {
    Preliminary = 1,
    Final = 2
}
export declare enum SettlObligTransType {
    Cancel = "C",
    New = "N",
    Replace = "R",
    Restate = "T"
}
export declare enum SettlObligSource {
    InstructionsOfBroker = "1",
    InstructionsForInstitution = "2",
    Investor = "3",
    BuyersSettlementInstructions = "4",
    SellersSettlementInstructions = "5"
}
export declare enum QuoteEntryStatus {
    Accepted = 0,
    Rejected = 5,
    RemovedFromMarket = 6,
    Expired = 7,
    LockedMarketWarning = 12,
    CrossMarketWarning = 13,
    CanceledDueToLockMarket = 14,
    CanceledDueToCrossMarket = 15,
    Active = 16
}
export declare enum PrivateQuote {
    PrivateQuote = "Y",
    PublicQuote = "N"
}
export declare enum RespondentType {
    AllMarketParticipants = 1,
    SpecifiedMarketParticipants = 2,
    AllMarketMakers = 3,
    PrimaryMarketMakerS = 4
}
export declare enum SecurityTradingEvent {
    OrderImbalanceAuctionIsExtended = 1,
    TradingResumesAfterHalt = 2,
    PriceVolatilityInterruption = 3,
    ChangeOfTradingSession = 4,
    ChangeOfTradingSubsession = 5,
    ChangeOfSecurityTradingStatus = 6,
    ChangeOfBookType = 7,
    ChangeOfMarketDepth = 8,
    CorporateAction = 9
}
export declare enum StatsType {
    ExchangeLast = 1,
    HighLowPrice = 2,
    AveragePriceVwapTwap = 3,
    TurnoverPriceQty = 4
}
export declare enum MDSecSizeType {
    Customer = 1,
    CustomerProfessional = 2,
    DoNotTradeThrough = 3
}
export declare enum PriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum SettlMethod {
    CashSettlementRequired = "C",
    PhysicalSettlementRequired = "P",
    ElectionAtExercise = "E"
}
export declare enum ExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2,
    Other = 99
}
export declare enum PriceQuoteMethod {
    StandardMoneyPerUnitOfAPhysical = "STD",
    Index = "INX",
    InterestRateIndex = "INT",
    PercentOfPar = "PCTPAR"
}
export declare enum ValuationMethod {
    PremiumStyle = "EQTY",
    FuturesStyleMarkToMarket = "FUT",
    FuturesStyleWithAnAttachedCashAdjustment = "FUTDA",
    CdsStyleCollateralizationOfMarketToMarketAndCoupon = "CDS",
    CdsInDeliveryUseRecoveryRateToCalculateObligation = "CDSD"
}
export declare enum ListMethod {
    PreListedOnly = 0,
    UserRequested = 1
}
export declare enum TickRuleType {
    RegularTrading = 0,
    VariableCabinet = 1,
    FixedCabinet = 2,
    TradedAsASpreadLeg = 3,
    SettledAsASpreadLeg = 4,
    TradedAsSpread = 5
}
export declare enum NestedInstrAttribType {
    FlatSecuritiesPayInterestOnACurrentBasisButAreTradedWithoutInterest = 1,
    ZeroCoupon = 2,
    InterestBearingForEuroCommercialPaperWhenNotIssuedAtDiscount = 3,
    NoPeriodicPayments = 4,
    VariableRate = 5,
    LessFeeForPut = 6,
    SteppedCoupon = 7,
    CouponPeriodIfNotSemiAnnual = 8,
    WhenAndIfIssued = 9,
    OriginalIssueDiscount = 10,
    CallablePuttable = 11,
    EscrowedToMaturity = 12,
    EscrowedToRedemptionDateCallable = 13,
    PreRefunded = 14,
    InDefault = 15,
    Unrated = 16,
    Taxable = 17,
    Indexed = 18,
    SubjectToAlternativeMinimumTax = 19,
    OriginalIssueDiscountPrice = 20,
    CallableBelowMaturityValue = 21,
    CallableWithoutNoticeByMailToHolderUnlessRegistered = 22,
    PriceTickRulesForSecurity = 23,
    TradeTypeEligibilityDetailsForSecurity = 24,
    InstrumentDenominator = 25,
    InstrumentNumerator = 26,
    InstrumentPricePrecision = 27,
    InstrumentStrikePrice = 28,
    TradeableIndicator = 29,
    InstrumentIsEligibleToAcceptAnonymousOrders = 30,
    MinimumGuaranteedFillVolume = 31,
    MinimumGuaranteedFillStatus = 32,
    TradeAtSettlementTasEligibility = 33,
    TestInstrument = 34,
    DummyInstrument = 35,
    NegativeSettlementPriceEligibility = 36,
    NegativeStrikePriceEligibility = 37,
    UsStandardContractIndicator = 38,
    Text = 99
}
export declare enum DerivativeSymbolSfx {
    EucpWithLumpSumInterestRatherThanDiscountPrice = "CD",
    WhenIssuedForASecurityToBeReissuedUnderAnOldCusipOrIsin = "WI"
}
export declare enum DerivativeSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum DerivativeSecurityAltIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum CommUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum DerivativeProduct {
    Agency = 1,
    Commodity = 2,
    Corporate = 3,
    Currency = 4,
    Equity = 5,
    Government = 6,
    Index = 7,
    Loan = 8,
    Moneymarket = 9,
    Mortgage = 10,
    Municipal = 11,
    Other = 12,
    Financing = 13
}
export declare enum DerivativeSecurityType {
    EuroSupranationalCoupons = "EUSUPRA",
    CorporateBond = "CORP",
    ForeignExchangeContract = "FOR",
    CommonStock = "CS",
    Repurchase = "REPO",
    BradyBond = "BRADY",
    TermLoan = "TERM",
    BankersAcceptance = "BA",
    AssetBackedSecurities = "ABS",
    OtherAnticipationNotesBanGanEtc = "AN",
    MutualFund = "MF",
    FederalAgencyCoupon = "FAC",
    CorporatePrivatePlacement = "CPP",
    PreferredStock = "PS",
    Forward = "FORWARD",
    CanadianTreasuryNotes = "CAN",
    RevolverLoan = "RVLV",
    BankDepositoryNote = "BDN",
    CanadianMortgageBonds = "CMB",
    CertificateOfObligation = "COFO",
    MultilegInstrument = "MLEG",
    NonDeliverableForward = "FXNDF",
    Cap = "CAP",
    FederalAgencyDiscountNote = "FADN",
    ConvertibleBond = "CB",
    CreditDefaultSwap = "CDS",
    BuySellback = "BUYSELL",
    CanadianTreasuryBills = "CTB",
    RevolverTermLoan = "RVLVTRM",
    BankNotes = "BN",
    CorpMortgageBackedSecurities = "CMBS",
    CertificateOfParticipation = "COFP",
    NoSecurityType = "NONE",
    FxSpot = "FXSPOT",
    UsTreasuryNoteDeprecatedValueUseTnote = "UST",
    PrivateExportFunding = "PEF",
    DualCurrency = "DUAL",
    SecuritiesLoan = "SECLOAN",
    EuroSovereigns = "EUSOV",
    BridgeLoan = "BRIDGE",
    BillOfExchanges = "BOX",
    CollateralizedMortgageObligation = "CMO",
    GeneralObligationBonds = "GO",
    FxForward = "FXFWD",
    Collar = "CLLR",
    UsTreasuryBillDeprecatedValueUseTbill = "USTB",
    UsdSupranationalCoupons = "SUPRA",
    EuroCorporateBond = "EUCORP",
    SecuritiesPledge = "SECPLEDGE",
    CanadianProvincialBonds = "PROV",
    LetterOfCredit = "LOFC",
    CanadianMoneyMarkets = "CAMM",
    IoetteMortgage = "IET",
    MandatoryTender = "MT",
    FxSwap = "FXSWAP",
    CommoditySwap = "CMDTYSWAP",
    EuroCorporateFloatingRateNotes = "EUFRN",
    TreasuryBillNonUs = "TB",
    SwingLineFacility = "SWING",
    CertificateOfDeposit = "CD",
    MortgageBackedSecurities = "MBS",
    RevenueAnticipationNote = "RAN",
    WildcardEntryForUseOnSecurityDefinitionRequest = "?",
    DeliveryVersusPledge = "DVPLDG",
    Exotic = "EXOTIC",
    UsCorporateFloatingRateNotes = "FRN",
    OptionsOnCombo = "OOC",
    UsTreasuryBond = "TBOND",
    DebtorInPossession = "DINP",
    CallLoans = "CL",
    MortgageInterestOnly = "MIO",
    RevenueBonds = "REV",
    Cash = "CASH",
    Floor = "FLR",
    CollateralBasket = "COLLBSKT",
    IndexedLinked = "XLINKD",
    InterestStripFromAnyBondOrNote = "TINT",
    Defaulted = "DEFLTED",
    CommercialPaper = "CP",
    MortgagePrincipalOnly = "MPO",
    SpecialAssessment = "SPCLA",
    ForwardRateAgreement = "FRA",
    StructuredNotes = "STRUCT",
    Future = "FUT",
    UsTreasuryBill = "TBILL",
    TreasuryInflationProtectedSecurities = "TIPS",
    Withdrawn = "WITHDRN",
    DepositNotes = "DN",
    MortgagePrivatePlacement = "MPP",
    SpecialObligation = "SPCLO",
    YankeeCorporateBond = "YANK",
    PrincipalStripOfACallableBondOrNote = "TCAL",
    Replaced = "REPLACD",
    EuroCertificateOfDeposit = "EUCD",
    MiscellaneousPassThrough = "MPT",
    SpecialTax = "SPCLT",
    DerivativeForward = "FWD",
    InterestRateSwap = "IRS",
    PrincipalStripFromANonCallableBondOrNote = "TPRN",
    Matured = "MATURED",
    EuroCommercialPaper = "EUCP",
    Pfandbriefe = "PFAND",
    TaxAnticipationNote = "TAN",
    TotalReturnSwap = "TRS",
    UsTreasuryNote = "TNOTE",
    AmendedRestated = "AMENDED",
    LiquidityNote = "LQN",
    ToBeAnnounced = "TBA",
    TaxAllocation = "TAXA",
    LoanLease = "LOANLEASE",
    Retired = "RETIRED",
    MediumTermNotes = "MTN",
    TaxExemptCommercialPaper = "TECP",
    OptionsOnFutures = "OOF",
    Overnight = "ONITE",
    TaxableMunicipalCp = "TMCP",
    OptionsOnPhysicalUseNotRecommended = "OOP",
    PromissoryNote = "PN",
    ShortTermLoanNote = "STN",
    TaxRevenueAnticipationNote = "TRAN",
    Option = "OPT",
    PlazosFijos = "PZFJ",
    VariableRateDemandNote = "VRDN",
    SecuredLiquidityNote = "SLQN",
    Warrant = "WAR",
    SpotForward = "SPOTFWD",
    TimeDeposit = "TD",
    SwapOption = "SWAPTION",
    Transmission = "XMISSION",
    TermLiquidityNote = "TLQN",
    GeneralTypeForAContractBasedOnAnEstablishedIndex = "INDEX",
    ExtendedCommNote = "XCN",
    BondBasket = "BDBSKT",
    YankeeCertificateOfDeposit = "YCD",
    ContractForDifference = "CFD",
    CorrelationSwap = "CRLTNSWAP",
    DividendSwap = "DVDNDSWAP",
    EquityBasket = "EQBSKT",
    EquityForward = "EQFWD",
    ReturnSwap = "RTRNSWAP",
    VarianceSwap = "VARSWAP"
}
export declare enum DerivativeInstrmtAssignmentMethod {
    ProRata = "P",
    Random = "R"
}
export declare enum DerivativeSecurityStatus {
    Active = "1",
    Inactive = "2",
    ActiveClosingOrdersOnly = "3",
    Expired = "4",
    Delisted = "5",
    KnockedOut = "6",
    KnockOutRevoked = "7",
    PendingExpiry = "8",
    Suspended = "9",
    Published = "10",
    PendingDeletion = "11"
}
export declare enum DerivativeUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum DerivativeTimeUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum DerivativeEventType {
    Put = 1,
    Call = 2,
    Tender = 3,
    SinkingFundCall = 4,
    Activation = 5,
    Inactivation = 6,
    LastEligibleTradeDate = 7,
    SwapStartDate = 8,
    SwapEndDate = 9,
    SwapRollDate = 10,
    SwapNextStartDate = 11,
    SwapNextRollDate = 12,
    FirstDeliveryDate = 13,
    LastDeliveryDate = 14,
    InitialInventoryDueDate = 15,
    FinalInventoryDueDate = 16,
    FirstIntentDate = 17,
    LastIntentDate = 18,
    PositionRemovalDate = 19,
    MinimumNotice = 20,
    DeliveryStartTime = 21,
    DeliveryEndTime = 22,
    FirstNoticeDate = 23,
    LastNoticeDate = 24,
    FirstExerciseDate = 25,
    RedemptionDate = 26,
    TradeContinuationEffectiveDate = 27,
    Other = 99
}
export declare enum DerivativeInstrumentPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum DerivativeInstrumentPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum DerivativeInstrumentPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum DerivativeExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2,
    Other = 99
}
export declare enum MaturityMonthYearIncrementUnits {
    Months = 0,
    Days = 1,
    Weeks = 2,
    Years = 3
}
export declare enum MaturityMonthYearFormat {
    YearMonthOnlyDefault = 0,
    YearMonthDay = 1,
    YearMonthWeek = 2
}
export declare enum StrikeExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2,
    Other = 99
}
export declare enum SecondaryPriceLimitType {
    PriceDefault = 0,
    Ticks = 1,
    Percentage = 2
}
export declare enum PriceLimitType {
    PriceDefault = 0,
    Ticks = 1,
    Percentage = 2
}
export declare enum ExecInstValue {
    StayOnOfferSide = "0",
    NotHeld = "1",
    Work = "2",
    GoAlong = "3",
    OverTheDay = "4",
    Held = "5",
    ParticipateDontInitiate = "6",
    StrictScale = "7",
    TryToScale = "8",
    StayOnBidSide = "9",
    NoCross = "A",
    OkToCross = "B",
    CallFirst = "C",
    PercentOfVolume = "D",
    DoNotIncreaseDni = "E",
    DoNotReduceDnr = "F",
    AllOrNoneAon = "G",
    ReinstateOnSystemFailure = "H",
    InstitutionsOnly = "I",
    ReinstateOnTradingHalt = "J",
    CancelOnTradingHalt = "K",
    LastPegLastSale = "L",
    MidPricePegMidpriceOfInsideQuote = "M",
    NonNegotiable = "N",
    OpeningPeg = "O",
    MarketPeg = "P",
    CancelOnSystemFailure = "Q",
    PrimaryPeg = "R",
    Suspend = "S",
    FixedPegToLocalBestBidOrOfferAtTimeOfOrder = "T",
    CustomerDisplayInstruction = "U",
    NettingForForex = "V",
    PegToVwap = "W",
    TradeAlong = "X",
    TryToStop = "Y",
    CancelIfNotBest = "Z",
    TrailingStopPeg = "a",
    StrictLimit = "b",
    IgnorePriceValidityChecks = "c",
    PegToLimitPrice = "d",
    WorkToTargetStrategy = "e",
    IntermarketSweep = "f",
    ExternalRoutingAllowed = "g",
    ExternalRoutingNotAllowed = "h",
    ImbalanceOnly = "i",
    SingleExecutionRequestedForBlockTrade = "j",
    BestExecution = "k",
    SuspendOnSystemFailure = "l",
    SuspendOnTradingHalt = "m",
    ReinstateOnConnectionLoss = "n",
    CancelOnConnectionLoss = "o",
    SuspendOnConnectionLoss = "p",
    Release = "q",
    ExecuteAsDeltaNeutralUsingVolatilityProvided = "r",
    ExecuteAsDurationNeutral = "s",
    ExecuteAsFxNeutral = "t",
    MinimumGuaranteedFillEligible = "u",
    BypassNonDisplayedLiquidity = "v",
    Lock = "w",
    IgnoreNotionalValueChecks = "x",
    TradeAtReferencePrice = "y"
}
export declare enum DerivativeInstrAttribType {
    FlatSecuritiesPayInterestOnACurrentBasisButAreTradedWithoutInterest = 1,
    ZeroCoupon = 2,
    InterestBearingForEuroCommercialPaperWhenNotIssuedAtDiscount = 3,
    NoPeriodicPayments = 4,
    VariableRate = 5,
    LessFeeForPut = 6,
    SteppedCoupon = 7,
    CouponPeriodIfNotSemiAnnual = 8,
    WhenAndIfIssued = 9,
    OriginalIssueDiscount = 10,
    CallablePuttable = 11,
    EscrowedToMaturity = 12,
    EscrowedToRedemptionDateCallable = 13,
    PreRefunded = 14,
    InDefault = 15,
    Unrated = 16,
    Taxable = 17,
    Indexed = 18,
    SubjectToAlternativeMinimumTax = 19,
    OriginalIssueDiscountPrice = 20,
    CallableBelowMaturityValue = 21,
    CallableWithoutNoticeByMailToHolderUnlessRegistered = 22,
    PriceTickRulesForSecurity = 23,
    TradeTypeEligibilityDetailsForSecurity = 24,
    InstrumentDenominator = 25,
    InstrumentNumerator = 26,
    InstrumentPricePrecision = 27,
    InstrumentStrikePrice = 28,
    TradeableIndicator = 29,
    InstrumentIsEligibleToAcceptAnonymousOrders = 30,
    MinimumGuaranteedFillVolume = 31,
    MinimumGuaranteedFillStatus = 32,
    TradeAtSettlementTasEligibility = 33,
    TestInstrument = 34,
    DummyInstrument = 35,
    NegativeSettlementPriceEligibility = 36,
    NegativeStrikePriceEligibility = 37,
    UsStandardContractIndicator = 38,
    Text = 99
}
export declare enum DerivativePriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum DerivativeSettlMethod {
    CashSettlementRequired = "C",
    PhysicalSettlementRequired = "P",
    ElectionAtExercise = "E"
}
export declare enum DerivativePriceQuoteMethod {
    StandardMoneyPerUnitOfAPhysical = "STD",
    Index = "INX",
    InterestRateIndex = "INT",
    PercentOfPar = "PCTPAR"
}
export declare enum DerivativeValuationMethod {
    PremiumStyle = "EQTY",
    FuturesStyleMarkToMarket = "FUT",
    FuturesStyleWithAnAttachedCashAdjustment = "FUTDA",
    CdsStyleCollateralizationOfMarketToMarketAndCoupon = "CDS",
    CdsInDeliveryUseRecoveryRateToCalculateObligation = "CDSD"
}
export declare enum DerivativeListMethod {
    PreListedOnly = 0,
    UserRequested = 1
}
export declare enum DerivativePutOrCall {
    Put = 0,
    Call = 1
}
export declare enum ListUpdateAction {
    Add = "A",
    Delete = "D",
    Modify = "M",
    Snapshot = "S"
}
export declare enum TradSesUpdateAction {
    Add = "A",
    Delete = "D",
    Modify = "M"
}
export declare enum ApplReqType {
    RetransmissionOfApplicationMessagesForTheSpecifiedApplications = 0,
    SubscriptionToTheSpecifiedApplications = 1,
    RequestForTheLastApplLastSeqNumPublishedForTheSpecifiedApplications = 2,
    RequestValidSetOfApplications = 3,
    UnsubscribeToTheSpecifiedApplications = 4,
    CancelRetransmission = 5,
    CancelRetransmissionAndUnsubscribeToTheSpecifiedApplications = 6
}
export declare enum ApplResponseType {
    RequestSuccessfullyProcessed = 0,
    ApplicationDoesNotExist = 1,
    MessagesNotAvailable = 2
}
export declare enum ApplResponseError {
    ApplicationDoesNotExist = 0,
    MessagesRequestedAreNotAvailable = 1,
    UserNotAuthorizedForApplication = 2
}
export declare enum LegPutOrCall {
    Put = 0,
    Call = 1
}
export declare enum TradSesEvent {
    TradingResumesAfterHalt = 0,
    ChangeOfTradingSession = 1,
    ChangeOfTradingSubsession = 2,
    ChangeOfTradingStatus = 3
}
export declare enum MassActionType {
    SuspendOrders = 1,
    ReleaseOrdersFromSuspension = 2,
    CancelOrders = 3
}
export declare enum MassActionScope {
    AllOrdersForASecurity = 1,
    AllOrdersForAnUnderlyingSecurity = 2,
    AllOrdersForAProduct = 3,
    AllOrdersForACfiCode = 4,
    AllOrdersForASecurityType = 5,
    AllOrdersForATradingSession = 6,
    AllOrders = 7,
    AllOrdersForAMarket = 8,
    AllOrdersForAMarketSegmentOrMultipleSegments = 9,
    AllOrdersForASecurityGroup = 10,
    CancelForSecurityIssuer = 11,
    CancelForIssuerOfUnderlyingSecurity = 12
}
export declare enum MassActionResponse {
    RejectedSeeMassActionRejectReason1376 = 0,
    Accepted = 1,
    Completed = 2
}
export declare enum MassActionRejectReason {
    MassActionNotSupported = 0,
    InvalidOrUnknownSecurity = 1,
    InvalidOrUnknownUnderlyingSecurity = 2,
    InvalidOrUnknownProduct = 3,
    InvalidOrUnknownCfiCode = 4,
    InvalidOrUnknownSecurityType = 5,
    InvalidOrUnknownTradingSession = 6,
    InvalidOrUnknownMarket = 7,
    InvalidOrUnknownMarketSegment = 8,
    InvalidOrUnknownSecurityGroup = 9,
    InvalidOrUnknownSecurityIssuer = 10,
    InvalidOrUnknownIssuerOfUnderlyingSecurity = 11,
    Other = 99
}
export declare enum MultilegModel {
    PredefinedMultilegSecurity = 0,
    UserDefinedMultilegSecurity = 1,
    UserDefinedNonSecuritizedMultileg = 2
}
export declare enum MultilegPriceMethod {
    NetPrice = 0,
    ReversedNetPrice = 1,
    YieldDifference = 2,
    Individual = 3,
    ContractWeightedAveragePrice = 4,
    MultipliedPrice = 5
}
export declare enum LegExecInst {
    StayOnOfferSide = "0",
    NotHeld = "1",
    Work = "2",
    GoAlong = "3",
    OverTheDay = "4",
    Held = "5",
    ParticipateDontInitiate = "6",
    StrictScale = "7",
    TryToScale = "8",
    StayOnBidSide = "9",
    NoCross = "A",
    OkToCross = "B",
    CallFirst = "C",
    PercentOfVolume = "D",
    DoNotIncreaseDni = "E",
    DoNotReduceDnr = "F",
    AllOrNoneAon = "G",
    ReinstateOnSystemFailure = "H",
    InstitutionsOnly = "I",
    ReinstateOnTradingHalt = "J",
    CancelOnTradingHalt = "K",
    LastPegLastSale = "L",
    MidPricePegMidpriceOfInsideQuote = "M",
    NonNegotiable = "N",
    OpeningPeg = "O",
    MarketPeg = "P",
    CancelOnSystemFailure = "Q",
    PrimaryPeg = "R",
    Suspend = "S",
    FixedPegToLocalBestBidOrOfferAtTimeOfOrder = "T",
    CustomerDisplayInstruction = "U",
    NettingForForex = "V",
    PegToVwap = "W",
    TradeAlong = "X",
    TryToStop = "Y",
    CancelIfNotBest = "Z",
    TrailingStopPeg = "a",
    StrictLimit = "b",
    IgnorePriceValidityChecks = "c",
    PegToLimitPrice = "d",
    WorkToTargetStrategy = "e",
    IntermarketSweep = "f",
    ExternalRoutingAllowed = "g",
    ExternalRoutingNotAllowed = "h",
    ImbalanceOnly = "i",
    SingleExecutionRequestedForBlockTrade = "j",
    BestExecution = "k",
    SuspendOnSystemFailure = "l",
    SuspendOnTradingHalt = "m",
    ReinstateOnConnectionLoss = "n",
    CancelOnConnectionLoss = "o",
    SuspendOnConnectionLoss = "p",
    Release = "q",
    ExecuteAsDeltaNeutralUsingVolatilityProvided = "r",
    ExecuteAsDurationNeutral = "s",
    ExecuteAsFxNeutral = "t",
    MinimumGuaranteedFillEligible = "u",
    BypassNonDisplayedLiquidity = "v",
    Lock = "w",
    IgnoreNotionalValueChecks = "x",
    TradeAtReferencePrice = "y"
}
export declare enum ContingencyType {
    OneCancelsTheOtherOco = 1,
    OneTriggersTheOtherOto = 2,
    OneUpdatesTheOtherOuoAbsoluteQuantityReduction = 3,
    OneUpdatesTheOtherOuoProportionalQuantityReduction = 4,
    BidAndOffer = 5,
    BidAndOfferOco = 6
}
export declare enum ListRejectReason {
    BrokerExchangeOption = 0,
    ExchangeClosed = 2,
    TooLateToEnter = 4,
    UnknownOrder = 5,
    DuplicateOrderEGDupeClOrdId = 6,
    UnsupportedOrderCharacteristic = 11,
    Other = 99
}
export declare enum TrdRepPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum TradePublishIndicator {
    DoNotPublishTrade = 0,
    PublishTrade = 1,
    DeferredPublication = 2
}
export declare enum MarketUpdateAction {
    Add = "A",
    Delete = "D",
    Modify = "M"
}
export declare enum SessionStatus {
    SessionActive = 0,
    SessionPasswordChanged = 1,
    SessionPasswordDueToExpire = 2,
    NewSessionPasswordDoesNotComplyWithPolicy = 3,
    SessionLogoutComplete = 4,
    InvalidUsernameOrPassword = 5,
    AccountLocked = 6,
    LogonsAreNotAllowedAtThisTime = 7,
    PasswordExpired = 8,
    ReceivedMsgSeqNum34IsTooLow = 9,
    ReceivedNextExpectedMsgSeqNum789IsTooHigh = 10
}
export declare enum Nested4PartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum Nested4PartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum Nested4PartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum UnderlyingExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2,
    Other = 99
}
export declare enum LegExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2,
    Other = 99
}
export declare enum LegPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum ApplReportType {
    ResetApplSeqNumToNewValueSpecifiedInApplNewSeqNum1399 = 0,
    ReportsThatTheLastMessageHasBeenSentForTheApplIDsReferToRefApplLastSeqNum1357ForTheApplicationSequenceNumberOfTheLastMessage = 1,
    HeartbeatMessageIndicatingThatApplicationIdentifiedByRefApplId1355IsStillAliveReferToRefApplLastSeqNum1357ForTheApplicationSequenceNumberOfThePreviousMessage = 2,
    ApplicationMessageReSendCompleted = 3
}
export declare enum OrderDelayUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum VenueType {
    ElectronicExchange = "E",
    Pit = "P",
    ExPit = "X",
    Clearinghouse = "C",
    RegisteredMarket = "R",
    OffMarket = "O",
    CentralLimitOrderBook = "B",
    QuoteDrivenMarket = "Q",
    DarkOrderBook = "D",
    AuctionDrivenMarket = "A",
    QuoteNegotiation = "N",
    VoiceNeotiation = "V",
    HybridMarket = "H"
}
export declare enum RefOrdIDReason {
    GtcFromPreviousDay = 0,
    PartialFillRemaining = 1,
    OrderChanged = 2
}
export declare enum OrigCustOrderCapacity {
    MemberTradingForTheirOwnAccount = 1,
    ClearingFirmTradingForItsProprietaryAccount = 2,
    MemberTradingForAnotherMember = 3,
    AllOther = 4
}
export declare enum ModelType {
    UtilityProvidedStandardModel = 0,
    ProprietaryUserSuppliedModel = 1
}
export declare enum ContractMultiplierUnit {
    Shares = 0,
    Hours = 1,
    Days = 2
}
export declare enum LegContractMultiplierUnit {
    Shares = 0,
    Hours = 1,
    Days = 2
}
export declare enum UnderlyingContractMultiplierUnit {
    Shares = 0,
    Hours = 1,
    Days = 2
}
export declare enum DerivativeContractMultiplierUnit {
    Shares = 0,
    Hours = 1,
    Days = 2
}
export declare enum FlowScheduleType {
    NercEasternOffPeak = 0,
    NercWesternOffPeak = 1,
    NercCalendarAllDaysInMonth = 2,
    NercEasternPeak = 3,
    NercWesternPeak = 4
}
export declare enum LegFlowScheduleType {
    NercEasternOffPeak = 0,
    NercWesternOffPeak = 1,
    NercCalendarAllDaysInMonth = 2,
    NercEasternPeak = 3,
    NercWesternPeak = 4
}
export declare enum UnderlyingFlowScheduleType {
    NercEasternOffPeak = 0,
    NercWesternOffPeak = 1,
    NercCalendarAllDaysInMonth = 2,
    NercEasternPeak = 3,
    NercWesternPeak = 4
}
export declare enum DerivativeFlowScheduleType {
    NercEasternOffPeak = 0,
    NercWesternOffPeak = 1,
    NercCalendarAllDaysInMonth = 2,
    NercEasternPeak = 3,
    NercWesternPeak = 4
}
export declare enum FillLiquidityInd {
    AddedLiquidity = 1,
    RemovedLiquidity = 2,
    LiquidityRoutedOut = 3,
    Auction = 4,
    TriggeredStopOrder = 5,
    TriggeredContingencyOrder = 6,
    TriggeredMarketOrder = 7
}
export declare enum SideLiquidityInd {
    AddedLiquidity = 1,
    RemovedLiquidity = 2,
    LiquidityRoutedOut = 3,
    Auction = 4,
    TriggeredStopOrder = 5,
    TriggeredContingencyOrder = 6,
    TriggeredMarketOrder = 7
}
export declare enum RateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum RateSourceType {
    Primary = 0,
    Secondary = 1
}
export declare enum RestructuringType {
    FullRestructuring = "FR",
    ModifiedRestructuring = "MR",
    ModifiedModRestructuring = "MM",
    NoRestructuringSpecified = "XR"
}
export declare enum Seniority {
    SeniorSecured = "SD",
    Senior = "SR",
    Subordinated = "SB"
}
export declare enum UnderlyingRestructuringType {
    FullRestructuring = "FR",
    ModifiedRestructuring = "MR",
    ModifiedModRestructuring = "MM",
    NoRestructuringSpecified = "XR"
}
export declare enum UnderlyingSeniority {
    SeniorSecured = "SD",
    Senior = "SR",
    Subordinated = "SB"
}
export declare enum TargetPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum TargetPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum SecurityListType {
    IndustryClassification = 1,
    TradingList = 2,
    MarketMarketSegmentList = 3,
    NewspaperList = 4
}
export declare enum SecurityListTypeSource {
    IcbIndustryClassificationBenchmarkPublishedByDowJonesAndFtseWwwIcbenchmarkCom = 1,
    NaicsNorthAmericanIndustryClassificationSystemReplacedSicStandardIndustryClassificationWwwCensusGovNaicsOrWwwNaicsCom = 2,
    GicsGlobalIndustryClassificationStandardPublishedByStandardsPoor = 3
}
export declare enum NewsCategory {
    CompanyNews = 0,
    MarketplaceNews = 1,
    FinancialMarketNews = 2,
    TechnicalNews = 3,
    OtherNews = 99
}
export declare enum NewsRefType {
    Replacement = 0,
    OtherLanguage = 1,
    Complimentary = 2,
    Withdrawal = 3
}
export declare enum StrikePriceDeterminationMethod {
    FixedStrikeDefaultIfNotSpecified = 1,
    StrikeSetAtExpirationToUnderlyingOrOtherValueLookbackFloating = 2,
    StrikeSetToAverageOfUnderlyingSettlementPriceAcrossTheLifeOfTheOption = 3,
    StrikeSetToOptimalValue = 4
}
export declare enum StrikePriceBoundaryMethod {
    LessThanUnderlyingPriceIsInTheMoneyItm = 1,
    LessThanOrEqualToTheUnderlyingPriceIsInTheMoneyItm = 2,
    EqualToTheUnderlyingPriceIsInTheMoneyItm = 3,
    GreaterThanOrEqualToUnderlyingPriceIsInTheMoneyItm = 4,
    GreaterThanUnderlyingIsInTheMoneyItm = 5
}
export declare enum UnderlyingPriceDeterminationMethod {
    Regular = 1,
    SpecialReference = 2,
    OptimalValueLookback = 3,
    AverageValueAsianOption = 4
}
export declare enum OptPayoutType {
    Vanilla = 1,
    Capped = 2,
    Binary = 3
}
export declare enum ComplexEventType {
    Capped = 1,
    Trigger = 2,
    KnockInUp = 3,
    KnockInDown = 4,
    KnockOutUp = 5,
    KnockOutDown = 6,
    Underlying = 7,
    ResetBarrier = 8,
    RollingBarrier = 9,
    OneTouch = 10,
    NoTouch = 11,
    DoubleOneTouch = 12,
    DoubleNoTouch = 13,
    ForeignExchangeComposite = 14,
    ForeignExchangeQuanto = 15,
    ForeignExchangeCrossCurrency = 16,
    StrikeSpread = 17,
    CalendarSpread = 18,
    PriceObservationAsianOrLookback = 19,
    PassThrough = 20,
    StrikeSchedule = 21,
    EquityValuation = 22,
    DividendValuation = 23
}
export declare enum ComplexEventPriceBoundaryMethod {
    LessThanComplexEventPrice1486 = 1,
    LessThanOrEqualToComplexEventPrice1486 = 2,
    EqualToComplexEventPrice1486 = 3,
    GreaterThanOrEqualToComplexEventPrice1486 = 4,
    GreaterThanComplexEventPrice1486 = 5
}
export declare enum ComplexEventPriceTimeType {
    Expiration = 1,
    ImmediateAtAnyTime = 2,
    SpecifiedDateTime = 3,
    Close = 4,
    Open = 5,
    OfficialSettlementPrice = 6,
    DerivativesClose = 7,
    AsSpecifiedInMasterConfirmation = 8
}
export declare enum ComplexEventCondition {
    And = 1,
    Or = 2
}
export declare enum StreamAsgnReqType {
    StreamAssignmentForNewCustomerS = 1,
    StreamAssignmentForExistingCustomerS = 2
}
export declare enum StreamAsgnRejReason {
    UnknownClient = 0,
    ExceedsMaximumSize = 1,
    UnknownOrInvalidCurrencyPair = 2,
    NoAvailableStream = 3,
    Other = 99
}
export declare enum StreamAsgnAckType {
    AssignmentAccepted = 0,
    AssignmentRejected = 1
}
export declare enum RequestedPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum RequestResult {
    ValidRequest = 0,
    InvalidOrUnsupportedRequest = 1,
    NoDataFoundThatMatchSelectionCriteria = 2,
    NotAuthorizedToRetrieveData = 3,
    DataTemporarilyUnavailable = 4,
    RequestForDataNotSupported = 5,
    OtherFurtherInformationInRejectText1328Field = 99
}
export declare enum PartyRelationship {
    IsAlso = 0,
    ClearsFor = 1,
    ClearsThrough = 2,
    TradesFor = 3,
    TradesThrough = 4,
    Sponsors = 5,
    SponsoredThrough = 6,
    ProvidesGuaranteeFor = 7,
    IsGuaranteedBy = 8,
    MemberOf = 9,
    HasMembers = 10,
    ProvidesMarketplaceFor = 11,
    ParticipantOfMarketplace = 12,
    CarriesPositionsFor = 13,
    PostsTradesTo = 14,
    EntersTradesFor = 15,
    EntersTradesThrough = 16,
    ProvidesQuotesTo = 17,
    RequestsQuotesFrom = 18,
    InvestsFor = 19,
    InvestsThrough = 20,
    BrokersTradesFor = 21,
    BrokersTradesThrough = 22,
    ProvidesTradingServicesFor = 23,
    UsesTradingServicesOf = 24,
    ApprovesOf = 25,
    ApprovedBy = 26,
    ParentFirmFor = 27,
    SubsidiaryOf = 28,
    RegulatoryOwnerOf = 29,
    OwnedByRegulatory = 30,
    Controls = 31,
    IsControlledBy = 32,
    LegalTitledOwnerOf = 33,
    OwnedByLegalTitle = 34,
    BeneficialOwnerOf = 35,
    OwnedByBeneficial = 36,
    SettlesFor = 37,
    SettlesThrough = 38
}
export declare enum PartyDetailAltIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum PartyDetailAltSubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum TrdAckStatus {
    Accepted = 0,
    Rejected = 1,
    Received = 2
}
export declare enum RiskLimitType {
    CreditLimit = 0,
    GrossLimit = 1,
    NetLimit = 2,
    Exposure = 3,
    LongLimit = 4,
    ShortLimit = 5,
    CashMargin = 6,
    AdditionalMargin = 7,
    TotalMargin = 8,
    LimitConsumed = 9,
    ClipSizeNotionalLimitPerTimePeriod = 10,
    MaximumNotionalOrderSize = 11,
    Dv01Pv01Limit = 12,
    Cs01Limit = 13,
    VolumeLimitPerTimePeriod = 14,
    VolumeFilledAsPercentOfOrderedVolumePerTimePeriod = 15,
    NotionalFilledAsPercentOfNotionalPerTimePeriod = 16,
    TransactionExecutionLimitPerTimePeriod = 17
}
export declare enum InstrumentScopeOperator {
    Include = 1,
    Exclude = 2
}
export declare enum InstrumentScopeSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum InstrumentScopeProduct {
    Agency = 1,
    Commodity = 2,
    Corporate = 3,
    Currency = 4,
    Equity = 5,
    Government = 6,
    Index = 7,
    Loan = 8,
    Moneymarket = 9,
    Mortgage = 10,
    Municipal = 11,
    Other = 12,
    Financing = 13
}
export declare enum InstrumentScopeSecurityType {
    EuroSupranationalCoupons = "EUSUPRA",
    CorporateBond = "CORP",
    ForeignExchangeContract = "FOR",
    CommonStock = "CS",
    Repurchase = "REPO",
    BradyBond = "BRADY",
    TermLoan = "TERM",
    BankersAcceptance = "BA",
    AssetBackedSecurities = "ABS",
    OtherAnticipationNotesBanGanEtc = "AN",
    MutualFund = "MF",
    FederalAgencyCoupon = "FAC",
    CorporatePrivatePlacement = "CPP",
    PreferredStock = "PS",
    Forward = "FORWARD",
    CanadianTreasuryNotes = "CAN",
    RevolverLoan = "RVLV",
    BankDepositoryNote = "BDN",
    CanadianMortgageBonds = "CMB",
    CertificateOfObligation = "COFO",
    MultilegInstrument = "MLEG",
    NonDeliverableForward = "FXNDF",
    Cap = "CAP",
    FederalAgencyDiscountNote = "FADN",
    ConvertibleBond = "CB",
    CreditDefaultSwap = "CDS",
    BuySellback = "BUYSELL",
    CanadianTreasuryBills = "CTB",
    RevolverTermLoan = "RVLVTRM",
    BankNotes = "BN",
    CorpMortgageBackedSecurities = "CMBS",
    CertificateOfParticipation = "COFP",
    NoSecurityType = "NONE",
    FxSpot = "FXSPOT",
    UsTreasuryNoteDeprecatedValueUseTnote = "UST",
    PrivateExportFunding = "PEF",
    DualCurrency = "DUAL",
    SecuritiesLoan = "SECLOAN",
    EuroSovereigns = "EUSOV",
    BridgeLoan = "BRIDGE",
    BillOfExchanges = "BOX",
    CollateralizedMortgageObligation = "CMO",
    GeneralObligationBonds = "GO",
    FxForward = "FXFWD",
    Collar = "CLLR",
    UsTreasuryBillDeprecatedValueUseTbill = "USTB",
    UsdSupranationalCoupons = "SUPRA",
    EuroCorporateBond = "EUCORP",
    SecuritiesPledge = "SECPLEDGE",
    CanadianProvincialBonds = "PROV",
    LetterOfCredit = "LOFC",
    CanadianMoneyMarkets = "CAMM",
    IoetteMortgage = "IET",
    MandatoryTender = "MT",
    FxSwap = "FXSWAP",
    CommoditySwap = "CMDTYSWAP",
    EuroCorporateFloatingRateNotes = "EUFRN",
    TreasuryBillNonUs = "TB",
    SwingLineFacility = "SWING",
    CertificateOfDeposit = "CD",
    MortgageBackedSecurities = "MBS",
    RevenueAnticipationNote = "RAN",
    WildcardEntryForUseOnSecurityDefinitionRequest = "?",
    DeliveryVersusPledge = "DVPLDG",
    Exotic = "EXOTIC",
    UsCorporateFloatingRateNotes = "FRN",
    OptionsOnCombo = "OOC",
    UsTreasuryBond = "TBOND",
    DebtorInPossession = "DINP",
    CallLoans = "CL",
    MortgageInterestOnly = "MIO",
    RevenueBonds = "REV",
    Cash = "CASH",
    Floor = "FLR",
    CollateralBasket = "COLLBSKT",
    IndexedLinked = "XLINKD",
    InterestStripFromAnyBondOrNote = "TINT",
    Defaulted = "DEFLTED",
    CommercialPaper = "CP",
    MortgagePrincipalOnly = "MPO",
    SpecialAssessment = "SPCLA",
    ForwardRateAgreement = "FRA",
    StructuredNotes = "STRUCT",
    Future = "FUT",
    UsTreasuryBill = "TBILL",
    TreasuryInflationProtectedSecurities = "TIPS",
    Withdrawn = "WITHDRN",
    DepositNotes = "DN",
    MortgagePrivatePlacement = "MPP",
    SpecialObligation = "SPCLO",
    YankeeCorporateBond = "YANK",
    PrincipalStripOfACallableBondOrNote = "TCAL",
    Replaced = "REPLACD",
    EuroCertificateOfDeposit = "EUCD",
    MiscellaneousPassThrough = "MPT",
    SpecialTax = "SPCLT",
    DerivativeForward = "FWD",
    InterestRateSwap = "IRS",
    PrincipalStripFromANonCallableBondOrNote = "TPRN",
    Matured = "MATURED",
    EuroCommercialPaper = "EUCP",
    Pfandbriefe = "PFAND",
    TaxAnticipationNote = "TAN",
    TotalReturnSwap = "TRS",
    UsTreasuryNote = "TNOTE",
    AmendedRestated = "AMENDED",
    LiquidityNote = "LQN",
    ToBeAnnounced = "TBA",
    TaxAllocation = "TAXA",
    LoanLease = "LOANLEASE",
    Retired = "RETIRED",
    MediumTermNotes = "MTN",
    TaxExemptCommercialPaper = "TECP",
    OptionsOnFutures = "OOF",
    Overnight = "ONITE",
    TaxableMunicipalCp = "TMCP",
    OptionsOnPhysicalUseNotRecommended = "OOP",
    PromissoryNote = "PN",
    ShortTermLoanNote = "STN",
    TaxRevenueAnticipationNote = "TRAN",
    Option = "OPT",
    PlazosFijos = "PZFJ",
    VariableRateDemandNote = "VRDN",
    SecuredLiquidityNote = "SLQN",
    Warrant = "WAR",
    SpotForward = "SPOTFWD",
    TimeDeposit = "TD",
    SwapOption = "SWAPTION",
    Transmission = "XMISSION",
    TermLiquidityNote = "TLQN",
    GeneralTypeForAContractBasedOnAnEstablishedIndex = "INDEX",
    ExtendedCommNote = "XCN",
    BondBasket = "BDBSKT",
    YankeeCertificateOfDeposit = "YCD",
    ContractForDifference = "CFD",
    CorrelationSwap = "CRLTNSWAP",
    DividendSwap = "DVDNDSWAP",
    EquityBasket = "EQBSKT",
    EquityForward = "EQFWD",
    ReturnSwap = "RTRNSWAP",
    VarianceSwap = "VARSWAP"
}
export declare enum InstrumentScopePutOrCall {
    Put = 0,
    Call = 1
}
export declare enum InstrumentScopeSettlType {
    RegularFxSpotSettlementT1OrT2DependingOnCurrency = "0",
    CashTodT0 = "1",
    NextDayTomT1 = "2",
    T2 = "3",
    T3 = "4",
    T4 = "5",
    Future = "6",
    WhenAndIfIssued = "7",
    SellersOption = "8",
    T5 = "9",
    BrokenDate = "B",
    FxSpotNextSettlementSpot1AkaNextDay = "C"
}
export declare enum RelatedPartyDetailIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum RelatedPartyDetailRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum RelatedPartyDetailSubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum RelatedPartyDetailAltIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum RelatedPartyDetailAltSubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum SwapSubClass {
    Amortizing = "AMTZ",
    Compounding = "COMP"
}
export declare enum SecurityClassificationReason {
    Fee = 0,
    CreditControls = 1,
    Margin = 2,
    EntitlementEligibility = 3,
    MarketData = 4,
    AccountSelection = 5,
    DeliveryProcess = 6,
    Sector = 7
}
export declare enum PosAmtReason {
    OptionsSettlement = 0,
    PendingErosionAdjustment = 1,
    FinalErosionAdjustment = 2,
    TearUpCouponAmount = 3,
    PriceAlignmentInterest = 4,
    DeliveryInvoiceCharges = 5,
    DeliveryStorageCharges = 6
}
export declare enum LegPosAmtType {
    CashAmountCorporateEvent = "CASH",
    CashResidualAmount = "CRES",
    FinalMarkToMarketAmount = "FMTM",
    IncrementalMarkToMarket = "IMTM",
    PremiumAmount = "PREM",
    StartOfDayMarkToMarket = "SMTM",
    TradeVariationAmount = "TVAR",
    ValueAdjustedAmount = "VADJ",
    SettlementValue = "SETL",
    InitialTradeCouponAmount = "ICPN",
    AccruedCouponAmount = "ACPN",
    CouponAmount = "CPN",
    IncrementalAccruedCoupon = "IACPN",
    CollateralizedMarkToMarket = "CMTM",
    IncrementalCollateralizedMarkToMarket = "ICMTM",
    CompensationAmount = "DLV",
    TotalBankedAmount = "BANK",
    TotalCollateralizedAmount = "COLAT",
    LongPairedSwapOrSwaptionNotionalValue = "LSNV",
    ShortPairedSwapOrSwaptionNotionalValue = "SSNV",
    StartOfDayAccruedCoupon = "SACPN",
    NetPresentValue = "NPV",
    StartOfDayNetPresentValue = "SNPV",
    NetCashFlow = "NCF",
    PresentValueOfAllFees = "PVFEES",
    PresentValueOfOneBasisPoints = "PV01",
    TheFiveYearEquivalentNotionalAmount = "5YREN",
    UndiscountedMarkToMarket = "UMTM",
    MarkToModel = "MTD",
    MarkToMarketVariance = "VMTM",
    MarkToModelVariance = "VMTD",
    UpfrontPayment = "UPFRNT"
}
export declare enum LegPosAmtReason {
    OptionsSettlement = 0,
    PendingErosionAdjustment = 1,
    FinalErosionAdjustment = 2,
    TearUpCouponAmount = 3,
    PriceAlignmentInterest = 4,
    DeliveryInvoiceCharges = 5,
    DeliveryStorageCharges = 6
}
export declare enum LegQtyType {
    UnitsSharesParCurrency = 0,
    Contracts = 1,
    UnitOfMeasurePerTimeUnit = 2
}
export declare enum SideClearingTradePriceType {
    TradeClearingAtExecutionPrice = 0,
    TradeClearingAtAlternateClearingPrice = 1
}
export declare enum SecurityRejectReason {
    InvalidInstrumentRequested = 1,
    InstrumentAlreadyExists = 2,
    RequestTypeNotSupported = 3,
    SystemUnavailableForInstrumentCreation = 4,
    IneligibleInstrumentGroup = 5,
    InstrumentIdUnavailable = 6,
    InvalidOrMissingDataOnOptionLeg = 7,
    InvalidOrMissingDataOnFutureLeg = 8,
    InvalidOrMissingDataOnFxLeg = 10,
    InvalidLegPriceSpecified = 11,
    InvalidInstrumentStructureSpecified = 12
}
export declare enum ThrottleStatus {
    ThrottleLimitNotExceededNotQueued = 0,
    QueuedDueToThrottleLimitExceeded = 1
}
export declare enum ThrottleAction {
    QueueInbound = 0,
    QueueOutbound = 1,
    Reject = 2,
    Disconnect = 3,
    Warning = 4
}
export declare enum ThrottleType {
    InboundRate = 0,
    OutstandingRequests = 1
}
export declare enum ThrottleTimeUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum StreamAsgnType {
    Assignment = 1,
    Rejected = 2,
    TerminateUnassign = 3
}
export declare enum ThrottleMsgType {
    Heartbeat = "0",
    TestRequest = "1",
    ResendRequest = "2",
    Reject = "3",
    SequenceReset = "4",
    Logout = "5",
    Ioi = "6",
    Advertisement = "7",
    ExecutionReport = "8",
    OrderCancelReject = "9",
    Logon = "A",
    News = "B",
    Email = "C",
    NewOrderSingle = "D",
    NewOrderList = "E",
    OrderCancelRequest = "F",
    OrderCancelReplaceRequest = "G",
    OrderStatusRequest = "H",
    AllocationInstruction = "J",
    ListCancelRequest = "K",
    ListExecute = "L",
    ListStatusRequest = "M",
    ListStatus = "N",
    AllocationInstructionAck = "P",
    DontKnowTrade = "Q",
    QuoteRequest = "R",
    Quote = "S",
    SettlementInstructions = "T",
    MarketDataRequest = "V",
    MarketDataSnapshotFullRefresh = "W",
    MarketDataIncrementalRefresh = "X",
    MarketDataRequestReject = "Y",
    QuoteCancel = "Z",
    QuoteStatusRequest = "a",
    MassQuoteAck = "b",
    SecurityDefinitionRequest = "c",
    SecurityDefinition = "d",
    SecurityStatusRequest = "e",
    SecurityStatus = "f",
    TradingSessionStatusRequest = "g",
    TradingSessionStatus = "h",
    MassQuote = "i",
    BusinessMessageReject = "j",
    BidRequest = "k",
    BidResponse = "l",
    ListStrikePrice = "m",
    XmLnonFix = "n",
    RegistrationInstructions = "o",
    RegistrationInstructionsResponse = "p",
    OrderMassCancelRequest = "q",
    OrderMassCancelReport = "r",
    NewOrderCross = "s",
    CrossOrderCancelReplaceRequest = "t",
    CrossOrderCancelRequest = "u",
    SecurityTypeRequest = "v",
    SecurityTypes = "w",
    SecurityListRequest = "x",
    SecurityList = "y",
    DerivativeSecurityListRequest = "z",
    DerivativeSecurityList = "AA",
    NewOrderMultileg = "AB",
    MultilegOrderCancelReplace = "AC",
    TradeCaptureReportRequest = "AD",
    TradeCaptureReport = "AE",
    OrderMassStatusRequest = "AF",
    QuoteRequestReject = "AG",
    RfqRequest = "AH",
    QuoteStatusReport = "AI",
    QuoteResponse = "AJ",
    Confirmation = "AK",
    PositionMaintenanceRequest = "AL",
    PositionMaintenanceReport = "AM",
    RequestForPositions = "AN",
    RequestForPositionsAck = "AO",
    PositionReport = "AP",
    TradeCaptureReportRequestAck = "AQ",
    TradeCaptureReportAck = "AR",
    AllocationReport = "AS",
    AllocationReportAck = "AT",
    ConfirmationAck = "AU",
    SettlementInstructionRequest = "AV",
    AssignmentReport = "AW",
    CollateralRequest = "AX",
    CollateralAssignment = "AY",
    CollateralResponse = "AZ",
    CollateralReport = "BA",
    CollateralInquiry = "BB",
    NetworkCounterpartySystemStatusRequest = "BC",
    NetworkCounterpartySystemStatusResponse = "BD",
    UserRequest = "BE",
    UserResponse = "BF",
    CollateralInquiryAck = "BG",
    ConfirmationRequest = "BH",
    ContraryIntentionReport = "BO",
    SecurityDefinitionUpdateReport = "BP",
    SecurityListUpdateReport = "BK",
    AdjustedPositionReport = "BL",
    AllocationInstructionAlert = "BM",
    ExecutionAck = "BN",
    TradingSessionList = "BJ",
    TradingSessionListRequest = "BI",
    SettlementObligationReport = "BQ",
    DerivativeSecurityListUpdateReport = "BR",
    TradingSessionListUpdateReport = "BS",
    MarketDefinitionRequest = "BT",
    MarketDefinition = "BU",
    MarketDefinitionUpdateReport = "BV",
    ApplicationMessageRequest = "BW",
    ApplicationMessageRequestAck = "BX",
    ApplicationMessageReport = "BY",
    OrderMassActionReport = "BZ",
    OrderMassActionRequest = "CA",
    UserNotification = "CB",
    StreamAssignmentRequest = "CC",
    StreamAssignmentReport = "CD",
    StreamAssignmentReportAck = "CE",
    PartyDetailsListRequest = "CF",
    PartyDetailsListReport = "CG",
    MarginRequirementInquiry = "CH",
    MarginRequirementInquiryAck = "CI",
    MarginRequirementReport = "CJ",
    PartyDetailsListUpdateReport = "CK",
    PartyRiskLimitsRequest = "CL",
    PartyRiskLimitsReport = "CM",
    SecurityMassStatusRequest = "CN",
    SecurityMassStatus = "CO",
    AccountSummaryReport = "CQ",
    PartyRiskLimitsUpdateReport = "CR",
    PartyRiskLimitsDefinitionRequest = "CS",
    PartyRiskLimitsDefinitionRequestAck = "CT",
    PartyEntitlementsRequest = "CU",
    PartyEntitlementsReport = "CV",
    QuoteAck = "CW",
    PartyDetailsDefinitionRequest = "CX",
    PartyDetailsDefinitionRequestAck = "CY",
    PartyEntitlementsUpdateReport = "CZ",
    PartyEntitlementsDefinitionRequest = "DA",
    PartyEntitlementsDefinitionRequestAck = "DB",
    TradeMatchReport = "DC",
    TradeMatchReportAck = "DD",
    PartyRiskLimitsReportAck = "DE",
    PartyRiskLimitCheckRequest = "DF",
    PartyRiskLimitCheckRequestAck = "DG",
    PartyActionRequest = "DH",
    PartyActionReport = "DI",
    MassOrder = "DJ",
    MassOrderAck = "DK",
    PositionTransferInstruction = "DL",
    PositionTransferInstructionAck = "DM",
    PositionTransferReport = "DN",
    MarketDataStatisticsRequest = "DO",
    MarketDataStatisticsReport = "DP",
    CollateralReportAck = "DQ",
    MarketDataReport = "DR",
    CrossRequest = "DS",
    CrossRequestAck = "DT"
}
export declare enum MatchInst {
    Match = 1,
    DoNotMatch = 2
}
export declare enum TriggerScope {
    ThisOrderDefault = 0,
    OtherOrderUseRefId = 1,
    AllOtherOrdersForTheGivenSecurity = 2,
    AllOtherOrdersForTheGivenSecurityAndPrice = 3,
    AllOtherOrdersForTheGivenSecurityAndSide = 4,
    AllOtherOrdersForTheGivenSecurityPriceAndSide = 5
}
export declare enum LimitAmtType {
    CreditLimit = 0,
    GrossPositionLimit = 1,
    NetPositionLimit = 2,
    RiskExposureLimit = 3,
    LongPositionLimit = 4,
    ShortPositionLimit = 5
}
export declare enum MarginReqmtInqQualifier {
    Summary = 0,
    Detail = 1,
    ExcessDeficit = 2,
    NetPosition = 3
}
export declare enum MarginReqmtRptType {
    Summary = 0,
    Detail = 1,
    ExcessDeficit = 2
}
export declare enum MarginReqmtInqStatus {
    Accepted = 0,
    AcceptedWithWarnings = 1,
    Completed = 2,
    CompletedWithWarnings = 3,
    Rejected = 4
}
export declare enum MarginReqmtInqResult {
    SuccessfulDefault = 0,
    InvalidOrUnknownInstrument = 1,
    InvalidOrUnknownMarginClass = 2,
    InvalidParties = 3,
    InvalidTransportTypeRequested = 4,
    InvalidDestinationRequested = 5,
    NoMarginRequirementFound = 6,
    MarginRequirementInquiryQualifierNotSupported = 7,
    UnauthorizedForMarginRequirementInquiry = 8,
    OtherFurtherInformationInText58Field = 99
}
export declare enum MarginAmtType {
    AdditionalMargin = 1,
    AdjustedMargin = 2,
    UnadjustedMargin = 3,
    BinaryAddOnAmount = 4,
    CashBalanceAmount = 5,
    ConcentrationMargin = 6,
    CoreMargin = 7,
    DeliveryMargin = 8,
    DiscretionaryMargin = 9,
    FuturesSpreadMargin = 10,
    InitialMargin = 11,
    LiquidatingMargin = 12,
    MarginCallAmount = 13,
    MarginDeficitAmountShortfall = 14,
    MarginExcessAmountSurplus = 15,
    OptionPremiumAmount = 16,
    PremiumMargin = 17,
    ReserveMargin = 18,
    SecurityCollateralAmount = 19,
    StressTestAddOnAmount = 20,
    SuperMargin = 21,
    TotalMargin = 22,
    VariationMargin = 23,
    SecondaryVariationMargin = 24,
    RolledUpMarginDeficit = 25,
    SpreadResponseMargin = 26,
    SystemicRiskMargin = 27,
    CurveRiskMargin = 28,
    IndexSpreadRiskMargin = 29,
    SectorRiskMargin = 30,
    JumpToDefaultRiskMargin = 31,
    BasisRiskMargin = 32,
    InterestRateRiskMargin = 33,
    JumpToHealthRiskMargin = 34,
    OtherRiskMargin = 35
}
export declare enum RelatedInstrumentType {
    HedgesForInstrument = 1,
    Underlier = 2,
    EquityEquivalent = 3,
    NearestExchangeTradedContract = 4,
    RetailEquivalentOfWholesaleInstrument = 5,
    Leg = 6
}
export declare enum RelatedSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum MarketMakerActivity {
    NoParticipation = 0,
    BuyParticipation = 1,
    SellParticipation = 2,
    BothBuyAndSellParticipation = 3
}
export declare enum RequestingPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum RequestingPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum RequestingPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum PartyDetailStatus {
    ActiveDefaultIfNotSpecified = 0,
    Suspended = 1,
    Halted = 2
}
export declare enum PartyDetailRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum RelatedPartyDetailRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum SecurityMassTradingStatus {
    OpeningDelay = 1,
    TradingHalt = 2,
    Resume = 3,
    NoOpenNoResume = 4,
    PriceIndication = 5,
    TradingRangeIndication = 6,
    MarketImbalanceBuy = 7,
    MarketImbalanceSell = 8,
    MarketOnCloseImbalanceBuy = 9,
    MarketOnCloseImbalanceSell = 10,
    NoMarketImbalance = 12,
    NoMarketOnCloseImbalance = 13,
    ItsPreOpening = 14,
    NewPriceIndication = 15,
    TradeDisseminationTime = 16,
    ReadyToTradeStartOfSession = 17,
    NotAvailableForTradingEndOfSession = 18,
    NotTradedOnThisMarket = 19,
    UnknownOrInvalid = 20,
    PreOpen = 21,
    OpeningRotation = 22,
    FastMarket = 23,
    PreCrossSystemIsInAPreCrossStateAllowingMarketToRespondToEitherSideOfCross = 24,
    CrossSystemHasCrossedAPercentageOfTheOrdersAndAllowsMarketToRespondPriorToCrossingRemainingPortion = 25,
    PostClose = 26,
    NoCancel = 27
}
export declare enum SecurityMassTradingEvent {
    OrderImbalanceAuctionIsExtended = 1,
    TradingResumesAfterHalt = 2,
    PriceVolatilityInterruption = 3,
    ChangeOfTradingSession = 4,
    ChangeOfTradingSubsession = 5,
    ChangeOfSecurityTradingStatus = 6,
    ChangeOfBookType = 7,
    ChangeOfMarketDepth = 8,
    CorporateAction = 9
}
export declare enum MassHaltReason {
    NewsDissemination = 0,
    OrderInflux = 1,
    OrderImbalance = 2,
    AdditionalInformation = 3,
    NewsPending = 4,
    EquipmentChangeover = 5
}
export declare enum MDSecurityTradingStatus {
    OpeningDelay = 1,
    TradingHalt = 2,
    Resume = 3,
    NoOpenNoResume = 4,
    PriceIndication = 5,
    TradingRangeIndication = 6,
    MarketImbalanceBuy = 7,
    MarketImbalanceSell = 8,
    MarketOnCloseImbalanceBuy = 9,
    MarketOnCloseImbalanceSell = 10,
    NoMarketImbalance = 12,
    NoMarketOnCloseImbalance = 13,
    ItsPreOpening = 14,
    NewPriceIndication = 15,
    TradeDisseminationTime = 16,
    ReadyToTradeStartOfSession = 17,
    NotAvailableForTradingEndOfSession = 18,
    NotTradedOnThisMarket = 19,
    UnknownOrInvalid = 20,
    PreOpen = 21,
    OpeningRotation = 22,
    FastMarket = 23,
    PreCrossSystemIsInAPreCrossStateAllowingMarketToRespondToEitherSideOfCross = 24,
    CrossSystemHasCrossedAPercentageOfTheOrdersAndAllowsMarketToRespondPriorToCrossingRemainingPortion = 25,
    PostClose = 26,
    NoCancel = 27
}
export declare enum MDHaltReason {
    NewsDissemination = 0,
    OrderInflux = 1,
    OrderImbalance = 2,
    AdditionalInformation = 3,
    NewsPending = 4,
    EquipmentChangeover = 5
}
export declare enum ThrottleInst {
    RejectIfThrottleLimitExceeded = 0,
    QueueIfThrottleLimitExceeded = 1
}
export declare enum ThrottleCountIndicator {
    OutstandingRequestsUnchanged = 0,
    OutstandingRequestsDecreased = 1
}
export declare enum ShortSaleRestriction {
    NoRestrictions = 0,
    SecurityIsNotShortable = 1,
    SecurityNotShortableAtOrBelowTheBestBid = 2,
    SecurityIsNotShortableWithoutPreBorrow = 3
}
export declare enum ShortSaleExemptionReason {
    ExemptionReasonUnknown = 0,
    IncomeSellShortExempt = 1,
    AboveNationalBestBidBrokerDealerProvision = 2,
    DelayedDelivery = 3,
    OddLot = 4,
    DomesticArbitrage = 5,
    InternationalArbitrage = 6,
    UnderwriterOrSyndicateDistribution = 7,
    RisklessPrincipal = 8,
    Vwap = 9
}
export declare enum LegShortSaleExemptionReason {
    ExemptionReasonUnknown = 0,
    IncomeSellShortExempt = 1,
    AboveNationalBestBidBrokerDealerProvision = 2,
    DelayedDelivery = 3,
    OddLot = 4,
    DomesticArbitrage = 5,
    InternationalArbitrage = 6,
    UnderwriterOrSyndicateDistribution = 7,
    RisklessPrincipal = 8,
    Vwap = 9
}
export declare enum SideShortSaleExemptionReason {
    ExemptionReasonUnknown = 0,
    IncomeSellShortExempt = 1,
    AboveNationalBestBidBrokerDealerProvision = 2,
    DelayedDelivery = 3,
    OddLot = 4,
    DomesticArbitrage = 5,
    InternationalArbitrage = 6,
    UnderwriterOrSyndicateDistribution = 7,
    RisklessPrincipal = 8,
    Vwap = 9
}
export declare enum PartyDetailIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum PartyDetailRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum PartyDetailSubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum StrikeUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum OrderOrigination {
    OrderReceivedFromACustomer = 1,
    OrderReceivedFromWithinTheFirm = 2,
    OrderReceivedFromAnotherBrokerDealer = 3,
    OrderReceivedFromACustomerOrOriginatedWithTheFirm = 4,
    OrderReceivedFromADirectAccessOrSponsoredAccessCustomer = 5
}
export declare enum AllocationRollupInstruction {
    RollUp = 0,
    DoNotRollUp = 1
}
export declare enum AllocReversalStatus {
    Completed = 0,
    Refused = 1,
    Cancelled = 2
}
export declare enum ObligationType {
    Bond = "0",
    ConvertibleBond = "1",
    Mortgage = "2",
    Loan = "3"
}
export declare enum TradePriceNegotiationMethod {
    PercentOfPar = 0,
    DealSpread = 1,
    UpfrontPoints = 2,
    UpfrontAmount = 3,
    PercentOfParAndUpfrontAmount = 4,
    DealSpreadAndUpfrontAmount = 5,
    UpfrontPointsAndUpfrontAmount = 6
}
export declare enum UpfrontPriceType {
    PercentageIEPercentOfParOftenCalledDollarPriceForFixedIncome = 1,
    FixedAmountAbsoluteValue = 3
}
export declare enum RiskLimitRequestType {
    DefinitionsDefault = 1,
    Utilization = 2,
    DefinitionsAndUtilization = 3
}
export declare enum RiskLimitRequestResult {
    SuccessfulDefault = 0,
    InvalidPartyIes = 1,
    InvalidRelatedPartyIes = 2,
    InvalidRiskLimitTypeS = 3,
    InvalidRiskLimitIdS = 4,
    InvalidRiskLimitAmountS = 5,
    InvalidRiskWarningLevelActionS = 6,
    InvalidRiskInstrumentScopeS = 7,
    RiskLimitActionsNotSupported = 8,
    WarningLevelsNotSupported = 9,
    WarningLevelActionsNotSupported = 10,
    RiskInstrumentScopeNotSupported = 11,
    RiskLimitNotApprovedForPartyIes = 12,
    RiskLimitAlreadyDefinedForPartyIes = 13,
    InstrumentNotApprovedForPartyIes = 14,
    NotAuthorized = 98,
    Other = 99
}
export declare enum RiskLimitRequestStatus {
    Accepted = 0,
    AcceptedWithChanges = 1,
    Rejected = 2,
    AcceptancePending = 3
}
export declare enum RiskLimitStatus {
    Accepted = 0,
    AcceptedWithChanges = 1,
    Rejected = 2
}
export declare enum RiskLimitResult {
    SuccessfulDefault = 0,
    InvalidPartyIes = 1,
    InvalidRelatedPartyIes = 2,
    InvalidRiskLimitTypeS = 3,
    InvalidRiskLimitIdS = 4,
    InvalidRiskLimitAmountS = 5,
    InvalidRiskWarningLevelActionS = 6,
    InvalidRiskInstrumentScopeS = 7,
    RiskLimitActionsNotSupported = 8,
    WarningLevelsNotSupported = 9,
    WarningLevelActionsNotSupported = 10,
    RiskInstrumentScopeNotSupported = 11,
    RiskLimitNotApprovedForPartyIes = 12,
    RiskLimitAlreadyDefinedForPartyIes = 13,
    InstrumentNotApprovedForPartyIes = 14,
    NotAuthorized = 98,
    Other = 99
}
export declare enum RiskLimitAction {
    QueueInbound = 0,
    QueueOutbound = 1,
    Reject = 2,
    Disconnect = 3,
    Warning = 4,
    PingCreditCheckModelWithRevalidation = 5,
    PingCreditCheckModelWithoutRevalidation = 6,
    PushCreditCheckModelWithRevalidation = 7,
    PushCreditCheckModelWithoutRevalidation = 8,
    Suspend = 9,
    HaltTrading = 10
}
export declare enum RiskWarningLevelAction {
    QueueInbound = 0,
    QueueOutbound = 1,
    Reject = 2,
    Disconnect = 3,
    Warning = 4,
    PingCreditCheckModelWithRevalidation = 5,
    PingCreditCheckModelWithoutRevalidation = 6,
    PushCreditCheckModelWithRevalidation = 7,
    PushCreditCheckModelWithoutRevalidation = 8,
    Suspend = 9,
    HaltTrading = 10
}
export declare enum EntitlementType {
    Trade = 0,
    MakeMarkets = 1,
    HoldPositions = 2,
    PerformGiveUps = 3,
    SubmitIndicationsOfInterestIoIs = 4,
    SubscribeToMarketData = 5,
    ShortWithPreBorrow = 6,
    SubmitQuoteRequests = 7,
    RespondToQuoteRequests = 8
}
export declare enum EntitlementAttribDatatype {
    Int = 1,
    Length = 2,
    NumInGroup = 3,
    SeqNum = 4,
    TagNum = 5,
    Float = 6,
    Qty = 7,
    Price = 8,
    PriceOffset = 9,
    Amt = 10,
    Percentage = 11,
    Char = 12,
    Boolean = 13,
    String = 14,
    MultipleCharValue = 15,
    Currency = 16,
    Exchange = 17,
    MonthYear = 18,
    UtcTimestamp = 19,
    UtcTimeOnly = 20,
    LocalMktDate = 21,
    UtcDateOnly = 22,
    Data = 23,
    MultipleStringValue = 24,
    Country = 25,
    Language = 26,
    TzTimeOnly = 27,
    TzTimestamp = 28,
    Tenor = 29,
    DayOfMonth = 30,
    XmlData = 31,
    Pattern = 32,
    Reserved100Plus = 33,
    Reserved1000Plus = 34,
    Reserved4000Plus = 35
}
export declare enum TradSesControl {
    AutomaticDefault = 0,
    Manual = 1
}
export declare enum TradeVolType {
    NumberOfUnitsEGShareParCurrencyContractsDefault = 0,
    NumberOfRoundLots = 1
}
export declare enum OrderEventType {
    Added0New = 1,
    Modified5Replaced = 2,
    Deleted4Canceled = 3,
    PartiallyFilledFTrade = 4,
    FilledFTrade = 5,
    Suspended9Suspended = 6,
    ReleasedNReleased = 7,
    RestatedDRestated = 8,
    LockedMLocked = 9,
    TriggeredLTriggeredOrActivatedBySystem = 10,
    ActivatedLTriggeredOrActivatedBySystem = 11
}
export declare enum OrderEventReason {
    AddOrderRequest = 1,
    ModifyOrderRequest = 2,
    DeleteOrderRequest = 3,
    OrderEnteredOutOfBand = 4,
    OrderModifiedOutOfBand = 5,
    OrderDeletedOutOfBand = 6,
    OrderActivatedOrTriggered = 7,
    OrderExpired = 8,
    ReserveOrderRefreshed = 9,
    AwayMarketBetter = 10,
    CorporateAction = 11,
    StartOfDay = 12,
    EndOfDay = 13
}
export declare enum OrderEventLiquidityIndicator {
    AddedLiquidity = 1,
    RemovedLiquidity = 2,
    LiquidityRoutedOut = 3,
    Auction = 4,
    TriggeredStopOrder = 5,
    TriggeredContingencyOrder = 6,
    TriggeredMarketOrder = 7
}
export declare enum AuctionType {
    None = 0,
    BlockOrderAuction = 1,
    DirectedOrderAuction = 2,
    ExposureOrderAuction = 3,
    FlashOrderAuction = 4,
    FacilitationOrderAuction = 5,
    SolicitationOrderAuction = 6,
    PriceImprovementMechanismPim = 7,
    DirectedOrderPriceImprovementMechanismPim = 8
}
export declare enum AuctionInstruction {
    AutomaticAuctionPermittedDefault = 0,
    AutomaticAuctionNotPermitted = 1
}
export declare enum LockType {
    NotLocked = 0,
    AwayMarketBetter = 1,
    ThreeTickLocked = 2,
    LockedByMarketMaker = 3,
    DirectedOrderLock = 4,
    MultilegLock = 5,
    MarketOrderLock = 6,
    PreAssignmentLock = 7
}
export declare enum ReleaseInstruction {
    IntermarketSweepOrderIso = 1,
    NoAwayMarketBetterCheck = 2
}
export declare enum DisclosureType {
    Volume = 1,
    Price = 2,
    Side = 3,
    Aon = 4,
    General = 5,
    ClearingAccount = 6,
    CmtaAccount = 7
}
export declare enum DisclosureInstruction {
    No = 0,
    Yes = 1,
    UseDefaultSetting = 2
}
export declare enum TradingCapacity {
    Customer = 1,
    CustomerProfessional = 2,
    BrokerDealer = 3,
    CustomerBrokerDealer = 4,
    Principal = 5,
    MarketMaker = 6,
    AwayMarketMaker = 7,
    SystematicInternaliser = 8
}
export declare enum ClearingAccountType {
    Customer = 1,
    Firm = 2,
    MarketMaker = 3
}
export declare enum LegClearingAccountType {
    Customer = 1,
    Firm = 2,
    MarketMaker = 3
}
export declare enum TargetPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum RelatedPriceSource {
    NbbNationalBestBid = 1,
    NboNationalBestOffer = 2
}
export declare enum MinQtyMethod {
    OnceAppliesOnlyToFirstExecution = 1,
    MultipleAppliesToEveryExecution = 2
}
export declare enum Triggered {
    NotTriggeredDefault = 0,
    Triggered = 1,
    StopOrderTriggered = 2,
    OneCancelsTheOtherOcoOrderTriggered = 3,
    OneTriggersTheOtherOtoOrderTriggered = 4,
    OneUpdatesTheOtherOuoOrderTriggered = 5
}
export declare enum EventTimeUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ClearedIndicator {
    NotCleared = 0,
    Cleared = 1,
    Submitted = 2,
    Rejected = 3
}
export declare enum ContractRefPosType {
    TwoComponentIntercommoditySpread = 0,
    IndexOrBasket = 1,
    TwoComponentLocationalBasis = 2,
    Other = 99
}
export declare enum PositionCapacity {
    Principal = 0,
    Agent = 1,
    Customer = 2,
    Counterparty = 3
}
export declare enum PosQtyUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum TradePriceCondition {
    SpecialCumDividendCd = 0,
    SpecialCumRightsCr = 1,
    SpecialExDividendXd = 2,
    SpecialExRightsXr = 3,
    SpecialCumCouponCc = 4,
    SpecialCumCapitalRepaymentsCp = 5,
    SpecialExCouponXc = 6,
    SpecialExCapitalRepaymentsXp = 7,
    CashSettlementCs = 8,
    SpecialCumBonusCb = 9,
    SpecialPriceSp = 10,
    SpecialExBonusXb = 11,
    GuaranteedDeliveryGd = 12,
    SpecialDividend = 13,
    PriceImprovement = 14,
    NonPriceFormingTrade = 15,
    TradeExemptedFromTradingObligation = 16,
    PriceIsPending = 17,
    PriceIsNotApplicable = 18
}
export declare enum TradeAllocStatus {
    PendingClear = 0,
    Claimed = 1,
    Cleared = 2,
    Rejected = 3
}
export declare enum TradeQtyType {
    ClearedQuantity = 0,
    LongSideClaimedQuantity = 1,
    ShortSideClaimedQuantity = 2,
    LongSideRejectedQuantity = 3,
    ShortSideRejectedQuantity = 4,
    PendingQuantity = 5,
    TransactionQuantity = 6,
    RemainingTradeQuantity = 7,
    PreviousRemainingTradeQuantity = 8
}
export declare enum TradeAllocAmtType {
    CashAmountCorporateEvent = "CASH",
    CashResidualAmount = "CRES",
    FinalMarkToMarketAmount = "FMTM",
    IncrementalMarkToMarket = "IMTM",
    PremiumAmount = "PREM",
    StartOfDayMarkToMarket = "SMTM",
    TradeVariationAmount = "TVAR",
    ValueAdjustedAmount = "VADJ",
    SettlementValue = "SETL",
    InitialTradeCouponAmount = "ICPN",
    AccruedCouponAmount = "ACPN",
    CouponAmount = "CPN",
    IncrementalAccruedCoupon = "IACPN",
    CollateralizedMarkToMarket = "CMTM",
    IncrementalCollateralizedMarkToMarket = "ICMTM",
    CompensationAmount = "DLV",
    TotalBankedAmount = "BANK",
    TotalCollateralizedAmount = "COLAT",
    LongPairedSwapOrSwaptionNotionalValue = "LSNV",
    ShortPairedSwapOrSwaptionNotionalValue = "SSNV",
    StartOfDayAccruedCoupon = "SACPN",
    NetPresentValue = "NPV",
    StartOfDayNetPresentValue = "SNPV",
    NetCashFlow = "NCF",
    PresentValueOfAllFees = "PVFEES",
    PresentValueOfOneBasisPoints = "PV01",
    TheFiveYearEquivalentNotionalAmount = "5YREN",
    UndiscountedMarkToMarket = "UMTM",
    MarkToModel = "MTD",
    MarkToMarketVariance = "VMTM",
    MarkToModelVariance = "VMTD",
    UpfrontPayment = "UPFRNT"
}
export declare enum TradeAllocGroupInstruction {
    AddToAnExistingAllocationGroupIfOneExists = 0,
    DoNotAddTheTradeToAnAllocationGroup = 1
}
export declare enum OffsetInstruction {
    Offset = 0,
    Onset = 1
}
export declare enum TradeAllocAmtReason {
    OptionsSettlement = 0,
    PendingErosionAdjustment = 1,
    FinalErosionAdjustment = 2,
    TearUpCouponAmount = 3,
    PriceAlignmentInterest = 4,
    DeliveryInvoiceCharges = 5,
    DeliveryStorageCharges = 6
}
export declare enum SideAvgPxIndicator {
    NoAveragePricing = 0,
    TradeIsPartOfTheAveragePriceGroupIdentifiedByTheSideAvgPxGroupId1854 = 1,
    LastTradeIsTheAveragePriceGroupIdentifiedByTheSideAvgPxGroupId1854 = 2
}
export declare enum RelatedTradeIDSource {
    NonFixSource = 0,
    TradeId = 1,
    SecondaryTradeId = 2,
    TradeReportId = 3,
    FirmTradeId = 4,
    SecondaryFirmTradeId = 5,
    RegulatoryTradeId = 6
}
export declare enum RelatedPositionIDSource {
    PositionMaintenanceReportIdPosMaintRptId721 = 1,
    PositionTransferIdTransferId2437 = 2,
    PositionEntityIdPositionId2618 = 3
}
export declare enum QuoteAckStatus {
    ReceivedNotYetProcessed = 0,
    Accepted = 1,
    Rejected = 2
}
export declare enum ValueCheckType {
    PriceCheck = 1,
    NotionalValueCheck = 2
}
export declare enum ValueCheckAction {
    DoNotCheck = 0,
    Check = 1,
    BestEffort = 2
}
export declare enum PartyDetailRequestResult {
    SuccessfulDefault = 0,
    InvalidPartyIes = 1,
    InvalidRelatedPartyIes = 2,
    InvalidPartyStatusEs = 3,
    NotAuthorized = 98,
    Other = 99
}
export declare enum PartyDetailRequestStatus {
    Accepted = 0,
    AcceptedWithChanges = 1,
    Rejected = 2,
    AcceptancePending = 3
}
export declare enum PartyDetailDefinitionStatus {
    Accepted = 0,
    AcceptedWithChanges = 1,
    Rejected = 2
}
export declare enum PartyDetailDefinitionResult {
    SuccessfulDefault = 0,
    InvalidPartyIes = 1,
    InvalidRelatedPartyIes = 2,
    InvalidPartyStatusEs = 3,
    NotAuthorized = 98,
    Other = 99
}
export declare enum EntitlementRequestResult {
    SuccessfulDefault = 0,
    InvalidPartyIes = 1,
    InvalidRelatedPartyIes = 2,
    InvalidEntitlementTypeS = 3,
    InvalidEntitlementIdSRefIdS = 4,
    InvalidEntitlementAttributeS = 5,
    InvalidInstrumentScopeS = 6,
    InvalidMarketSegmentScopeS = 7,
    InvalidStartDate = 8,
    InvalidEndDate = 9,
    InstrumentScopeNotSupported = 10,
    MarketSegmentScopeNotSupported = 11,
    EntitlementNotApprovedForPartyIes = 12,
    EntitlementAlreadyDefinedForPartyIes = 13,
    InstrumentNotApprovedForPartyIes = 14,
    NotAuthorized = 98,
    Other = 99
}
export declare enum EntitlementRequestStatus {
    Accepted = 0,
    AcceptedWithChanges = 1,
    Rejected = 2,
    AcceptancePending = 3
}
export declare enum EntitlementStatus {
    Accepted = 0,
    AcceptedWithChanges = 1,
    Rejected = 2,
    Pending = 3,
    Requested = 4,
    Deferred = 5
}
export declare enum EntitlementResult {
    SuccessfulDefault = 0,
    InvalidPartyIes = 1,
    InvalidRelatedPartyIes = 2,
    InvalidEntitlementTypeS = 3,
    InvalidEntitlementIdSRefIdS = 4,
    InvalidEntitlementAttributeS = 5,
    InvalidInstrumentScopeS = 6,
    InvalidMarketSegmentScopeS = 7,
    InvalidStartDate = 8,
    InvalidEndDate = 9,
    InstrumentScopeNotSupported = 10,
    MarketSegmentScopeNotSupported = 11,
    EntitlementNotApprovedForPartyIes = 12,
    EntitlementAlreadyDefinedForPartyIes = 13,
    InstrumentNotApprovedForPartyIes = 14,
    NotAuthorized = 98,
    Other = 99
}
export declare enum SettlPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum TradeMatchAckStatus {
    ReceivedNotYetProcessed = 0,
    Accepted = 1,
    Rejected = 2
}
export declare enum TradeMatchRejectReason {
    Successful = 0,
    InvalidPartyInformation = 1,
    UnknownInstrument = 2,
    NotAuthorizedToReportTrades = 3,
    InvalidTradeType = 4,
    Other = 99
}
export declare enum SideVenueType {
    ElectronicExchange = "E",
    Pit = "P",
    ExPit = "X",
    Clearinghouse = "C",
    RegisteredMarket = "R",
    OffMarket = "O",
    CentralLimitOrderBook = "B",
    QuoteDrivenMarket = "Q",
    DarkOrderBook = "D",
    AuctionDrivenMarket = "A",
    QuoteNegotiation = "N",
    VoiceNeotiation = "V",
    HybridMarket = "H"
}
export declare enum RegulatoryTradeIDEvent {
    InitialBlockTrade = 0,
    Allocation = 1,
    Clearing = 2,
    Compression = 3,
    Novation = 4,
    Termination = 5,
    PostTradeValuation = 6
}
export declare enum RegulatoryTradeIDType {
    Current = 0,
    Previous = 1,
    Block = 2,
    Related = 3,
    ClearedBlockTrade = 4,
    TradingVenueTransactionIdentifier = 5
}
export declare enum AllocRegulatoryTradeIDEvent {
    InitialBlockTrade = 0,
    Allocation = 1,
    Clearing = 2,
    Compression = 3,
    Novation = 4,
    Termination = 5,
    PostTradeValuation = 6
}
export declare enum AllocRegulatoryTradeIDType {
    Current = 0,
    Previous = 1,
    Block = 2,
    Related = 3,
    ClearedBlockTrade = 4,
    TradingVenueTransactionIdentifier = 5
}
export declare enum ExposureDurationUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum PriceMovementType {
    Amount = 0,
    Percentage = 1
}
export declare enum ClearingIntention {
    DoNotIntendToClear = 0,
    IntendToClear = 1
}
export declare enum TradeClearingInstruction {
    ProcessNormally = 0,
    ExcludeFromAllNetting = 1,
    BilateralNettingOnly = 2,
    ExClearing = 3,
    SpecialTrade = 4,
    MultilateralNetting = 5,
    ClearAgainstCentralCounterparty = 6,
    ExcludeFromCentralCounterparty = 7,
    ManualModePrePostingAndOrPreGiveup = 8,
    AutomaticPostingModeTradePostingToThePositionAccountNumberSpecified = 9,
    AutomaticGiveUpModeTradeGiveUpToTheGiveUpDestinationNumberSpecified = 10,
    QualifiedServiceRepresentativeQsr = 11,
    CustomerTrade = 12,
    SelfClearing = 13,
    BuyIn = 14
}
export declare enum ConfirmationMethod {
    NonElectronic = 0,
    Electronic = 1,
    Unconfirmed = 2
}
export declare enum VerificationMethod {
    NonElectronic = 0,
    Electronic = 1
}
export declare enum ClearingRequirementException {
    NoException = 0,
    Exception = 1,
    EndUserException = 2,
    InterAffiliateException = 3,
    TreasuryAffiliateException = 4,
    CooperativeException = 5
}
export declare enum IRSDirection {
    PrincipalIsPayingFixedRate = "PAY",
    PrincipalIsReceivingFixedRate = "RCV",
    SwapIsFloatFloatOrFixedFixed = "NA"
}
export declare enum RegulatoryReportType {
    RealTimeRt = 0,
    PrimaryEconomicTermsPet = 1,
    Snapshot = 2,
    Confirmation = 3,
    CombinationOfRtAndPet = 4,
    CombinationOfPetAndConfirmation = 5,
    CombinationOfRtPetAndConfirmation = 6,
    PostTradeValuation = 7,
    Verification = 8,
    PostTradeEvent = 9,
    PostTradeEventRtReportable = 10,
    LimitedDetailsTrade = 11,
    DailyAggregatedTrade = 12,
    VolumeOmissionTrade = 13,
    FourWeeksAggregationTrade = 14,
    IndefiniteAggregationTrade = 15,
    VolumeOmissionTradeEligibleForSubsequentAggregatedEnrichment = 16,
    FullDetailsTradeOfLimitedDetailsTrade = 17,
    FullDetailsOfDailyAggregatedTrade = 18,
    FullDetailsOfVolumeOmissionTrade = 19,
    FullDetailsOfFourWeeksAggregationTrade = 20,
    FullDetailsInAggregatedFormOfVolumeOmissionTradeEligibleForSubsequentAggregatedEnrichment = 21
}
export declare enum TradeCollateralization {
    Uncollateralized = 0,
    PartiallyCollateralized = 1,
    OneWayCollaterallization = 2,
    FullyCollateralized = 3
}
export declare enum TradeContinuation {
    Novation = 0,
    PartialNovation = 1,
    TradeUnwind = 2,
    PartialTradeUnwind = 3,
    Exercise = 4,
    CompressionNetting = 5,
    FullNetting = 6,
    PartialNetting = 7,
    Amendment = 8,
    Increase = 9,
    CreditEvent = 10,
    StrategicRestructuring = 11,
    SuccessionEventReorganization = 12,
    SuccessionEventRenaming = 13,
    Porting = 14,
    Withdrawal = 15,
    Void = 16,
    AccountTransfer = 17,
    GiveUp = 18,
    TakeUp = 19,
    AveragePricing = 20,
    Reversal = 21,
    AllocationTradePosting = 22,
    Cascade = 23,
    Delivery = 24,
    OptionAssignment = 25,
    Expiration = 26,
    Maturity = 27,
    EqualPositionAdjustment = 28,
    UnequalPositionAdjustment = 29,
    Correction = 30,
    OtherPriceFormingContinuationData = 99
}
export declare enum AssetClass {
    InterestRate = 1,
    Currency = 2,
    Credit = 3,
    Equity = 4,
    Commodity = 5,
    Other = 6,
    Cash = 7,
    Debt = 8,
    Fund = 9,
    LoanFacility = 10
}
export declare enum AssetSubClass {
    SingleCurrency = 1,
    CrossCurrency = 2,
    BasketForMultiCurrency = 3,
    SingleName = 4,
    CreditIndex = 5,
    IndexTranche = 6,
    CreditBasket = 7,
    Exotic = 8,
    Common = 9,
    Preferred = 10,
    EquityIndex = 11,
    EquityBasket = 12,
    Metals = 13,
    Bullion = 14,
    Energy = 15,
    CommodityIndex = 16,
    Agricultural = 17,
    Environmental = 18,
    Freight = 19,
    Government = 20,
    Agency = 21,
    Corporate = 22,
    Financing = 23,
    MoneyMarket = 24,
    Mortgage = 25,
    Municipal = 26,
    MutualFund = 27,
    CollectiveInvestmentVehicle = 28,
    InvestmentProgram = 29,
    SpecializedAccountProgram = 30,
    TermLoan = 31,
    BridgeLoan = 32,
    LetterOfCredit = 33
}
export declare enum SwapClass {
    BasisSwap = "BS",
    IndexSwap = "IX",
    BroadBasedSecuritySwap = "BB",
    BasketSwap = "SK"
}
export declare enum CouponType {
    Zero = 0,
    FixedRate = 1,
    FloatingRate = 2,
    Structured = 3
}
export declare enum CouponFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum CouponDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum ConvertibleBondEquityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum LienSeniority {
    Unknown = 0,
    FirstLien = 1,
    SecondLien = 2,
    ThirdLien = 3
}
export declare enum LoanFacility {
    BridgeLoan = 0,
    LetterOfCredit = 1,
    RevolvingLoan = 2,
    SwinglineFunding = 3,
    TermLoan = 4,
    TradeClaim = 5
}
export declare enum ReferenceEntityType {
    Asian = 1,
    AustralianAndNewZealand = 2,
    EuropeanEmergingMarkets = 3,
    Japanese = 4,
    NorthAmericanHighYield = 5,
    NorthAmericanInsurance = 6,
    NorthAmericanInvestmentGrade = 7,
    Singaporean = 8,
    WesternEuropean = 9,
    WesternEuropeanInsurance = 10
}
export declare enum SideRegulatoryTradeIDEvent {
    InitialBlockTrade = 0,
    Allocation = 1,
    Clearing = 2,
    Compression = 3,
    Novation = 4,
    Termination = 5,
    PostTradeValuation = 6
}
export declare enum SideRegulatoryTradeIDType {
    Current = 0,
    Previous = 1,
    Block = 2,
    Related = 3,
    ClearedBlockTrade = 4,
    TradingVenueTransactionIdentifier = 5
}
export declare enum SecondaryAssetClass {
    InterestRate = 1,
    Currency = 2,
    Credit = 3,
    Equity = 4,
    Commodity = 5,
    Other = 6,
    Cash = 7,
    Debt = 8,
    Fund = 9,
    LoanFacility = 10
}
export declare enum SecondaryAssetSubClass {
    SingleCurrency = 1,
    CrossCurrency = 2,
    BasketForMultiCurrency = 3,
    SingleName = 4,
    CreditIndex = 5,
    IndexTranche = 6,
    CreditBasket = 7,
    Exotic = 8,
    Common = 9,
    Preferred = 10,
    EquityIndex = 11,
    EquityBasket = 12,
    Metals = 13,
    Bullion = 14,
    Energy = 15,
    CommodityIndex = 16,
    Agricultural = 17,
    Environmental = 18,
    Freight = 19,
    Government = 20,
    Agency = 21,
    Corporate = 22,
    Financing = 23,
    MoneyMarket = 24,
    Mortgage = 25,
    Municipal = 26,
    MutualFund = 27,
    CollectiveInvestmentVehicle = 28,
    InvestmentProgram = 29,
    SpecializedAccountProgram = 30,
    TermLoan = 31,
    BridgeLoan = 32,
    LetterOfCredit = 33
}
export declare enum BlockTrdAllocIndicator {
    BlockToBeAllocated = 0,
    BlockNotToBeAllocated = 1,
    AllocatedTrade = 2
}
export declare enum UnderlyingEventType {
    Put = 1,
    Call = 2,
    Tender = 3,
    SinkingFundCall = 4,
    Activation = 5,
    Inactivation = 6,
    LastEligibleTradeDate = 7,
    SwapStartDate = 8,
    SwapEndDate = 9,
    SwapRollDate = 10,
    SwapNextStartDate = 11,
    SwapNextRollDate = 12,
    FirstDeliveryDate = 13,
    LastDeliveryDate = 14,
    InitialInventoryDueDate = 15,
    FinalInventoryDueDate = 16,
    FirstIntentDate = 17,
    LastIntentDate = 18,
    PositionRemovalDate = 19,
    MinimumNotice = 20,
    DeliveryStartTime = 21,
    DeliveryEndTime = 22,
    FirstNoticeDate = 23,
    LastNoticeDate = 24,
    FirstExerciseDate = 25,
    RedemptionDate = 26,
    TradeContinuationEffectiveDate = 27,
    Other = 99
}
export declare enum UnderlyingCouponType {
    Zero = 0,
    FixedRate = 1,
    FloatingRate = 2,
    Structured = 3
}
export declare enum UnderlyingCouponFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum UnderlyingCouponDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum UnderlyingObligationIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum UnderlyingEquityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum UnderlyingLienSeniority {
    Unknown = 0,
    FirstLien = 1,
    SecondLien = 2,
    ThirdLien = 3
}
export declare enum UnderlyingLoanFacility {
    BridgeLoan = 0,
    LetterOfCredit = 1,
    RevolvingLoan = 2,
    SwinglineFunding = 3,
    TermLoan = 4,
    TradeClaim = 5
}
export declare enum UnderlyingReferenceEntityType {
    Asian = 1,
    AustralianAndNewZealand = 2,
    EuropeanEmergingMarkets = 3,
    Japanese = 4,
    NorthAmericanHighYield = 5,
    NorthAmericanInsurance = 6,
    NorthAmericanInvestmentGrade = 7,
    Singaporean = 8,
    WesternEuropean = 9,
    WesternEuropeanInsurance = 10
}
export declare enum UnderlyingAssignmentMethod {
    ProRata = "P",
    Random = "R"
}
export declare enum UnderlyingSecurityStatus {
    Active = "1",
    Inactive = "2",
    ActiveClosingOrdersOnly = "3",
    Expired = "4",
    Delisted = "5",
    KnockedOut = "6",
    KnockOutRevoked = "7",
    PendingExpiry = "8",
    Suspended = "9",
    Published = "10",
    PendingDeletion = "11"
}
export declare enum UnderlyingObligationType {
    Bond = "0",
    ConvertibleBond = "1",
    Mortgage = "2",
    Loan = "3"
}
export declare enum UnderlyingAssetClass {
    InterestRate = 1,
    Currency = 2,
    Credit = 3,
    Equity = 4,
    Commodity = 5,
    Other = 6,
    Cash = 7,
    Debt = 8,
    Fund = 9,
    LoanFacility = 10
}
export declare enum UnderlyingAssetSubClass {
    SingleCurrency = 1,
    CrossCurrency = 2,
    BasketForMultiCurrency = 3,
    SingleName = 4,
    CreditIndex = 5,
    IndexTranche = 6,
    CreditBasket = 7,
    Exotic = 8,
    Common = 9,
    Preferred = 10,
    EquityIndex = 11,
    EquityBasket = 12,
    Metals = 13,
    Bullion = 14,
    Energy = 15,
    CommodityIndex = 16,
    Agricultural = 17,
    Environmental = 18,
    Freight = 19,
    Government = 20,
    Agency = 21,
    Corporate = 22,
    Financing = 23,
    MoneyMarket = 24,
    Mortgage = 25,
    Municipal = 26,
    MutualFund = 27,
    CollectiveInvestmentVehicle = 28,
    InvestmentProgram = 29,
    SpecializedAccountProgram = 30,
    TermLoan = 31,
    BridgeLoan = 32,
    LetterOfCredit = 33
}
export declare enum UnderlyingSwapClass {
    BasisSwap = "BS",
    IndexSwap = "IX",
    BroadBasedSecuritySwap = "BB",
    BasketSwap = "SK"
}
export declare enum UnderlyingStrikePriceDeterminationMethod {
    FixedStrikeDefaultIfNotSpecified = 1,
    StrikeSetAtExpirationToUnderlyingOrOtherValueLookbackFloating = 2,
    StrikeSetToAverageOfUnderlyingSettlementPriceAcrossTheLifeOfTheOption = 3,
    StrikeSetToOptimalValue = 4
}
export declare enum UnderlyingStrikePriceBoundaryMethod {
    LessThanUnderlyingPriceIsInTheMoneyItm = 1,
    LessThanOrEqualToTheUnderlyingPriceIsInTheMoneyItm = 2,
    EqualToTheUnderlyingPriceIsInTheMoneyItm = 3,
    GreaterThanOrEqualToUnderlyingPriceIsInTheMoneyItm = 4,
    GreaterThanUnderlyingIsInTheMoneyItm = 5
}
export declare enum UnderlyingOptPayoutType {
    Vanilla = 1,
    Capped = 2,
    Binary = 3
}
export declare enum UnderlyingPriceQuoteMethod {
    StandardMoneyPerUnitOfAPhysical = "STD",
    Index = "INX",
    InterestRateIndex = "INT",
    PercentOfPar = "PCTPAR"
}
export declare enum UnderlyingValuationMethod {
    PremiumStyle = "EQTY",
    FuturesStyleMarkToMarket = "FUT",
    FuturesStyleWithAnAttachedCashAdjustment = "FUTDA",
    CdsStyleCollateralizationOfMarketToMarketAndCoupon = "CDS",
    CdsInDeliveryUseRecoveryRateToCalculateObligation = "CDSD"
}
export declare enum UnderlyingListMethod {
    PreListedOnly = 0,
    UserRequested = 1
}
export declare enum UnderlyingShortSaleRestriction {
    NoRestrictions = 0,
    SecurityIsNotShortable = 1,
    SecurityNotShortableAtOrBelowTheBestBid = 2,
    SecurityIsNotShortableWithoutPreBorrow = 3
}
export declare enum UnderlyingComplexEventType {
    Capped = 1,
    Trigger = 2,
    KnockInUp = 3,
    KnockInDown = 4,
    KnockOutUp = 5,
    KnockOutDown = 6,
    Underlying = 7,
    ResetBarrier = 8,
    RollingBarrier = 9,
    OneTouch = 10,
    NoTouch = 11,
    DoubleOneTouch = 12,
    DoubleNoTouch = 13,
    ForeignExchangeComposite = 14,
    ForeignExchangeQuanto = 15,
    ForeignExchangeCrossCurrency = 16,
    StrikeSpread = 17,
    CalendarSpread = 18,
    PriceObservationAsianOrLookback = 19,
    PassThrough = 20,
    StrikeSchedule = 21,
    EquityValuation = 22,
    DividendValuation = 23
}
export declare enum UnderlyingComplexEventPriceBoundaryMethod {
    LessThanComplexEventPrice1486 = 1,
    LessThanOrEqualToComplexEventPrice1486 = 2,
    EqualToComplexEventPrice1486 = 3,
    GreaterThanOrEqualToComplexEventPrice1486 = 4,
    GreaterThanComplexEventPrice1486 = 5
}
export declare enum UnderlyingComplexEventPriceTimeType {
    Expiration = 1,
    ImmediateAtAnyTime = 2,
    SpecifiedDateTime = 3,
    Close = 4,
    Open = 5,
    OfficialSettlementPrice = 6,
    DerivativesClose = 7,
    AsSpecifiedInMasterConfirmation = 8
}
export declare enum UnderlyingComplexEventCondition {
    And = 1,
    Or = 2
}
export declare enum LegEventType {
    Put = 1,
    Call = 2,
    Tender = 3,
    SinkingFundCall = 4,
    Activation = 5,
    Inactivation = 6,
    LastEligibleTradeDate = 7,
    SwapStartDate = 8,
    SwapEndDate = 9,
    SwapRollDate = 10,
    SwapNextStartDate = 11,
    SwapNextRollDate = 12,
    FirstDeliveryDate = 13,
    LastDeliveryDate = 14,
    InitialInventoryDueDate = 15,
    FinalInventoryDueDate = 16,
    FirstIntentDate = 17,
    LastIntentDate = 18,
    PositionRemovalDate = 19,
    MinimumNotice = 20,
    DeliveryStartTime = 21,
    DeliveryEndTime = 22,
    FirstNoticeDate = 23,
    LastNoticeDate = 24,
    FirstExerciseDate = 25,
    RedemptionDate = 26,
    TradeContinuationEffectiveDate = 27,
    Other = 99
}
export declare enum LegEventTimeUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegAssetClass {
    InterestRate = 1,
    Currency = 2,
    Credit = 3,
    Equity = 4,
    Commodity = 5,
    Other = 6,
    Cash = 7,
    Debt = 8,
    Fund = 9,
    LoanFacility = 10
}
export declare enum LegAssetSubClass {
    SingleCurrency = 1,
    CrossCurrency = 2,
    BasketForMultiCurrency = 3,
    SingleName = 4,
    CreditIndex = 5,
    IndexTranche = 6,
    CreditBasket = 7,
    Exotic = 8,
    Common = 9,
    Preferred = 10,
    EquityIndex = 11,
    EquityBasket = 12,
    Metals = 13,
    Bullion = 14,
    Energy = 15,
    CommodityIndex = 16,
    Agricultural = 17,
    Environmental = 18,
    Freight = 19,
    Government = 20,
    Agency = 21,
    Corporate = 22,
    Financing = 23,
    MoneyMarket = 24,
    Mortgage = 25,
    Municipal = 26,
    MutualFund = 27,
    CollectiveInvestmentVehicle = 28,
    InvestmentProgram = 29,
    SpecializedAccountProgram = 30,
    TermLoan = 31,
    BridgeLoan = 32,
    LetterOfCredit = 33
}
export declare enum LegSwapClass {
    BasisSwap = "BS",
    IndexSwap = "IX",
    BroadBasedSecuritySwap = "BB",
    BasketSwap = "SK"
}
export declare enum LegSecondaryAssetClass {
    InterestRate = 1,
    Currency = 2,
    Credit = 3,
    Equity = 4,
    Commodity = 5,
    Other = 6,
    Cash = 7,
    Debt = 8,
    Fund = 9,
    LoanFacility = 10
}
export declare enum LegSecondaryAssetSubClass {
    SingleCurrency = 1,
    CrossCurrency = 2,
    BasketForMultiCurrency = 3,
    SingleName = 4,
    CreditIndex = 5,
    IndexTranche = 6,
    CreditBasket = 7,
    Exotic = 8,
    Common = 9,
    Preferred = 10,
    EquityIndex = 11,
    EquityBasket = 12,
    Metals = 13,
    Bullion = 14,
    Energy = 15,
    CommodityIndex = 16,
    Agricultural = 17,
    Environmental = 18,
    Freight = 19,
    Government = 20,
    Agency = 21,
    Corporate = 22,
    Financing = 23,
    MoneyMarket = 24,
    Mortgage = 25,
    Municipal = 26,
    MutualFund = 27,
    CollectiveInvestmentVehicle = 28,
    InvestmentProgram = 29,
    SpecializedAccountProgram = 30,
    TermLoan = 31,
    BridgeLoan = 32,
    LetterOfCredit = 33
}
export declare enum UnderlyingSecondaryAssetClass {
    InterestRate = 1,
    Currency = 2,
    Credit = 3,
    Equity = 4,
    Commodity = 5,
    Other = 6,
    Cash = 7,
    Debt = 8,
    Fund = 9,
    LoanFacility = 10
}
export declare enum UnderlyingSecondaryAssetSubClass {
    SingleCurrency = 1,
    CrossCurrency = 2,
    BasketForMultiCurrency = 3,
    SingleName = 4,
    CreditIndex = 5,
    IndexTranche = 6,
    CreditBasket = 7,
    Exotic = 8,
    Common = 9,
    Preferred = 10,
    EquityIndex = 11,
    EquityBasket = 12,
    Metals = 13,
    Bullion = 14,
    Energy = 15,
    CommodityIndex = 16,
    Agricultural = 17,
    Environmental = 18,
    Freight = 19,
    Government = 20,
    Agency = 21,
    Corporate = 22,
    Financing = 23,
    MoneyMarket = 24,
    Mortgage = 25,
    Municipal = 26,
    MutualFund = 27,
    CollectiveInvestmentVehicle = 28,
    InvestmentProgram = 29,
    SpecializedAccountProgram = 30,
    TermLoan = 31,
    BridgeLoan = 32,
    LetterOfCredit = 33
}
export declare enum MarginAmtFXRateCalc {
    Divide = "D",
    Multiply = "M"
}
export declare enum CollateralFXRateCalc {
    Divide = "D",
    Multiply = "M"
}
export declare enum PayCollectFXRateCalc {
    Divide = "D",
    Multiply = "M"
}
export declare enum PositionFXRateCalc {
    Divide = "D",
    Multiply = "M"
}
export declare enum AttachmentEncodingType {
    Base64Encoding = 0,
    UnencodedBinaryContent = 1
}
export declare enum NegotiationMethod {
    AutoSpot = 0,
    NegotiatedSpot = 1,
    TheSpotPriceForTheReferenceOrBenchmarkSecurityIsToBeNegotiatedViaPhoneOrVoice = 2
}
export declare enum ComplexOptPayoutPaySide {
    Buy = 1,
    Sell = 2
}
export declare enum ComplexOptPayoutReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum ComplexOptPayoutTime {
    Close = 0,
    Open = 1,
    OfficialSettlement = 2,
    ValuationTime = 3,
    ExchangeSettlementTime = 4,
    DerivativesClose = 5,
    AsSpecifiedInMasterConfirmation = 6
}
export declare enum ComplexEventQuoteBasis {
    Currency1PerCurrency2 = 0,
    Currency2PerCurrency1 = 1
}
export declare enum ComplexEventCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum ComplexEventCreditEventNotifyingParty {
    SellerNotifies = 0,
    BuyerNotifies = 1,
    SellerOrBuyerNotifies = 2
}
export declare enum StrategyType {
    Straddle = "STD",
    Strangle = "STG",
    Butterfly = "BF",
    Condor = "CNDR",
    CallableInversibleSnowball = "CISN",
    Other = "OTHER"
}
export declare enum SettlDisruptionProvision {
    Negotiation = 1,
    CancellationAndPayment = 2
}
export declare enum InstrumentRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum LegInstrmtAssignmentMethod {
    ProRata = "P",
    Random = "R"
}
export declare enum LegSecurityStatus {
    Active = "1",
    Inactive = "2",
    ActiveClosingOrdersOnly = "3",
    Expired = "4",
    Delisted = "5",
    KnockedOut = "6",
    KnockOutRevoked = "7",
    PendingExpiry = "8",
    Suspended = "9",
    Published = "10",
    PendingDeletion = "11"
}
export declare enum LegRestructuringType {
    FullRestructuring = "FR",
    ModifiedRestructuring = "MR",
    ModifiedModRestructuring = "MM",
    NoRestructuringSpecified = "XR"
}
export declare enum LegSeniority {
    SeniorSecured = "SD",
    Senior = "SR",
    Subordinated = "SB"
}
export declare enum LegObligationType {
    Bond = "0",
    ConvertibleBond = "1",
    Mortgage = "2",
    Loan = "3"
}
export declare enum LegSwapSubClass {
    Amortizing = "AMTZ",
    Compounding = "COMP"
}
export declare enum LegCouponType {
    Zero = 0,
    FixedRate = 1,
    FloatingRate = 2,
    Structured = 3
}
export declare enum LegCouponFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum LegCouponDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum LegConvertibleBondEquityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum LegLienSeniority {
    Unknown = 0,
    FirstLien = 1,
    SecondLien = 2,
    ThirdLien = 3
}
export declare enum LegLoanFacility {
    BridgeLoan = 0,
    LetterOfCredit = 1,
    RevolvingLoan = 2,
    SwinglineFunding = 3,
    TermLoan = 4,
    TradeClaim = 5
}
export declare enum LegReferenceEntityType {
    Asian = 1,
    AustralianAndNewZealand = 2,
    EuropeanEmergingMarkets = 3,
    Japanese = 4,
    NorthAmericanHighYield = 5,
    NorthAmericanInsurance = 6,
    NorthAmericanInvestmentGrade = 7,
    Singaporean = 8,
    WesternEuropean = 9,
    WesternEuropeanInsurance = 10
}
export declare enum LegStrikeUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegStrikePriceDeterminationMethod {
    FixedStrikeDefaultIfNotSpecified = 1,
    StrikeSetAtExpirationToUnderlyingOrOtherValueLookbackFloating = 2,
    StrikeSetToAverageOfUnderlyingSettlementPriceAcrossTheLifeOfTheOption = 3,
    StrikeSetToOptimalValue = 4
}
export declare enum LegStrikePriceBoundaryMethod {
    LessThanUnderlyingPriceIsInTheMoneyItm = 1,
    LessThanOrEqualToTheUnderlyingPriceIsInTheMoneyItm = 2,
    EqualToTheUnderlyingPriceIsInTheMoneyItm = 3,
    GreaterThanOrEqualToUnderlyingPriceIsInTheMoneyItm = 4,
    GreaterThanUnderlyingIsInTheMoneyItm = 5
}
export declare enum LegUnderlyingPriceDeterminationMethod {
    Regular = 1,
    SpecialReference = 2,
    OptimalValueLookback = 3,
    AverageValueAsianOption = 4
}
export declare enum LegSettlMethod {
    CashSettlementRequired = "C",
    PhysicalSettlementRequired = "P",
    ElectionAtExercise = "E"
}
export declare enum LegOptPayoutType {
    Vanilla = 1,
    Capped = 2,
    Binary = 3
}
export declare enum LegPriceQuoteMethod {
    StandardMoneyPerUnitOfAPhysical = "STD",
    Index = "INX",
    InterestRateIndex = "INT",
    PercentOfPar = "PCTPAR"
}
export declare enum LegValuationMethod {
    PremiumStyle = "EQTY",
    FuturesStyleMarkToMarket = "FUT",
    FuturesStyleWithAnAttachedCashAdjustment = "FUTDA",
    CdsStyleCollateralizationOfMarketToMarketAndCoupon = "CDS",
    CdsInDeliveryUseRecoveryRateToCalculateObligation = "CDSD"
}
export declare enum LegListMethod {
    PreListedOnly = 0,
    UserRequested = 1
}
export declare enum LegCPProgram {
    E3A3 = 1,
    E42 = 2,
    E3A2 = 3,
    E3A33C7 = 4,
    E3A4 = 5,
    E3A5 = 6,
    E3A7 = 7,
    E3C7 = 8,
    Other = 99
}
export declare enum LegShortSaleRestriction {
    NoRestrictions = 0,
    SecurityIsNotShortable = 1,
    SecurityNotShortableAtOrBelowTheBestBid = 2,
    SecurityIsNotShortableWithoutPreBorrow = 3
}
export declare enum AssetGroup {
    Financials = 1,
    Commodities = 2,
    AlternativeInvestments = 3
}
export declare enum LegStrategyType {
    Straddle = "STD",
    Strangle = "STG",
    Butterfly = "BF",
    Condor = "CNDR",
    CallableInversibleSnowball = "CISN",
    Other = "OTHER"
}
export declare enum LegSettlDisruptionProvision {
    Negotiation = 1,
    CancellationAndPayment = 2
}
export declare enum LegInstrumentRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum LegComplexEventType {
    Capped = 1,
    Trigger = 2,
    KnockInUp = 3,
    KnockInDown = 4,
    KnockOutUp = 5,
    KnockOutDown = 6,
    Underlying = 7,
    ResetBarrier = 8,
    RollingBarrier = 9,
    OneTouch = 10,
    NoTouch = 11,
    DoubleOneTouch = 12,
    DoubleNoTouch = 13,
    ForeignExchangeComposite = 14,
    ForeignExchangeQuanto = 15,
    ForeignExchangeCrossCurrency = 16,
    StrikeSpread = 17,
    CalendarSpread = 18,
    PriceObservationAsianOrLookback = 19,
    PassThrough = 20,
    StrikeSchedule = 21,
    EquityValuation = 22,
    DividendValuation = 23
}
export declare enum LegComplexOptPayoutPaySide {
    Buy = 1,
    Sell = 2
}
export declare enum LegComplexOptPayoutReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum LegComplexOptPayoutTime {
    Close = 0,
    Open = 1,
    OfficialSettlement = 2,
    ValuationTime = 3,
    ExchangeSettlementTime = 4,
    DerivativesClose = 5,
    AsSpecifiedInMasterConfirmation = 6
}
export declare enum LegComplexEventPriceBoundaryMethod {
    LessThanComplexEventPrice1486 = 1,
    LessThanOrEqualToComplexEventPrice1486 = 2,
    EqualToComplexEventPrice1486 = 3,
    GreaterThanOrEqualToComplexEventPrice1486 = 4,
    GreaterThanComplexEventPrice1486 = 5
}
export declare enum LegComplexEventPriceTimeType {
    Expiration = 1,
    ImmediateAtAnyTime = 2,
    SpecifiedDateTime = 3,
    Close = 4,
    Open = 5,
    OfficialSettlementPrice = 6,
    DerivativesClose = 7,
    AsSpecifiedInMasterConfirmation = 8
}
export declare enum LegComplexEventCondition {
    And = 1,
    Or = 2
}
export declare enum LegComplexEventQuoteBasis {
    Currency1PerCurrency2 = 0,
    Currency2PerCurrency1 = 1
}
export declare enum LegComplexEventCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum LegComplexEventCreditEventNotifyingParty {
    SellerNotifies = 0,
    BuyerNotifies = 1,
    SellerOrBuyerNotifies = 2
}
export declare enum LegInstrumentPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum LegInstrumentPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum LegInstrumentPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum UnderlyingComplexOptPayoutPaySide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingComplexOptPayoutReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingComplexOptPayoutTime {
    Close = 0,
    Open = 1,
    OfficialSettlement = 2,
    ValuationTime = 3,
    ExchangeSettlementTime = 4,
    DerivativesClose = 5,
    AsSpecifiedInMasterConfirmation = 6
}
export declare enum UnderlyingComplexEventQuoteBasis {
    Currency1PerCurrency2 = 0,
    Currency2PerCurrency1 = 1
}
export declare enum UnderlyingComplexEventCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum UnderlyingComplexEventCreditEventNotifyingParty {
    SellerNotifies = 0,
    BuyerNotifies = 1,
    SellerOrBuyerNotifies = 2
}
export declare enum UnderlyingSwapSubClass {
    Amortizing = "AMTZ",
    Compounding = "COMP"
}
export declare enum UnderlyingStrikeUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingStrategyType {
    Straddle = "STD",
    Strangle = "STG",
    Butterfly = "BF",
    Condor = "CNDR",
    CallableInversibleSnowball = "CISN",
    Other = "OTHER"
}
export declare enum UnderlyingSettlDisruptionProvision {
    Negotiation = 1,
    CancellationAndPayment = 2
}
export declare enum UnderlyingInstrumentRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum RiskLimitReportStatus {
    Accepted = 0,
    Rejected = 1
}
export declare enum RiskLimitReportRejectReason {
    UnknownRiskLimitReportId1667 = 0,
    UnknownParty = 1,
    Other = 99
}
export declare enum RiskLimitCheckTransType {
    New = 0,
    Cancel = 1,
    Replace = 2
}
export declare enum RiskLimitCheckType {
    Submit = 0,
    LimitConsumed = 1
}
export declare enum RiskLimitCheckRequestType {
    AllOrNoneDefaultIfNotSpecified = 0,
    Partial = 1
}
export declare enum RiskLimitCheckRequestStatus {
    Approved = 0,
    PartiallyApproved = 1,
    Rejected = 2,
    ApprovalPending = 3,
    Cancelled = 4
}
export declare enum RiskLimitCheckRequestResult {
    SuccessfulDefault = 0,
    InvalidParty = 1,
    RequestedAmountExceedsCreditLimit = 2,
    RequestedAmountExceedsClipSizeLimit = 3,
    RequestExceedsMaximumNotionalOrderAmount = 4,
    Other = 99
}
export declare enum PartyActionType {
    Suspend = 0,
    HaltTrading = 1,
    Reinstate = 2
}
export declare enum PartyActionResponse {
    Accepted = 0,
    Completed = 1,
    Rejected = 2
}
export declare enum PartyActionRejectReason {
    InvalidPartyOrParties = 0,
    UnknownRequestingParty = 1,
    NotAuthorized = 98,
    Other = 99
}
export declare enum RefRiskLimitCheckIDType {
    RiskLimitRequestId1666 = 0,
    RiskLimitCheckId2319 = 1,
    OutOfBandIdentifier = 3
}
export declare enum RiskLimitVelocityUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum RequestingPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum RiskLimitCheckModelType {
    NoneDefaultIfNotSpecified = 0,
    PlusOneModel = 1,
    PingModel = 2,
    PushModel = 3
}
export declare enum RiskLimitCheckStatus {
    Accepted = 0,
    Rejected = 1,
    ClaimRequired = 2,
    PreDefinedLimitCheckSucceeded = 3,
    PreDefinedLimitCheckFailed = 4,
    PreDefinedAutoAcceptRuleInvoked = 5,
    PreDefinedAutoRejectRuleInvoked = 6,
    AcceptedByClearingFirm = 7,
    RejectedByClearingFirm = 8,
    Pending = 9,
    AcceptedByCreditHub = 10,
    RejectedByCreditHub = 11,
    PendingCreditHubCheck = 12,
    AcceptedByExecutionVenue = 13,
    RejectedByExecutionVenue = 14
}
export declare enum SideRiskLimitCheckStatus {
    Accepted = 0,
    Rejected = 1,
    ClaimRequired = 2,
    PreDefinedLimitCheckSucceeded = 3,
    PreDefinedLimitCheckFailed = 4,
    PreDefinedAutoAcceptRuleInvoked = 5,
    PreDefinedAutoRejectRuleInvoked = 6,
    AcceptedByClearingFirm = 7,
    RejectedByClearingFirm = 8,
    Pending = 9,
    AcceptedByCreditHub = 10,
    RejectedByCreditHub = 11,
    PendingCreditHubCheck = 12,
    AcceptedByExecutionVenue = 13,
    RejectedByExecutionVenue = 14
}
export declare enum RegulatoryTransactionType {
    NoneDefaultIfNotSpecified = 0,
    SwapExecutionFacilitySefRequiredTransaction = 1,
    SwapExecutionFacilitySefPermittedTransaction = 2
}
export declare enum LegAssetGroup {
    Financials = 1,
    Commodities = 2,
    AlternativeInvestments = 3
}
export declare enum PartyRiskLimitStatus {
    Disabled = 0,
    Enabled = 1
}
export declare enum RemunerationIndicator {
    NoRemunerationPaid = 0,
    RemunerationPaid = 1
}
export declare enum PosReportAction {
    New = 1,
    Replace = 2,
    Cancel = 3,
    Reverse = 4
}
export declare enum SettlPriceFxRateCalc {
    Multiply = "M",
    Divide = "D"
}
export declare enum TaxonomyType {
    IsinOrAlternateInstrumentIdentifierPlusCfi = "I",
    InterimTaxonomy = "E"
}
export declare enum PartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum DerivativeInstrumentPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum InstrumentPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum LegInstrumentPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum LegProvisionPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum Nested2PartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum Nested3PartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum Nested4PartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum NestedPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum ProvisionPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum RequestedPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum TradeContingency {
    DoesNotApplyDefaultIfNotSpecified = 0,
    ContingentTrade = 1,
    NonContingentTrade = 2
}
export declare enum RootPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum SettlPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum UnderlyingInstrumentPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum AllocRefRiskLimitCheckIDType {
    RiskLimitRequestId1666 = 0,
    RiskLimitCheckId2319 = 1,
    OutOfBandIdentifier = 3
}
export declare enum LimitRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum RegulatoryTradeIDScope {
    ClearingMember = 1,
    Client = 2
}
export declare enum SideRegulatoryTradeIDScope {
    ClearingMember = 1,
    Client = 2
}
export declare enum AllocRegulatoryTradeIDScope {
    ClearingMember = 1,
    Client = 2
}
export declare enum EntitlementSubType {
    OrderEntry = 1,
    HitLift = 2,
    ViewIndicativePrices = 3,
    ViewExecutablePrices = 4,
    SingleQuote = 5,
    StreamingQuotes = 6,
    SingleBroker = 7,
    MultiBrokers = 8
}
export declare enum QuoteModelType {
    QuoteEntry = 1,
    QuoteModification = 2
}
export declare enum ExecMethod {
    UndefinedUnspecifiedDefaultWhenNotSpecified = 0,
    Manual = 1,
    Automated = 2,
    VoiceBrokered = 3
}
export declare enum RelatedToSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum MassOrderRequestStatus {
    Accepted = 1,
    AcceptedWithAdditionalEvents = 2,
    Rejected = 3
}
export declare enum MassOrderRequestResult {
    Successful = 0,
    ResponseLevelNotSupported = 1,
    InvalidMarket = 2,
    InvalidMarketSegment = 3,
    Other = 99
}
export declare enum OrderResponseLevel {
    NoAcknowledgement = 0,
    MinimumAcknowledgement = 1,
    AcknowledgeEachOrder = 2,
    SummaryAcknowledgement = 3
}
export declare enum OrderEntryAction {
    Add = "1",
    Modify = "2",
    DeleteCancel = "3",
    Suspend = "4",
    Release = "5"
}
export declare enum ExecTypeReason {
    OrderAddedUponRequest = 1,
    OrderReplacedUponRequest = 2,
    OrderCancelledUponRequest = 3,
    UnsolicitedOrderCancellation = 4,
    NonRestingOrderAddedUponRequest = 5,
    OrderReplacedWithNonRestingOrderUponRequest = 6,
    TriggerOrderReplacedUponRequest = 7,
    SuspendedOrderReplacedUponRequest = 8,
    SuspendedOrderCanceledUponRequest = 9,
    OrderCancellationPending = 10,
    PendingCancellationExecuted = 11,
    RestingOrderTriggered = 12,
    SuspendedOrderActivated = 13,
    ActiveOrderSuspended = 14,
    OrderExpired = 15
}
export declare enum TargetPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum TransferTransType {
    New = 0,
    Replace = 1,
    Cancel = 2
}
export declare enum TransferType {
    RequestTransfer = 0,
    AcceptTransfer = 1,
    DeclineTransfer = 2
}
export declare enum TransferScope {
    InterFirmTransfer = 0,
    IntraFirmTransfer = 1,
    ClearingMemberTradeAssignment = 2
}
export declare enum TransferStatus {
    Received = 0,
    RejectedByIntermediary = 1,
    AcceptPending = 2,
    Accepted = 3,
    Declined = 4,
    Cancelled = 5
}
export declare enum TransferRejectReason {
    Success = 0,
    InvalidParty = 1,
    UnknownInstrument = 2,
    NotAuthorizedToSubmitTransfers = 3,
    UnknownPosition = 4,
    Other = 99
}
export declare enum TransferReportType {
    Submit = 0,
    Alleged = 1
}
export declare enum AggressorSide {
    Buy = "1",
    Sell = "2",
    BuyMinus = "3",
    SellPlus = "4",
    SellShort = "5",
    SellShortExempt = "6",
    Undisclosed = "7",
    CrossOrdersWhereCounterpartyIsAnExchangeValidForAllMessagesExceptIoIs = "8",
    CrossShort = "9",
    CrossShortExempt = "A",
    AsDefinedForUseWithMultilegInstruments = "B",
    OppositeForUseWithMultilegInstruments = "C",
    SubscribeEGCiv = "D",
    RedeemEGCiv = "E",
    LendFinancingIdentifiesDirectionOfCollateral = "F",
    BorrowFinancingIdentifiesDirectionOfCollateral = "G",
    SellUndisclosed = "H"
}
export declare enum MDStatisticType {
    Count = 1,
    AverageVolume = 2,
    TotalVolume = 3,
    Distribution = 4,
    Ratio = 5,
    Liquidity = 6,
    VolumeWeightedAveragePriceVwap = 7,
    Volatility = 8,
    Duration = 9,
    Tick = 10,
    AverageTurnover = 11,
    TotalTurnover = 12,
    High = 13,
    Low = 14,
    Midpoint = 15,
    First = 16,
    Last = 17,
    Final = 18,
    ExchangeBest = 19,
    ExchangeBestWithVolume = 20,
    ConsolidatedBest = 21,
    ConsolidatedBestWithVolume = 22,
    TimeWeightedAveragePriceTwap = 23
}
export declare enum MDStatisticScope {
    BidPrices = 1,
    OfferPrices = 2,
    BidDepth = 3,
    OfferDepth = 4,
    Orders = 5,
    Quotes = 6,
    OrdersAndQuotes = 7,
    Trades = 8,
    TradePrices = 9,
    AuctionPrices = 10,
    OpeningPrices = 11,
    ClosingPrices = 12,
    SettlementPrices = 13,
    UnderlyingPrices = 14,
    OpenInterest = 15,
    IndexValues = 16,
    MarginRates = 17
}
export declare enum MDStatisticSubScope {
    Visible = 1,
    Hidden = 2,
    Indicative = 3,
    Tradeable = 4,
    Passive = 5,
    MarketConsensus = 6
}
export declare enum MDStatisticScopeType {
    EntryRate = 1,
    ModificationRate = 2,
    CancelRate = 3,
    DownwardMove = 4,
    UpwardMove = 5
}
export declare enum MDStatisticFrequencyUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum MDStatisticDelayUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum MDStatisticIntervalType {
    SlidingWindow = 1,
    SlidingWindowPeak = 2,
    FixedDateRange = 3,
    FixedTimeRange = 4,
    CurrentTimeUnit = 5,
    PreviousTimeUnit = 6,
    MaximumRange = 7,
    MaximumRangeUpToPreviousTimeUnit = 8
}
export declare enum MDStatisticIntervalTypeUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum MDStatisticIntervalUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum MDStatisticRatioType {
    BuyersToSellers = 1,
    UpticksToDownticks = 2,
    MarketMakerToNonMarketMaker = 3,
    AutomatedToNonAutomated = 4,
    OrdersToTrades = 5,
    QuotesToTrades = 6,
    OrdersAndQuotesToTrades = 7
}
export declare enum MDStatisticRequestResult {
    SuccessfulDefault = 0,
    InvalidOrUnknownMarket = 1,
    InvalidOrUnknownMarketSegment = 2,
    InvalidOrUnknownSecurityList = 3,
    InvalidOrUnknownInstrumentS = 4,
    InvalidParties = 5,
    TradeDateOutOfSupportedRange = 6,
    StatisticTypeNotSupported = 7,
    ScopeOrSubScopeNotSupported = 8,
    ScopeTypeNotSupported = 9,
    MarketDepthNotSupported = 10,
    FrequencyNotSupported = 11,
    StatisticIntervalNotSupported = 12,
    StatisticDateRangeNotSupported = 13,
    StatisticTimeRangeNotSupported = 14,
    RatioTypeNotSupported = 15,
    InvalidOrUnknownTradeInputSource = 16,
    InvalidOrUnknownTradingSession = 17,
    UnauthorizedForStatisticRequest = 18,
    OtherFurtherInformationInText58Field = 99
}
export declare enum MDStatisticStatus {
    ActiveDefault = 1,
    InactiveNotDisseminated = 2
}
export declare enum MDStatisticValueType {
    Absolute = 1,
    Percentage = 2
}
export declare enum MDStatisticValueUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum AllocRiskLimitCheckStatus {
    Accepted = 0,
    Rejected = 1,
    ClaimRequired = 2,
    PreDefinedLimitCheckSucceeded = 3,
    PreDefinedLimitCheckFailed = 4,
    PreDefinedAutoAcceptRuleInvoked = 5,
    PreDefinedAutoRejectRuleInvoked = 6,
    AcceptedByClearingFirm = 7,
    RejectedByClearingFirm = 8,
    Pending = 9,
    AcceptedByCreditHub = 10,
    RejectedByCreditHub = 11,
    PendingCreditHubCheck = 12,
    AcceptedByExecutionVenue = 13,
    RejectedByExecutionVenue = 14
}
export declare enum CollRptRejectReason {
    UnknownTradeOrTransaction = 0,
    UnknownOrInvalidInstrument = 1,
    UnknownOrInvalidCounterparty = 2,
    UnknownOrInvalidPosition = 3,
    UnacceptableOrInvalidTypeOfCollateral = 4,
    Other = 99
}
export declare enum CollRptStatus {
    AcceptedSuccessfullyProcessed = 0,
    ReceivedNotYetProcessed = 1,
    Rejected = 2
}
export declare enum UnderlyingAssetGroup {
    Financials = 1,
    Commodities = 2,
    AlternativeInvestments = 3
}
export declare enum LegDeliveryType {
    VersusPaymentDeliverIfSellOrReceiveIfBuyVsAgainstPayment = 0,
    FreeDeliverIfSellOrReceiveIfBuyFree = 1,
    TriParty = 2,
    HoldInCustody = 3
}
export declare enum LegTerminationType {
    Overnight = 1,
    Term = 2,
    Flexible = 3,
    Open = 4
}
export declare enum CrossedIndicator {
    NoCross = 0,
    CrossRejected = 1,
    CrossAccepted = 2
}
export declare enum TradeReportingIndicator {
    TradeHasNotYetBeenReported = 0,
    TradeHasBeenReportedByATradingVenueAsAnOnBookTrade = 1,
    TradeHasBeenReportedAsASystematicInternaliserSellerTrade = 2,
    TradeHasBeenReportedAsASystematicInternaliserBuyerTrade = 3,
    TradeHasBeenReportedAsANonSystematicInternaliserSellerTrade = 4,
    TradeHasBeenReportedUnderASubDelegationArrangementByAnInvestmentFirmToAReportingFacilityEGApaOnBehalfOfAnotherInvestmentFirm = 5
}
export declare enum RelativeValueType {
    AssetSwapSpread = 1,
    OvernightIndexedSwapSpread = 2,
    ZeroVolatilitySpread = 3,
    DiscountMargin = 4,
    InterpolatedSpread = 5,
    OptionAdjustedSpread = 6,
    GSpread = 7,
    CdsBasis = 8,
    CdsInterpolatedBasis = 9
}
export declare enum RelativeValueSide {
    Bid = 1,
    Mid = 2,
    Offer = 3
}
export declare enum MDReportEvent {
    StartOfInstrumentReferenceData = 1,
    EndOfInstrumentReferenceData = 2,
    StartOfOffMarketTrades = 3,
    EndOfOffMarketTrades = 4,
    StartOfOrderBookTrades = 5,
    EndOfOrderBookTrades = 6,
    StartOfOpenInterest = 7,
    EndOfOpenInterest = 8,
    StartOfSettlementPrices = 9,
    EndOfSettlementPrices = 10,
    StartOfStatisticsReferenceData = 11,
    EndOfStatisticsReferenceData = 12,
    StartOfStatistics = 13,
    EndOfStatistics = 14
}
export declare enum MarketSegmentStatus {
    Active = 1,
    Inactive = 2,
    Published = 3
}
export declare enum MarketSegmentType {
    Pool = 1,
    Retail = 2,
    Wholesale = 3
}
export declare enum MarketSegmentSubType {
    InterProductSpread = 1
}
export declare enum MarketSegmentRelationship {
    MarketSegmentPoolMember = 1,
    RetailSegment = 2,
    WholesaleSegment = 3
}
export declare enum QuoteSideIndicator {
    SingleSidedQuotesAreNotAllowed = "N",
    SingleSidedQuotesAreAllowed = "Y"
}
export declare enum MarketDepthTimeIntervalUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum MDRecoveryTimeIntervalUnit {
    SecondsDefaultIfNotSpecified = 0,
    TenthsOfASecond = 1,
    HundredthsOfASecond = 2,
    Milliseconds = 3,
    Microseconds = 4,
    Nanoseconds = 5,
    Minutes = 10,
    Hours = 11,
    Days = 12,
    Weeks = 13,
    Months = 14,
    Years = 15
}
export declare enum CustomerPriority {
    NoPriority = 0,
    UnconditionalPriority = 1
}
export declare enum SettlSubMethod {
    Shares = 1,
    Derivatives = 2,
    PaymentVsPayment = 3,
    Notional = 4,
    Cascade = 5,
    Repurchase = 6,
    Other = 99
}
export declare enum BusinessDayType {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum CalculationMethod {
    AutomaticDefault = 0,
    Manual = 1
}
export declare enum OrderAttributeType {
    AggregatedOrder = 0,
    PendingAllocation = 1,
    LiquidityProvisionActivityOrder = 2,
    RiskReductionOrder = 3,
    AlgorithmicOrder = 4,
    SystemicInternaliserOrder = 5,
    AllExecutionsForTheOrderAreToBeSubmittedToAnApa = 6,
    OrderExecutionInstructedByClient = 7,
    LargeInScale = 8,
    Hidden = 9
}
export declare enum ComplexEventPVFinalPriceElectionFallback {
    Close = 0,
    HedgeElection = 1
}
export declare enum StrikeIndexQuote {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum ExtraordinaryEventAdjustmentMethod {
    CalculationAgent = 0,
    OptionsExchange = 1
}
export declare enum LegStrikeIndexQuote {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum LegExtraordinaryEventAdjustmentMethod {
    CalculationAgent = 0,
    OptionsExchange = 1
}
export declare enum LegComplexEventPVFinalPriceElectionFallback {
    Close = 0,
    HedgeElection = 1
}
export declare enum UnderlyingComplexEventPVFinalPriceElectionFallback {
    Close = 0,
    HedgeElection = 1
}
export declare enum UnderlyingNotionalAdjustments {
    Execution = 0,
    PortfolioRebalancing = 1,
    Standrd = 2
}
export declare enum UnderlyingFutureIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum UnderlyingStrikeIndexQuote {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum UnderlyingExtraordinaryEventAdjustmentMethod {
    CalculationAgent = 0,
    OptionsExchange = 1
}
export declare enum CollateralAmountType {
    MarketValuationTheDefault = 0,
    PortfolioValueBeforeProcessingPledgeRequest = 1,
    ValueConfirmedAsLockedUpForProcessingAPledgeRequest = 2,
    CreditValueOfCollateralAtCcpProcessingAPledgeRequest = 3,
    AdditionalCollateralValue = 4
}
export declare enum CommissionAmountType {
    Unspecified = 0,
    Acceptance = 1,
    Broker = 2,
    ClearingBroker = 3,
    Retail = 4,
    SalesCommission = 5,
    LocalCommission = 6
}
export declare enum CommissionBasis {
    AmountPerUnit = "1",
    Percent = "2",
    Absolute = "3",
    PercentageWaivedCashDiscountBasis = "4",
    PercentageWaivedEnhancedUnitsBasis = "5",
    PointsPerBondOrContract = "6",
    BasisPoints = "7",
    AmountPerContract = "8"
}
export declare enum CommissionUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum AllocCommissionAmountType {
    Unspecified = 0,
    Acceptance = 1,
    Broker = 2,
    ClearingBroker = 3,
    Retail = 4,
    SalesCommission = 5,
    LocalCommission = 6
}
export declare enum AllocCommissionBasis {
    AmountPerUnit = "1",
    Percent = "2",
    Absolute = "3",
    PercentageWaivedCashDiscountBasis = "4",
    PercentageWaivedEnhancedUnitsBasis = "5",
    PointsPerBondOrContract = "6",
    BasisPoints = "7",
    AmountPerContract = "8"
}
export declare enum AllocCommissionUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum AlgorithmicTradeIndicator {
    NonAlgorithmicTrade = 0,
    AlgorithmicTrade = 1
}
export declare enum TrdRegPublicationType {
    PreTradeTransparencyWaiver = 0,
    PostTradeDeferral = 1,
    ExemptFromPublication = 2
}
export declare enum TrdRegPublicationReason {
    NoPrecedingOrderInBookAsTransactionPriceSetWithinAverageSpreadOfALiquidInstrument = 0,
    NoPrecedingOrderInBookAsTransactionPriceDependsOnSystemSetReferencePriceForAnIlliquidInstrument = 1,
    NoPrecedingOrderInBookAsTransactionPriceIsForTransactionSubjectToConditionsOtherThanCurrentMarketPrice = 2,
    NoPublicPriceForPrecedingOrderAsPublicReferencePriceWasUsedForMatchingOrders = 3,
    NoPublicPriceQuotedAsInstrumentIsIlliquid = 4,
    NoPublicPriceQuotedBySystematicInternaliserAsOrderIsAboveStandardMarketSize = 5,
    DeferralDueToLargeInScale = 6,
    DeferralDueToIlliquidInstrument = 7,
    DeferralDueToSizeSpecific = 8,
    NoPublicPriceAndOrSizeQuotedAsTransactionIsLargeInScale = 9,
    NoPublicPriceAndOrSizeQuotedDueToOrderBeingHidden = 10,
    ExemptedDueToSecuritiesFinancingTransaction = 11,
    ExemptedDueToEuropeanSystemOfCentralBanksEscbPolicyTransaction = 12
}
export declare enum SideTradeReportingIndicator {
    TradeHasNotYetBeenReported = 0,
    TradeHasBeenReportedByATradingVenueAsAnOnBookTrade = 1,
    TradeHasBeenReportedAsASystematicInternaliserSellerTrade = 2,
    TradeHasBeenReportedAsASystematicInternaliserBuyerTrade = 3,
    TradeHasBeenReportedAsANonSystematicInternaliserSellerTrade = 4,
    TradeHasBeenReportedUnderASubDelegationArrangementByAnInvestmentFirmToAReportingFacilityEGApaOnBehalfOfAnotherInvestmentFirm = 5
}
export declare enum MassActionReason {
    NoSpecialReasonDefault = 0,
    TradingRiskControl = 1,
    ClearingRiskControl = 2,
    MarketMakerProtection = 3,
    StopTrading = 4,
    EmergencyAction = 5,
    SessionLossOrLogout = 6,
    DuplicateLogin = 7,
    ProductNotTraded = 8,
    InstrumentNotTraded = 9,
    ComplexInstrumentDeleted = 10,
    CircuitBreakerActivated = 11,
    Other = 99
}
export declare enum NotAffectedReason {
    OrderSuspended = 0,
    InstrumentSuspended = 1
}
export declare enum OrderOwnershipIndicator {
    NoChangeOfOwnershipDefault = 0,
    ChangeOfOwnershipToExecutingParty = 1,
    ChangeOfOwnershipToEnteringParty = 2,
    ChangeOfOwnershipToSpecifiedParty = 3
}
export declare enum InTheMoneyCondition {
    StandardInTheMoney = 0,
    AtTheMoneyIsInTheMoney = 1,
    AtTheMoneyCallIsInTheMoney = 2,
    AtTheMoneyPutIsInTheMoney = 3
}
export declare enum LegInTheMoneyCondition {
    StandardInTheMoney = 0,
    AtTheMoneyIsInTheMoney = 1,
    AtTheMoneyCallIsInTheMoney = 2,
    AtTheMoneyPutIsInTheMoney = 3
}
export declare enum UnderlyingInTheMoneyCondition {
    StandardInTheMoney = 0,
    AtTheMoneyIsInTheMoney = 1,
    AtTheMoneyCallIsInTheMoney = 2,
    AtTheMoneyPutIsInTheMoney = 3
}
export declare enum DerivativeInTheMoneyCondition {
    StandardInTheMoney = 0,
    AtTheMoneyIsInTheMoney = 1,
    AtTheMoneyCallIsInTheMoney = 2,
    AtTheMoneyPutIsInTheMoney = 3
}
export declare enum SideCollateralAmountType {
    MarketValuationTheDefault = 0,
    PortfolioValueBeforeProcessingPledgeRequest = 1,
    ValueConfirmedAsLockedUpForProcessingAPledgeRequest = 2,
    CreditValueOfCollateralAtCcpProcessingAPledgeRequest = 3,
    AdditionalCollateralValue = 4
}
export declare enum SideCollateralFXRateCalc {
    Divide = "D",
    Multiply = "M"
}
export declare enum ExDestinationType {
    NoRestriction = 0,
    CanBeTradedOnlyOnATradingVenue = 1,
    CanBeTradedOnlyOnASystematicInternaliserSi = 2,
    CanBeTradedOnATradingVenueOrSystematicInternaliserSi = 3
}
export declare enum AdditionalTermBondSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum AdditionalTermBondSeniority {
    SeniorSecured = "SD",
    Senior = "SR",
    Subordinated = "SB"
}
export declare enum AdditionalTermBondCouponType {
    Zero = 0,
    FixedRate = 1,
    FloatingRate = 2,
    Structured = 3
}
export declare enum AdditionalTermBondCouponFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum AdditionalTermBondDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum CashSettlQuoteMethod {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum CashSettlValuationMethod {
    Market = 0,
    Highest = 1,
    AverageMarket = 2,
    AverageHighest = 3,
    BlendedMarket = 4,
    BlendedHighest = 5,
    AverageBlendedMarket = 6,
    AverageBlendedHighest = 7
}
export declare enum StreamType {
    PaymentCashSettlement = 0,
    PhysicalDelivery = 1
}
export declare enum StreamPaySide {
    Buy = 1,
    Sell = 2
}
export declare enum StreamReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingStreamEffectiveDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingStreamEffectiveDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingStreamEffectiveDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum StreamTerminationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum StreamTerminationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum StreamTerminationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum StreamCalculationPeriodBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum StreamFirstPeriodStartDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum StreamCalculationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum StreamCalculationRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegPaymentStreamNonDeliverableSettlRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum SettlRatePostponementCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum ProvisionType {
    MandatoryEarlyTermination = 0,
    OptionalEarlyTermination = 1,
    Cancelable = 2,
    Extendible = 3,
    MutualEarlyTermination = 4
}
export declare enum ProvisionDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum ProvisionDateTenorUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ProvisionCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum ProvisionOptionSinglePartyBuyerSide {
    Buy = 1,
    Sell = 2
}
export declare enum ProvisionOptionSinglePartySellerSide {
    Buy = 1,
    Sell = 2
}
export declare enum ProvisionOptionExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2,
    Other = 99
}
export declare enum ProvisionCashSettlMethod {
    CashPrice = 0,
    CashPriceAlternate = 1,
    ParYieldCurveAdjusted = 2,
    ZeroCouponYieldCurveAdjusted = 3,
    ParYieldCurveUnadjusted = 4,
    CrossCurrency = 5,
    CollateralizedPrice = 6
}
export declare enum ProvisionCashSettlQuoteType {
    Bid = 0,
    Mid = 1,
    Offer = 2,
    ExercisingPartyPays = 3
}
export declare enum ProvisionCashSettlQuoteSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum ProvisionCashSettlValueDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum ProvisionCashSettlValueDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ProvisionCashSettlValueDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ProvisionOptionExerciseBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum ProvisionOptionExerciseEarliestDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ProvisionOptionExerciseFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum ProvisionOptionExerciseStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ProvisionOptionExerciseStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ProvisionOptionExerciseFixedDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum ProvisionOptionExpirationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum ProvisionOptionExpirationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ProvisionOptionExpirationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ProvisionOptionRelevantUnderlyingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum ProvisionOptionRelevantUnderlyingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ProvisionOptionRelevantUnderlyingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ProvisionCashSettlPaymentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum ProvisionCashSettlPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ProvisionCashSettlPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ProvisionCashSettlPaymentDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum ProvisionPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum ProvisionPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum ProvisionPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum ProtectionTermEventUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ProtectionTermEventDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ProtectionTermEventQualifier {
    RetructuringMultipleHoldingObligations = "H",
    RestructuringMultipleCreditEventNotices = "E",
    FloatingRateInterestShortfall = "C"
}
export declare enum PaymentType {
    Brokerage = 0,
    UpfrontFee = 1,
    IndependentAmountCollateral = 2,
    PrincipalExchange = 3,
    NovationTermination = 4,
    EarlyTerminationProvision = 5,
    CancelableProvision = 6,
    ExtendibleProvision = 7,
    CapRateProvision = 8,
    FloorRateProvision = 9,
    OptionPremium = 10,
    SettlementPayment = 11,
    CashSettlement = 12,
    Other = 99
}
export declare enum PaymentPaySide {
    Buy = 1,
    Sell = 2
}
export declare enum PaymentReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum PaymentBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentSettlStyle {
    Standard = 0,
    Net = 1,
    StandardAndNet = 2
}
export declare enum PaymentSettlPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum PaymentSettlPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum PaymentSettlPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum PaymentSettlPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum LegStreamType {
    PaymentCashSettlement = 0,
    PhysicalDelivery = 1
}
export declare enum LegStreamPaySide {
    Buy = 1,
    Sell = 2
}
export declare enum LegStreamReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum LegStreamEffectiveDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegStreamEffectiveDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegStreamEffectiveDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegStreamTerminationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegStreamTerminationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegStreamTerminationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegStreamCalculationPeriodBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegStreamFirstPeriodStartDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegStreamCalculationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum LegStreamCalculationRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegPaymentStreamType {
    PeriodicDefault = 0,
    Initial = 1,
    Single = 2,
    Dividend = 3,
    Interest = 4,
    DividendReturn = 5,
    PriceReturn = 6,
    TotalReturn = 7,
    Variance = 8,
    Correlation = 9
}
export declare enum LegPaymentStreamDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum LegPaymentStreamDiscountType {
    Standard = 0,
    ForwardRateAgreementFra = 1
}
export declare enum LegPaymentStreamDiscountRateDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum LegPaymentStreamCompoundingMethod {
    None = 0,
    Flat = 1,
    Straight = 2,
    SpreadExclusive = 3
}
export declare enum LegPaymentStreamPaymentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentStreamPaymentFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Term = "T"
}
export declare enum LegPaymentStreamPaymentRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegPaymentStreamPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamResetDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentStreamResetFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum LegPaymentStreamResetWeeklyRollConvention {
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegPaymentStreamInitialFixingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentStreamInitialFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamInitialFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamFixingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentStreamFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamRateCutoffDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamRateCutoffDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamRateIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum LegPaymentStreamRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum LegPaymentStreamRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum LegPaymentStreamCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStreamCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStreamFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStreamFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStreamFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum LegPaymentStreamAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum LegPaymentStreamNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum LegPaymentStreamInflationLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamInflationLagDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamInflationInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum LegPaymentStreamInflationIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum LegPaymentStreamFRADiscounting {
    None = 0,
    InternationalSwapsAndDerivativesAssociationIsda = 1,
    AustralianFinancialMarketsAssociationAfma = 2
}
export declare enum LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentStreamNonDeliverableFixingDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamNonDeliverableFixingDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegSettlRateFallbackRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum LegNonDeliverableFixingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum PaymentStreamNonDeliverableSettlRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum SettlRateFallbackRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum LegPaymentScheduleType {
    Notional = 0,
    CashFlow = 1,
    FxLinkedNotional = 2,
    FixedRate = 3,
    FutureValueNotional = 4,
    KnownAmount = 5,
    FloatingRateMultiplier = 6,
    Spread = 7,
    CapRate = 8,
    FloorRate = 9,
    NonDeliverableSettlementPaymentDates = 10,
    NonDeliverableSettlementCalculationDates = 11,
    NonDeliverableFixingDates = 12,
    SettlementPeriodNotional = 13,
    SettlementPeriodPrice = 14,
    CalculationPeriod = 15,
    DividendAccrualRateMultiplier = 16,
    DividendAccrualRateSpread = 17,
    DividendAccrualCapRate = 18,
    DividendAccrualFloorRate = 19,
    CompoundingRateMultiplier = 20,
    CompoundingRateSpread = 21,
    CompoundingCapRate = 22,
    CompoundingFloorRate = 23
}
export declare enum LegPaymentScheduleStubType {
    Initial = 0,
    Final = 1,
    CompoundingInitial = 2,
    CompoundingFinal = 3
}
export declare enum LegPaymentSchedulePaySide {
    Buy = 1,
    Sell = 2
}
export declare enum LegPaymentScheduleReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum LegPaymentScheduleRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum LegPaymentScheduleRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum LegPaymentScheduleStepFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum LegPaymentScheduleStepRelativeTo {
    Initial = 0,
    Previous = 1
}
export declare enum LegPaymentScheduleFixingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentScheduleFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentScheduleFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentScheduleInterimExchangeDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentScheduleInterimExchangeDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentScheduleInterimExchangeDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentScheduleRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum LegPaymentScheduleRateSourceType {
    Primary = 0,
    Secondary = 1
}
export declare enum LegPaymentStubType {
    Initial = 0,
    Final = 1,
    CompoundingInitial = 2,
    CompoundingFinal = 3
}
export declare enum LegPaymentStubLength {
    Short = 0,
    Long = 1
}
export declare enum LegPaymentStubIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum LegPaymentStubIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStubIndexRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum LegPaymentStubIndexRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum LegPaymentStubIndexCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStubIndexCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStubIndexFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStubIndexFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStubIndex2Source {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum LegPaymentStubIndex2CurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStubIndex2RateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum LegPaymentStubIndex2RateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum LegProvisionType {
    MandatoryEarlyTermination = 0,
    OptionalEarlyTermination = 1,
    Cancelable = 2,
    Extendible = 3,
    MutualEarlyTermination = 4
}
export declare enum LegProvisionDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegProvisionDateTenorUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegProvisionCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum LegProvisionOptionSinglePartyBuyerSide {
    Buy = 1,
    Sell = 2
}
export declare enum LegProvisionOptionSinglePartySellerSide {
    Buy = 1,
    Sell = 2
}
export declare enum LegProvisionOptionExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2,
    Other = 99
}
export declare enum LegProvisionCashSettlMethod {
    CashPrice = 0,
    CashPriceAlternate = 1,
    ParYieldCurveAdjusted = 2,
    ZeroCouponYieldCurveAdjusted = 3,
    ParYieldCurveUnadjusted = 4,
    CrossCurrency = 5,
    CollateralizedPrice = 6
}
export declare enum LegProvisionCashSettlQuoteType {
    Bid = 0,
    Mid = 1,
    Offer = 2,
    ExercisingPartyPays = 3
}
export declare enum LegProvisionCashSettlQuoteSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum LegProvisionCashSettlPaymentDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegProvisionOptionExerciseBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegProvisionOptionExerciseEarliestDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegProvisionOptionExerciseFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum LegProvisionOptionExerciseStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegProvisionOptionExerciseStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegProvisionOptionExerciseFixedDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegProvisionOptionExpirationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegProvisionOptionExpirationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegProvisionOptionExpirationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegProvisionOptionRelevantUnderlyingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegProvisionOptionRelevantUnderlyingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegProvisionCashSettlPaymentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegProvisionCashSettlPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegProvisionCashSettlPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegProvisionCashSettlValueDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegProvisionCashSettlValueDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegProvisionCashSettlValueDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegProvisionPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum LegProvisionPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum LegProvisionPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum UnderlyingStreamType {
    PaymentCashSettlement = 0,
    PhysicalDelivery = 1
}
export declare enum UnderlyingStreamPaySide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingStreamReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingStreamTerminationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingStreamTerminationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingStreamTerminationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingStreamCalculationPeriodBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingStreamFirstPeriodStartDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingStreamCalculationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum UnderlyingStreamCalculationRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum UnderlyingPaymentStreamType {
    PeriodicDefault = 0,
    Initial = 1,
    Single = 2,
    Dividend = 3,
    Interest = 4,
    DividendReturn = 5,
    PriceReturn = 6,
    TotalReturn = 7,
    Variance = 8,
    Correlation = 9
}
export declare enum UnderlyingPaymentStreamDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum UnderlyingPaymentStreamDiscountType {
    Standard = 0,
    ForwardRateAgreementFra = 1
}
export declare enum UnderlyingPaymentStreamDiscountRateDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum UnderlyingPaymentStreamCompoundingMethod {
    None = 0,
    Flat = 1,
    Straight = 2,
    SpreadExclusive = 3
}
export declare enum UnderlyingPaymentStreamPaymentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentStreamPaymentFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Term = "T"
}
export declare enum UnderlyingPaymentStreamPaymentRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum UnderlyingPaymentStreamPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamResetDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentStreamResetFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum UnderlyingPaymentStreamResetWeeklyRollConvention {
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentStreamInitialFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamInitialFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamFixingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentStreamFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamRateCutoffDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamRateCutoffDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamRateIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum UnderlyingPaymentStreamRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum UnderlyingPaymentStreamRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum UnderlyingPaymentStreamCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStreamCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStreamFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStreamFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStreamFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum UnderlyingPaymentStreamAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum UnderlyingPaymentStreamNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum UnderlyingPaymentStreamInflationLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamInflationLagDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamInflationInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum UnderlyingPaymentStreamInflationIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum UnderlyingPaymentStreamFRADiscounting {
    None = 0,
    InternationalSwapsAndDerivativesAssociationIsda = 1,
    AustralianFinancialMarketsAssociationAfma = 2
}
export declare enum UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingNonDeliverableFixingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingPaymentStreamNonDeliverableSettlRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum UnderlyingSettlRatePostponementCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum UnderlyingPaymentScheduleType {
    Notional = 0,
    CashFlow = 1,
    FxLinkedNotional = 2,
    FixedRate = 3,
    FutureValueNotional = 4,
    KnownAmount = 5,
    FloatingRateMultiplier = 6,
    Spread = 7,
    CapRate = 8,
    FloorRate = 9,
    NonDeliverableSettlementPaymentDates = 10,
    NonDeliverableSettlementCalculationDates = 11,
    NonDeliverableFixingDates = 12,
    SettlementPeriodNotional = 13,
    SettlementPeriodPrice = 14,
    CalculationPeriod = 15,
    DividendAccrualRateMultiplier = 16,
    DividendAccrualRateSpread = 17,
    DividendAccrualCapRate = 18,
    DividendAccrualFloorRate = 19,
    CompoundingRateMultiplier = 20,
    CompoundingRateSpread = 21,
    CompoundingCapRate = 22,
    CompoundingFloorRate = 23
}
export declare enum UnderlyingPaymentScheduleStubType {
    Initial = 0,
    Final = 1,
    CompoundingInitial = 2,
    CompoundingFinal = 3
}
export declare enum UnderlyingPaymentSchedulePaySide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingPaymentScheduleReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingPaymentScheduleRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum UnderlyingPaymentScheduleRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum UnderlyingPaymentScheduleStepFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum UnderlyingPaymentScheduleStepRelativeTo {
    Initial = 0,
    Previous = 1
}
export declare enum UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentScheduleFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentScheduleFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentScheduleRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum UnderlyingPaymentScheduleRateSourceType {
    Primary = 0,
    Secondary = 1
}
export declare enum UnderlyingPaymentStubType {
    Initial = 0,
    Final = 1,
    CompoundingInitial = 2,
    CompoundingFinal = 3
}
export declare enum UnderlyingPaymentStubLength {
    Short = 0,
    Long = 1
}
export declare enum UnderlyingPaymentStubIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum UnderlyingPaymentStubIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStubIndexRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum UnderlyingPaymentStubIndexRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum UnderlyingPaymentStubIndexCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStubIndexCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStubIndexFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStubIndexFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStubIndex2Source {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum UnderlyingPaymentStubIndex2CurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStubIndex2RateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum UnderlyingPaymentStubIndex2RateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum PaymentStreamType {
    PeriodicDefault = 0,
    Initial = 1,
    Single = 2,
    Dividend = 3,
    Interest = 4,
    DividendReturn = 5,
    PriceReturn = 6,
    TotalReturn = 7,
    Variance = 8,
    Correlation = 9
}
export declare enum PaymentStreamDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum PaymentStreamDiscountType {
    Standard = 0,
    ForwardRateAgreementFra = 1
}
export declare enum PaymentStreamDiscountRateDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum PaymentStreamCompoundingMethod {
    None = 0,
    Flat = 1,
    Straight = 2,
    SpreadExclusive = 3
}
export declare enum PaymentStreamPaymentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStreamPaymentFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Term = "T"
}
export declare enum PaymentStreamPaymentRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum PaymentStreamPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamResetDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStreamResetFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum PaymentStreamResetWeeklyRollConvention {
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum PaymentStreamInitialFixingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStreamInitialFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamInitialFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamFixingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStreamFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamRateCutoffDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamRateCutoffDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamRateIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum PaymentStreamRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum PaymentStreamRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum PaymentStreamCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStreamCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStreamFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStreamFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStreamFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum PaymentStreamAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum PaymentStreamNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum PaymentStreamInflationLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamInflationLagDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamInflationInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum PaymentStreamInflationIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum PaymentStreamFRADiscounting {
    None = 0,
    InternationalSwapsAndDerivativesAssociationIsda = 1,
    AustralianFinancialMarketsAssociationAfma = 2
}
export declare enum PaymentStreamNonDeliverableFixingDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStreamNonDeliverableFixingDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamNonDeliverableFixingDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum NonDeliverableFixingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum PaymentScheduleType {
    Notional = 0,
    CashFlow = 1,
    FxLinkedNotional = 2,
    FixedRate = 3,
    FutureValueNotional = 4,
    KnownAmount = 5,
    FloatingRateMultiplier = 6,
    Spread = 7,
    CapRate = 8,
    FloorRate = 9,
    NonDeliverableSettlementPaymentDates = 10,
    NonDeliverableSettlementCalculationDates = 11,
    NonDeliverableFixingDates = 12,
    SettlementPeriodNotional = 13,
    SettlementPeriodPrice = 14,
    CalculationPeriod = 15,
    DividendAccrualRateMultiplier = 16,
    DividendAccrualRateSpread = 17,
    DividendAccrualCapRate = 18,
    DividendAccrualFloorRate = 19,
    CompoundingRateMultiplier = 20,
    CompoundingRateSpread = 21,
    CompoundingCapRate = 22,
    CompoundingFloorRate = 23
}
export declare enum PaymentScheduleStubType {
    Initial = 0,
    Final = 1,
    CompoundingInitial = 2,
    CompoundingFinal = 3
}
export declare enum PaymentSchedulePaySide {
    Buy = 1,
    Sell = 2
}
export declare enum PaymentScheduleReceiveSide {
    Buy = 1,
    Sell = 2
}
export declare enum PaymentScheduleRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum PaymentScheduleRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum PaymentScheduleStepFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum PaymentScheduleStepRelativeTo {
    Initial = 0,
    Previous = 1
}
export declare enum PaymentScheduleFixingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentScheduleFixingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentScheduleFixingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentScheduleInterimExchangeDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentScheduleInterimExchangeDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentScheduleInterimExchangeDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentScheduleRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum PaymentScheduleRateSourceType {
    Primary = 0,
    Secondary = 1
}
export declare enum PaymentStubType {
    Initial = 0,
    Final = 1,
    CompoundingInitial = 2,
    CompoundingFinal = 3
}
export declare enum PaymentStubLength {
    Short = 0,
    Long = 1
}
export declare enum PaymentStubIndexSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum PaymentStubIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStubIndexRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum PaymentStubIndexRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum PaymentStubIndexCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStubIndexCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStubIndexFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStubIndexFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStubIndex2Source {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum PaymentStubIndex2CurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStubIndex2RateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum PaymentStubIndex2RateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum UnderlyingSettlRateFallbackRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum LegSettlRatePostponementCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum StreamEffectiveDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum StreamEffectiveDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum StreamEffectiveDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingProvisionPartyRoleQualifier {
    Agency = 0,
    Principal = 1,
    RisklessPrincipal = 2,
    GeneralClearingMember = 3,
    IndividualClearingMember = 4,
    PreferredMarketMaker = 5,
    DirectedMarketMaker = 6,
    Bank = 7,
    Hub = 8,
    PrimaryTradeRepository = 9,
    OriginalTradeRepository = 10,
    AdditionalInternationalTradeRepository = 11,
    AdditionalDomesticTradeRepository = 12,
    RelatedExchange = 13,
    OptionsExchange = 14,
    SpecifiedExchange = 15,
    ConstituentExchange = 16,
    ExemptFromTradeReporting = 17,
    Current = 18,
    New = 19,
    DesignatedSponsor = 20,
    Specialist = 21,
    Algorithm = 22,
    FirmOrLegalEntity = 23,
    NaturalPerson = 24,
    RegularTrader = 25,
    HeadTrader = 26,
    Supervisor = 27
}
export declare enum PaymentPriceType {
    PercentageIEPercentOfParOftenCalledDollarPriceForFixedIncome = 1,
    PerUnitIEPerShareOrContract = 2,
    FixedAmountAbsoluteValue = 3,
    DiscountPercentagePointsBelowPar = 4,
    PremiumPercentagePointsOverPar = 5,
    SpreadBasisPointsSpread = 6,
    TedPrice = 7,
    TedYield = 8,
    Yield = 9,
    FixedCabinetTradePricePrimarilyForListedFuturesAndOptions = 10,
    VariableCabinetTradePricePrimarilyForListedFuturesAndOptions = 11,
    PriceSpread = 12,
    ProductTicksInHalves = 13,
    ProductTicksInFourths = 14,
    ProductTicksInEighths = 15,
    ProductTicksInSixteenths = 16,
    ProductTicksInThirtySeconds = 17,
    ProductTicksInSixtyFourths = 18,
    ProductTicksInOneTwentyEighths = 19,
    NormalRateRepresentationEGFxRate = 20,
    InverseRateRepresentationEGFxRate = 21,
    BasisPoints = 22,
    UpFrontPoints = 23,
    InterestRate = 24,
    PercentageOfNotional = 25
}
export declare enum PaymentStreamPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum BusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum DateRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegDateRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum UnderlyingBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingDateRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum PaymentSubType {
    InitialPrincipalExchange = 0,
    IntermediatePrincipalExchange = 1,
    FinalPrincipalExchange = 2,
    PrepaidPremiumForward = 3,
    PostpaidPremiumForward = 4,
    VariablePremiumForward = 5,
    FixedPremiumForward = 6,
    SwapPremium = 7,
    ConditionalPrincipalExchangeOnExercise = 8
}
export declare enum ComplexEventCreditEventUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ComplexEventCreditEventDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ComplexEventCreditEventQualifier {
    RetructuringMultipleHoldingObligations = "H",
    RestructuringMultipleCreditEventNotices = "E",
    FloatingRateInterestShortfall = "C"
}
export declare enum ComplexEventPeriodType {
    AsianOut = 0,
    AsianIn = 1,
    BarrierCap = 2,
    BarrierFloor = 3,
    KnockOut = 4,
    KnockIn = 5
}
export declare enum ComplexEventRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum ComplexEventRateSourceType {
    Primary = 0,
    Secondary = 1
}
export declare enum ComplexEventDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ComplexEventDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ComplexEventDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum ComplexEventScheduleFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ComplexEventScheduleRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum DeliveryScheduleType {
    Notional = 0,
    Delivery = 1,
    PhysicalSettlementPeriod = 2
}
export declare enum DeliveryScheduleNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum DeliveryScheduleNotionalCommodityFrequency {
    Term = 0,
    PerBusinessDay = 1,
    PerCalculationPeriod = 2,
    PerSettlementPeriod = 3,
    PerCalendarDay = 4,
    PerHour = 5,
    PerMonth = 6
}
export declare enum DeliveryScheduleToleranceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum DeliveryScheduleToleranceType {
    Absolute = 0,
    Percentage = 1
}
export declare enum DeliveryScheduleSettlFlowType {
    AllTimes = 0,
    OnPeak = 1,
    OffPeak = 2,
    Base = 3,
    BlockHours = 4,
    Other = 5
}
export declare enum DeliveryScheduleSettlHolidaysProcessingInstruction {
    DoNotIncludeHolidays = 0,
    IncludeHolidays = 1
}
export declare enum DeliveryScheduleSettlDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
    AllWeekdays = 8,
    AllDays = 9,
    AllWeekends = 10
}
export declare enum DeliveryScheduleSettlTimeType {
    HourOfTheDay = 0,
    HhMmTimeFormat = 1
}
export declare enum DeliveryStreamType {
    PeriodicDefaultIfNotSpecified = 0,
    Initial = 1,
    Single = 2
}
export declare enum DeliveryStreamDeliveryRestriction {
    Firm = 1,
    InterruptableOrNonFirm = 2,
    ForceMajeure = 3,
    SystemFirm = 4,
    UnitFirm = 5
}
export declare enum DeliveryStreamDeliveryContingentPartySide {
    Buyer = 0,
    Seller = 1
}
export declare enum DeliveryStreamTitleTransferCondition {
    TransfersWithRiskOfLoss = 0,
    DoesNotTransferWithRiskOfLoss = 1
}
export declare enum DeliveryStreamToleranceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum DeliveryStreamToleranceType {
    Absolute = 0,
    Percentage = 1
}
export declare enum DeliveryStreamToleranceOptionSide {
    Buyer = 1,
    Seller = 2
}
export declare enum DeliveryStreamElectingPartySide {
    Buyer = 0,
    Seller = 1
}
export declare enum MarketDisruptionProvision {
    NotApplicable = 0,
    Applicable = 1,
    AsSpecifiedInMasterAgreement = 2,
    AsSpecifiedInConfirmation = 3
}
export declare enum MarketDisruptionFallbackProvision {
    AsSpecifiedInMasterAgreement = 0,
    AsSpecifiedInConfirmation = 1
}
export declare enum MarketDisruptionFallbackUnderlierType {
    Basket = 0,
    Bond = 1,
    Cash = 2,
    Commodity = 3,
    ConvertibleBond = 4,
    Equity = 5,
    ExchangeTradedFund = 6,
    Future = 7,
    Index = 8,
    Loan = 9,
    Mortgage = 10,
    MutualFund = 11
}
export declare enum MarketDisruptionFallbackUnderlierSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum ExerciseConfirmationMethod {
    NotRequired = 0,
    NonElectronic = 1,
    Electronic = 2,
    UnknownAtTimeOfReport = 3
}
export declare enum OptionExerciseBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum OptionExerciseEarliestDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum OptionExerciseEarliestDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum OptionExerciseFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum OptionExerciseStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum OptionExerciseStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum OptionExerciseDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum OptionExerciseExpirationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum OptionExerciseExpirationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum OptionExerciseExpirationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum OptionExerciseExpirationRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum OptionExerciseExpirationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum OptionExerciseExpirationDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum PaymentUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum PaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentForwardStartType {
    Prepaid = 0,
    PostPaid = 1,
    Variable = 2,
    Fixed = 3
}
export declare enum PaymentScheduleFixingDayOfWeek {
    EveryDayTheDefaultIfNotSpecified = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
export declare enum PaymentScheduleRateUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum PaymentScheduleRateSpreadType {
    Absolute = 0,
    Percentage = 1
}
export declare enum PaymentScheduleSettlPeriodPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum PaymentScheduleStepUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum PaymentScheduleFixingDayDistribution {
    All = 0,
    First = 1,
    Last = 2,
    Penultimate = 3
}
export declare enum PaymentScheduleFixingLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentScheduleFixingFirstObservationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamFixedAmountUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum PaymentStreamRateIndex2CurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamRateIndexUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum PaymentStreamSettlLevel {
    Average = 0,
    Maximum = 1,
    Minimum = 2,
    Cumulative = 3
}
export declare enum PaymentStreamReferenceLevelUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum PaymentStreamRateSpreadUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum PaymentStreamRateSpreadType {
    Absolute = 0,
    Percentage = 1
}
export declare enum PaymentStreamCalculationLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamFirstObservationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamPricingDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamPricingDayDistribution {
    All = 0,
    First = 1,
    Last = 2,
    Penultimate = 3
}
export declare enum PaymentStreamPricingBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStreamPaymentDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum PaymentStreamPricingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum PaymentStreamPricingDayOfWeek {
    EveryDayTheDefaultIfNotSpecified = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
export declare enum PricingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum StreamCalculationPeriodDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum StreamCalculationCorrectionUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum StreamCommoditySecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum StreamCommodityUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum StreamCommodityNearbySettlDayUnit {
    Week = "Wk",
    Month = "Mo"
}
export declare enum StreamCommoditySettlDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum StreamCommoditySettlDateRollUnit {
    Day = "D"
}
export declare enum StreamCommoditySettlDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum StreamCommodityDataSourceIDType {
    City4CharacterBusinessCenterCode = 0,
    AirportIataStandard = 1,
    WeatherStationWbanWeatherBureauArmyNavy = 2,
    WeatherIndexWmoWorldMeteorologicalOrganization = 3
}
export declare enum StreamCommoditySettlDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
    AllWeekdays = 8,
    AllDays = 9,
    AllWeekends = 10
}
export declare enum StreamCommoditySettlFlowType {
    AllTimes = 0,
    OnPeak = 1,
    OffPeak = 2,
    Base = 3,
    BlockHours = 4,
    Other = 5
}
export declare enum StreamCommoditySettlPeriodNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum StreamCommoditySettlPeriodFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum StreamCommoditySettlPeriodPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum StreamCommoditySettlHolidaysProcessingInstruction {
    DoNotIncludeHolidays = 0,
    IncludeHolidays = 1
}
export declare enum StreamNotionalFrequencyUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum StreamNotionalCommodityFrequency {
    Term = 0,
    PerBusinessDay = 1,
    PerCalculationPeriod = 2,
    PerSettlementPeriod = 3,
    PerCalendarDay = 4,
    PerHour = 5,
    PerMonth = 6
}
export declare enum StreamNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum StreamTotalNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegAdditionalTermBondSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum LegAdditionalTermBondSeniority {
    SeniorSecured = "SD",
    Senior = "SR",
    Subordinated = "SB"
}
export declare enum LegAdditionalTermBondCouponType {
    Zero = 0,
    FixedRate = 1,
    FloatingRate = 2,
    Structured = 3
}
export declare enum LegAdditionalTermBondCouponFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum LegAdditionalTermBondDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum LegCashSettlQuoteMethod {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum LegCashSettlValuationMethod {
    Market = 0,
    Highest = 1,
    AverageMarket = 2,
    AverageHighest = 3,
    BlendedMarket = 4,
    BlendedHighest = 5,
    AverageBlendedMarket = 6,
    AverageBlendedHighest = 7
}
export declare enum LegComplexEventCreditEventUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegComplexEventCreditEventDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegComplexEventCreditEventQualifier {
    RetructuringMultipleHoldingObligations = "H",
    RestructuringMultipleCreditEventNotices = "E",
    FloatingRateInterestShortfall = "C"
}
export declare enum LegComplexEventPeriodType {
    AsianOut = 0,
    AsianIn = 1,
    BarrierCap = 2,
    BarrierFloor = 3,
    KnockOut = 4,
    KnockIn = 5
}
export declare enum LegComplexEventRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum LegComplexEventRateSourceType {
    Primary = 0,
    Secondary = 1
}
export declare enum LegComplexEventDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegComplexEventDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegComplexEventDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegComplexEventScheduleFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegComplexEventScheduleRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegDeliveryScheduleType {
    Notional = 0,
    Delivery = 1,
    PhysicalSettlementPeriod = 2
}
export declare enum LegDeliveryScheduleNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegDeliveryScheduleNotionalCommodityFrequency {
    Term = 0,
    PerBusinessDay = 1,
    PerCalculationPeriod = 2,
    PerSettlementPeriod = 3,
    PerCalendarDay = 4,
    PerHour = 5,
    PerMonth = 6
}
export declare enum LegDeliveryScheduleToleranceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegDeliveryScheduleToleranceType {
    Absolute = 0,
    Percentage = 1
}
export declare enum LegDeliveryScheduleSettlFlowType {
    AllTimes = 0,
    OnPeak = 1,
    OffPeak = 2,
    Base = 3,
    BlockHours = 4,
    Other = 5
}
export declare enum LegDeliveryScheduleSettlHolidaysProcessingInstruction {
    DoNotIncludeHolidays = 0,
    IncludeHolidays = 1
}
export declare enum LegDeliveryScheduleSettlDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
    AllWeekdays = 8,
    AllDays = 9,
    AllWeekends = 10
}
export declare enum LegDeliveryScheduleSettlTimeType {
    HourOfTheDay = 0,
    HhMmTimeFormat = 1
}
export declare enum LegDeliveryStreamType {
    PeriodicDefaultIfNotSpecified = 0,
    Initial = 1,
    Single = 2
}
export declare enum LegDeliveryStreamDeliveryRestriction {
    Firm = 1,
    InterruptableOrNonFirm = 2,
    ForceMajeure = 3,
    SystemFirm = 4,
    UnitFirm = 5
}
export declare enum LegDeliveryStreamDeliveryContingentPartySide {
    Buyer = 0,
    Seller = 1
}
export declare enum LegDeliveryStreamTitleTransferCondition {
    TransfersWithRiskOfLoss = 0,
    DoesNotTransferWithRiskOfLoss = 1
}
export declare enum LegDeliveryStreamToleranceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegDeliveryStreamToleranceType {
    Absolute = 0,
    Percentage = 1
}
export declare enum LegDeliveryStreamToleranceOptionSide {
    Buyer = 1,
    Seller = 2
}
export declare enum LegDeliveryStreamElectingPartySide {
    Buyer = 0,
    Seller = 1
}
export declare enum LegMarketDisruptionProvision {
    NotApplicable = 0,
    Applicable = 1,
    AsSpecifiedInMasterAgreement = 2,
    AsSpecifiedInConfirmation = 3
}
export declare enum LegMarketDisruptionFallbackProvision {
    AsSpecifiedInMasterAgreement = 0,
    AsSpecifiedInConfirmation = 1
}
export declare enum LegMarketDisruptionFallbackUnderlierType {
    Basket = 0,
    Bond = 1,
    Cash = 2,
    Commodity = 3,
    ConvertibleBond = 4,
    Equity = 5,
    ExchangeTradedFund = 6,
    Future = 7,
    Index = 8,
    Loan = 9,
    Mortgage = 10,
    MutualFund = 11
}
export declare enum LegMarketDisruptionFallbackUnderlierSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum LegExerciseConfirmationMethod {
    NotRequired = 0,
    NonElectronic = 1,
    Electronic = 2,
    UnknownAtTimeOfReport = 3
}
export declare enum LegOptionExerciseBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegOptionExerciseEarliestDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegOptionExerciseEarliestDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegOptionExerciseFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegOptionExerciseStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegOptionExerciseStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegOptionExerciseDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegOptionExerciseExpirationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegOptionExerciseExpirationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegOptionExerciseExpirationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegOptionExerciseExpirationRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegOptionExerciseExpirationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegOptionExerciseExpirationDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegPaymentScheduleFixingDayOfWeek {
    EveryDayTheDefaultIfNotSpecified = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
export declare enum LegPaymentScheduleRateUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegPaymentScheduleRateSpreadType {
    Absolute = 0,
    Percentage = 1
}
export declare enum LegPaymentScheduleSettlPeriodPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegPaymentScheduleStepUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegPaymentScheduleFixingDayDistribution {
    All = 0,
    First = 1,
    Last = 2,
    Penultimate = 3
}
export declare enum LegPaymentScheduleFixingLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentScheduleFixingFirstObservationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamFixedAmountUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegPaymentStreamRateIndex2CurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamRateIndexUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegPaymentStreamSettlLevel {
    Average = 0,
    Maximum = 1,
    Minimum = 2,
    Cumulative = 3
}
export declare enum LegPaymentStreamReferenceLevelUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegPaymentStreamRateSpreadUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegPaymentStreamRateSpreadType {
    Absolute = 0,
    Percentage = 1
}
export declare enum LegPaymentStreamCalculationLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamFirstObservationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamPricingDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamPricingDayDistribution {
    All = 0,
    First = 1,
    Last = 2,
    Penultimate = 3
}
export declare enum LegPaymentStreamPricingBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum StreamCommoditySettlTimeType {
    HourOfTheDay = 0,
    HhMmTimeFormat = 1
}
export declare enum LegPaymentStreamPaymentDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegPaymentStreamPricingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegPaymentStreamPricingDayOfWeek {
    EveryDayTheDefaultIfNotSpecified = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
export declare enum LegPricingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegProtectionTermEventUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegProtectionTermEventDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegProtectionTermEventQualifier {
    RetructuringMultipleHoldingObligations = "H",
    RestructuringMultipleCreditEventNotices = "E",
    FloatingRateInterestShortfall = "C"
}
export declare enum LegStreamCalculationPeriodDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegStreamCalculationCorrectionUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegStreamCommoditySecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum LegStreamCommodityUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegStreamCommodityNearbySettlDayUnit {
    Week = "Wk",
    Month = "Mo"
}
export declare enum LegStreamCommoditySettlDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegStreamCommoditySettlDateRollUnit {
    Day = "D"
}
export declare enum LegStreamCommoditySettlDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegStreamCommodityDataSourceIDType {
    City4CharacterBusinessCenterCode = 0,
    AirportIataStandard = 1,
    WeatherStationWbanWeatherBureauArmyNavy = 2,
    WeatherIndexWmoWorldMeteorologicalOrganization = 3
}
export declare enum LegStreamCommoditySettlDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
    AllWeekdays = 8,
    AllDays = 9,
    AllWeekends = 10
}
export declare enum LegStreamCommoditySettlFlowType {
    AllTimes = 0,
    OnPeak = 1,
    OffPeak = 2,
    Base = 3,
    BlockHours = 4,
    Other = 5
}
export declare enum LegStreamCommoditySettlPeriodNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegStreamCommoditySettlPeriodFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegStreamCommoditySettlPeriodPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegStreamCommoditySettlHolidaysProcessingInstruction {
    DoNotIncludeHolidays = 0,
    IncludeHolidays = 1
}
export declare enum UnderlyingAdditionalTermBondSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum LegStreamNotionalFrequencyUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum LegStreamNotionalCommodityFrequency {
    Term = 0,
    PerBusinessDay = 1,
    PerCalculationPeriod = 2,
    PerSettlementPeriod = 3,
    PerCalendarDay = 4,
    PerHour = 5,
    PerMonth = 6
}
export declare enum LegStreamNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum LegStreamTotalNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingComplexEventCreditEventUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingComplexEventCreditEventDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingComplexEventCreditEventQualifier {
    RetructuringMultipleHoldingObligations = "H",
    RestructuringMultipleCreditEventNotices = "E",
    FloatingRateInterestShortfall = "C"
}
export declare enum UnderlyingComplexEventPeriodType {
    AsianOut = 0,
    AsianIn = 1,
    BarrierCap = 2,
    BarrierFloor = 3,
    KnockOut = 4,
    KnockIn = 5
}
export declare enum UnderlyingComplexEventRateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum UnderlyingComplexEventRateSourceType {
    Primary = 0,
    Secondary = 1
}
export declare enum UnderlyingComplexEventDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingComplexEventDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingComplexEventDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingComplexEventScheduleFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingComplexEventScheduleRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum UnderlyingDeliveryScheduleType {
    Notional = 0,
    Delivery = 1,
    PhysicalSettlementPeriod = 2
}
export declare enum UnderlyingDeliveryScheduleNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingDeliveryScheduleNotionalCommodityFrequency {
    Term = 0,
    PerBusinessDay = 1,
    PerCalculationPeriod = 2,
    PerSettlementPeriod = 3,
    PerCalendarDay = 4,
    PerHour = 5,
    PerMonth = 6
}
export declare enum UnderlyingDeliveryScheduleToleranceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingDeliveryScheduleToleranceType {
    Absolute = 0,
    Percentage = 1
}
export declare enum UnderlyingDeliveryScheduleSettlFlowType {
    AllTimes = 0,
    OnPeak = 1,
    OffPeak = 2,
    Base = 3,
    BlockHours = 4,
    Other = 5
}
export declare enum UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction {
    DoNotIncludeHolidays = 0,
    IncludeHolidays = 1
}
export declare enum UnderlyingDeliveryScheduleSettlDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
    AllWeekdays = 8,
    AllDays = 9,
    AllWeekends = 10
}
export declare enum UnderlyingDeliveryScheduleSettlTimeType {
    HourOfTheDay = 0,
    HhMmTimeFormat = 1
}
export declare enum UnderlyingDeliveryStreamType {
    PeriodicDefaultIfNotSpecified = 0,
    Initial = 1,
    Single = 2
}
export declare enum UnderlyingDeliveryStreamDeliveryRestriction {
    Firm = 1,
    InterruptableOrNonFirm = 2,
    ForceMajeure = 3,
    SystemFirm = 4,
    UnitFirm = 5
}
export declare enum UnderlyingDeliveryStreamDeliveryContingentPartySide {
    Buyer = 0,
    Seller = 1
}
export declare enum UnderlyingDeliveryStreamTitleTransferCondition {
    TransfersWithRiskOfLoss = 0,
    DoesNotTransferWithRiskOfLoss = 1
}
export declare enum UnderlyingDeliveryStreamToleranceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingDeliveryStreamToleranceType {
    Absolute = 0,
    Percentage = 1
}
export declare enum UnderlyingDeliveryStreamToleranceOptionSide {
    Buyer = 1,
    Seller = 2
}
export declare enum UnderlyingDeliveryStreamElectingPartySide {
    Buyer = 0,
    Seller = 1
}
export declare enum UnderlyingExerciseConfirmationMethod {
    NotRequired = 0,
    NonElectronic = 1,
    Electronic = 2,
    UnknownAtTimeOfReport = 3
}
export declare enum UnderlyingOptionExerciseBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingOptionExerciseEarliestDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingOptionExerciseEarliestDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingOptionExerciseFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingOptionExerciseStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingOptionExerciseStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingOptionExerciseDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingOptionExerciseExpirationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingOptionExerciseExpirationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingOptionExerciseExpirationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingOptionExerciseExpirationRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum UnderlyingOptionExerciseExpirationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingOptionExerciseExpirationDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingMarketDisruptionProvision {
    NotApplicable = 0,
    Applicable = 1,
    AsSpecifiedInMasterAgreement = 2,
    AsSpecifiedInConfirmation = 3
}
export declare enum UnderlyingMarketDisruptionFallbackProvision {
    AsSpecifiedInMasterAgreement = 0,
    AsSpecifiedInConfirmation = 1
}
export declare enum UnderlyingMarketDisruptionFallbackUnderlierType {
    Basket = 0,
    Bond = 1,
    Cash = 2,
    Commodity = 3,
    ConvertibleBond = 4,
    Equity = 5,
    ExchangeTradedFund = 6,
    Future = 7,
    Index = 8,
    Loan = 9,
    Mortgage = 10,
    MutualFund = 11
}
export declare enum UnderlyingMarketDisruptionFallbackUnderlierSecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum UnderlyingPaymentScheduleFixingDayOfWeek {
    EveryDayTheDefaultIfNotSpecified = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
export declare enum UnderlyingPaymentScheduleRateUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingPaymentScheduleRateSpreadType {
    Absolute = 0,
    Percentage = 1
}
export declare enum UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingPaymentScheduleStepUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingPaymentScheduleFixingDayDistribution {
    All = 0,
    First = 1,
    Last = 2,
    Penultimate = 3
}
export declare enum UnderlyingPaymentScheduleFixingLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentScheduleFixingFirstObservationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamFixedAmountUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingPaymentStreamRateIndex2CurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamRateIndexUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingPaymentStreamSettlLevel {
    Average = 0,
    Maximum = 1,
    Minimum = 2,
    Cumulative = 3
}
export declare enum UnderlyingPaymentStreamReferenceLevelUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingPaymentStreamRateSpreadUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingPaymentStreamRateSpreadType {
    Absolute = 0,
    Percentage = 1
}
export declare enum UnderlyingPaymentStreamCalculationLagUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamFirstObservationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamPricingDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamPricingDayDistribution {
    All = 0,
    First = 1,
    Last = 2,
    Penultimate = 3
}
export declare enum UnderlyingPaymentStreamPricingBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegStreamCommoditySettlTimeType {
    HourOfTheDay = 0,
    HhMmTimeFormat = 1
}
export declare enum UnderlyingStreamCommoditySettlTimeType {
    HourOfTheDay = 0,
    HhMmTimeFormat = 1
}
export declare enum UnderlyingPaymentStreamPaymentDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingPaymentStreamPricingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingPaymentStreamPricingDayOfWeek {
    EveryDayTheDefaultIfNotSpecified = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
export declare enum UnderlyingPricingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingStreamCalculationPeriodDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingStreamCalculationCorrectionUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingStreamCommoditySecurityIDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociationCtaSymbolSiacCtsCqsLineFormat = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    CommonClearstreamAndEuroclear = "G",
    ClearingHouseClearingOrganization = "H",
    IsdaFpMlProductSpecificationXmlInSecurityXml1185 = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlProductUrlUrlInSecurityId48 = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M",
    MarkitRedEntityClip = "N",
    MarkitRedPairClip = "P",
    CftcCommodityCode = "Q",
    IsdaCommodityReferencePrice = "R",
    FinancialInstrumentGlobalIdentifier = "S",
    LegalEntityIdentifier = "T",
    Synthetic = "U",
    FidessaInstrumentMnemonicFim = "V"
}
export declare enum UnderlyingStreamCommodityUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingStreamCommodityNearbySettlDayUnit {
    Week = "Wk",
    Month = "Mo"
}
export declare enum UnderlyingStreamCommoditySettlDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingStreamCommoditySettlDateRollUnit {
    Day = "D"
}
export declare enum UnderlyingStreamCommoditySettlDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingStreamCommodityDataSourceIDType {
    City4CharacterBusinessCenterCode = 0,
    AirportIataStandard = 1,
    WeatherStationWbanWeatherBureauArmyNavy = 2,
    WeatherIndexWmoWorldMeteorologicalOrganization = 3
}
export declare enum UnderlyingStreamCommoditySettlDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
    AllWeekdays = 8,
    AllDays = 9,
    AllWeekends = 10
}
export declare enum UnderlyingStreamCommoditySettlFlowType {
    AllTimes = 0,
    OnPeak = 1,
    OffPeak = 2,
    Base = 3,
    BlockHours = 4,
    Other = 5
}
export declare enum UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingStreamCommoditySettlPeriodFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingStreamCommoditySettlHolidaysProcessingInstruction {
    DoNotIncludeHolidays = 0,
    IncludeHolidays = 1
}
export declare enum UnderlyingStreamNotionalFrequencyUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Quarter = "Q"
}
export declare enum UnderlyingStreamNotionalCommodityFrequency {
    Term = 0,
    PerBusinessDay = 1,
    PerCalculationPeriod = 2,
    PerSettlementPeriod = 3,
    PerCalendarDay = 4,
    PerHour = 5,
    PerMonth = 6
}
export declare enum UnderlyingStreamNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingStreamTotalNotionalUnitOfMeasure {
    BillionCubicFeet = "Bcf",
    Allowances = "Alw",
    Barrels = "Bbl",
    CubicMeters = "CBM",
    BoardFeet = "BDFT",
    Gigajoules = "GJ",
    Bushels = "Bu",
    KilowattHours = "kWh",
    OneMillionBtu = "MMBtu",
    AmountOfCurrency = "Ccy",
    MegawattHours = "MWh",
    CoolingDegreeDay = "CDD",
    CertifiedEmissionsReduction = "CER",
    Therms = "thm",
    CriticalPrecipitationDay = "CPD",
    ClimateReserveTonnes = "CRT",
    HundredweightUs = "cwt",
    Days = "day",
    DryMetricTons = "dt",
    EnvironmentalAllowanceCertificates = "EnvAllwnc",
    EnvironmentalCredit = "EnvCrd",
    EnvironmentalOffset = "EnvOfst",
    Grams = "g",
    Gallons = "Gal",
    GrossTons = "GT",
    HeatingDegreeDay = "HDD",
    IndexPoint = "IPNT",
    Kilograms = "kg",
    Kiloliters = "kL",
    KilowattYear = "kW-a",
    KilowattDay = "kW-d",
    KilowattHour = "kW-h",
    KilowattMonth = "kW-M",
    KilowattMinuteElectricalCapacity = "kW-min ",
    Liters = "L",
    Pounds = "lbs",
    MegawattYear = "MW-a",
    MegawattDay = "MW-d",
    MegawattHour = "MW-h",
    MegawattMonth = "MW-M",
    MegawattMinute = "MW-min",
    TroyOunces = "oz_tr",
    PrincipalWithRelationToDebtInstrument = "PRINC",
    MetricTons = "t",
    TonsUs = "tn",
    MillionBarrels = "MMbbl",
    UsDollars = "USD"
}
export declare enum UnderlyingAdditionalTermBondSeniority {
    SeniorSecured = "SD",
    Senior = "SR",
    Subordinated = "SB"
}
export declare enum UnderlyingAdditionalTermBondCouponType {
    Zero = 0,
    FixedRate = 1,
    FloatingRate = 2,
    Structured = 3
}
export declare enum UnderlyingAdditionalTermBondCouponFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum UnderlyingAdditionalTermBondDayCount {
    E11 = 0,
    E3036030U360OrBondBasis = 1,
    E30360Sia = 2,
    E30360M = 3,
    E30E360EurobondBasis = 4,
    E30E360Isda = 5,
    Act360 = 6,
    Act365Fixed = 7,
    ActActAfb = 8,
    ActActIcma = 9,
    ActActIcsmaUltimo = 10,
    ActActIsda = 11,
    Bus252 = 12,
    E30E360 = 13,
    Act365L = 14,
    Nl365 = 15,
    Nl360 = 16,
    Act364 = 17
}
export declare enum UnderlyingCashSettlQuoteMethod {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum UnderlyingCashSettlValuationMethod {
    Market = 0,
    Highest = 1,
    AverageMarket = 2,
    AverageHighest = 3,
    BlendedMarket = 4,
    BlendedHighest = 5,
    AverageBlendedMarket = 6,
    AverageBlendedHighest = 7
}
export declare enum UnderlyingProtectionTermEventUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingProtectionTermEventDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingProtectionTermEventQualifier {
    RetructuringMultipleHoldingObligations = "H",
    RestructuringMultipleCreditEventNotices = "E",
    FloatingRateInterestShortfall = "C"
}
export declare enum UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingProvisionCashSettlPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingProvisionCashSettlPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingProvisionCashSettlPaymentDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingProvisionCashSettlQuoteSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    Other = 99
}
export declare enum UnderlyingProvisionCashSettlValueDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingProvisionCashSettlValueDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingProvisionCashSettlValueDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingProvisionOptionExerciseFixedDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingProvisionOptionExerciseBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingProvisionOptionExerciseEarliestDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingProvisionOptionExerciseFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum UnderlyingProvisionOptionExerciseStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingProvisionOptionExerciseStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingProvisionOptionExpirationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingProvisionOptionExpirationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingProvisionOptionExpirationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingProvisionType {
    MandatoryEarlyTermination = 0,
    OptionalEarlyTermination = 1,
    Cancelable = 2,
    Extendible = 3,
    MutualEarlyTermination = 4
}
export declare enum UnderlyingProvisionDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingProvisionDateTenorUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingProvisionCalculationAgent {
    ExercisingParty = 0,
    NonExercisingParty = 1,
    AsSpecifiedInTheMasterAgreement = 2,
    AsSpecifiedInTheStandardTermsSupplement = 3
}
export declare enum UnderlyingProvisionOptionSinglePartyBuyerSide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingProvisionOptionSinglePartySellerSide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingProvisionOptionExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2,
    Other = 99
}
export declare enum UnderlyingProvisionCashSettlMethod {
    CashPrice = 0,
    CashPriceAlternate = 1,
    ParYieldCurveAdjusted = 2,
    ZeroCouponYieldCurveAdjusted = 3,
    ParYieldCurveUnadjusted = 4,
    CrossCurrency = 5,
    CollateralizedPrice = 6
}
export declare enum UnderlyingProvisionCashSettlQuoteType {
    Bid = 0,
    Mid = 1,
    Offer = 2,
    ExercisingPartyPays = 3
}
export declare enum UnderlyingProvisionPartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseQualifiedForeignInvestorIdQfiiFid = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepositoryMcdNumber = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = "I",
    BicBankIdentificationCodeSwiftManagedCodeIso9362SeeAppendix6B = "B",
    GenerallyAcceptedMarketParticipantIdentifierEGNasdMnemonic = "C",
    ProprietaryCustomCode = "D",
    IsoCountryCode = "E",
    AustralianTaxFileNumber = "A",
    SettlementEntityLocationNoteIfLocalMarketSettlementUseEIsoCountryCodeSeeAppendix6GForValidValues = "F",
    MicIso10383MarketIdentificerCodeSeeAppendix6C = "G",
    TaxId = "J",
    CsdParticipantMemberCodeEGEuroclearDtcCrestOrKassenvereinNumber = "H",
    AustralianCompanyNumber = "K",
    AustralianRegisteredBodyNumber = "L",
    CftcReportingFirmIdentifier = "M",
    LegalEntityIdentifierIso17442Lei = "N",
    InterimIdentifier = "O",
    ShortCodeIdentifier = "P",
    NationalIdOfNaturalPerson = "Q"
}
export declare enum UnderlyingProvisionPartyRole {
    ExecutingFirmFormerlyFix42ExecBroker = 1,
    BrokerOfCreditFormerlyFix42BrokerOfCredit = 2,
    ClientIdFormerlyFix42ClientId = 3,
    ClearingFirmFormerlyFix42ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    LocateLendingFirmForShortSales = 8,
    FundManagerClientIdForCiv = 9,
    SettlementLocationFormerlyFix42SettlLocation = 10,
    OrderOriginationTraderAssociatedWithOrderOriginationFirmIETraderWhoInitiatesSubmitsTheOrder = 11,
    ExecutingTraderAssociatedWithExecutingFirmActuallyExecutes = 12,
    OrderOriginationFirmEGBuySideFirm = 13,
    GiveupClearingFirmFirmToWhichTradeIsGivenUp = 14,
    CorrespondantClearingFirm = 15,
    ExecutingSystem = 16,
    ContraFirm = 17,
    ContraClearingFirm = 18,
    SponsoringFirm = 19,
    UnderlyingContraFirm = 20,
    ClearingOrganization = 21,
    Exchange = 22,
    CustomerAccount = 24,
    CorrespondentClearingOrganization = 25,
    CorrespondentBroker = 26,
    BuyerSellerReceiverDeliverer = 27,
    Custodian = 28,
    Intermediary = 29,
    Agent = 30,
    SubCustodian = 31,
    Beneficiary = 32,
    InterestedParty = 33,
    RegulatoryBody = 34,
    LiquidityProvider = 35,
    EnteringTrader = 36,
    ContraTrader = 37,
    PositionAccount = 38,
    ContraInvestorId = 39,
    TransferToFirm = 40,
    ContraPositionAccount = 41,
    ContraExchange = 42,
    InternalCarryAccount = 43,
    OrderEntryOperatorId = 44,
    SecondaryAccountNumber = 45,
    ForeignFirm = 46,
    ThirdPartyAllocationFirm = 47,
    ClaimingAccount = 48,
    AssetManager = 49,
    PledgorAccount = 50,
    PledgeeAccount = 51,
    LargeTraderReportableAccount = 52,
    TraderMnemonic = 53,
    SenderLocation = 54,
    SessionId = 55,
    AcceptableCounterparty = 56,
    UnacceptableCounterparty = 57,
    EnteringUnit = 58,
    ExecutingUnit = 59,
    IntroducingBroker = 60,
    QuoteOriginator = 61,
    ReportOriginator = 62,
    SystematicInternaliserSi = 63,
    MultilateralTradingFacilityMtf = 64,
    RegulatedMarketRm = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthorityHostCa = 68,
    HomeCompetentAuthorityHomeCa = 69,
    CompetentAuthorityOfTheMostRelevantMarketInTermsOfLiquidityCal = 70,
    CompetentAuthorityOfTheTransactionExecutionVenueCatv = 71,
    ReportingIntermediaryMediumVendorViaWhichReportHasBeenPublished = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBrokerProvidingGeneralTradeServices = 79,
    StepOutFirmPrimeBroker = 80,
    BrokerCientId = 81,
    CentralRegistrationDepositoryCrd = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85,
    ClsMemberBank = 86,
    InConcertGroup = 87,
    InConcertControllingEntity = 88,
    LargePositionsReportingAccount = 89,
    SettlementFirm = 90,
    SettlementAccount = 91,
    ReportingMarketCenter = 92,
    RelatedReportingMarketCenter = 93,
    AwayMarket = 94,
    GiveUpTradingFirm = 95,
    TakeUpTradingFirm = 96,
    GiveUpClearingFirm = 97,
    TakeUpClearingFirm = 98,
    OriginatingMarket = 99,
    MarginAccount = 100,
    CollateralAssetAccount = 101,
    DataRepository = 102,
    CalculationAgent = 103,
    SenderOfExerciseNotice = 104,
    ReceiverOfExerciseNotice = 105,
    RateReferenceBank = 106,
    Correspondent = 107,
    BeneficiarysBankOrDepositoryInstitution = 109,
    Borrower = 110,
    PrimaryObligator = 111,
    Guarantor = 112,
    ExcludedReferenceEntity = 113,
    DeterminingParty = 114,
    HedgingParty = 115,
    ReportingEntity = 116,
    SalesPerson = 117,
    Operator = 118,
    CentralSecuritiesDepositoryCsd = 119,
    InternationalCentralSecuritiesDepositoryIcsd = 120,
    TradingSubAccount = 121,
    InvestmentDecisionMaker = 122
}
export declare enum UnderlyingProvisionPartySubIDType {
    Firm = 1,
    Person = 2,
    System = 3,
    Application = 4,
    FullLegalNameOfFirm = 5,
    PostalAddress = 6,
    PhoneNumber = 7,
    EmailAddress = 8,
    ContactName = 9,
    SecuritiesAccountNumberForSettlementInstructions = 10,
    RegistrationNumberForSettlementInstructionsAndConfirmations = 11,
    RegisteredAddressForConfirmationPurposes = 12,
    RegulatoryStatusForConfirmationPurposes = 13,
    RegistrationNameForSettlementInstructions = 14,
    CashAccountNumberForSettlementInstructions = 15,
    Bic = 16,
    CsdParticipantMemberCode = 17,
    RegisteredAddress = 18,
    FundAccountName = 19,
    TelexNumber = 20,
    FaxNumber = 21,
    SecuritiesAccountName = 22,
    CashAccountName = 23,
    Department = 24,
    LocationDesk = 25,
    PositionAccountType = 26,
    SecurityLocateId = 27,
    MarketMaker = 28,
    EligibleCounterparty = 29,
    ProfessionalClient = 30,
    Location = 31,
    ExecutionVenue = 32,
    CurrencyDeliveryIdentifier = 33,
    AddressCity = 34,
    AddressStateProvince = 35,
    AddressPostalCode = 36,
    AddressStreet = 37,
    AddressCountryIsoCountryCode = 38,
    IsoCountryCode = 39,
    MarketSegment = 40,
    CustomerAccountType = 41,
    OmnibusAccount = 42,
    FundsSegregationType = 43,
    GuaranteeFund = 44,
    SwapDealer = 45,
    MajorParticipant = 46,
    FinancialEntity = 47,
    USPerson = 48,
    ReportingEntityIndicator = 49,
    ElectedClearingRequirementException = 50,
    BusinessCenter = 51,
    ReferenceText = 52,
    ShortMarkingExemptAccount = 53,
    ParentFirmIdentifier = 54,
    ParentFirmName = 55,
    DealIdentifier = 56,
    SystemTradeIdentifier = 57,
    SystemTradeSubIdentifier = 58,
    FuturesCommissionMerchantFcmCode = 59,
    DeliveryTerminalCustomerAccountCode = 60,
    VoluntaryReportingEntity = 61,
    ReportingObligationJurisdiction = 62,
    VoluntaryReportingJurisdiction = 63,
    CompanyActivities = 64,
    EuropeanEconomicAreaDomiciled = 65,
    ContractLinkedToCommercialOrTreasuryFinancingForThisCounterparty = 66,
    ContractAboveClearingThresholdForThisCounterparty = 67,
    VoluntaryReportingParty = 68,
    EndUser = 69,
    LocationOrJurisdiction = 70,
    DerivativesDealer = 71,
    Domicile = 72,
    ExemptFromRecognition = 73,
    Payer = 74,
    Receiver = 75,
    SystematicInternaliserSi = 76
}
export declare enum DeliveryStreamDeliveryPointSource {
    Proprietary = 0,
    EnergyIdentificationCodeEic = 1
}
export declare enum LegDeliveryStreamDeliveryPointSource {
    Proprietary = 0,
    EnergyIdentificationCodeEic = 1
}
export declare enum UnderlyingDeliveryStreamDeliveryPointSource {
    Proprietary = 0,
    EnergyIdentificationCodeEic = 1
}
export declare enum CashSettlDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum CashSettlDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum CashSettlDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum CashSettlPriceDefault {
    Close = 0,
    Hedge = 1
}
export declare enum DividendFloatingRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum DividendFloatingRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum DividendFloatingRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum DividendCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum DividendCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum DividendFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum DividendFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum DividendFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum DividendAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum DividendNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum DividendAccrualPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum DividendAccrualPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum DividendAccrualPaymeentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum DividendEntitlementEvent {
    ExDate = 0,
    RecordDate = 1
}
export declare enum DividendAmountType {
    RecordAmount = 0,
    ExAmount = 1,
    PaidAmount = 2,
    AsSpecifiedInMasterConfirmation = 3
}
export declare enum ExtraordinaryDividendPartySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum ExtraordinaryDividendAmountType {
    RecordAmount = 0,
    ExAmount = 1,
    PaidAmount = 2,
    AsSpecifiedInMasterConfirmation = 3
}
export declare enum DividendCompoundingMethod {
    None = 0,
    Flat = 1,
    Straight = 2,
    SpreadExclusive = 3
}
export declare enum NonCashDividendTreatment {
    PotentialAdjustmentEvent = 0,
    CashEquivalent = 1
}
export declare enum DividendComposition {
    EquityAmountReceiverElection = 0,
    CalculationAgentElection = 1
}
export declare enum DividendFXTriggerDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum DividendFXTriggerDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum DividendFXTriggerDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum DividendPeriodBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum DividendPeriodValuationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum DividendPeriodValuationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum DividendPeriodPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum DividendPeriodPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegCashSettlDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegCashSettlDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegCashSettlDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegCashSettlPriceDefault {
    Close = 0,
    Hedge = 1
}
export declare enum LegDividendFloatingRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegDividendFloatingRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum LegDividendFloatingRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum LegDividendCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegDividendCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegDividendFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegDividendFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegDividendFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum LegDividendAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum LegDividendNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum LegDividendAccrualPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegDividendAccrualPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegDividendAccrualPaymentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegDividendEntitlementEvent {
    ExDate = 0,
    RecordDate = 1
}
export declare enum LegDividendAmountType {
    RecordAmount = 0,
    ExAmount = 1,
    PaidAmount = 2,
    AsSpecifiedInMasterConfirmation = 3
}
export declare enum LegExtraordinaryDividendPartySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegExtraordinaryDividendAmountType {
    RecordAmount = 0,
    ExAmount = 1,
    PaidAmount = 2,
    AsSpecifiedInMasterConfirmation = 3
}
export declare enum LegDividendCompoundingMethod {
    None = 0,
    Flat = 1,
    Straight = 2,
    SpreadExclusive = 3
}
export declare enum LegNonCashDividendTreatment {
    PotentialAdjustmentEvent = 0,
    CashEquivalent = 1
}
export declare enum LegDividendComposition {
    EquityAmountReceiverElection = 0,
    CalculationAgentElection = 1
}
export declare enum LegDividendFXTriggerDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegDividendFXTriggerDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegDividendFXTriggerDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegDividendPeriodBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegDividendPeriodValuationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegDividendPeriodValuationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegDividendPeriodPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegDividendPeriodPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegSettlMethodElectingPartySide {
    Buy = 1,
    Sell = 2
}
export declare enum LegMakeWholeBenchmarkQuote {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum LegMakeWholeInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum LegPaymentStreamInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum LegPaymentStreamInterpolationPeriod {
    Initial = 0,
    InitialAndFinal = 1,
    Final = 2,
    AnyPeriod = 3
}
export declare enum LegPaymentStreamCompoundingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegPaymentStreamCompoundingDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentStreamCompoundingDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamCompoundingDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamCompoundingFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum LegPaymentStreamCompoundingRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegPaymentStreamCompoundingEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamCompoundingEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamCompoundingRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamCompoundingRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum LegPaymentStreamCompoundingRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum LegPaymentStreamCompoundingCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStreamCompoundingCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStreamCompoundingFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStreamCompoundingFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum LegPaymentStreamCompoundingFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum LegPaymentStreamCompoundingAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum LegPaymentStreamCompoundingNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum LegPaymentStreamCompoundingStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamCompoundingStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamFinalPricePaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStreamFinalPricePaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamFixingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegPaymentStreamFirstObservationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStreamLinkStrikePriceType {
    Volatility = 0,
    Variance = 1
}
export declare enum LegPaymentStreamRealizedVarianceMethod {
    Previous = 0,
    Last = 1,
    Both = 2
}
export declare enum LegPaymentStubEndDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentStubEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStubEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegPaymentStubStartDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegPaymentStubStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegPaymentStubStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegProvisionBreakFeeElection {
    FlatFee = 0,
    AmortizedFee = 1,
    FundingFee = 2,
    FlatFeeAndFundingFee = 3,
    AmortizedFeeAndFundingFee = 4
}
export declare enum LegReturnRateDateMode {
    PriceValuation = 0,
    DividendValuation = 1
}
export declare enum LegReturnRateValuationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegReturnRateValuationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegReturnRateValuationStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegReturnRateValuationStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegReturnRateValuationEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegReturnRateValuationEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegReturnRateValuationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum LegReturnRateValuationFrequencyRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum LegReturnRateValuationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegReturnRateFXRateCalc {
    Multiply = "M",
    Divide = "D"
}
export declare enum LegReturnRatePriceSequence {
    Initial = 0,
    Interim = 1,
    Final = 2
}
export declare enum LegReturnRateCommissionBasis {
    AmountPerUnit = "1",
    Percent = "2",
    Absolute = "3",
    PercentageWaivedCashDiscountBasis = "4",
    PercentageWaivedEnhancedUnitsBasis = "5",
    PointsPerBondOrContract = "6",
    BasisPoints = "7",
    AmountPerContract = "8"
}
export declare enum LegReturnRateQuoteMethod {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum LegReturnRateQuoteTimeType {
    Open = 0,
    OfficialSettlementPriceTime = 1,
    Xetra = 2,
    Close = 3,
    DerivativesClose = 4,
    High = 5,
    Low = 6,
    AsSpecifiedInTheMasterConfirmation = 7
}
export declare enum LegReturnRateValuationTimeType {
    Open = 0,
    OfficialSettlementPriceTime = 1,
    Xetra = 2,
    Close = 3,
    DerivativesClose = 4,
    High = 5,
    Low = 6,
    AsSpecifiedInTheMasterConfirmation = 7
}
export declare enum LegReturnRateValuationPriceOption {
    NoneTheDefault = 0,
    FuturesPrice = 1,
    OptionsPrice = 2
}
export declare enum LegReturnRateFinalPriceFallback {
    Close = 0,
    HedgeElection = 1
}
export declare enum LegReturnRateInformationSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum LegReturnRatePriceBasis {
    Gross = 0,
    Net = 1,
    Accrued = 2,
    CleanNet = 3
}
export declare enum LegReturnRatePriceType {
    AbsoluteTerms = 0,
    PercentageOfNotional = 1
}
export declare enum LegReturnRateValuationDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum LegSettlMethodElectionDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum LegSettlMethodElectionDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum LegSettlMethodElectionDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum LegStreamNotionalAdjustments {
    Execution = 0,
    PortfolioRebalancing = 1,
    Standard = 2
}
export declare enum SettlMethodElectingPartySide {
    Buy = 1,
    Sell = 2
}
export declare enum MakeWholeBenchmarkQuote {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum MakeWholeInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum PaymentStreamInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum PaymentStreamInterpolationPeriod {
    Initial = 0,
    InitialAndFinal = 1,
    Final = 2,
    AnyPeriod = 3
}
export declare enum PaymentStreamCompoundingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum PaymentStreamCompoundingDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStreamCompoundingDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamCompoundingDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamCompoundingFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum PaymentStreamCompoundingRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum PaymentStreamCompoundingEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamCompoundingEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamCompoundingRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamCompoundingRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum PaymentStreamCompoundingRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum PaymentStreamCompoundingCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStreamCompoundingCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStreamCompoundingFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStreamCompoundingFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum PaymentStreamCompoundingFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum PaymentStreamCompoundingAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum PaymentStreamCompoundingNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum PaymentStreamCompoundingStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamCompoundingStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamFinalPricePaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStreamFinalPricePaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamFixingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum PaymentStreamFirstObservationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStreamLinkStrikePriceType {
    Volatility = 0,
    Variance = 1
}
export declare enum PaymentStreamRealizedVarianceMethod {
    Previous = 0,
    Last = 1,
    Both = 2
}
export declare enum PaymentStubEndDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStubEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStubEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum PaymentStubStartDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum PaymentStubStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum PaymentStubStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ProvisionBreakFeeElection {
    FlatFee = 0,
    AmortizedFee = 1,
    FundingFee = 2,
    FlatFeeAndFundingFee = 3,
    AmortizedFeeAndFundingFee = 4
}
export declare enum ReturnRateDateMode {
    PriceValuation = 0,
    DividendValuation = 1
}
export declare enum ReturnRateValuationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ReturnRateValuationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ReturnRateValuationStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ReturnRateValuationStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ReturnRateValuationEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum ReturnRateValuationEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum ReturnRateValuationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum ReturnRateValuationFrequencyRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum ReturnRateValuationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum ReturnRateFXRateCalc {
    Multiply = "M",
    Divide = "D"
}
export declare enum ReturnRatePriceSequence {
    Initial = 0,
    Interim = 1,
    Final = 2
}
export declare enum ReturnRateCommissionBasis {
    AmountPerUnit = "1",
    Percent = "2",
    Absolute = "3",
    PercentageWaivedCashDiscountBasis = "4",
    PercentageWaivedEnhancedUnitsBasis = "5",
    PointsPerBondOrContract = "6",
    BasisPoints = "7",
    AmountPerContract = "8"
}
export declare enum ReturnRateQuoteMethod {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum ReturnRateQuoteTimeType {
    Open = 0,
    OfficialSettlementPriceTime = 1,
    Xetra = 2,
    Close = 3,
    DerivativesClose = 4,
    High = 5,
    Low = 6,
    AsSpecifiedInTheMasterConfirmation = 7
}
export declare enum ReturnRateValuationTimeType {
    Open = 0,
    OfficialSettlementPriceTime = 1,
    Xetra = 2,
    Close = 3,
    DerivativesClose = 4,
    High = 5,
    Low = 6,
    AsSpecifiedInTheMasterConfirmation = 7
}
export declare enum ReturnRateValuationPriceOption {
    NoneTheDefault = 0,
    FuturesPrice = 1,
    OptionsPrice = 2
}
export declare enum ReturnRateFinalPriceFallback {
    Close = 0,
    HedgeElection = 1
}
export declare enum ReturnRateInformationSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum ReturnRatePriceBasis {
    Gross = 0,
    Net = 1,
    Accrued = 2,
    CleanNet = 3
}
export declare enum ReturnRatePriceType {
    AbsoluteTerms = 0,
    PercentageOfNotional = 1
}
export declare enum ReturnRateValuationDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum SettlMethodElectionDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum SettlMethodElectionDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum SettlMethodElectionDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum StreamNotionalAdjustments {
    Execution = 0,
    PortfolioRebalancing = 1,
    Standard = 2
}
export declare enum UnderlyingCashSettlDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingCashSettlDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingCashSettlDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingCashSettlPriceDefault {
    Close = 0,
    Hedge = 1
}
export declare enum UnderlyingDividendFloatingRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingDividendFloatingRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum UnderlyingDividendFloatingRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum UnderlyingDividendCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingDividendCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingDividendFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingDividendFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingDividendFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum UnderlyingDividendAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum UnderlyingDividendNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum UnderlyingDividendAccrualPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingDividendAccrualPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingDividendAccrualPaymentDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingDividendEntitlementEvent {
    ExDate = 0,
    RecordDate = 1
}
export declare enum UnderlyingDividendAmountType {
    RecordAmount = 0,
    ExAmount = 1,
    PaidAmount = 2,
    AsSpecifiedInMasterConfirmation = 3
}
export declare enum UnderlyingExtraordinaryDividendPartySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingExtraordinaryDividendAmountType {
    RecordAmount = 0,
    ExAmount = 1,
    PaidAmount = 2,
    AsSpecifiedInMasterConfirmation = 3
}
export declare enum UnderlyingDividendCompoundingMethod {
    None = 0,
    Flat = 1,
    Straight = 2,
    SpreadExclusive = 3
}
export declare enum UnderlyingNonCashDividendTreatment {
    PotentialAdjustmentEvent = 0,
    CashEquivalent = 1
}
export declare enum UnderlyingDividendComposition {
    EquityAmountReceiverElection = 0,
    CalculationAgentElection = 1
}
export declare enum UnderlyingDividendFXTriggerDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingDividendFXTriggerDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingDividendFXTriggerDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingDividendPeriodBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingDividendPeriodValuationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingDividendPeriodValuationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingDividendPeriodPaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingDividendPeriodPaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingSettlMethodElectingPartySide {
    Buy = 1,
    Sell = 2
}
export declare enum UnderlyingMakeWholeBenchmarkQuote {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum UnderlyingMakeWholeInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum UnderlyingPaymentStreamInterpolationMethod {
    None = 0,
    LinearZeroYield = 1
}
export declare enum UnderlyingPaymentStreamInterpolationPeriod {
    Initial = 0,
    InitialAndFinal = 1,
    Final = 2,
    AnyPeriod = 3
}
export declare enum UnderlyingPaymentStreamCompoundingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingPaymentStreamCompoundingDatesBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentStreamCompoundingDatesOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamCompoundingDatesOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamCompoundingFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum UnderlyingPaymentStreamCompoundingRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum UnderlyingPaymentStreamCompoundingEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamCompoundingEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamCompoundingRateIndexCurveUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamCompoundingRateSpreadPositionType {
    Short = 0,
    Long = 1
}
export declare enum UnderlyingPaymentStreamCompoundingRateTreatment {
    BondEquivalentYield = 0,
    MoneyMarketYield = 1
}
export declare enum UnderlyingPaymentStreamCompoundingCapRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStreamCompoundingCapRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStreamCompoundingFloorRateBuySide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStreamCompoundingFloorRateSellSide {
    BuyerOfTheTrade = 1,
    SellerOfTheTrade = 2
}
export declare enum UnderlyingPaymentStreamCompoundingFinalRateRoundingDirection {
    RoundToNearest = "0",
    RoundDown = "1",
    RoundUp = "2"
}
export declare enum UnderlyingPaymentStreamCompoundingAveragingMethod {
    Unweighted = 0,
    Weighted = 1
}
export declare enum UnderlyingPaymentStreamCompoundingNegativeRateTreatment {
    ZeroInterestRateMethod = 0,
    NegativeInterestRateMethod = 1
}
export declare enum UnderlyingPaymentStreamCompoundingStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamCompoundingStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamFinalPricePaymentDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStreamFinalPricePaymentDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamFixingDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingPaymentStreamFirstObservationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStreamLinkStrikePriceType {
    Volatility = 0,
    Variance = 1
}
export declare enum UnderlyingPaymentStreamRealizedVarianceMethod {
    Previous = 0,
    Last = 1,
    Both = 2
}
export declare enum UnderlyingPaymentStubEndDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentStubEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStubEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingPaymentStubStartDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingPaymentStubStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingPaymentStubStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingProvisionBreakFeeElection {
    FlatFee = 0,
    AmortizedFee = 1,
    FundingFee = 2,
    FlatFeeAndFundingFee = 3,
    AmortizedFeeAndFundingFee = 4
}
export declare enum UnderlyingReturnRateDateMode {
    PriceValuation = 0,
    DividendValuation = 1
}
export declare enum UnderlyingReturnRateValuationDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingReturnRateValuationDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingReturnRateValuationStartDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingReturnRateValuationStartDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingReturnRateValuationEndDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingReturnRateValuationEndDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingReturnRateValuationFrequencyUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr",
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Term = "T"
}
export declare enum UnderlyingReturnRateValuationFrequencyRollConvention {
    E1stDayOfTheMonth = "1",
    E2ndDayOfTheMonth = "2",
    E3rdDayOfTheMonth = "3",
    E4thDayOfTheMonth = "4",
    E5thDayOfTheMonth = "5",
    E6ThdDayOfTheMonth = "6",
    E7thDayOfTheMonth = "7",
    E8thDayOfTheMonth = "8",
    E9thDayOfTheMonth = "9",
    E10thDayOfTheMonth = "10",
    E11ThDayOfTheMonth = "11",
    E12ThDayOfTheMonth = "12",
    E13ThDayOfTheMonth = "13",
    E14thDayOfTheMonth = "14",
    E15thDayOfTheMonth = "15",
    E16thDayOfTheMonth = "16",
    E17thDayOfTheMonth = "17",
    E18thDayOfTheMonth = "18",
    E19thDayOfTheMonth = "19",
    E20thDayOfTheMonth = "20",
    E21stDayOfTheMonth = "21",
    E22ndDayOfTheMonth = "22",
    E23rdDayOfTheMonth = "23",
    E24thDayOfTheMonth = "24",
    E25thDayOfTheMonth = "25",
    E26thDayOfTheMonth = "26",
    E27thDayOfTheMonth = "27",
    E28thDayOfTheMonth = "28",
    E29thDayOfTheMonth = "29",
    E30thDayOfTheMonth = "30",
    TheEndOfTheMonth = "EOM",
    TheFloatingRateNoteConventionOrEurodollarConvention = "FRN",
    TheInternationalMoneyMarketSettlementDateIEThe3rdWednesdayOfTheMonth = "IMM",
    TheLastTradingDayExpirationDayOfTheCanadianDerivativesExchange = "IMMCAD",
    TheLastTradingDayOfTheSydneyFuturesExchangeAustralian90DayBankAcceptedBillFuturesContract = "IMMAUD",
    TheLastTradingDayOfTheSydneyFuturesExchangeNewZealand90DayBankBillFuturesContract = "IMMNZD",
    TheSydneyFuturesExchange90DayBankAcceptedBillFuturesSettlementDates = "SFE",
    NoAdjustment = "NONE",
    The13WeekAnd26WeekUSTreasuryBillAuctionDates = "TBILL",
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN"
}
export declare enum UnderlyingReturnRateValuationDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingReturnRateFXRateCalc {
    Multiply = "M",
    Divide = "D"
}
export declare enum UnderlyingReturnRatePriceSequence {
    Initial = 0,
    Interim = 1,
    Final = 2
}
export declare enum UnderlyingReturnRateCommissionBasis {
    AmountPerUnit = "1",
    Percent = "2",
    Absolute = "3",
    PercentageWaivedCashDiscountBasis = "4",
    PercentageWaivedEnhancedUnitsBasis = "5",
    PointsPerBondOrContract = "6",
    BasisPoints = "7",
    AmountPerContract = "8"
}
export declare enum UnderlyingReturnRateQuoteMethod {
    Bid = 0,
    Mid = 1,
    Offer = 2
}
export declare enum UnderlyingReturnRateQuoteTimeType {
    Open = 0,
    OfficialSettlementPriceTime = 1,
    Xetra = 2,
    Close = 3,
    DerivativesClose = 4,
    High = 5,
    Low = 6,
    AsSpecifiedInTheMasterConfirmation = 7
}
export declare enum UnderlyingReturnRateValuationTimeType {
    Open = 0,
    OfficialSettlementPriceTime = 1,
    Xetra = 2,
    Close = 3,
    DerivativesClose = 4,
    High = 5,
    Low = 6,
    AsSpecifiedInTheMasterConfirmation = 7
}
export declare enum UnderlyingReturnRateValuationPriceOption {
    NoneTheDefault = 0,
    FuturesPrice = 1,
    OptionsPrice = 2
}
export declare enum UnderlyingReturnRateFinalPriceFallback {
    Close = 0,
    HedgeElection = 1
}
export declare enum UnderlyingReturnRateInformationSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
    IsdaSettlementRateOption = 3,
    Other = 99
}
export declare enum UnderlyingReturnRatePriceBasis {
    Gross = 0,
    Net = 1,
    Accrued = 2,
    CleanNet = 3
}
export declare enum UnderlyingReturnRatePriceType {
    AbsoluteTerms = 0,
    PercentageOfNotional = 1
}
export declare enum UnderlyingReturnRateValuationDateType {
    Unadjusted = 0,
    Adjusted = 1
}
export declare enum UnderlyingSettlMethodElectionDateBusinessDayConvention {
    NotApplicable = 0,
    NoneCurrentDay = 1,
    FollowingDay = 2,
    FloatingRateNote = 3,
    ModifiedFollowingDay = 4,
    PrecedingDay = 5,
    ModifiedPrecedingDay = 6,
    NearestDay = 7
}
export declare enum UnderlyingSettlMethodElectionDateOffsetUnit {
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum UnderlyingSettlMethodElectionDateOffsetDayType {
    Business = 0,
    Calendar = 1,
    CommodityBusiness = 2,
    CurrencyBusiness = 3,
    ExchangeBusiness = 4,
    ScheduledTradingDay = 5
}
export declare enum UnderlyingStreamNotionalAdjustments {
    Execution = 0,
    PortfolioRebalancing = 1,
    Standard = 2
}
export declare enum BatchProcessMode {
    UpdateIncrementalDefaultIfNotSpecified = 0,
    Snapshot = 1
}
export declare enum PostTradeType {
    GiceUp = 0,
    AveragePrice = 1,
    CrossExchangeGiveUp = 2
}
export declare enum ExecutingClaimingIndicator {
    ExecutingFirm = 0,
    ClaimingFirm = 1
}
