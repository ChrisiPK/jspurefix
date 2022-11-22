"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonRunner = void 0;
const skeleton_session_1 = require("../../sample/tcp/skeleton/skeleton-session");
const buffer_1 = require("../../buffer");
class SkeletonRunner {
    constructor(experiment, logoutSeconds = 1) {
        this.experiment = experiment;
        this.logoutSeconds = logoutSeconds;
        this.clientSkeleton = new skeleton_session_1.SkeletonSession(experiment.client.config, logoutSeconds, false);
        this.serverSkeleton = new skeleton_session_1.SkeletonSession(experiment.server.config, logoutSeconds, false);
        this.clientSkeleton.checkMsgIntegrity = true;
        this.serverSkeleton.checkMsgIntegrity = true;
        experiment.client.transport.receiver.on('msg', (type, view) => {
            experiment.client.views.push(view.clone());
            this.watchdog();
        });
        experiment.server.transport.receiver.on('msg', (type, view) => {
            experiment.server.views.push(view.clone());
            this.watchdog();
        });
        this.clientSkeleton.on('error', e => {
            experiment.client.errors.push(e);
        });
        this.serverSkeleton.on('error', e => {
            experiment.server.errors.push(e);
        });
    }
    watchdog() {
        const experiment = this.experiment;
        const cviews = experiment.client.views;
        const sviews = experiment.server.views;
        const cerrors = experiment.client.errors;
        const serrors = experiment.server.errors;
        const clientStop = cviews.length > 20 || cerrors.length > 0;
        const serverStop = sviews.length > 20 || serrors.length > 0;
        const stop = clientStop || serverStop;
        if (stop) {
            this.clientSkeleton.done();
            this.serverSkeleton.done();
        }
    }
    sendMsg(msgType, o) {
        let count = 0;
        this.experiment.client.transport.receiver.on('msg', m => {
            if (count === 0) {
                count++;
                this.clientSkeleton.sendMessage(msgType, o);
            }
        });
    }
    sendText(followOn) {
        const experiment = this.experiment;
        if (followOn) {
            let sent = false;
            experiment.client.transport.transmitter.on('encoded', () => {
                const b1 = new buffer_1.ElasticBuffer();
                b1.writeString(followOn);
                if (!sent) {
                    experiment.client.transport.duplex.writable.write(b1.slice());
                    const at = experiment.client.transport.transmitter;
                    at.msgSeqNum++;
                    sent = true;
                }
            });
        }
    }
    done() {
        this.clientSkeleton.done();
        this.serverSkeleton.done();
    }
    wait() {
        return __awaiter(this, void 0, void 0, function* () {
            const experiment = this.experiment;
            yield Promise.all([
                this.clientSkeleton.run(experiment.client.transport),
                this.serverSkeleton.run(experiment.server.transport),
                new Promise((accept, reject) => {
                    let handle = null;
                    try {
                        handle = setTimeout(() => {
                            this.done();
                            accept(true);
                        }, (this.logoutSeconds + 2) * 1000);
                    }
                    catch (e) {
                        if (handle) {
                            clearTimeout(handle);
                        }
                        this.done();
                        reject(e);
                    }
                })
            ]);
        });
    }
}
exports.SkeletonRunner = SkeletonRunner;
//# sourceMappingURL=skeleton-runner.js.map