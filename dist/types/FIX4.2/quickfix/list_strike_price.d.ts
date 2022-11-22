import { IStandardHeader } from './set/standard_header';
import { IListStrikePriceNoStrikes } from './set/list_strike_price_no_strikes';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListStrikePrice {
    StandardHeader: IStandardHeader;
    ListID: string;
    TotNoStrikes: number;
    NoStrikes: IListStrikePriceNoStrikes[];
    StandardTrailer: IStandardTrailer;
}
