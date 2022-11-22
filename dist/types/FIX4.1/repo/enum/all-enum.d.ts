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
    CustomerDisplayInstruction = "U",
    Netting = "V"
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
    IsoCountryCode = "7"
}
export declare enum IOIOthSvc {
    Autex = "A",
    Bridge = "B"
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
    SettlementInstructions = "T"
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
    Expired = "C"
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
    Cross = "8"
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
    Calculated = "4"
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
    UnknownOrder = 1
}
export declare enum OrdRejReason {
    BrokerCredit = 0,
    UnknownSymbol = 1,
    ExchangeClosed = 2,
    OrderExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownOrder = 5,
    DuplicateOrder = 6
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
    Markup = "8"
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
    Expired = "C"
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
    BankersAcceptance = "BA",
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
