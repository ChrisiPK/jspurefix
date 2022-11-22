import { IMarketDataRequest } from '../../../types/FIX4.4/quickfix';
export declare class MDFactory {
    static BidOfferRequest(symbol: string): IMarketDataRequest;
}
