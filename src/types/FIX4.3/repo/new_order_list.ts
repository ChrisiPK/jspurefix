import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { INestedParties } from './set/nested_parties'
import { IInstrument } from './set/instrument'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The NewOrderList Message can be used in one of two ways   *
* depending on which market conventions are being followed. *
*************************************************************
*/
export interface INewOrderList {
  StandardHeader: IStandardHeader
  ListID: string// 66
  BidID?: string// 390
  ClientBidID?: string// 391
  ProgRptReqs?: number// 414
  BidType: number// 394
  ProgPeriodInterval?: number// 415
  ListExecInstType?: string// 433
  ListExecInst?: string// 69
  EncodedListExecInstLen?: number// 352
  EncodedListExecInst?: Buffer// 353
  TotNoOrders: number// 68
  NoOrders: number// 73
  ClOrdID: string// 11
  ListSeqNo: number// 67
  SettlInstMode?: string// 160
  Parties?: IParties[]
  Account?: string// 1
  NoAllocs?: number// 78
  AllocAccount?: string// 79
  NestedParties?: INestedParties[]
  AllocShares?: number// 80
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  HandlInst?: string// 21
  ExecInst?: string// 18
  MinQty?: number// 110
  MaxFloor?: number// 111
  ExDestination?: string// 100
  NoTradingSessions?: number// 386
  TradingSessionID?: string// 336
  ProcessCode?: string// 81
  Instrument: IInstrument
  PrevClosePx?: number// 140
  Side: string// 54
  SideValueInd?: number// 401
  LocateReqd?: boolean// 114
  TransactTime?: Date// 60
  Stipulations?: IStipulations[]
  OrderQtyData: IOrderQtyData
  OrdType?: string// 40
  PriceType?: number// 423
  Price?: number// 44
  StopPx?: number// 99
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  Currency?: string// 15
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  IOIid?: string// 23
  QuoteID?: string// 117
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  CommissionData?: ICommissionData
  Rule80A?: string// 47
  ForexReq?: boolean// 121
  SettlCurrency?: string// 120
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  OpenClose?: string// 77
  CoveredOrUncovered?: number// 203
  MaxShow?: number// 210
  PegDifference?: number// 211
  DiscretionInst?: string// 388
  DiscretionOffset?: number// 389
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  NetMoney?: number// 118
  StandardTrailer: IStandardTrailer
}
