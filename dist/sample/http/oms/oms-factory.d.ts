import { INewOrderSingle, Side, IExecutionReport } from '../../../types/FIXML50SP2';
export declare class OmsFactory {
    readonly account: string;
    private id;
    private execId;
    constructor(account: string);
    createOrder(symbol: string, side: Side, qty: number, price: number): INewOrderSingle;
    fillOrder(order: INewOrderSingle): IExecutionReport;
}
