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
require("reflect-metadata");
const types_1 = require("../../types");
const setup_1 = require("../env/setup");
const experiment_1 = require("../env/experiment");
const skeleton_runner_1 = require("../env/skeleton-runner");
const logonMsg = '8=FIX4.4|9=0000136|35=A|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:28.980|98=0|108=30|141=Y|553=js-client|554=pwd-client|10=177|';
const heartbeat = '8=FIX4.4|9=0000123|35=0|49=init-comp|56=accept-comp|34=1|57=fix|52=20180902-12:25:59.161|112=Sun, 02 Sep 2018 12:25:59 GMT|10=95|';
let setup = null;
let experiment = null;
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup();
    yield setup.init();
    experiment = new experiment_1.Experiment(setup);
}), 30000);
class ParsingResult {
    constructor(event, msgType, view) {
        this.event = event;
        this.msgType = msgType;
        this.view = view;
    }
}
function clientToServerWaitFirstMessage(type, obj) {
    return new Promise((resolve, reject) => {
        const clt = experiment.client.transport;
        const svt = experiment.server.transport;
        clt.transmitter.on('error', (e) => {
            reject(e);
        });
        svt.receiver.on('msg', (msgType, view) => {
            resolve(new ParsingResult('msg', msgType, view.clone()));
        });
        clt.receiver.on('error', (e) => {
            reject(e);
        });
        clt.transmitter.send(type, obj);
        experiment.client.transport.end();
    });
}
function runSkeletons(logoutSeconds = 1, followOn = null) {
    return __awaiter(this, void 0, void 0, function* () {
        const runner = new skeleton_runner_1.SkeletonRunner(experiment, logoutSeconds);
        runner.sendText(followOn);
        yield runner.wait();
    });
}
test('end to end logon', () => __awaiter(void 0, void 0, void 0, function* () {
    const lo = experiment.client.config.factory.logon();
    const res = yield clientToServerWaitFirstMessage(types_1.MsgType.Logon, lo);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('A');
    const received = res.view.toObject();
    expect(received).toBeTruthy();
    delete received['StandardHeader'];
    delete received['StandardTrailer'];
    expect(received).toEqual(lo);
}));
test('session send resendRequest when logged on', () => __awaiter(void 0, void 0, void 0, function* () {
    const runner = new skeleton_runner_1.SkeletonRunner(experiment, 2);
    const factory = experiment.client.config.factory;
    const resend = factory.resendRequest(1, 2);
    runner.sendMsg(types_1.MsgType.ResendRequest, resend);
    try {
        const cViews = experiment.client.views;
        const sViews = experiment.server.views;
        yield runner.wait();
        const last = experiment.client.views[experiment.client.views.length - 1];
        expect(last).toBeTruthy();
        const clientResets = countOfType('SequenceReset', cViews);
        const serverResets = countOfType('SequenceReset', sViews);
        expect(clientResets).toEqual(1);
        expect(serverResets).toEqual(0);
    }
    catch (e) {
        expect(true).toEqual(false);
    }
}));
test('session send logon when logged on', () => __awaiter(void 0, void 0, void 0, function* () {
    const runner = new skeleton_runner_1.SkeletonRunner(experiment, 2);
    const logon = experiment.client.config.factory.logon();
    runner.sendMsg(types_1.MsgType.Logon, logon);
    try {
        yield runner.wait();
    }
    catch (e) {
        expect(experiment.server.errors.length).toEqual(1);
    }
}));
test('session logon / logout', () => __awaiter(void 0, void 0, void 0, function* () {
    yield runSkeletons();
    const cViews = experiment.client.views;
    const sViews = experiment.server.views;
    expect(experiment.client.errors.length).toEqual(0);
    expect(experiment.server.errors.length).toEqual(0);
    expect(cViews.length).toEqual(2);
    expect(sViews.length).toEqual(2);
    expect(cViews[0].segment.name).toEqual('Logon');
    expect(cViews[1].segment.name).toEqual('Logout');
    expect(sViews[0].segment.name).toEqual('Logon');
    expect(sViews[1].segment.name).toEqual('Logout');
}));
function checkSeqNos(views) {
    const seqNo = views.map((v) => v.getView('StandardHeader').toObject().MsgSeqNum);
    expect(seqNo).toBeTruthy();
    const delta = seqNo.reduce((c, latest) => {
        return latest - c === 1 ? c + 1 : c - 1;
    }, 0);
    expect(delta).toEqual(seqNo.length);
}
test('seq No OK', () => __awaiter(void 0, void 0, void 0, function* () {
    yield runSkeletons();
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(cviews.length >= 2).toEqual(true);
    expect(sviews.length >= 2).toEqual(true);
    checkSeqNos(cviews);
    checkSeqNos(sviews);
}));
function mutateSeqNo(description, type, o) {
    switch (type) {
        case 'StandardHeader': {
            const hdr = o;
            if (hdr.MsgSeqNum === 2) {
                hdr.MsgSeqNum = 0;
            }
            break;
        }
    }
    return o;
}
test('out of seq logout', () => __awaiter(void 0, void 0, void 0, function* () {
    experiment.clientFactory.mutator = mutateSeqNo;
    yield runSkeletons();
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(cviews.length).toEqual(1);
    expect(cviews[0].segment.name).toEqual('Logon');
    expect(sviews.length).toEqual(2);
    expect(sviews[0].segment.name).toEqual('Logon');
    expect(sviews[1].segment.name).toEqual('Logout');
}));
function countOfType(type, views) {
    return views.reduce((c, v) => {
        return v.segment.name === type ? c + 1 : c;
    }, 0);
}
function mutateRemoveRequiredHeartBtInt(description, type, o) {
    switch (type) {
        case 'A': {
            const logon = o;
            delete logon['HeartBtInt'];
            break;
        }
    }
    return o;
}
test('client logon reject missing 108', () => __awaiter(void 0, void 0, void 0, function* () {
    experiment.clientFactory.mutator = mutateRemoveRequiredHeartBtInt;
    yield runSkeletons(2);
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(cviews.length === 1).toEqual(true);
    expect(sviews.length === 1).toEqual(true);
    expect(cviews[0].segment.name).toEqual('Reject');
    expect(sviews[0].segment.name).toEqual('Logon');
    const reject = cviews[0].toObject();
    expect(reject.SessionRejectReason === types_1.SessionRejectReason.RequiredTagMissing);
    expect(reject.Text).toEqual('msgType A missing required tag 108');
}), 10000);
test('client unknown msg type', () => __awaiter(void 0, void 0, void 0, function* () {
    const at = experiment.client.transport.transmitter;
    const changed = logonMsg.replace('35=A', '35=ZZ').replace('34=1', `34=${at.msgSeqNum + 1}`);
    yield runSkeletons(2, changed);
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(cviews.length).toEqual(3);
    expect(sviews.length).toEqual(3);
    expect(cviews[0].segment.name).toEqual('Logon');
    expect(cviews[1].segment.name).toEqual('Reject');
    expect(sviews[0].segment.name).toEqual('Logon');
    expect(sviews[1].segment.name).toEqual('unknown');
    const reject = cviews[1].toObject();
    expect(reject.SessionRejectReason === types_1.SessionRejectReason.InvalidMsgType);
    expect(reject.Text).toEqual('msgType ZZ unknown');
}), 10000);
test('heartbeat invalid tag', () => __awaiter(void 0, void 0, void 0, function* () {
    const at = experiment.client.transport.transmitter;
    const changed = heartbeat.replace('112=', '999=').replace('34=1', `34=${at.msgSeqNum + 1}`);
    yield runSkeletons(2, changed);
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(cviews.length === 3).toEqual(true);
    expect(sviews.length === 3).toEqual(true);
    expect(cviews[0].segment.name).toEqual('Logon');
    expect(cviews[1].segment.name).toEqual('Reject');
    expect(sviews[0].segment.name).toEqual('Logon');
    expect(sviews[1].segment.name).toEqual('Heartbeat');
    const reject = experiment.client.views[1].toObject();
    expect(reject.SessionRejectReason === types_1.SessionRejectReason.InvalidTagNumber);
    checkSeqNos(cviews);
    checkSeqNos(sviews);
}), 10000);
test('heartbeat invalid sender comp', () => __awaiter(void 0, void 0, void 0, function* () {
    const at = experiment.client.transport.transmitter;
    const changed = heartbeat.replace('49=init-comp', '49=init-not!').replace('34=1', `34=${at.msgSeqNum + 1}`);
    yield runSkeletons(2, changed);
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(cviews.length === 3).toEqual(true);
    expect(sviews.length === 3).toEqual(true);
    expect(cviews[0].segment.name).toEqual('Logon');
    expect(cviews[1].segment.name).toEqual('Reject');
    expect(sviews[0].segment.name).toEqual('Logon');
    expect(sviews[1].segment.name).toEqual('Heartbeat');
    const reject = cviews[1].toObject();
    expect(reject.SessionRejectReason === types_1.SessionRejectReason.CompIDProblem);
    checkSeqNos(cviews);
    checkSeqNos(sviews);
}), 10000);
test('client heartbeats to server', () => __awaiter(void 0, void 0, void 0, function* () {
    const preset = experiment.client.config.description.HeartBtInt;
    experiment.client.config.description.HeartBtInt = 2;
    yield runSkeletons(6);
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(cviews.length === 2).toEqual(true);
    expect(sviews.length > 2).toEqual(true);
    const serverReceivesHeartbeats = countOfType('Heartbeat', sviews);
    expect(serverReceivesHeartbeats >= 2 && serverReceivesHeartbeats <= 4).toEqual(true);
    checkSeqNos(cviews);
    checkSeqNos(sviews);
    experiment.client.config.description.HeartBtInt = preset;
}), 10000);
test('server heartbeats to client', () => __awaiter(void 0, void 0, void 0, function* () {
    const preset = experiment.server.config.description.HeartBtInt;
    experiment.server.config.description.HeartBtInt = 2;
    yield runSkeletons(6);
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(sviews.length === 2).toEqual(true);
    expect(cviews.length > 2).toEqual(true);
    const clientReceivesHeartbeats = countOfType('Heartbeat', cviews);
    expect(clientReceivesHeartbeats >= 2 && clientReceivesHeartbeats <= 4).toEqual(true);
    checkSeqNos(cviews);
    checkSeqNos(sviews);
    experiment.server.config.description.HeartBtInt = preset;
}), 10000);
test('client server heartbeat', () => __awaiter(void 0, void 0, void 0, function* () {
    const preset = experiment.server.config.description.HeartBtInt;
    experiment.server.config.description.HeartBtInt = 5;
    experiment.client.config.description.HeartBtInt = 2;
    yield runSkeletons(8);
    const cviews = experiment.client.views;
    const sviews = experiment.server.views;
    expect(sviews.length > 2).toEqual(true);
    expect(cviews.length > 2).toEqual(true);
    const clientReceivesHeartbeats = countOfType('Heartbeat', cviews);
    const clientReceivesTestRequest = countOfType('TestRequest', cviews);
    const clientTotal = clientReceivesHeartbeats + clientReceivesTestRequest;
    const serverReceivesHeartbeats = countOfType('Heartbeat', sviews);
    const serverReceivesTestRequest = countOfType('TestRequest', sviews);
    const serverTotal = serverReceivesHeartbeats + serverReceivesTestRequest;
    expect(clientTotal >= 1 && clientReceivesHeartbeats <= 4).toEqual(true);
    expect(serverTotal >= 3 && serverReceivesHeartbeats <= 4).toEqual(true);
    checkSeqNos(cviews);
    checkSeqNos(sviews);
    experiment.server.config.description.HeartBtInt = preset;
    experiment.client.config.description.HeartBtInt = preset;
}), 15000);
//# sourceMappingURL=session.test.js.map