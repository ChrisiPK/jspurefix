import { SkeletonSession } from '../../sample/tcp/skeleton/skeleton-session';
import { ILooseObject } from '../../collections/collection';
import { Experiment } from './experiment';
export declare class SkeletonRunner {
    readonly experiment: Experiment;
    readonly logoutSeconds: number;
    clientSkeleton: SkeletonSession;
    serverSkeleton: SkeletonSession;
    constructor(experiment: Experiment, logoutSeconds?: number);
    watchdog(): void;
    sendMsg(msgType: string, o: ILooseObject): void;
    sendText(followOn: string): void;
    done(): void;
    wait(): Promise<void>;
}
