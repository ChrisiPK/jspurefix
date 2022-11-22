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
    NoCross = "A",
    OkToCross = "B",
    CallFirst = "C",
    PercentOfVolume = "D",
    DoNotIncrease = "E",
    DoNotReduce = "F",
    AllOrNone = "G",
    ReinstateOnSystemFailure = "H",
    InstitutionsOnly = "I",
    ReinstateOnTradingHalt = "J",
    CancelOnTradingHalt = "K",
    LastPeg = "L",
    MidPricePeg = "M",
    NonNegotiable = "N",
    OpeningPeg = "O",
    MarketPeg = "P",
    CancelOnSystemFailure = "Q",
    PrimaryPeg = "R",
    Suspend = "S",
    FixedPegToLocalBestBidOrOfferAtTimeOfOrder = "T",
    CustomerDisplayInstruction = "U",
    Netting = "V",
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
    ReleaseFromSuspension = "q",
    ExecuteAsDeltaNeutral = "r",
    ExecuteAsDurationNeutral = "s",
    ExecuteAsFxNeutral = "t"
}
export declare enum HandlInst {
    AutomatedExecutionNoIntervention = "1",
    AutomatedExecutionInterventionOk = "2",
    ManualOrder = "3"
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
    ConsolidatedTapeAssociation = "9",
    BloombergSymbol = "A",
    Wertpapier = "B",
    Dutch = "C",
    Valoren = "D",
    Sicovam = "E",
    Belgian = "F",
    Common = "G",
    ClearingHouse = "H",
    IsdaFpMlSpecification = "I",
    OptionPriceReportingAuthority = "J",
    IsdaFpMlurl = "K",
    LetterOfCredit = "L",
    MarketplaceAssignedIdentifier = "M"
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
    News = "B",
    CollateralReport = "BA",
    CollateralInquiry = "BB",
    NetworkCounterpartySystemStatusRequest = "BC",
    NetworkCounterpartySystemStatusResponse = "BD",
    UserRequest = "BE",
    UserResponse = "BF",
    CollateralInquiryAck = "BG",
    ConfirmationRequest = "BH",
    TradingSessionListRequest = "BI",
    TradingSessionList = "BJ",
    SecurityListUpdateReport = "BK",
    AdjustedPositionReport = "BL",
    AllocationInstructionAlert = "BM",
    ExecutionAcknowledgement = "BN",
    ContraryIntentionReport = "BO",
    SecurityDefinitionUpdateReport = "BP",
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
    Email = "C",
    OrderMassActionRequest = "CA",
    UserNotification = "CB",
    StreamAssignmentRequest = "CC",
    StreamAssignmentReport = "CD",
    StreamAssignmentReportAck = "CE",
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
    MassQuoteAcknowledgement = "b",
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
    DerivativeSecurityListRequest = "z"
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
    MarketIfTouched = "J",
    MarketWithLeftOverAsLimit = "K",
    PreviousFundValuationPoint = "L",
    NextFundValuationPoint = "M",
    Pegged = "P",
    CounterOrderSelection = "Q"
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
    Cross = "8",
    CrossShort = "9",
    CrossShortExempt = "A",
    AsDefined = "B",
    Opposite = "C",
    Subscribe = "D",
    Redeem = "E",
    Lend = "F",
    Borrow = "G"
}
export declare enum TimeInForce {
    Day = "0",
    GoodTillCancel = "1",
    AtTheOpening = "2",
    ImmediateOrCancel = "3",
    FillOrKill = "4",
    GoodTillCrossing = "5",
    GoodTillDate = "6",
    AtTheClose = "7",
    GoodThroughCrossing = "8",
    AtCrossing = "9"
}
export declare enum Urgency {
    Normal = "0",
    Flash = "1",
    Background = "2"
}
export declare enum SettlType {
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
    BrokenDate = "B",
    FxSpotNextSettlement = "C"
}
export declare enum SymbolSfx {
    EucpWithLumpSumInterest = "CD",
    WhenIssued = "WI"
}
export declare enum AllocTransType {
    New = "0",
    Replace = "1",
    Cancel = "2",
    Preliminary = "3",
    Calculated = "4",
    CalculatedWithoutPreliminary = "5",
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
    Accepted = 0,
    BlockLevelReject = 1,
    AccountLevelReject = 2,
    Received = 3,
    Incomplete = 4,
    RejectedByIntermediary = 5,
    AllocationPending = 6,
    Reversed = 7
}
export declare enum AllocRejCode {
    UnknownAccount = 0,
    IncorrectQuantity = 1,
    IncorrectAveragegPrice = 2,
    UnknownExecutingBrokerMnemonic = 3,
    CommissionDifference = 4,
    UnknownOrderId = 5,
    UnknownListId = 6,
    OtherSeeText = 7,
    IncorrectAllocatedQuantity = 8,
    CalculationDifference = 9,
    UnknownOrStaleExecId = 10,
    MismatchedData = 11,
    UnknownClOrdId = 12,
    WarehouseRequestRejected = 13,
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
    DuplicateClOrdId = 6,
    PriceExceedsCurrentPrice = 7,
    PriceExceedsCurrentPriceBand = 8,
    InvalidPriceIncrement = 18,
    Other = 99
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
    SurveillenceOption = 12,
    IncorrectQuantity = 13,
    IncorrectAllocatedQuantity = 14,
    UnknownAccount = 15,
    PriceExceedsCurrentPriceBand = 16,
    InvalidPriceIncrement = 18,
    Other = 99
}
export declare enum IOIQualifier {
    AllOrNone = "A",
    MarketOnClose = "B",
    AtTheClose = "C",
    Vwap = "D",
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
    CalculationDifference = "F",
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
    ConsumptionTax = "9",
    PerTransaction = "10",
    Conversion = "11",
    Agent = "12",
    TransferFee = "13",
    SecurityLending = "14"
}
export declare enum ResetSeqNumFlag {
    No = "N",
    Yes = "Y"
}
export declare enum ExecType {
    New = "0",
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
    OrderStatus = "I",
    TradeInAClearingHold = "J",
    TradeHasBeenReleasedToClearing = "K",
    TriggeredOrActivatedBySystem = "L"
}
export declare enum SettlCurrFxRateCalc {
    Multiply = "M",
    Divide = "D"
}
export declare enum SettlInstMode {
    Default = "0",
    StandingInstructionsProvided = "1",
    SpecificAllocationAccountOverriding = "2",
    SpecificAllocationAccountStanding = "3",
    SpecificOrderForASingleAccount = "4",
    RequestReject = "5"
}
export declare enum SettlInstTransType {
    New = "N",
    Cancel = "C",
    Replace = "R",
    Restate = "T"
}
export declare enum SettlInstSource {
    BrokerCredit = "1",
    Institution = "2",
    Investor = "3"
}
export declare enum SecurityType {
    UsTreasuryNoteOld = "UST",
    UsTreasuryBillOld = "USTB",
    EuroSupranationalCoupons = "EUSUPRA",
    FederalAgencyCoupon = "FAC",
    FederalAgencyDiscountNote = "FADN",
    PrivateExportFunding = "PEF",
    UsdSupranationalCoupons = "SUPRA",
    CorporateBond = "CORP",
    CorporatePrivatePlacement = "CPP",
    ConvertibleBond = "CB",
    DualCurrency = "DUAL",
    EuroCorporateBond = "EUCORP",
    EuroCorporateFloatingRateNotes = "EUFRN",
    UsCorporateFloatingRateNotes = "FRN",
    IndexedLinked = "XLINKD",
    StructuredNotes = "STRUCT",
    YankeeCorporateBond = "YANK",
    ForeignExchangeContract = "FOR",
    CreditDefaultSwap = "CDS",
    Future = "FUT",
    Option = "OPT",
    OptionsOnFutures = "OOF",
    OptionsOnPhysical = "OOP",
    InterestRateSwap = "IRS",
    OptionsOnCombo = "OOC",
    CommonStock = "CS",
    PreferredStock = "PS",
    Repurchase = "REPO",
    Forward = "FORWARD",
    BuySellback = "BUYSELL",
    SecuritiesLoan = "SECLOAN",
    SecuritiesPledge = "SECPLEDGE",
    BradyBond = "BRADY",
    CanadianTreasuryNotes = "CAN",
    CanadianTreasuryBills = "CTB",
    EuroSovereigns = "EUSOV",
    CanadianProvincialBonds = "PROV",
    TreasuryBill = "TB",
    UsTreasuryBond = "TBOND",
    InterestStripFromAnyBondOrNote = "TINT",
    UsTreasuryBill = "TBILL",
    TreasuryInflationProtectedSecurities = "TIPS",
    PrincipalStripOfACallableBondOrNote = "TCAL",
    PrincipalStripFromANonCallableBondOrNote = "TPRN",
    UsTreasuryNote = "TNOTE",
    TermLoan = "TERM",
    RevolverLoan = "RVLV",
    Revolver = "RVLVTRM",
    BridgeLoan = "BRIDGE",
    LetterOfCredit = "LOFC",
    SwingLineFacility = "SWING",
    DebtorInPossession = "DINP",
    Defaulted = "DEFLTED",
    Withdrawn = "WITHDRN",
    Replaced = "REPLACD",
    Matured = "MATURED",
    Amended = "AMENDED",
    Retired = "RETIRED",
    BankersAcceptance = "BA",
    BankDepositoryNote = "BDN",
    BankNotes = "BN",
    BillOfExchanges = "BOX",
    CanadianMoneyMarkets = "CAMM",
    CertificateOfDeposit = "CD",
    CallLoans = "CL",
    CommercialPaper = "CP",
    DepositNotes = "DN",
    EuroCertificateOfDeposit = "EUCD",
    EuroCommercialPaper = "EUCP",
    LiquidityNote = "LQN",
    MediumTermNotes = "MTN",
    Overnight = "ONITE",
    PromissoryNote = "PN",
    ShortTermLoanNote = "STN",
    PlazosFijos = "PZFJ",
    SecuredLiquidityNote = "SLQN",
    TimeDeposit = "TD",
    TermLiquidityNote = "TLQN",
    ExtendedCommNote = "XCN",
    YankeeCertificateOfDeposit = "YCD",
    AssetBackedSecurities = "ABS",
    CanadianMortgageBonds = "CMB",
    Corp = "CMBS",
    CollateralizedMortgageObligation = "CMO",
    IoetteMortgage = "IET",
    MortgageBackedSecurities = "MBS",
    MortgageInterestOnly = "MIO",
    MortgagePrincipalOnly = "MPO",
    MortgagePrivatePlacement = "MPP",
    MiscellaneousPassThrough = "MPT",
    Pfandbriefe = "PFAND",
    ToBeAnnounced = "TBA",
    OtherAnticipationNotes = "AN",
    CertificateOfObligation = "COFO",
    CertificateOfParticipation = "COFP",
    GeneralObligationBonds = "GO",
    MandatoryTender = "MT",
    RevenueAnticipationNote = "RAN",
    RevenueBonds = "REV",
    SpecialAssessment = "SPCLA",
    SpecialObligation = "SPCLO",
    SpecialTax = "SPCLT",
    TaxAnticipationNote = "TAN",
    TaxAllocation = "TAXA",
    TaxExemptCommercialPaper = "TECP",
    TaxableMunicipalCp = "TMCP",
    TaxRevenueAnticipationNote = "TRAN",
    VariableRateDemandNote = "VRDN",
    Warrant = "WAR",
    MutualFund = "MF",
    MultilegInstrument = "MLEG",
    NoSecurityType = "NONE",
    Wildcard = "?",
    Cash = "CASH",
    NonDeliverableForward = "FXNDF",
    FxSpot = "FXSPOT",
    FxForward = "FXFWD",
    FxSwap = "FXSWAP"
}
export declare enum StandInstDbType {
    Other = 0,
    Dtcsid = 1,
    ThomsonAlert = 2,
    AGlobalCustodian = 3,
    AccountNet = 4
}
export declare enum SettlDeliveryType {
    Versus = 0,
    Free = 1,
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
    BlockList = 4
}
export declare enum BenchmarkCurveName {
    Eonia = "EONIA",
    Eurepo = "EUREPO",
    Euribor = "Euribor",
    FutureSwap = "FutureSWAP",
    Libid = "LIBID",
    Libor = "LIBOR",
    MuniAaa = "MuniAAA",
    Other = "OTHER",
    Pfandbriefe = "Pfandbriefe",
    Sonia = "SONIA",
    Swap = "SWAP",
    Treasury = "Treasury"
}
export declare enum StipulationType {
    AlternativeMinimumTax = "AMT",
    AutoReinvestment = "AUTOREINV",
    BankQualified = "BANKQUAL",
    BargainConditions = "BGNCON",
    CouponRange = "COUPON",
    IsoCurrencyCode = "CURRENCY",
    CustomStart = "CUSTOMDATE",
    Geographics = "GEOG",
    ValuationDiscount = "HAIRCUT",
    Insured = "INSURED",
    IssueDate = "ISSUE",
    Issuer = "ISSUER",
    IssueSizeRange = "ISSUESIZE",
    LookbackDays = "LOOKBACK",
    ExplicitLotIdentifier = "LOT",
    LotVariance = "LOTVAR",
    MaturityYearAndMonth = "MAT",
    MaturityRange = "MATURITY",
    MaximumSubstitutions = "MAXSUBS",
    MinimumDenomination = "MINDNOM",
    MinimumIncrement = "MININCR",
    MinimumQuantity = "MINQTY",
    PaymentFrequency = "PAYFREQ",
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
    TypeOfRedemption = "REDEMPTION",
    Restricted = "RESTRICTED",
    MarketSector = "SECTOR",
    SecurityTypeIncludedOrExcluded = "SECTYPE",
    Structure = "STRUCT",
    SubstitutionsFrequency = "SUBSFREQ",
    SubstitutionsLeft = "SUBSLEFT",
    FreeformText = "TEXT",
    TradeVariance = "TRDVAR",
    WeightedAverageCoupon = "WAC",
    WeightedAverageLifeCoupon = "WAL",
    WeightedAverageLoanAge = "WALA",
    WeightedAverageMaturity = "WAM",
    WholePool = "WHOLE",
    YieldRange = "YIELD",
    AverageFicoScore = "AVFICO",
    AverageLoanSize = "AVSIZE",
    MaximumLoanBalance = "MAXBAL",
    PoolIdentifier = "POOL",
    TypeOfRollTrade = "ROLLTYPE",
    ReferenceToRollingOrClosingTrade = "REFTRADE",
    PrincipalOfRollingOrClosingTrade = "REFPRIN",
    InterestOfRollingOrClosingTrade = "REFINT",
    AvailableOfferQuantityToBeShownToTheStreet = "AVAILQTY",
    BrokerCredit = "BROKERCREDIT",
    OfferPriceToBeShownToInternalBrokers = "INTERNALPX",
    OfferQuantityToBeShownToInternalBrokers = "INTERNALQTY",
    TheMinimumResidualOfferQuantity = "LEAVEQTY",
    MaximumOrderSize = "MAXORDQTY",
    OrderQuantityIncrement = "ORDRINCR",
    PrimaryOrSecondaryMarketIndicator = "PRIMARY",
    BrokerSalesCreditOverride = "SALESCREDITOVR",
    TraderCredit = "TRADERCREDIT",
    DiscountRate = "DISCOUNT",
    YieldToMaturity = "YTM",
    AbsolutePrepaymentSpeed = "ABS",
    ConstantPrepaymentPenalty = "CPP",
    ConstantPrepaymentRate = "CPR",
    ConstantPrepaymentYield = "CPY",
    FinalCprOfHomeEquityPrepaymentCurve = "HEP",
    PercentOfManufacturedHousingPrepaymentCurve = "MHP",
    MonthlyPrepaymentRate = "MPR",
    PercentOfProspectusPrepaymentCurve = "PPC",
    PercentOfBmaPrepaymentCurve = "PSA",
    SingleMonthlyMortality = "SMM"
}
export declare enum YieldType {
    AfterTaxYield = "AFTERTAX",
    AnnualYield = "ANNUAL",
    YieldAtIssue = "ATISSUE",
    YieldToAverageMaturity = "AVGMATURITY",
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
    YieldToNextRefund = "NEXTREFUND",
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
    YieldValueOf32Nds = "VALUE1_32",
    YieldToWorst = "WORST"
}
export declare enum TradedFlatSwitch {
    NotTradedFlat = "N",
    TradedFlat = "Y"
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
    SwapValueFactor = "S",
    DailyValueAdjustmentForLongPositions = "R",
    CumulativeValueAdjustmentForLongPositions = "T",
    DailyValueAdjustmentForShortPositions = "U",
    CumulativeValueAdjustmentForShortPositions = "V",
    RecoveryRate = "Y",
    RecoveryRateForLong = "Z",
    RecoveryRateForShort = "a",
    FixingPrice = "W",
    CashRate = "X"
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
    Open = "A",
    Closed = "B",
    ExchangeBest = "C",
    ConsolidatedBest = "D",
    Locked = "E",
    Crossed = "F",
    Depth = "G",
    FastTrading = "H",
    NonFirm = "I",
    Manual = "L",
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
    NoOpen = "b",
    RegularEth = "c",
    AutomaticExecution = "d",
    AutomaticExecutionEth = "e",
    FastMarketEth = "f",
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
    MultAssetClassMultilegTrade = "3",
    MultilegToMultilegTrade = "4",
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
    StoppedStock = "N",
    ImbalanceMoreBuyers = "P",
    ImbalanceMoreSellers = "Q",
    OpeningPrice = "R",
    BargainCondition = "S",
    ConvertedPriceIndicator = "T",
    ExchangeLast = "U",
    FinalPriceOfSession = "V",
    ExPit = "W",
    Crossed = "X",
    TradesResultingFromManual = "Y",
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
    OfficalClosingPrice = "AN",
    CrossedOld = "AO",
    FastMarket = "AP",
    AutomaticExecution = "AQ",
    FormT = "AR",
    BasketIndex = "AS",
    BurstBasket = "AT",
    OutsideSpread = "AV"
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
    Cancellation = "0",
    Error = "1"
}
export declare enum OpenCloseSettlFlag {
    DailyOpen = "0",
    SessionOpen = "1",
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
    Cusip = "U",
    LeapRollover = "V",
    SuccessionEvent = "W"
}
export declare enum QuoteStatus {
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
    Pending = 10,
    Pass = 11,
    LockedMarketWarning = 12,
    CrossMarketWarning = 13,
    CanceledDueToLockMarket = 14,
    CanceledDueToCrossMarket = 15,
    Active = 16,
    Canceled = 17,
    UnsolicitedQuoteReplenishment = 18,
    PendingEndTrade = 19,
    TooLateToEnd = 20
}
export declare enum QuoteCancelType {
    CancelForOneOrMoreSecurities = 1,
    CancelForSecurityType = 2,
    CancelForUnderlyingSecurity = 3,
    CancelAllQuotes = 4,
    CancelQuoteSpecifiedInQuoteId = 5,
    CancelByQuoteType = 6,
    CancelForSecurityIssuer = 7,
    CancelForIssuerOfUnderlyingSecurity = 8
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
    NotAuthorizedToQuoteSecurity = 9,
    PriceExceedsCurrentPriceBand = 10,
    QuoteLocked = 11,
    InvalidOrUnknownSecurityIssuer = 12,
    InvalidOrUnknownIssuerOfUnderlyingSecurity = 13,
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
    Automatic = 2
}
export declare enum SecurityRequestType {
    RequestSecurityIdentityAndSpecifications = 0,
    RequestSecurityIdentityForSpecifications = 1,
    RequestListSecurityTypes = 2,
    RequestListSecurities = 3,
    Symbol = 4,
    SecurityTypeAndOrCfiCode = 5,
    Product = 6,
    TradingSessionId = 7,
    AllSecurities = 8,
    MarketIdOrMarketId = 9
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
    UnknownOrInvalid = 20,
    PreOpen = 21,
    OpeningRotation = 22,
    FastMarket = 23,
    PreCross = 24,
    Cross = 25,
    PostClose = 26
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
    NotRelatedToSecurityHalt = "N",
    RelatedToSecurityHalt = "Y"
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
    AfterHours = "6"
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
    Non = 17,
    Invalid = 18,
    Other = 99
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
    PartialDeclineOfOrderQty = 5,
    CancelOnTradingHalt = 6,
    CancelOnSystemFailure = 7,
    Market = 8,
    Canceled = 9,
    WarehouseRecap = 10,
    PegRefresh = 11,
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
    InvalidPriceIncrement = 18
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
    RelatedToLastTradePrice = "5",
    RelatedToVwap = "6",
    AveragePriceGuarantee = "7"
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
    FixedAmount = 3,
    Discount = 4,
    Premium = 5,
    Spread = 6,
    TedPrice = 7,
    TedYield = 8,
    Yield = 9,
    FixedCabinetTradePrice = 10,
    VariableCabinetTradePrice = 11,
    ProductTicksInHalfs = 13,
    ProductTicksInFourths = 14,
    ProductTicksInEights = 15,
    ProductTicksInSixteenths = 16,
    ProductTicksInThirtySeconds = 17,
    ProductTicksInSixtyForths = 18,
    ProductTicksInOneTwentyEights = 19
}
export declare enum GTBookingInst {
    BookOutAllTradesOnDayOfExecution = 0,
    AccumulateUntilFilledOrExpired = 1,
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
export declare enum PartyIDSource {
    KoreanInvestorId = "1",
    TaiwaneseForeignInvestorId = "2",
    TaiwaneseTradingAcct = "3",
    MalaysianCentralDepository = "4",
    ChineseInvestorId = "5",
    UkNationalInsuranceOrPensionNumber = "6",
    UsSocialSecurityNumber = "7",
    UsEmployerOrTaxIdNumber = "8",
    AustralianBusinessNumber = "9",
    AustralianTaxFileNumber = "A",
    IsitcAcronym = "I",
    Bic = "B",
    GeneralIdentifier = "C",
    Proprietary = "D",
    IsoCountryCode = "E",
    SettlementEntityLocation = "F",
    Mic = "G",
    CsdParticipant = "H"
}
export declare enum PartyRole {
    ExecutingFirm = 1,
    BrokerOfCredit = 2,
    ClientId = 3,
    ClearingFirm = 4,
    InvestorId = 5,
    IntroducingFirm = 6,
    EnteringFirm = 7,
    Locate = 8,
    FundManagerClientId = 9,
    SettlementLocation = 10,
    OrderOriginationTrader = 11,
    ExecutingTrader = 12,
    OrderOriginationFirm = 13,
    GiveupClearingFirm = 14,
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
    Buyer = 27,
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
    SystematicInternaliser = 63,
    MultilateralTradingFacility = 64,
    RegulatedMarket = 65,
    MarketMaker = 66,
    InvestmentFirm = 67,
    HostCompetentAuthority = 68,
    HomeCompetentAuthority = 69,
    CompetentAuthorityLiquidity = 70,
    CompetentAuthorityTransactionVenue = 71,
    ReportingIntermediary = 72,
    ExecutionVenue = 73,
    MarketDataEntryOriginator = 74,
    LocationId = 75,
    DeskId = 76,
    MarketDataMarket = 77,
    AllocationEntity = 78,
    PrimeBroker = 79,
    StepOutFirm = 80,
    BrokerClearingId = 81,
    CentralRegistrationDepository = 82,
    ClearingAccount = 83,
    AcceptableSettlingCounterparty = 84,
    UnacceptableSettlingCounterparty = 85
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
export declare enum TestMessageIndicator {
    Fales = "N",
    True = "Y"
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
    DirectCredit = 8,
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
    ExemptBelowLimit = "1",
    ExemptMoneyType = "2",
    ExemptAuthorised = "3",
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
    DirectDebit = 9,
    DirectCredit = 10,
    CreditCard = 11,
    AchDebit = 12,
    AchCredit = 13,
    Bpay = 14,
    HighValueClearingSystem = 15
}
export declare enum TaxAdvantageType {
    None = 0,
    MaxiIsa = 1,
    Tessa = 2,
    MiniCashIsa = 3,
    MiniStocksAndSharesIsa = 4,
    MiniInsuranceIsa = 5,
    CurrentYearPayment = 6,
    PriorYearPayment = 7,
    AssetTransfer = 8,
    EmployeePriorYear = 9,
    EmployeeCurrentYear = 10,
    EmployerPriorYear = 11,
    EmployerCurrentYear = 12,
    NonFundPrototypeIra = 13,
    NonFundQualifiedPlan = 14,
    DefinedContributionPlan = 15,
    Ira = 16,
    IraRollover = 17,
    Keogh = 18,
    ProfitSharingPlan = 19,
    Us401K = 20,
    SelfDirectedIra = 21,
    Us403B = 22,
    Us457 = 23,
    RothIraPrototype = 24,
    RothIraNonPrototype = 25,
    RothConversionIraPrototype = 26,
    RothConversionIraNonPrototype = 27,
    EducationIraPrototype = 28,
    EducationIraNonPrototype = 29,
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
    Reminder = "N"
}
export declare enum RegistRejReasonCode {
    InvalidAccountType = 1,
    InvalidTaxExemptType = 2,
    InvalidOwnershipType = 3,
    NoRegDetails = 4,
    InvalidRegSeqNo = 5,
    InvalidRegDetails = 6,
    InvalidMailingDetails = 7,
    InvalidMailingInstructions = 8,
    InvalidInvestorId = 9,
    InvalidInvestorIdSource = 10,
    InvalidDateOfBirth = 11,
    InvalidCountry = 12,
    InvalidDistribInstns = 13,
    InvalidPercentage = 14,
    InvalidPaymentMethod = 15,
    InvalidAccountName = 16,
    InvalidAgentCode = 17,
    InvalidAccountNum = 18,
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
    CommissionAmount = 1,
    CommissionPercent = 2,
    InitialChargeAmount = 3,
    InitialChargePercent = 4,
    DiscountAmount = 5,
    DiscountPercent = 6,
    DilutionLevyAmount = 7,
    DilutionLevyPercent = 8,
    ExitChargeAmount = 9,
    ExitChargePercent = 10,
    FundBasedRenewalCommissionPercent = 11,
    ProjectedFundValue = 12,
    FundBasedRenewalCommissionOnOrder = 13,
    FundBasedRenewalCommissionOnFund = 14,
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
    Nominee = 13
}
export declare enum OrderCapacity {
    Agency = "A",
    Proprietary = "G",
    Individual = "I",
    Principal = "P",
    RisklessPrincipal = "R",
    AgentForOtherMember = "W"
}
export declare enum OrderRestrictions {
    ProgramTrade = "1",
    IndexArbitrage = "2",
    NonIndexArbitrage = "3",
    CompetingMarketMaker = "4",
    ActingAsMarketMakerOrSpecialistInSecurity = "5",
    ActingAsMarketMakerOrSpecialistInUnderlying = "6",
    ForeignEntity = "7",
    ExternalMarketParticipant = "8",
    ExternalInterConnectedMarketLinkage = "9",
    RisklessArbitrage = "A",
    IssuerHolding = "B",
    IssuePriceStabilization = "C",
    NonAlgorithmic = "D",
    Algorithmic = "E",
    Cross = "F"
}
export declare enum MassCancelRequestType {
    CancelOrdersForASecurity = "1",
    CancelOrdersForAnUnderlyingSecurity = "2",
    CancelOrdersForAProduct = "3",
    CancelOrdersForAcfiCode = "4",
    CancelOrdersForASecurityType = "5",
    CancelOrdersForATradingSession = "6",
    CancelAllOrders = "7",
    CancelOrdersForAMarket = "8",
    CancelOrdersForAMarketSegment = "9",
    CancelOrdersForASecurityGroup = "A",
    CancelOrdersForSecurityIssuer = "B",
    CancelForIssuerOfUnderlyingSecurity = "C"
}
export declare enum MassCancelResponse {
    CancelRequestRejected = "0",
    CancelOrdersForASecurity = "1",
    CancelOrdersForAnUnderlyingSecurity = "2",
    CancelOrdersForAProduct = "3",
    CancelOrdersForAcfiCode = "4",
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
    Counter = 3
}
export declare enum CashMargin {
    Cash = "1",
    MarginOpen = "2",
    MarginClose = "3"
}
export declare enum Scope {
    LocalMarket = "1",
    National = "2",
    Global = "3"
}
export declare enum MDImplicitDelete {
    No = "N",
    Yes = "Y"
}
export declare enum CrossType {
    CrossAon = 1,
    CrossIoc = 2,
    CrossOneSide = 3,
    CrossSamePrice = 4
}
export declare enum CrossPrioritization {
    None = 0,
    BuySideIsPrioritized = 1,
    SellSideIsPrioritized = 2
}
export declare enum NoSides {
    OneSide = 1,
    BothSides = 2
}
export declare enum SecurityListRequestType {
    Symbol = 0,
    SecurityTypeAnd = 1,
    Product = 2,
    TradingSessionId = 3,
    AllSecurities = 4,
    MarketIdOrMarketId = 5
}
export declare enum SecurityRequestResult {
    ValidRequest = 0,
    InvalidOrUnsupportedRequest = 1,
    NoInstrumentsFound = 2,
    NotAuthorizedToRetrieveInstrumentData = 3,
    InstrumentDataTemporarilyUnavailable = 4,
    RequestForInstrumentDataNotSupported = 5
}
export declare enum MultiLegRptTypeReq {
    ReportByMulitlegSecurityOnly = 0,
    ReportByMultilegSecurityAndInstrumentLegs = 1,
    ReportByInstrumentLegsOnly = 2
}
export declare enum TradSesStatusRejReason {
    UnknownOrInvalidTradingSessionId = 1,
    Other = 99
}
export declare enum TradeRequestType {
    AllTrades = 0,
    MatchedTradesMatchingCriteria = 1,
    UnmatchedTradesThatMatchCriteria = 2,
    UnreportedTradesThatMatchCriteria = 3,
    AdvisoriesThatMatchCriteria = 4
}
export declare enum PreviouslyReported {
    NotReportedToCounterparty = "N",
    PerviouslyReportedToCounterparty = "Y"
}
export declare enum MatchStatus {
    Compared = "0",
    Uncompared = "1",
    AdvisoryOrAlert = "2"
}
export declare enum MatchType {
    OnePartyTradeReport = "1",
    TwoPartyTradeReport = "2",
    ConfirmedTradeReport = "3",
    AutoMatch = "4",
    CrossAuction = "5",
    CounterOrderSelection = "6",
    CallAuction = "7",
    Issuing = "8",
    ActAcceptedTrade = "M3",
    ActDefaultTrade = "M4",
    ActDefaultAfterM2 = "M5",
    Actm6Match = "M6",
    ExactMatchPlus4BadgesExecTime = "A1",
    ExactMatchPlus4Badges = "A2",
    ExactMatchPlus2BadgesExecTime = "A3",
    ExactMatchPlus2Badges = "A4",
    ExactMatchPlusExecTime = "A5",
    StampedAdvisoriesOrSpecialistAccepts = "AQ",
    A1ExactMatchSummarizedQuantity = "S1",
    A2ExactMatchSummarizedQuantity = "S2",
    A3ExactMatchSummarizedQuantity = "S3",
    A4ExactMatchSummarizedQuantity = "S4",
    A5ExactMatchSummarizedQuantity = "S5",
    ExactMatchMinusBadgesTimes = "M1",
    SummarizedMatchMinusBadgesTimes = "M2",
    OcsLockedIn = "MT"
}
export declare enum OddLot {
    TreatAsRoundLot = "N",
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
    ManualMode = 8,
    AutomaticPostingMode = 9,
    AutomaticGiveUpMode = 10,
    QualifiedServiceRepresentativeQsr = 11,
    CustomerTrade = 12,
    SelfClearing = 13
}
export declare enum AccountType {
    CarriedCustomerSide = 1,
    CarriedNonCustomerSide = 2,
    HouseTrader = 3,
    FloorTrader = 4,
    CarriedNonCustomerSideCrossMargined = 6,
    HouseTraderCrossMargined = 7,
    JointBackOfficeAccount = 8
}
export declare enum CustOrderCapacity {
    MemberTradingForTheirOwnAccount = 1,
    ClearingFirmTradingForItsProprietaryAccount = 2,
    MemberTradingForAnotherMember = 3,
    AllOther = 4
}
export declare enum MassStatusReqType {
    StatusForOrdersForASecurity = 1,
    StatusForOrdersForAnUnderlyingSecurity = 2,
    StatusForOrdersForAProduct = 3,
    StatusForOrdersForAcfiCode = 4,
    StatusForOrdersForASecurityType = 5,
    StatusForOrdersForATradingSession = 6,
    StatusForAllOrders = 7,
    StatusForOrdersForAPartyId = 8,
    StatusForSecurityIssuer = 9,
    StatusForIssuerOfUnderlyingSecurity = 10
}
export declare enum DayBookingInst {
    Auto = "0",
    SpeakWithOrderInitiatorBeforeBooking = "1",
    Accumulate = "2"
}
export declare enum BookingUnit {
    EachPartialExecutionIsABookableUnit = "0",
    AggregatePartialExecutionsOnThisOrder = "1",
    AggregateExecutionsForThisSymbol = "2"
}
export declare enum PreallocMethod {
    ProRata = "0",
    DoNotProRata = "1"
}
export declare enum TradingSessionSubID {
    PreTrading = "1",
    OpeningOrOpeningAuction = "2",
    Continuous = "3",
    ClosingOrClosingAuction = "4",
    PostTrading = "5",
    IntradayAuction = "6",
    Quiescent = "7"
}
export declare enum AllocType {
    Calculated = 1,
    Preliminary = 2,
    SellsideCalculatedUsingPreliminary = 3,
    SellsideCalculatedWithoutPreliminary = 4,
    ReadyToBook = 5,
    BuysideReadyToBook = 6,
    WarehouseInstruction = 7,
    RequestToIntermediary = 8,
    Accept = 9,
    Reject = 10,
    AcceptPending = 11,
    IncompleteGroup = 12,
    CompleteGroup = 13,
    ReversalPending = 14
}
export declare enum ClearingFeeIndicator {
    FirstYearDelegate = "1",
    SecondYearDelegate = "2",
    ThirdYearDelegate = "3",
    FourthYearDelegate = "4",
    FifthYearDelegate = "5",
    SixthYearDelegate = "9",
    CboeMember = "B",
    NonMemberAndCustomer = "C",
    EquityMemberAndClearingMember = "E",
    FullAndAssociateMember = "F",
    Firms106HAnd106J = "H",
    Gim = "I",
    Lessee106FEmployees = "L",
    AllOtherOwnershipTypes = "M"
}
export declare enum WorkingIndicator {
    NotWorking = "N",
    Working = "Y"
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
    UnknownSymbol = 1,
    Exchange = 2,
    QuoteRequestExceedsLimit = 3,
    TooLateToEnter = 4,
    InvalidPrice = 5,
    NotAuthorizedToRequestQuote = 6,
    NoMatchForInquiry = 7,
    NoMarketForInstrument = 8,
    NoInventory = 9,
    Pass = 10,
    InsufficientCredit = 11,
    Other = 99
}
export declare enum AcctIDSource {
    Bic = 1,
    SidCode = 2,
    Tfm = 3,
    Omgeo = 4,
    DtccCode = 5,
    Other = 99
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
    BookEntry = 1,
    Bearer = 2
}
export declare enum LegSwapType {
    ParForPar = 1,
    ModifiedDuration = 2,
    Risk = 4,
    Proceeds = 5
}
export declare enum QuotePriceType {
    Percent = 1,
    PerShare = 2,
    FixedAmount = 3,
    Discount = 4,
    Premium = 5,
    Spread = 6,
    TedPrice = 7,
    TedYield = 8,
    YieldSpread = 9,
    Yield = 10
}
export declare enum QuoteRespType {
    Hit = 1,
    Counter = 2,
    Expired = 3,
    Cover = 4,
    DoneAway = 5,
    Pass = 6,
    EndTrade = 7,
    TimedOut = 8
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
    PrivatelyNegotiatedTradeQty = "PNTN",
    NetDeltaQty = "DLT",
    CreditEventAdjustment = "CEA",
    SuccessionEventAdjustment = "SEA"
}
export declare enum PosQtyStatus {
    Submitted = 0,
    Accepted = 1,
    Rejected = 2
}
export declare enum PosAmtType {
    CashAmount = "CASH",
    CashResidualAmount = "CRES",
    FinalMarkToMarketAmount = "FMTM",
    IncrementalMarkToMarketAmount = "IMTM",
    PremiumAmount = "PREM",
    StartOfDayMarkToMarketAmount = "SMTM",
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
    TotalCollateralizedAmount = "COLAT"
}
export declare enum PosTransType {
    Exercise = 1,
    DoNotExercise = 2,
    PositionAdjustment = 3,
    PositionChangeSubmission = 4,
    Pledge = 5,
    LargeTraderSubmission = 6
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
    Final = 3
}
export declare enum PosMaintStatus {
    Accepted = 0,
    AcceptedWithWarnings = 1,
    Rejected = 2,
    Completed = 3,
    CompletedWithWarnings = 4
}
export declare enum PosMaintResult {
    SuccessfulCompletion = 0,
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
    DeltaPositions = 6
}
export declare enum ResponseTransportType {
    Inband = 0,
    OutOfBand = 1
}
export declare enum PosReqResult {
    ValidRequest = 0,
    InvalidOrUnsupportedRequest = 1,
    NoPositionsFoundThatMatchCriteria = 2,
    NotAuthorizedToRequestPositions = 3,
    RequestForPositionNotSupported = 4,
    Other = 99
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
export declare enum AssignmentMethod {
    ProRata = "P",
    Random = "R"
}
export declare enum ExerciseMethod {
    Automatic = "A",
    Manual = "M"
}
export declare enum TradeRequestResult {
    Successful = 0,
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
    Successful = 0,
    InvalidPartyOnformation = 1,
    UnknownInstrument = 2,
    UnauthorizedToReportTrades = 3,
    InvalidTradeType = 4,
    Other = 99
}
export declare enum SideMultiLegReportingType {
    SingleSecurity = 1,
    IndividualLegOfAMultilegSecurity = 2,
    MultilegSecurity = 3
}
export declare enum TrdRegTimestampType {
    ExecutionTime = 1,
    TimeIn = 2,
    TimeOut = 3,
    BrokerReceipt = 4,
    BrokerExecution = 5,
    DeskReceipt = 6,
    SubmissionToClearing = 7
}
export declare enum ConfirmType {
    Status = 1,
    Confirmation = 2,
    ConfirmationRequestRejected = 3
}
export declare enum ConfirmRejReason {
    MismatchedAccount = 1,
    MissingSettlementInstructions = 2,
    Other = 99
}
export declare enum BookingType {
    RegularBooking = 0,
    Cfd = 1,
    TotalReturnSwap = 2
}
export declare enum AllocSettlInstType {
    UseDefaultInstructions = 0,
    DeriveFromParametersProvided = 1,
    FullDetailsProvided = 2,
    SsidbiDsProvided = 3,
    PhoneForInstructions = 4
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
    SellsideCalculatedUsingPreliminary = 3,
    SellsideCalculatedWithoutPreliminary = 4,
    WarehouseRecap = 5,
    RequestToIntermediary = 8,
    Accept = 9,
    Reject = 10,
    AcceptPending = 11,
    Complete = 12,
    ReversePending = 14
}
export declare enum AllocCancReplaceReason {
    OriginalDetailsIncomplete = 1,
    ChangeInUnderlyingOrderDetails = 2,
    Other = 99
}
export declare enum AllocAccountType {
    CarriedCustomerSide = 1,
    CarriedNonCustomerSide = 2,
    HouseTrader = 3,
    FloorTrader = 4,
    CarriedNonCustomerSideCrossMargined = 6,
    HouseTraderCrossMargined = 7,
    JointBackOfficeAccount = 8
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
    SecuritiesAccountNumber = 10,
    RegistrationNumber = 11,
    RegisteredAddressForConfirmation = 12,
    RegulatoryStatus = 13,
    RegistrationName = 14,
    CashAccountNumber = 15,
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
    CurrencyDeliveryIdentifier = 33
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
    Trade = 1,
    LastTrade = 2
}
export declare enum TradeAllocIndicator {
    AllocationNotRequired = 0,
    AllocationRequired = 1,
    UseAllocationProvidedWithTheTrade = 2,
    AllocationGiveUpExecutor = 3,
    AllocationFromExecutor = 4,
    AllocationToClaimAccount = 5
}
export declare enum ExpirationCycle {
    ExpireOnTradingSessionClose = 0,
    ExpireOnTradingSessionOpen = 1,
    SpecifiedExpiration = 2
}
export declare enum TrdType {
    RegularTrade = 0,
    BlockTrade = 1,
    Efp = 2,
    Transfer = 3,
    LateTrade = 4,
    TTrade = 5,
    WeightedAveragePriceTrade = 6,
    BunchedTrade = 7,
    LateBunchedTrade = 8,
    PriorReferencePriceTrade = 9,
    AfterHoursTrade = 10,
    ExchangeForRisk = 11,
    ExchangeForSwap = 12,
    ExchangeOfFuturesFor = 13,
    ExchangeOfOptionsForOptions = 14,
    TradingAtSettlement = 15,
    AllOrNone = 16,
    FuturesLargeOrderExecution = 17,
    ExchangeOfFuturesForFutures = 18,
    OptionInterimTrade = 19,
    OptionCabinetTrade = 20,
    PrivatelyNegotiatedTrades = 22,
    SubstitutionOfFuturesForForwards = 23,
    ErrorTrade = 24,
    SpecialCumDividend = 25,
    SpecialExDividend = 26,
    SpecialCumCoupon = 27,
    SpecialExCoupon = 28,
    CashSettlement = 29,
    SpecialPrice = 30,
    GuaranteedDelivery = 31,
    SpecialCumRights = 32,
    SpecialExRights = 33,
    SpecialCumCapitalRepayments = 34,
    SpecialExCapitalRepayments = 35,
    SpecialCumBonus = 36,
    SpecialExBonus = 37,
    LargeTrade = 38,
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
    ExchangeBasisFacility = 55
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
    Ai = 14,
    B = 15,
    K = 16,
    Lc = 17,
    M = 18,
    N = 19,
    Nm = 20,
    Nr = 21,
    P = 22,
    Pa = 23,
    Pc = 24,
    Pn = 25,
    R = 26,
    Ro = 27,
    Rt = 28,
    Sw = 29,
    T = 30,
    Wn = 31,
    Wt = 32,
    OffHoursTrade = 33,
    OnHoursTrade = 34,
    OtcQuote = 35,
    ConvertedSwap = 36,
    CrossedTrade = 37,
    InterimProtectedTrade = 38,
    LargeInScale = 39
}
export declare enum PegMoveType {
    Floating = 0,
    Fixed = 1
}
export declare enum PegOffsetType {
    Price = 0,
    BasisPoints = 1,
    Ticks = 2,
    PriceTier = 3
}
export declare enum PegLimitType {
    OrBetter = 0,
    Strict = 1,
    OrWorse = 2
}
export declare enum PegRoundDirection {
    MoreAggressive = 1,
    MorePassive = 2
}
export declare enum PegScope {
    Local = 1,
    National = 2,
    Global = 3,
    NationalExcludingLocal = 4
}
export declare enum DiscretionMoveType {
    Floating = 0,
    Fixed = 1
}
export declare enum DiscretionOffsetType {
    Price = 0,
    BasisPoints = 1,
    Ticks = 2,
    PriceTier = 3
}
export declare enum DiscretionLimitType {
    OrBetter = 0,
    Strict = 1,
    OrWorse = 2
}
export declare enum DiscretionRoundDirection {
    MoreAggressive = 1,
    MorePassive = 2
}
export declare enum DiscretionScope {
    Local = 1,
    National = 2,
    Global = 3,
    NationalExcludingLocal = 4
}
export declare enum TargetStrategy {
    Vwap = 1,
    Participate = 2,
    MininizeMarketImpact = 3
}
export declare enum LastLiquidityInd {
    AddedLiquidity = 1,
    RemovedLiquidity = 2,
    LiquidityRoutedOut = 3,
    Auction = 4
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
    QualifiedServiceRepresentative = 4,
    QsrOrAguContraSideSoldShortExempt = 5
}
export declare enum QtyType {
    Units = 0,
    Contracts = 1,
    UnitsOfMeasurePerTimeUnit = 2
}
export declare enum TradeReportType {
    Submit = 0,
    Alleged = 1,
    Accept = 2,
    Decline = 3,
    Addendum = 4,
    No = 5,
    TradeReportCancel = 6,
    LockedIn = 7,
    Defaulted = 8,
    InvalidCmta = 9,
    Pended = 10,
    AllegedNew = 11,
    AllegedAddendum = 12,
    AllegedNo = 13,
    AllegedTradeReportCancel = 14,
    AllegedTradeBreak = 15
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
    Inactiviation = 6,
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
    Other = 99
}
export declare enum InstrAttribType {
    Flat = 1,
    ZeroCoupon = 2,
    InterestBearing = 3,
    NoPeriodicPayments = 4,
    VariableRate = 5,
    LessFeeForPut = 6,
    SteppedCoupon = 7,
    CouponPeriod = 8,
    When = 9,
    OriginalIssueDiscount = 10,
    Callable = 11,
    EscrowedToMaturity = 12,
    EscrowedToRedemptionDate = 13,
    PreRefunded = 14,
    InDefault = 15,
    Unrated = 16,
    Taxable = 17,
    Indexed = 18,
    SubjectToAlternativeMinimumTax = 19,
    OriginalIssueDiscountPrice = 20,
    CallableBelowMaturityValue = 21,
    CallableWithoutNotice = 22,
    PriceTickRulesForSecurity = 23,
    TradeTypeEligibilityDetailsForSecurity = 24,
    InstrumentDenominator = 25,
    InstrumentNumerator = 26,
    InstrumentPricePrecision = 27,
    InstrumentStrikePrice = 28,
    TradeableIndicator = 29,
    Text = 99
}
export declare enum CPProgram {
    Program3A3 = 1,
    Program42 = 2,
    Other = 99
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
    AdverseTaxEvent = 7
}
export declare enum CollInquiryQualifier {
    TradeDate = 0,
    GcInstrument = 1,
    CollateralInstrument = 2,
    SubstitutionEligible = 3,
    NotAssigned = 4,
    PartiallyAssigned = 5,
    FullyAssigned = 6,
    OutstandingTrades = 7
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
    Rejected = 3
}
export declare enum CollAsgnRejectReason {
    UnknownDeal = 0,
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
    Assigned = 3,
    Challenged = 4
}
export declare enum LastRptRequested {
    NotLastMessage = "N",
    LastMessage = "Y"
}
export declare enum DeliveryType {
    VersusPayment = 0,
    Free = 1,
    TriParty = 2,
    HoldInCustody = 3
}
export declare enum UserRequestType {
    LogOnUser = 1,
    LogOffUser = 2,
    ChangePasswordForUser = 3,
    RequestIndividualUserStatus = 4
}
export declare enum UserStatus {
    LoggedIn = 1,
    NotLoggedIn = 2,
    UserNotRecognised = 3,
    PasswordIncorrect = 4,
    PasswordChanged = 5,
    Other = 6,
    ForcedUserLogoutByExchange = 7,
    SessionShutdownWarning = 8
}
export declare enum StatusValue {
    Connected = 1,
    NotConnectedUnexpected = 2,
    NotConnectedExpected = 3,
    InProcess = 4
}
export declare enum NetworkRequestType {
    Snapshot = 1,
    Subscribe = 2,
    StopSubscribing = 4,
    LevelOfDetail = 8
}
export declare enum NetworkStatusResponseType {
    Full = 1,
    IncrementalUpdate = 2
}
export declare enum TrdRptStatus {
    Accepted = 0,
    Rejected = 1,
    AcceptedWithErrors = 3
}
export declare enum AffirmStatus {
    Received = 1,
    ConfirmRejected = 2,
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
    Successful = 0,
    InvalidOrUnknownInstrument = 1,
    InvalidOrUnknownCollateralType = 2,
    InvalidParties = 3,
    InvalidTransportTypeRequested = 4,
    InvalidDestinationRequested = 5,
    NoCollateralFoundForTheTradeSpecified = 6,
    NoCollateralFoundForTheOrderSpecified = 7,
    CollateralInquiryTypeNotSupported = 8,
    UnauthorizedForCollateralInquiry = 9,
    Other = 99
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
    Inactive = "2"
}
export declare enum UnderlyingCashType {
    Fixed = "FIXED",
    Diff = "DIFF"
}
export declare enum UnderlyingSettlementType {
    TPlus1 = 2,
    TPlus3 = 4,
    TPlus4 = 5
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
    MillionBarrels = "MMbbl",
    OneMillionBtu = "MMBtu",
    MegawattHours = "MWh",
    Barrels = "Bbl",
    Bushels = "Bu",
    Pounds = "lbs",
    Gallons = "Gal",
    TroyOunces = "oz_tr",
    MetricTons = "t",
    Tons = "tn",
    UsDollars = "USD",
    Allowances = "Alw"
}
export declare enum TimeUnit {
    Hour = "H",
    Minute = "Min",
    Second = "S",
    Day = "D",
    Week = "Wk",
    Month = "Mo",
    Year = "Yr"
}
export declare enum AllocMethod {
    Automatic = 1,
    Guarantor = 2,
    Manual = 3
}
export declare enum AsOfIndicator {
    False = "0",
    True = "1"
}
export declare enum MDBookType {
    TopOfBook = 1,
    PriceDepth = 2,
    OrderDepth = 3
}
export declare enum MDOriginType {
    Book = 0,
    OffBook = 1,
    Cross = 2
}
export declare enum CustOrderHandlingInst {
    AddOnOrder = "ADD",
    AllOrNone = "AON",
    CashNotHeld = "CNH",
    DirectedOrder = "DIR",
    ExchangeForPhysicalTransaction = "E.W",
    FillOrKill = "FOK",
    ImbalanceOnly = "IO",
    ImmediateOrCancel = "IOC",
    LimitOnOpen = "LOO",
    LimitOnClose = "LOC",
    MarketAtOpen = "MAO",
    MarketAtClose = "MAC",
    MarketOnOpen = "MOO",
    MarketOnClose = "MOC",
    MinimumQuantity = "MQT",
    NotHeld = "NH",
    OverTheDay = "OVD",
    Pegged = "PEG",
    ReserveSizeOrder = "RSV",
    StopStockTransaction = "S.W",
    Scale = "SCL",
    TimeOrder = "TMO",
    TrailingStop = "TS",
    Work = "WRK"
}
export declare enum OrderHandlingInstSource {
    Nasdoats = 1
}
export declare enum DeskType {
    Agency = "A",
    Arbitrage = "AR",
    Derivatives = "D",
    International = "IN",
    Institutional = "IS",
    Other = "O",
    PreferredTrading = "PF",
    Proprietary = "PR",
    ProgramTrading = "PT",
    Sales = "S",
    Trading = "T"
}
export declare enum DeskTypeSource {
    Nasdoats = 1
}
export declare enum DeskOrderHandlingInst {
    AddOnOrder = "ADD",
    AllOrNone = "AON",
    CashNotHeld = "CNH",
    DirectedOrder = "DIR",
    ExchangeForPhysicalTransaction = "E.W",
    FillOrKill = "FOK",
    ImbalanceOnly = "IO",
    ImmediateOrCancel = "IOC",
    LimitOnOpen = "LOO",
    LimitOnClose = "LOC",
    MarketAtOpen = "MAO",
    MarketAtClose = "MAC",
    MarketOnOpen = "MOO",
    MarketOnClose = "MOC",
    MinimumQuantity = "MQT",
    NotHeld = "NH",
    OverTheDay = "OVD",
    Pegged = "PEG",
    ReserveSizeOrder = "RSV",
    StopStockTransaction = "S.W",
    Scale = "SCL",
    TimeOrder = "TMO",
    TrailingStop = "TS",
    Work = "WRK"
}
export declare enum ExecAckStatus {
    Received = "0",
    Accepted = "1",
    Don = "2"
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
export declare enum AggressorIndicator {
    OrderInitiatorIsAggressor = "Y",
    OrderInitiatorIsPassive = "N"
}
export declare enum MDQuoteType {
    Indicative = 0,
    Tradeable = 1,
    RestrictedTradeable = 2,
    Counter = 3,
    IndicativeAndTradeable = 4
}
export declare enum RefOrderIDSource {
    SecondaryOrderId = "0",
    OrderId = "1",
    MdEntryId = "2",
    QuoteEntryId = "3",
    OriginalOrderId = "4"
}
export declare enum DisplayWhen {
    Immediate = "1",
    Exhaust = "2"
}
export declare enum DisplayMethod {
    Initial = "1",
    New = "2",
    Random = "3",
    Undisclosed = "4"
}
export declare enum PriceProtectionScope {
    None = "0",
    Local = "1",
    National = "2",
    Global = "3"
}
export declare enum LotType {
    OddLot = "1",
    RoundLot = "2",
    BlockLot = "3",
    RoundLotBasedUpon = "4"
}
export declare enum PegPriceType {
    LastPeg = 1,
    MidPricePeg = 2,
    OpeningPeg = 3,
    MarketPeg = 4,
    PrimaryPeg = 5,
    PegToVwap = 7,
    TrailingStopPeg = 8,
    PegToLimitPrice = 9
}
export declare enum TriggerType {
    PartialExecution = "1",
    SpecifiedTradingSession = "2",
    NextAuction = "3",
    PriceMovement = "4"
}
export declare enum TriggerAction {
    Activate = "1",
    Modify = "2",
    Cancel = "3"
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
    Local = "1",
    National = "2",
    Global = "3"
}
export declare enum TriggerPriceDirection {
    Up = "U",
    Down = "D"
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
    StreamingPrice = "9"
}
export declare enum TradeHandlingInstr {
    TradeConfirmation = "0",
    TwoPartyReport = "1",
    OnePartyReportForMatching = "2",
    OnePartyReportForPassThrough = "3",
    AutomatedFloorOrderRouting = "4",
    TwoPartyReportForClaim = "5"
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
export declare enum ExDestinationIDSource {
    Bic = "B",
    GeneralIdentifier = "C",
    Proprietary = "D",
    IsoCountryCode = "E",
    Mic = "G"
}
export declare enum ImpliedMarketIndicator {
    NotImplied = 0,
    ImpliedIn = 1,
    ImpliedOut = 2,
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
    Investor = "3"
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
    PrimaryMarketMaker = 4
}
export declare enum SecurityTradingEvent {
    OrderImbalance = 1,
    TradingResumes = 2,
    PriceVolatilityInterruption = 3,
    ChangeOfTradingSession = 4,
    ChangeOfTradingSubsession = 5,
    ChangeOfSecurityTradingStatus = 6,
    ChangeOfBookType = 7,
    ChangeOfMarketDepth = 8
}
export declare enum StatsType {
    ExchangeLast = 1,
    High = 2,
    AveragePrice = 3,
    Turnover = 4
}
export declare enum MDSecSizeType {
    Customer = 1
}
export declare enum SettlMethod {
    CashSettlementRequired = "C",
    PhysicalSettlementRequired = "P"
}
export declare enum ExerciseStyle {
    European = 0,
    American = 1,
    Bermuda = 2
}
export declare enum PriceQuoteMethod {
    Standard = "STD",
    Index = "INX",
    InterestRateIndex = "INT",
    PercentOfPar = "PCTPAR"
}
export declare enum ValuationMethod {
    PremiumStyle = "EQTY",
    FuturesStyleMarkToMarket = "FUT",
    FuturesStyleWithAnAttachedCashAdjustment = "FUTDA",
    CdsStyleCollateralization = "CDS",
    CdsInDeliveryUseRecoveryRateToCalculate = "CDSD"
}
export declare enum ListMethod {
    PreListedOnly = 0,
    UserRequested = 1
}
export declare enum TickRuleType {
    Regular = 0,
    Variable = 1,
    Fixed = 2,
    TradedAsASpreadLeg = 3,
    SettledAsASpreadLeg = 4
}
export declare enum MaturityMonthYearIncrementUnits {
    Months = 0,
    Days = 1,
    Weeks = 2,
    Years = 3
}
export declare enum MaturityMonthYearFormat {
    YearMonthOnly = 0,
    YearMonthDay = 1,
    YearMonthWeek = 2
}
export declare enum PriceLimitType {
    Price = 0,
    Ticks = 1,
    Percentage = 2
}
export declare enum ApplReqType {
    Retransmission = 0,
    Subscription = 1,
    RequestLastSeqNum = 2,
    RequestApplications = 3,
    Unsubscribe = 4,
    CancelRetransmission = 5,
    CancelRetransmissionUnsubscribe = 6
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
export declare enum TradSesEvent {
    TradingResumes = 0,
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
    AllOrdersForAcfiCode = 4,
    AllOrdersForASecurityType = 5,
    AllOrdersForATradingSession = 6,
    AllOrders = 7,
    AllOrdersForAMarket = 8,
    AllOrdersForAMarketSegment = 9,
    AllOrdersForASecurityGroup = 10,
    CancelForSecurityIssuer = 11,
    CancelForIssuerOfUnderlyingSecurity = 12
}
export declare enum MassActionResponse {
    Rejected = 0,
    Accepted = 1
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
    UserDefined = 2
}
export declare enum MultilegPriceMethod {
    NetPrice = 0,
    ReversedNetPrice = 1,
    YieldDifference = 2,
    Individual = 3,
    ContractWeightedAveragePrice = 4,
    MultipliedPrice = 5
}
export declare enum ContingencyType {
    OneCancelsTheOther = 1,
    OneTriggersTheOther = 2,
    OneUpdatesTheOtherAbsolute = 3,
    OneUpdatesTheOtherProportional = 4
}
export declare enum ListRejectReason {
    BrokerCredit = 0,
    ExchangeClosed = 2,
    TooLateToEnter = 4,
    UnknownOrder = 5,
    DuplicateOrder = 6,
    UnsupportedOrderCharacteristic = 11,
    Other = 99
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
    PasswordExpired = 8
}
export declare enum ApplReportType {
    ApplSeqNumReset = 0,
    LastMessageSent = 1,
    ApplicationAlive = 2,
    ResendComplete = 3
}
export declare enum OrderDelayUnit {
    Seconds = 0,
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
    Electronic = "E",
    Pit = "P",
    ExPit = "X"
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
    ProprietaryModel = 1
}
export declare enum ContractMultiplierUnit {
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
export declare enum RateSource {
    Bloomberg = 0,
    Reuters = 1,
    Telerate = 2,
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
export declare enum SecurityListType {
    IndustryClassification = 1,
    TradingList = 2,
    Market = 3,
    NewspaperList = 4
}
export declare enum SecurityListTypeSource {
    Icb = 1,
    Naics = 2,
    Gics = 3
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
    Complimentary = 2
}
export declare enum StrikePriceDeterminationMethod {
    FixedStrike = 1,
    StrikeSetAtExpiration = 2,
    StrikeSetToAverageAcrossLife = 3,
    StrikeSetToOptimalValue = 4
}
export declare enum StrikePriceBoundaryMethod {
    LessThan = 1,
    LessThanOrEqual = 2,
    Equal = 3,
    GreaterThanOrEqual = 4,
    GreaterThan = 5
}
export declare enum UnderlyingPriceDeterminationMethod {
    Regular = 1,
    SpecialReference = 2,
    OptimalValue = 3,
    AverageValue = 4
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
    KockInDown = 4,
    KnockOutUp = 5,
    KnockOutDown = 6,
    Underlying = 7,
    ResetBarrier = 8,
    RollingBarrier = 9
}
export declare enum ComplexEventPriceBoundaryMethod {
    LessThanComplexEventPrice = 1,
    LessThanOrEqualToComplexEventPrice = 2,
    EqualToComplexEventPrice = 3,
    GreaterThanOrEqualToComplexEventPrice = 4,
    GreaterThanComplexEventPrice = 5
}
export declare enum ComplexEventPriceTimeType {
    Expiration = 1,
    Immediate = 2,
    SpecifiedDate = 3
}
export declare enum ComplexEventCondition {
    And = 1,
    Or = 2
}
export declare enum StreamAsgnReqType {
    StreamAssignmentForNewCustomer = 1,
    StreamAssignmentForExistingCustomer = 2
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
export declare enum StreamAsgnType {
    Assignment = 1,
    Rejected = 2,
    Terminate = 3
}
