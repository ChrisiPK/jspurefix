export declare enum AdvSide {
    Buy = "B",
    Sell = "S",
    Cross = "X",
    Trade = "T"
}
export declare enum AdvTransType {
    New = "N",
    Cancel = "C",
    Replace = "R"
}
export declare enum CommType {
    PerUnit = "1",
    Percent = "2",
    Absolute = "3",
    PercentageWaivedCashDiscount = "4",
    PercentageWaivedEnhancedUnits = "5",
    PointsPerBondOrContract = "6"
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
    TryToStop = "Y",
    MidPricePeg = "M",
    MarketPeg = "P",
    CancelOnSystemFailure = "Q",
    PrimaryPeg = "R",
    Suspend = "S",
    CustomerDisplayInstruction = "U",
    Netting = "V",
    PegToVwap = "W",
    TradeAlong = "X",
    PercentOfVolume = "D",
    NoCross = "A",
    OpeningPeg = "O",
    CallFirst = "C",
    NonNegotiable = "N",
    DoNotIncrease = "E",
    DoNotReduce = "F",
    AllOrNone = "G",
    ReinstateOnSystemFailure = "H",
    InstitutionsOnly = "I",
    ReinstateOnTradingHalt = "J",
    CancelOnTradingHalt = "K",
    LastPeg = "L",
    OkToCross = "B"
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
    ConsolidatedTapeAssociation = "9",
    Sicovam = "E",
    Belgian = "F",
    Valoren = "D",
    Dutch = "C",
    Wertpapier = "B",
    BloombergSymbol = "A",
    Common = "G"
}
export declare enum IOIQltyInd {
    Medium = "M",
    High = "H",
    Low = "L"
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
    DerivativeSecurityList = "AA",
    NewOrderMultileg = "AB",
    MultilegOrderCancelReplace = "AC",
    TradeCaptureReportRequest = "AD",
    TradeCaptureReport = "AE",
    OrderMassStatusRequest = "AF",
    QuoteRequestReject = "AG",
    RfqRequest = "AH",
    QuoteStatusReport = "AI",
    MassQuoteAcknowledgement = "b",
    News = "B",
    SecurityDefinitionRequest = "c",
    Email = "C",
    SecurityDefinition = "d",
    NewOrderSingle = "D",
    SecurityStatusRequest = "e",
    NewOrderList = "E",
    SecurityStatus = "f",
    OrderCancelRequest = "F",
    OrderCancelReplaceRequest = "G",
    TradingSessionStatusRequest = "g",
    TradingSessionStatus = "h",
    OrderStatusRequest = "H",
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
    XmlNonFix = "n",
    RegistrationInstructions = "o",
    AllocationInstructionAck = "P",
    RegistrationInstructionsResponse = "p",
    OrderMassCancelRequest = "q",
    DontKnowTrade = "Q",
    OrderMassCancelReport = "r",
    QuoteRequest = "R",
    NewOrderCross = "s",
    Quote = "S",
    CrossOrderCancelReplaceRequest = "t",
    SettlementInstructions = "T",
    CrossOrderCancelRequest = "u",
    SecurityTypeRequest = "v",
    MarketDataRequest = "V",
    SecurityTypes = "w",
    MarketDataSnapshotFullRefresh = "W",
    SecurityListRequest = "x",
    MarketDataIncrementalRefresh = "X",
    SecurityList = "y",
    MarketDataRequestReject = "Y",
    DerivativeSecurityListRequest = "z",
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
    PreviouslyQuoted = "D",
    OnClose = "A",
    ForexMarket = "C",
    ForexLimit = "F",
    PreviouslyIndicated = "E",
    ForexSwap = "G",
    Funari = "I",
    MarketIfTouched = "J",
    MarketWithLeftOverAsLimit = "K",
    PreviousFundValuationPoint = "L",
    NextFundValuationPoint = "M",
    Pegged = "P",
    LimitOnClose = "B",
    ForexPreviouslyQuoted = "H"
}
export declare enum PossDupFlag {
    OriginalTransmission = "N",
    PossibleDuplicate = "Y"
}
export declare enum Rule80A {
    AgentForOtherMember = "N",
    ShortExemptTransactionAType = "B",
    ProgramOrderMember = "D",
    ShortExemptTransactionForPrincipal = "E",
    ShortExemptTransactionWType = "F",
    ShortExemptTransactionIType = "H",
    IndividualInvestor = "I",
    ProprietaryAlgo = "J",
    AgencyAlgo = "K",
    ProgramOrderOtherMember = "M",
    AgencySingleOrder = "A",
    ProprietaryTransactionAffiliated = "O",
    Principal = "P",
    TransactionNonMember = "R",
    SpecialistTrades = "S",
    TransactionUnaffiliatedMember = "T",
    AgencyIndexArb = "U",
    AllOtherOrdersAsAgentForOtherMember = "W",
    ShortExemptTransactionMemberNotAffliated = "X",
    AgencyNonAlgo = "Y",
    ShortExemptTransactionNonMember = "Z",
    ShortExemptTransactionMemberAffliated = "L",
    ProprietaryNonAlgo = "C"
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
    CrossShort = "9",
    AsDefined = "B",
    Opposite = "C",
    CrossShortExempt = "A"
}
export declare enum TimeInForce {
    Day = "0",
    GoodTillCancel = "1",
    AtTheOpening = "2",
    ImmediateOrCancel = "3",
    FillOrKill = "4",
    GoodTillCrossing = "5",
    GoodTillDate = "6",
    AtTheClose = "7"
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
    TPlus5 = "9",
    T1 = "A"
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
    Fifo = "F",
    Rolled = "R",
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
    OrderAlreadyInPendingStatus = 3,
    UnableToProcessOrderMassCancelRequest = 4,
    OrigOrdModTime = 5,
    DuplicateClOrdId = 6
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
    StaleOrder = 8,
    TradeAlongRequired = 9,
    InvalidInvestorId = 10,
    UnsupportedOrderCharacteristic = 11,
    SurveillenceOption = 12
}
export declare enum IOIQualifier {
    AtTheOpen = "O",
    CrossingOpportunity = "X",
    Indication = "W",
    Versus = "V",
    ThroughTheDay = "T",
    PortfolioShown = "S",
    ReadyToTrade = "R",
    AllOrNone = "A",
    TakingAPosition = "P",
    MoreBehind = "M",
    Limit = "L",
    InTouchWith = "I",
    Vwap = "D",
    AtTheClose = "C",
    MarketOnClose = "B",
    AtTheMarket = "Q",
    AtTheMidpoint = "Y",
    PreOpen = "Z"
}
export declare enum ReportToExch {
    ReceiverReports = "Y",
    SenderReports = "N"
}
export declare enum LocateReqd {
    Yes = "Y",
    No = "N"
}
export declare enum ForexReq {
    ExecuteForexAfterSecurityTrade = "Y",
    DoNotExecuteForexAfterSecurityTrade = "N"
}
export declare enum GapFillFlag {
    GapFillMessage = "Y",
    SequenceReset = "N"
}
export declare enum DKReason {
    WrongSide = "B",
    QuantityExceedsOrder = "C",
    NoMatchingOrder = "D",
    PriceExceedsLimit = "E",
    Other = "Z",
    UnknownSymbol = "A"
}
export declare enum IOINaturalFlag {
    Natural = "Y",
    NotNatural = "N"
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
    Yes = "Y",
    No = "N"
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
    PendingReplace = "E",
    Trade = "F",
    TradeCorrect = "G",
    TradeCancel = "H",
    OrderStatus = "I"
}
export declare enum SettlCurrFxRateCalc {
    Divide = "D",
    Multiply = "M"
}
export declare enum SettlInstMode {
    Default = "0",
    StandingInstructionsProvided = "1",
    SpecificAllocationAccountOverriding = "2",
    SpecificAllocationAccountStanding = "3",
    SpecificOrderForASingleAccount = "4"
}
export declare enum SettlInstTransType {
    New = "N",
    Replace = "R",
    Cancel = "C"
}
export declare enum SettlInstSource {
    BrokerCredit = "1",
    Institution = "2",
    Investor = "3"
}
export declare enum SettlLocation {
    FederalBookEntry = "FED",
    LocalMarketSettleLocation = "ISO Country Code",
    Physical = "PNY",
    EuroClear = "EUR",
    DepositoryTrustCompany = "DTC",
    Cedel = "CED",
    ParticipantTrustCompany = "PTC"
}
export declare enum SecurityType {
    CommercialPaper = "CP",
    VariableRateDemandNote = "VRDN",
    PlazosFijos = "PZFJ",
    PromissoryNote = "PN",
    Overnight = "ONITE",
    MediumTermNotes = "MTN",
    TaxExemptCommercialPaper = "TECP",
    Amended = "AMENDED",
    BridgeLoan = "BRIDGE",
    LetterOfCredit = "LOFC",
    SwingLineFacility = "SWING",
    DebtorInPossession = "DINP",
    Defaulted = "DEFLTED",
    Withdrawn = "WITHDRN",
    LiquidityNote = "LQN",
    Matured = "MATURED",
    DepositNotes = "DN",
    Retired = "RETIRED",
    BankersAcceptance = "BA",
    BankNotes = "BN",
    BillOfExchanges = "BOX",
    CertificateOfDeposit = "CD",
    CallLoans = "CL",
    Replaced = "REPLACD",
    MandatoryTender = "MT",
    Revolver = "RVLVTRM",
    MortgagePrivatePlacement = "MPP",
    ShortTermLoanNote = "STN",
    MiscellaneousPassThrough = "MPT",
    ToBeAnnounced = "TBA",
    OtherAnticipationNotes = "AN",
    MortgageInterestOnly = "MIO",
    CertificateOfParticipation = "COFP",
    MortgageBackedSecurities = "MBS",
    RevenueBonds = "REV",
    SpecialAssessment = "SPCLA",
    SpecialObligation = "SPCLO",
    SpecialTax = "SPCLT",
    TaxAnticipationNote = "TAN",
    TaxAllocation = "TAXA",
    CertificateOfObligation = "COFO",
    TimeDeposit = "TD",
    GeneralObligationBonds = "GO",
    Wildcard = "?",
    Warrant = "WAR",
    MutualFund = "MF",
    MultilegInstrument = "MLEG",
    TaxRevenueAnticipationNote = "TRAN",
    MortgagePrincipalOnly = "MPO",
    RepurchaseAgreement = "RP",
    NoSecurityType = "NONE",
    ExtendedCommNote = "XCN",
    AgencyPools = "POOL",
    AssetBackedSecurities = "ABS",
    Corp = "CMBS",
    CollateralizedMortgageObligation = "CMO",
    IoetteMortgage = "IET",
    ReverseRepurchaseAgreement = "RVRP",
    ForeignExchangeContract = "FOR",
    RevenueAnticipationNote = "RAN",
    RevolverLoan = "RVLV",
    FederalAgencyCoupon = "FAC",
    FederalAgencyDiscountNote = "FADN",
    PrivateExportFunding = "PEF",
    CorporateBond = "CORP",
    CorporatePrivatePlacement = "CPP",
    ConvertibleBond = "CB",
    DualCurrency = "DUAL",
    IndexedLinked = "XLINKD",
    YankeeCorporateBond = "YANK",
    CommonStock = "CS",
    PreferredStock = "PS",
    BradyBond = "BRADY",
    UsTreasuryBond = "TBOND",
    InterestStripFromAnyBondOrNote = "TINT",
    TreasuryInflationProtectedSecurities = "TIPS",
    PrincipalStripOfACallableBondOrNote = "TCAL",
    PrincipalStripFromANonCallableBondOrNote = "TPRN",
    UsTreasuryNoteOld = "UST",
    UsTreasuryBillOld = "USTB",
    TermLoan = "TERM",
    StructuredNotes = "STRUCT"
}
export declare enum StandInstDbType {
    Other = 0,
    Dtcsid = 1,
    ThomsonAlert = 2,
    AGlobalCustodian = 3
}
export declare enum SettlDeliveryType {
    Versus = 0,
    Free = 1
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
    TradingSessionVwapPrice = "9",
    Imbalance = "A"
}
export declare enum TickDirection {
    PlusTick = "0",
    ZeroPlusTick = "1",
    MinusTick = "2",
    ZeroMinusTick = "3"
}
export declare enum QuoteCondition {
    Locked = "E",
    NonFirm = "I",
    FastTrading = "H",
    Crossed = "F",
    ConsolidatedBest = "D",
    ExchangeBest = "C",
    Closed = "B",
    Open = "A",
    Depth = "G"
}
export declare enum TradeCondition {
    NextDayTrade = "J",
    Opened = "K",
    Seller = "L",
    AveragePriceTrade = "B",
    Sold = "M",
    Rule155Trade = "H",
    StoppedStock = "N",
    ImbalanceMoreBuyers = "P",
    ImbalanceMoreSellers = "Q",
    OpeningPrice = "R",
    SoldLast = "I",
    Cash = "A",
    CashTrade = "C",
    Opening = "E",
    IntradayTradeDetail = "F",
    Rule127Trade = "G",
    NextDay = "D"
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
    UnsupportedMdEntryType = "8",
    UnsupportedTradingSessionId = "9",
    UnsupportedMdImplicitDelete = "C",
    UnsupportedOpenCloseSettleFlag = "B",
    UnsupportedScope = "A"
}
export declare enum DeleteReason {
    Cancellation = "0",
    Error = "1"
}
export declare enum OpenCloseSettleFlag {
    DailyOpen = "0",
    SessionOpen = "1",
    DeliverySettlementEntry = "2",
    ExpectedEntry = "3",
    EntryFromPreviousBusinessDay = "4"
}
export declare enum FinancialStatus {
    Bankrupt = "1",
    PendingDelisting = "2"
}
export declare enum CorporateAction {
    ExDistribution = "B",
    ExInterest = "E",
    ExRights = "C",
    ExDividend = "A",
    New = "D"
}
export declare enum QuoteAckStatus {
    Accepted = 0,
    CancelForSymbol = 1,
    CanceledForSecurityType = 2,
    CanceledForUnderlying = 3,
    CanceledAll = 4,
    Rejected = 5,
    RemovedFromMarket = 6,
    Expired = 7,
    Query = 8,
    QuoteNotFound = 9,
    Pending = 10
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
    MessageIsBeingSentUnsolicited = "Y",
    MessageIsBeingSentAsAResultOfAPriorRequest = "N"
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
    UnknownOrInvalid = 20,
    PreOpen = 21,
    OpeningRotation = 22,
    FastMarket = 23
}
export declare enum HaltReason {
    EquipmentChangeover = "X",
    AdditionalInformation = "M",
    OrderInflux = "E",
    NewsPending = "P",
    OrderImbalance = "I",
    NewsDissemination = "D"
}
export declare enum InViewOfCommon {
    HaltWasDueToCommonStockBeingHalted = "Y",
    HaltWasNotRelatedToAHaltOfTheCommonStock = "N"
}
export declare enum DueToRelated {
    RelatedToSecurityHalt = "Y",
    NotRelatedToSecurityHalt = "N"
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
    Unknown = 0,
    Halted = 1,
    Open = 2,
    Closed = 3,
    PreOpen = 4,
    PreClose = 5,
    RequestRejected = 6
}
export declare enum MessageEncoding {
    Utf8 = "UTF-8",
    Iso2022Jp = "ISO-2022-JP",
    Eucjp = "EUC-JP",
    ShiftJis = "Shift_JIS"
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
    InvalidMsgType = 11,
    XmlValidationError = 12,
    TagAppearsMoreThanOnce = 13,
    TagSpecifiedOutOfRequiredOrder = 14,
    RepeatingGroupFieldsOutOfOrder = 15,
    IncorrectNumInGroupCountForRepeatingGroup = 16,
    Non = 17
}
export declare enum BidRequestTransType {
    New = "N",
    Cancel = "C"
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
    PartialDeclineOfOrderQty = 5,
    CancelOnTradingHalt = 6,
    CancelOnSystemFailure = 7,
    Market = 8
}
export declare enum BusinessRejectReason {
    Other = 0,
    UnknownId = 1,
    UnknownSecurity = 2,
    UnsupportedMessageType = 3,
    ApplicationNotAvailable = 4,
    ConditionallyRequiredFieldMissing = 5,
    NotAuthorized = 6,
    DeliverToFirmNotAvailableAtThisTime = 7
}
export declare enum MsgDirection {
    Send = "S",
    Receive = "R"
}
export declare enum DiscretionInst {
    RelatedToDisplayedPrice = "0",
    RelatedToMarketPrice = "1",
    RelatedToPrimaryPrice = "2",
    RelatedToLocalPrimaryPrice = "3",
    RelatedToMidpointPrice = "4",
    RelatedToLastTradePrice = "5"
}
export declare enum BidType {
    NonDisclosed = 1,
    Disclosed = 2,
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
    VwapGuarantee = "G",
    Agency = "A",
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
    Open = "D",
    Others = "Z",
    Strike = "C",
    VwapThroughAnAfternoonSessionExcept = "B",
    VwapThroughAMorningSessionExcept = "A"
}
export declare enum PriceType {
    Percentage = 1,
    PerUnit = 2,
    FixedAmount = 3,
    Discount = 4,
    Premium = 5,
    Spread = 6,
    TedPrice = 7,
    TedYield = 8
}
export declare enum GTBookingInst {
    BookOutAllTradesOnDayOfExecution = 0,
    AccumulateUntilFilledOrExpired = 1,
    AccumulateUntilVerballlyNotifiedOtherwise = 2
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
    WaitForInstruction = "2",
    SellDriven = "3",
    BuyDrivenCashTopUp = "4",
    BuyDrivenCashWithdraw = "5"
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
