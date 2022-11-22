export declare enum AdvSide {
    Buy = "B",
    Sell = "S",
    Trade = "T",
    Cross = "X"
}
export declare enum AdvTransType {
    Cancel = "C",
    New = "N",
    Replace = "R"
}
export declare enum CommType {
    PerUnit = "1",
    Percent = "2",
    Absolute = "3"
}
export declare enum ExecInst {
    StayOnOfferSide = "0",
    NotHeld = "1",
    Work = "2",
    GoAlong = "3",
    OverTheDay = "4",
    Held = "5",
    ParticipateDoNotInitiate = "6",
    StrictScale = "7",
    TryToScale = "8",
    StayOnBidSide = "9",
    NoCross = "A",
    OkToCross = "B",
    CallFirst = "C",
    PercentOfVolume = "D",
    DoNotIncrease = "E",
    DoNotReduce = "F",
    AllOrNone = "G",
    InstitutionsOnly = "I",
    LastPeg = "L",
    MidPricePeg = "M",
    NonNegotiable = "N",
    OpeningPeg = "O",
    MarketPeg = "P",
    PrimaryPeg = "R",
    Suspend = "S",
    FixedPegToLocalBestBidOrOfferAtTimeOfOrder = "T",
    CustomerDisplayInstruction = "U",
    Netting = "V",
    PegToVwap = "W"
}
export declare enum ExecTransType {
    New = "0",
    Cancel = "1",
    Correct = "2",
    Status = "3"
}
export declare enum HandlInst {
    AutomatedExecutionNoIntervention = "1",
    AutomatedExecutionInterventionOk = "2",
    ManualOrder = "3"
}
export declare enum IDSource {
    Cusip = "1",
    Sedol = "2",
    Quik = "3",
    IsinNumber = "4",
    RicCode = "5",
    IsoCurrencyCode = "6",
    IsoCountryCode = "7",
    ExchangeSymbol = "8",
    ConsolidatedTapeAssociation = "9"
}
export declare enum IOIQltyInd {
    High = "H",
    Low = "L",
    Medium = "M"
}
export declare enum IOIShares {
    Large = "L",
    Medium = "M",
    Small = "S"
}
export declare enum IOITransType {
    Cancel = "C",
    New = "N",
    Replace = "R"
}
export declare enum LastCapacity {
    Agent = "1",
    CrossAsAgent = "2",
    CrossAsPrincipal = "3",
    Principal = "4"
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
    QuoteStatusRequest = "a",
    Logon = "A",
    News = "B",
    MassQuoteAcknowledgement = "b",
    Email = "C",
    SecurityDefinitionRequest = "c",
    NewOrderSingle = "D",
    SecurityDefinition = "d",
    NewOrderList = "E",
    SecurityStatusRequest = "e",
    SecurityStatus = "f",
    OrderCancelRequest = "F",
    OrderCancelReplaceRequest = "G",
    TradingSessionStatusRequest = "g",
    OrderStatusRequest = "H",
    TradingSessionStatus = "h",
    MassQuote = "i",
    BusinessMessageReject = "j",
    AllocationInstruction = "J",
    ListCancelRequest = "K",
    BidRequest = "k",
    BidResponse = "l",
    ListExecute = "L",
    ListStrikePrice = "m",
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
    QuoteCancel = "Z"
}
export declare enum OrdStatus {
    New = "0",
    PartiallyFilled = "1",
    Filled = "2",
    DoneForDay = "3",
    Canceled = "4",
    Replaced = "5",
    PendingCancel = "6",
    Stopped = "7",
    Rejected = "8",
    Suspended = "9",
    PendingNew = "A",
    Calculated = "B",
    Expired = "C",
    AcceptedForBidding = "D",
    PendingReplace = "E"
}
export declare enum OrdType {
    Market = "1",
    Limit = "2",
    Stop = "3",
    StopLimit = "4",
    MarketOnClose = "5",
    WithOrWithout = "6",
    LimitOrBetter = "7",
    LimitWithOrWithout = "8",
    OnBasis = "9",
    OnClose = "A",
    LimitOnClose = "B",
    ForexMarket = "C",
    PreviouslyQuoted = "D",
    PreviouslyIndicated = "E",
    ForexLimit = "F",
    ForexSwap = "G",
    ForexPreviouslyQuoted = "H",
    Funari = "I",
    Pegged = "P"
}
export declare enum PossDupFlag {
    OriginalTransmission = "N",
    PossibleDuplicate = "Y"
}
export declare enum Rule80A {
    AgencySingleOrder = "A",
    ShortExemptTransactionAType = "B",
    ProprietaryNonAlgo = "C",
    ProgramOrderMember = "D",
    ShortExemptTransactionForPrincipal = "E",
    ShortExemptTransactionWType = "F",
    ShortExemptTransactionIType = "H",
    IndividualInvestor = "I",
    ProprietaryAlgo = "J",
    AgencyAlgo = "K",
    ShortExemptTransactionMemberAffliated = "L",
    ProgramOrderOtherMember = "M",
    AgentForOtherMember = "N",
    ProprietaryTransactionAffiliated = "O",
    Principal = "P",
    TransactionNonMember = "R",
    SpecialistTrades = "S",
    TransactionUnaffiliatedMember = "T",
    AgencyIndexArb = "U",
    AllOtherOrdersAsAgentForOtherMember = "W",
    ShortExemptTransactionMemberNotAffliated = "X",
    AgencyNonAlgo = "Y",
    ShortExemptTransactionNonMember = "Z"
}
export declare enum Side {
    Buy = "1",
    Sell = "2",
    BuyMinus = "3",
    SellPlus = "4",
    SellShort = "5",
    SellShortExempt = "6",
    Undisclosed = "7",
    Cross = "8",
    CrossShort = "9"
}
export declare enum TimeInForce {
    Day = "0",
    GoodTillCancel = "1",
    AtTheOpening = "2",
    ImmediateOrCancel = "3",
    FillOrKill = "4",
    GoodTillCrossing = "5",
    GoodTillDate = "6"
}
export declare enum Urgency {
    Normal = "0",
    Flash = "1",
    Background = "2"
}
export declare enum SettlmntTyp {
    Regular = "0",
    Cash = "1",
    NextDay = "2",
    TPlus2 = "3",
    TPlus3 = "4",
    TPlus4 = "5",
    Future = "6",
    WhenAndIfIssued = "7",
    SellersOption = "8",
    TPlus5 = "9"
}
export declare enum AllocTransType {
    New = "0",
    Replace = "1",
    Cancel = "2",
    Preliminary = "3",
    Calculated = "4",
    CalculatedWithoutPreliminary = "5"
}
export declare enum OpenClose {
    Close = "C",
    Open = "O"
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
    Accepted = 0,
    BlockLevelReject = 1,
    AccountLevelReject = 2,
    Received = 3
}
export declare enum AllocRejCode {
    UnknownAccount = 0,
    IncorrectQuantity = 1,
    IncorrectAveragegPrice = 2,
    UnknownExecutingBrokerMnemonic = 3,
    CommissionDifference = 4,
    UnknownOrderId = 5,
    UnknownListId = 6,
    OtherSeeText = 7
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
export declare enum EncryptMethod {
    None = 0,
    Pkcs = 1,
    Des = 2,
    Pkcsdes = 3,
    Pgpdes = 4,
    Pgpdesmd5 = 5,
    Pem = 6
}
export declare enum CxlRejReason {
    TooLateToCancel = 0,
    UnknownOrder = 1,
    BrokerCredit = 2,
    OrderAlreadyInPendingStatus = 3
}
export declare enum OrdRejReason {
    BrokerCredit = 0,
    UnknownSymbol = 1,
    ExchangeClosed = 2,
    OrderExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownOrder = 5,
    DuplicateOrder = 6,
    DuplicateOfAVerballyCommunicatedOrder = 7,
    StaleOrder = 8
}
export declare enum IOIQualifier {
    AllOrNone = "A",
    AtTheClose = "C",
    InTouchWith = "I",
    Limit = "L",
    MoreBehind = "M",
    AtTheOpen = "O",
    TakingAPosition = "P",
    AtTheMarket = "Q",
    ReadyToTrade = "R",
    PortfolioShown = "S",
    ThroughTheDay = "T",
    Versus = "V",
    Indication = "W",
    CrossingOpportunity = "X",
    AtTheMidpoint = "Y",
    PreOpen = "Z"
}
export declare enum ReportToExch {
    SenderReports = "N",
    ReceiverReports = "Y"
}
export declare enum LocateReqd {
    No = "N",
    Yes = "Y"
}
export declare enum ForexReq {
    DoNotExecuteForexAfterSecurityTrade = "N",
    ExecuteForexAfterSecurityTrade = "Y"
}
export declare enum GapFillFlag {
    SequenceReset = "N",
    GapFillMessage = "Y"
}
export declare enum DKReason {
    UnknownSymbol = "A",
    WrongSide = "B",
    QuantityExceedsOrder = "C",
    NoMatchingOrder = "D",
    PriceExceedsLimit = "E",
    Other = "Z"
}
export declare enum IOINaturalFlag {
    NotNatural = "N",
    Natural = "Y"
}
export declare enum MiscFeeType {
    Regulatory = "1",
    Tax = "2",
    LocalCommission = "3",
    ExchangeFees = "4",
    Stamp = "5",
    Levy = "6",
    Other = "7",
    Markup = "8",
    ConsumptionTax = "9"
}
export declare enum ResetSeqNumFlag {
    No = "N",
    Yes = "Y"
}
export declare enum ExecType {
    New = "0",
    PartialFill = "1",
    Fill = "2",
    DoneForDay = "3",
    Canceled = "4",
    Replaced = "5",
    PendingCancel = "6",
    Stopped = "7",
    Rejected = "8",
    Suspended = "9",
    PendingNew = "A",
    Calculated = "B",
    Expired = "C",
    Restated = "D",
    PendingReplace = "E"
}
export declare enum SettlInstMode {
    Default = "0",
    StandingInstructionsProvided = "1",
    SpecificAllocationAccountOverriding = "2",
    SpecificAllocationAccountStanding = "3"
}
export declare enum SettlInstTransType {
    Cancel = "C",
    New = "N",
    Replace = "R"
}
export declare enum SettlInstSource {
    BrokerCredit = "1",
    Institution = "2"
}
export declare enum SettlLocation {
    Cedel = "CED",
    DepositoryTrustCompany = "DTC",
    EuroClear = "EUR",
    FederalBookEntry = "FED",
    LocalMarketSettleLocation = "ISO Country Code",
    Physical = "PNY",
    ParticipantTrustCompany = "PTC"
}
export declare enum SecurityType {
    Wildcard = "?",
    BankersAcceptance = "BA",
    ConvertibleBond = "CB",
    CertificateOfDeposit = "CD",
    CollateralizedMortgageObligation = "CMO",
    CorporateBond = "CORP",
    CommercialPaper = "CP",
    CorporatePrivatePlacement = "CPP",
    CommonStock = "CS",
    FederalHousingAuthority = "FHA",
    FederalHomeLoan = "FHL",
    FederalNationalMortgageAssociation = "FN",
    ForeignExchangeContract = "FOR",
    Future = "FUT",
    GovernmentNationalMortgageAssociation = "GN",
    TreasuriesAgencyDebenture = "GOVT",
    IoetteMortgage = "IET",
    MutualFund = "MF",
    MortgageInterestOnly = "MIO",
    MortgagePrincipalOnly = "MPO",
    MortgagePrivatePlacement = "MPP",
    MiscellaneousPassThrough = "MPT",
    MunicipalBond = "MUNI",
    NoSecurityType = "NONE",
    Option = "OPT",
    PreferredStock = "PS",
    RepurchaseAgreement = "RP",
    ReverseRepurchaseAgreement = "RVRP",
    StudentLoanMarketingAssociation = "SL",
    TimeDeposit = "TD",
    UsTreasuryBillOld = "USTB",
    Warrant = "WAR",
    CatsTigersAndLions = "ZOO"
}
export declare enum StandInstDbType {
    Other = 0,
    Dtcsid = 1,
    ThomsonAlert = 2,
    AGlobalCustodian = 3
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
export declare enum CustomerOrFirm {
    Customer = 0,
    Firm = 1
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
    BlockList = 4
}
export declare enum Benchmark {
    Curve = "1",
    FiveYr = "2",
    Old5 = "3",
    TenYr = "4",
    Old10 = "5",
    ThirtyYr = "6",
    Old30 = "7",
    ThreeMolibor = "8",
    SixMolibor = "9"
}
export declare enum SubscriptionRequestType {
    Snapshot = "0",
    SnapshotAndUpdates = "1",
    DisablePreviousSnapshot = "2"
}
export declare enum MDUpdateType {
    FullRefresh = 0,
    IncrementalRefresh = 1
}
export declare enum AggregatedBook {
    BookEntriesShouldNotBeAggregated = "N",
    BookEntriesToBeAggregated = "Y"
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
    TradingSessionVwapPrice = "9"
}
export declare enum TickDirection {
    PlusTick = "0",
    ZeroPlusTick = "1",
    MinusTick = "2",
    ZeroMinusTick = "3"
}
export declare enum QuoteCondition {
    Open = "A",
    Closed = "B",
    ExchangeBest = "C",
    ConsolidatedBest = "D",
    Locked = "E",
    Crossed = "F",
    Depth = "G",
    FastTrading = "H",
    NonFirm = "I"
}
export declare enum TradeCondition {
    Cash = "A",
    AveragePriceTrade = "B",
    CashTrade = "C",
    NextDay = "D",
    Opening = "E",
    IntradayTradeDetail = "F",
    Rule127Trade = "G",
    Rule155Trade = "H",
    SoldLast = "I",
    NextDayTrade = "J",
    Opened = "K",
    Seller = "L",
    Sold = "M",
    StoppedStock = "N"
}
export declare enum MDUpdateAction {
    New = "0",
    Change = "1",
    Delete = "2"
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
    UnsupportedMdEntryType = "8"
}
export declare enum DeleteReason {
    Cancellation = "0",
    Error = "1"
}
export declare enum OpenCloseSettleFlag {
    DailyOpen = "0",
    SessionOpen = "1",
    DeliverySettlementEntry = "2"
}
export declare enum FinancialStatus {
    Bankrupt = "1"
}
export declare enum CorporateAction {
    ExDividend = "A",
    ExDistribution = "B",
    ExRights = "C",
    New = "D",
    ExInterest = "E"
}
export declare enum QuoteAckStatus {
    Accepted = 0,
    CancelForSymbol = 1,
    CanceledForSecurityType = 2,
    CanceledForUnderlying = 3,
    CanceledAll = 4,
    Rejected = 5
}
export declare enum QuoteCancelType {
    CancelForOneOrMoreSecurities = 1,
    CancelForSecurityType = 2,
    CancelForUnderlyingSecurity = 3,
    CancelAllQuotes = 4
}
export declare enum QuoteRejectReason {
    UnknownSymbol = 1,
    Exchange = 2,
    QuoteRequestExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownQuote = 5,
    DuplicateQuote = 6,
    InvalidBid = 7,
    InvalidPrice = 8,
    NotAuthorizedToQuoteSecurity = 9
}
export declare enum QuoteResponseLevel {
    NoAcknowledgement = 0,
    AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
    AcknowledgeEachQuoteMessage = 2
}
export declare enum QuoteRequestType {
    Manual = 1,
    Automatic = 2
}
export declare enum SecurityRequestType {
    RequestSecurityIdentityAndSpecifications = 0,
    RequestSecurityIdentityForSpecifications = 1,
    RequestListSecurityTypes = 2,
    RequestListSecurities = 3
}
export declare enum SecurityResponseType {
    AcceptAsIs = 1,
    AcceptWithRevisions = 2,
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
    NoOpen = 4,
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
    ReadyToTrade = 17,
    NotAvailableForTrading = 18,
    NotTradedOnThisMarket = 19,
    UnknownOrInvalid = 20
}
export declare enum HaltReason {
    NewsDissemination = "D",
    OrderInflux = "E",
    OrderImbalance = "I",
    AdditionalInformation = "M",
    NewsPending = "P",
    EquipmentChangeover = "X"
}
export declare enum InViewOfCommon {
    HaltWasNotRelatedToAHaltOfTheCommonStock = "N",
    HaltWasDueToCommonStockBeingHalted = "Y"
}
export declare enum DueToRelated {
    NotRelatedToSecurityHalt = "N",
    RelatedToSecurityHalt = "Y"
}
export declare enum Adjustment {
    Cancel = 1,
    Error = 2,
    Correction = 3
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
    Halted = 1,
    Open = 2,
    Closed = 3,
    PreOpen = 4,
    PreClose = 5
}
export declare enum MessageEncoding {
    Eucjp = "EUC-JP",
    Iso2022Jp = "ISO-2022-JP",
    ShiftJis = "Shift_JIS",
    Utf8 = "UTF-8"
}
export declare enum QuoteEntryRejectReason {
    UnknownSymbol = 1,
    Exchange = 2,
    QuoteExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownQuote = 5,
    DuplicateQuote = 6,
    InvalidBidAskSpread = 7,
    InvalidPrice = 8,
    NotAuthorizedToQuoteSecurity = 9
}
export declare enum SessionRejectReason {
    InvalidTagNumber = 0,
    RequiredTagMissing = 1,
    TagNotDefinedForThisMessageType = 2,
    UndefinedTag = 3,
    TagSpecifiedWithoutAValue = 4,
    ValueIsIncorrect = 5,
    IncorrectDataFormatForValue = 6,
    DecryptionProblem = 7,
    SignatureProblem = 8,
    CompIdProblem = 9,
    SendingTimeAccuracyProblem = 10,
    InvalidMsgType = 11
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
    GtRenewal = 1,
    VerbalChange = 2,
    RepricingOfOrder = 3,
    BrokerOption = 4,
    PartialDeclineOfOrderQty = 5
}
export declare enum BusinessRejectReason {
    Other = 0,
    UnknownId = 1,
    UnknownSecurity = 2,
    UnsupportedMessageType = 3,
    ApplicationNotAvailable = 4,
    ConditionallyRequiredFieldMissing = 5
}
export declare enum MsgDirection {
    Receive = "R",
    Send = "S"
}
export declare enum DiscretionInst {
    RelatedToDisplayedPrice = "0",
    RelatedToMarketPrice = "1",
    RelatedToPrimaryPrice = "2",
    RelatedToLocalPrimaryPrice = "3",
    RelatedToMidpointPrice = "4",
    RelatedToLastTradePrice = "5"
}
export declare enum LiquidityIndType {
    FiveDayMovingAverage = 1,
    TwentyDayMovingAverage = 2,
    NormalMarketSize = 3,
    Other = 4
}
export declare enum ExchangeForPhysical {
    False = "N",
    True = "Y"
}
export declare enum ProgRptReqs {
    BuySideRequests = 1,
    SellSideSends = 2,
    RealTimeExecutionReports = 3
}
export declare enum IncTaxInd {
    Net = 1,
    Gross = 2
}
export declare enum TradeType {
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
    VwapThroughADayExcept = "9",
    VwapThroughAMorningSessionExcept = "A",
    VwapThroughAnAfternoonSessionExcept = "B",
    Strike = "C",
    Open = "D",
    Others = "Z"
}
export declare enum PriceType {
    Percentage = 1,
    PerUnit = 2,
    FixedAmount = 3
}
export declare enum GTBookingInst {
    BookOutAllTradesOnDayOfExecution = 0,
    AccumulateUntilFilledOrExpired = 1,
    AccumulateUntilVerballlyNotifiedOtherwise = 2
}
export declare enum NetGrossInd {
    Net = 1,
    Gross = 2
}
export declare enum ListExecInstType {
    Immediate = "1",
    WaitForInstruction = "2"
}
export declare enum CxlRejResponseTo {
    OrderCancelRequest = "1",
    OrderCancel = "2"
}
export declare enum MultiLegReportingType {
    SingleSecurity = "1",
    IndividualLegOfAMultiLegSecurity = "2",
    MultiLegSecurity = "3"
}
