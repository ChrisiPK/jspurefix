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
const path = require("path");
const segment_type_1 = require("../../buffer/segment/segment-type");
const setup_1 = require("../env/setup");
const root = path.join(__dirname, '../../../data');
let definitions;
let views;
let structure;
let setup = null;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/qf-fix44.json', null);
    yield setup.init();
    const config = setup.client.config;
    definitions = config.definitions;
    views = yield setup.client.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/quickfix/execution-report/fix.txt'));
    if (views && views.length > 0) {
        structure = views[0].structure;
    }
}), 45000);
test('expect a structure from fix msg', () => {
    expect(structure).toBeTruthy();
});
test('Parties structure', () => {
    const parties = structure.layout.Parties;
    const noPartyIDs = structure.layout.NoPartyIDs;
    expect(parties).toBeTruthy();
    expect(parties.startPosition === 20);
    expect(parties.endPosition === 44);
    expect(parties.depth === 1);
    expect(parties.type === segment_type_1.SegmentType.Component);
    expect(noPartyIDs.startPosition === 20);
    expect(noPartyIDs.endPosition === 44);
    expect(noPartyIDs.depth === 2);
    expect(parties.type === segment_type_1.SegmentType.Group);
});
test('Parties PartySubIDType sub-structure', () => {
    const ptysSubGrp = structure.layout.PtysSubGrp;
    expect(ptysSubGrp).toBeTruthy();
    expect(Array.isArray(ptysSubGrp)).toEqual(true);
    expect(ptysSubGrp.length).toEqual(3);
    expect(ptysSubGrp[0].startPosition).toEqual(24);
    expect(ptysSubGrp[0].type).toEqual(segment_type_1.SegmentType.Component);
    expect(ptysSubGrp[1].startPosition).toEqual(32);
    expect(ptysSubGrp[1].type).toEqual(segment_type_1.SegmentType.Component);
    expect(ptysSubGrp[2].startPosition).toEqual(42);
    expect(ptysSubGrp[2].type).toEqual(segment_type_1.SegmentType.Component);
    const noPartySubIDs = structure.layout.NoPartySubIDs;
    expect(noPartySubIDs).toBeTruthy();
    expect(Array.isArray(noPartySubIDs)).toEqual(true);
    expect(noPartySubIDs.length).toEqual(3);
    expect(noPartySubIDs[0].delimiterTag).toEqual(523);
    expect(noPartySubIDs[0].type).toEqual(segment_type_1.SegmentType.Group);
    expect(noPartySubIDs[0].delimiterPositions).toEqual([25, 27]);
    expect(noPartySubIDs[0].depth).toEqual(4);
    expect(noPartySubIDs[1].delimiterTag).toEqual(523);
    expect(noPartySubIDs[1].type).toEqual(segment_type_1.SegmentType.Group);
    expect(noPartySubIDs[1].delimiterPositions).toEqual([33, 35, 37]);
    expect(noPartySubIDs[1].depth).toEqual(4);
    expect(noPartySubIDs[2].delimiterTag).toEqual(523);
    expect(noPartySubIDs[2].type).toEqual(segment_type_1.SegmentType.Group);
    expect(noPartySubIDs[2].delimiterPositions).toEqual([43]);
    expect(noPartySubIDs[2].depth).toEqual(4);
});
test('ContraGrp structure', () => {
    const contraGrp = structure.layout.ContraGrp;
    expect(contraGrp).toBeTruthy();
    expect(contraGrp.depth).toEqual(1);
    expect(contraGrp.type).toEqual(segment_type_1.SegmentType.Component);
    expect(contraGrp.startPosition).toEqual(46);
    expect(contraGrp.endPosition).toEqual(61);
    const noContraBrokers = structure.layout.NoContraBrokers;
    expect(noContraBrokers).toBeTruthy();
    expect(noContraBrokers.depth).toEqual(2);
    expect(noContraBrokers.type).toEqual(segment_type_1.SegmentType.Group);
    expect(noContraBrokers.delimiterTag).toEqual(375);
    expect(noContraBrokers.delimiterPositions).toEqual([47, 52, 57]);
});
test('Instrument structure', () => {
    const instrument = structure.layout.Instrument;
    expect(instrument).toBeTruthy();
    expect(instrument.type).toEqual(segment_type_1.SegmentType.Component);
    expect(instrument.startPosition).toEqual(83);
    expect(instrument.startTag).toEqual(55);
    expect(instrument.endPosition).toEqual(133);
    expect(instrument.endTag).toEqual(874);
    const noSecurityAltID = structure.layout.NoSecurityAltID;
    expect(noSecurityAltID).toBeTruthy();
    expect(noSecurityAltID.type).toEqual(segment_type_1.SegmentType.Group);
    expect(noSecurityAltID.delimiterTag).toEqual(455);
    expect(noSecurityAltID.delimiterPositions).toEqual([88, 90]);
});
test('FinancingDetails structure', () => {
    const financingDetails = structure.layout.FinancingDetails;
    expect(financingDetails).toBeTruthy();
    expect(financingDetails.depth).toEqual(1);
    expect(financingDetails.type).toEqual(segment_type_1.SegmentType.Component);
    expect(financingDetails.startPosition).toEqual(134);
    expect(financingDetails.startTag).toEqual(913);
    expect(financingDetails.endPosition).toEqual(142);
    expect(financingDetails.endTag).toEqual(898);
});
test('PegInstructions structure', () => {
    const pegInstructions = structure.layout.PegInstructions;
    expect(pegInstructions).toBeTruthy();
    expect(pegInstructions.depth).toEqual(1);
    expect(pegInstructions.type).toEqual(segment_type_1.SegmentType.Component);
    expect(pegInstructions.startPosition).toEqual(272);
    expect(pegInstructions.startTag).toEqual(211);
    expect(pegInstructions.endPosition).toEqual(277);
    expect(pegInstructions.endTag).toEqual(840);
});
test('DiscretionInstructions structure', () => {
    const discretionInstructions = structure.layout.DiscretionInstructions;
    expect(discretionInstructions).toBeTruthy();
    expect(discretionInstructions.depth).toEqual(1);
    expect(discretionInstructions.type).toEqual(segment_type_1.SegmentType.Component);
    expect(discretionInstructions.startPosition).toEqual(278);
    expect(discretionInstructions.startTag).toEqual(388);
    expect(discretionInstructions.endPosition).toEqual(284);
    expect(discretionInstructions.endTag).toEqual(846);
});
test('CommissionData structure', () => {
    const commisionData = structure.layout.CommissionData;
    expect(commisionData).toBeTruthy();
    expect(commisionData.depth).toEqual(1);
    expect(commisionData.type).toEqual(segment_type_1.SegmentType.Component);
    expect(commisionData.startPosition).toEqual(324);
    expect(commisionData.startTag).toEqual(12);
    expect(commisionData.endPosition).toEqual(327);
    expect(commisionData.endTag).toEqual(497);
});
test('SpreadOrBenchmarkCurveData structure', () => {
    const spreadBenchData = structure.layout.SpreadOrBenchmarkCurveData;
    expect(spreadBenchData).toBeTruthy();
    expect(spreadBenchData.depth).toEqual(1);
    expect(spreadBenchData.type).toEqual(segment_type_1.SegmentType.Component);
    expect(spreadBenchData.startPosition).toEqual(328);
    expect(spreadBenchData.startTag).toEqual(218);
    expect(spreadBenchData.endPosition).toEqual(335);
    expect(spreadBenchData.endTag).toEqual(761);
});
test('YieldData structure', () => {
    const yieldData = structure.layout.YieldData;
    expect(yieldData).toBeTruthy();
    expect(yieldData.depth).toEqual(1);
    expect(yieldData.type).toEqual(segment_type_1.SegmentType.Component);
    expect(yieldData.startPosition).toEqual(336);
    expect(yieldData.startTag).toEqual(235);
    expect(yieldData.endPosition).toEqual(341);
    expect(yieldData.endTag).toEqual(698);
});
test('ContAmtGrp structure', () => {
    const contAmtGrp = structure.layout.ContAmtGrp;
    expect(contAmtGrp).toBeTruthy();
    expect(contAmtGrp.depth).toEqual(1);
    expect(contAmtGrp.type).toEqual(segment_type_1.SegmentType.Component);
    expect(contAmtGrp.startPosition).toEqual(385);
    expect(contAmtGrp.startTag).toEqual(518);
    expect(contAmtGrp.endPosition).toEqual(394);
    expect(contAmtGrp.endTag).toEqual(521);
    const noContAmts = structure.layout.NoContAmts;
    expect(noContAmts).toBeTruthy();
    expect(noContAmts.depth).toEqual(2);
    expect(noContAmts.type).toEqual(segment_type_1.SegmentType.Group);
    expect(noContAmts.startPosition).toEqual(385);
    expect(noContAmts.startTag).toEqual(518);
    expect(noContAmts.endPosition).toEqual(394);
    expect(noContAmts.endTag).toEqual(521);
    expect(noContAmts.delimiterTag).toEqual(519);
    expect(noContAmts.delimiterPositions).toEqual([386, 389, 392]);
});
test('MiscFeesGrp structure', () => {
    const miscFees = structure.layout.MiscFeesGrp;
    expect(miscFees).toBeTruthy();
    expect(miscFees.depth).toEqual(1);
    expect(miscFees.type).toEqual(segment_type_1.SegmentType.Component);
    expect(miscFees.startPosition).toEqual(636);
    expect(miscFees.startTag).toEqual(136);
    expect(miscFees.endPosition).toEqual(644);
    expect(miscFees.endTag).toEqual(891);
    const noMiscfees = structure.layout.NoMiscFees;
    expect(noMiscfees).toBeTruthy();
    expect(noMiscfees.depth).toEqual(2);
    expect(noMiscfees.type).toEqual(segment_type_1.SegmentType.Group);
    expect(noMiscfees.startPosition).toEqual(636);
    expect(noMiscfees.startTag).toEqual(136);
    expect(noMiscfees.endPosition).toEqual(644);
    expect(noMiscfees.endTag).toEqual(891);
    expect(noMiscfees.delimiterTag).toEqual(137);
    expect(noMiscfees.delimiterPositions).toEqual([637, 641]);
});
test('UndInstrmtGrp structure', () => {
    const undInstrmtGrp = structure.layout.UndInstrmtGrp;
    expect(undInstrmtGrp).toBeTruthy();
    expect(undInstrmtGrp.type).toEqual(segment_type_1.SegmentType.Component);
    expect(undInstrmtGrp.startPosition).toEqual(143);
    expect(undInstrmtGrp.startTag).toEqual(711);
    expect(undInstrmtGrp.endPosition).toEqual(257);
    expect(undInstrmtGrp.endTag).toEqual(889);
    expect(undInstrmtGrp.depth).toEqual(1);
    const noUnderlyings = structure.layout.NoUnderlyings;
    expect(noUnderlyings).toBeTruthy();
    expect(noUnderlyings.delimiterTag).toEqual(311);
    expect(noUnderlyings.delimiterPositions).toEqual([144, 203]);
    expect(noUnderlyings.depth).toEqual(2);
    expect(noUnderlyings.type).toEqual(segment_type_1.SegmentType.Group);
    const underlyingInstrument = structure.layout.UnderlyingInstrument;
    expect(underlyingInstrument).toBeTruthy();
    expect(underlyingInstrument.length).toEqual(2);
    expect(underlyingInstrument).toBeTruthy();
    expect(underlyingInstrument[0].startPosition).toEqual(144);
    expect(underlyingInstrument[0].startTag).toEqual(311);
    expect(underlyingInstrument[0].endPosition).toEqual(202);
    expect(underlyingInstrument[0].endTag).toEqual(889);
    expect(underlyingInstrument[0].depth).toEqual(3);
    expect(underlyingInstrument[0].type).toEqual(segment_type_1.SegmentType.Component);
    expect(underlyingInstrument[1].startPosition).toEqual(203);
    expect(underlyingInstrument[1].startTag).toEqual(311);
    expect(underlyingInstrument[1].endPosition).toEqual(257);
    expect(underlyingInstrument[1].endTag).toEqual(889);
    expect(underlyingInstrument[1].depth).toEqual(3);
    expect(underlyingInstrument[1].type).toEqual(segment_type_1.SegmentType.Component);
    const undSecAltIDGrp = structure.layout.UndSecAltIDGrp;
    expect(undSecAltIDGrp.length).toEqual(2);
    expect(undSecAltIDGrp[0].startPosition).toEqual(148);
    expect(undSecAltIDGrp[0].startTag).toEqual(457);
    expect(undSecAltIDGrp[0].endPosition).toEqual(154);
    expect(undSecAltIDGrp[0].endTag).toEqual(459);
    expect(undSecAltIDGrp[0].depth).toEqual(4);
    expect(undSecAltIDGrp[0].type).toEqual(segment_type_1.SegmentType.Component);
    expect(undSecAltIDGrp[1].startPosition).toEqual(207);
    expect(undSecAltIDGrp[1].startTag).toEqual(457);
    expect(undSecAltIDGrp[1].endPosition).toEqual(209);
    expect(undSecAltIDGrp[1].endTag).toEqual(459);
    expect(undSecAltIDGrp[1].depth).toEqual(4);
    expect(undSecAltIDGrp[1].type).toEqual(segment_type_1.SegmentType.Component);
    const noUnderlyingSecurityAltID = structure.layout.NoUnderlyingSecurityAltID;
    expect(noUnderlyingSecurityAltID.length).toEqual(2);
    expect(noUnderlyingSecurityAltID).toBeTruthy();
    expect(noUnderlyingSecurityAltID[0].depth).toEqual(5);
    expect(noUnderlyingSecurityAltID[0].delimiterTag).toEqual(458);
    expect(noUnderlyingSecurityAltID[0].type).toEqual(segment_type_1.SegmentType.Group);
    expect(noUnderlyingSecurityAltID[0].startPosition).toEqual(148);
    expect(noUnderlyingSecurityAltID[0].endPosition).toEqual(154);
    expect(noUnderlyingSecurityAltID[0].delimiterPositions).toEqual([149, 151, 153]);
    expect(noUnderlyingSecurityAltID[1].depth).toEqual(5);
    expect(noUnderlyingSecurityAltID[1].delimiterTag).toEqual(458);
    expect(noUnderlyingSecurityAltID[1].type).toEqual(segment_type_1.SegmentType.Group);
    expect(noUnderlyingSecurityAltID[1].startPosition).toEqual(207);
    expect(noUnderlyingSecurityAltID[1].endPosition).toEqual(209);
    expect(noUnderlyingSecurityAltID[1].delimiterPositions).toEqual([208]);
    const boundNoUnderlyingSecurityAltID = structure.firstContainedWithin('NoUnderlyingSecurityAltID', underlyingInstrument[1]);
    expect(boundNoUnderlyingSecurityAltID).toBeTruthy();
});
test('InstrmtLegExecGrp structure', () => {
    const instrmtLegExecGrp = structure.layout.InstrmtLegExecGrp;
    expect(instrmtLegExecGrp).toBeTruthy();
    expect(instrmtLegExecGrp.type).toEqual(segment_type_1.SegmentType.Component);
    expect(instrmtLegExecGrp.startPosition).toEqual(395);
    expect(instrmtLegExecGrp.startTag).toEqual(555);
    expect(instrmtLegExecGrp.endTag).toEqual(637);
    expect(instrmtLegExecGrp.endPosition).toEqual(634);
    expect(instrmtLegExecGrp.depth).toEqual(1);
    const noLegs = structure.layout.NoLegs;
    expect(noLegs).toBeTruthy();
    expect(noLegs.type).toEqual(segment_type_1.SegmentType.Group);
    expect(noLegs.startPosition).toEqual(395);
    expect(noLegs.startTag).toEqual(555);
    expect(noLegs.endTag).toEqual(637);
    expect(noLegs.endPosition).toEqual(634);
    expect(noLegs.depth).toEqual(2);
    expect(noLegs.delimiterTag).toEqual(600);
    expect(noLegs.delimiterPositions).toEqual([396, 465, 554]);
});
test('instrumentLeg structure', () => {
    const instrumentLeg = structure.layout.InstrumentLeg;
    expect(instrumentLeg).toBeTruthy();
    expect(Array.isArray(instrumentLeg)).toEqual(true);
    expect(instrumentLeg.length).toEqual(3);
    expect(instrumentLeg[0].type).toEqual(segment_type_1.SegmentType.Component);
    expect(instrumentLeg[0].depth).toEqual(3);
    expect(instrumentLeg[0].startTag).toEqual(600);
    expect(instrumentLeg[0].startPosition).toEqual(396);
    expect(instrumentLeg[0].endPosition).toEqual(443);
    expect(instrumentLeg[0].endTag).toEqual(956);
    expect(instrumentLeg[1].type).toEqual(segment_type_1.SegmentType.Component);
    expect(instrumentLeg[1].depth).toEqual(3);
    expect(instrumentLeg[1].startTag).toEqual(600);
    expect(instrumentLeg[1].startPosition).toEqual(465);
    expect(instrumentLeg[1].endPosition).toEqual(512);
    expect(instrumentLeg[1].endTag).toEqual(956);
    expect(instrumentLeg[2].type).toEqual(segment_type_1.SegmentType.Component);
    expect(instrumentLeg[2].depth).toEqual(3);
    expect(instrumentLeg[2].startTag).toEqual(600);
    expect(instrumentLeg[2].startPosition).toEqual(554);
    expect(instrumentLeg[2].endPosition).toEqual(601);
    expect(instrumentLeg[2].endTag).toEqual(956);
});
test('LegSecAltIDGrp [0] structure', () => {
    const legSecAltIDGrp = structure.layout.LegSecAltIDGrp;
    expect(legSecAltIDGrp).toBeTruthy();
    expect(Array.isArray(legSecAltIDGrp)).toEqual(true);
    expect(legSecAltIDGrp.length).toEqual(3);
    const index = 0;
    expect(legSecAltIDGrp[index].type).toEqual(segment_type_1.SegmentType.Component);
    expect(legSecAltIDGrp[index].depth).toEqual(4);
    expect(legSecAltIDGrp[index].startTag).toEqual(604);
    expect(legSecAltIDGrp[index].startPosition).toEqual(400);
    expect(legSecAltIDGrp[index].endPosition).toEqual(406);
    expect(legSecAltIDGrp[index].endTag).toEqual(606);
    const noLegSecurityAltID = structure.layout.NoLegSecurityAltID;
    expect(noLegSecurityAltID).toBeTruthy();
    expect(Array.isArray(noLegSecurityAltID)).toEqual(true);
    expect(noLegSecurityAltID.length).toEqual(3);
    expect(noLegSecurityAltID[index].type).toEqual(segment_type_1.SegmentType.Group);
    expect(noLegSecurityAltID[index].depth).toEqual(5);
    expect(noLegSecurityAltID[index].startTag).toEqual(604);
    expect(noLegSecurityAltID[index].startPosition).toEqual(400);
    expect(noLegSecurityAltID[index].endPosition).toEqual(406);
    expect(noLegSecurityAltID[index].endTag).toEqual(606);
    expect(noLegSecurityAltID[index].delimiterTag).toEqual(605);
    expect(noLegSecurityAltID[index].delimiterPositions).toEqual([401, 403, 405]);
});
test('LegSecAltIDGrp [1] structure', () => {
    const legSecAltIDGrp = structure.layout.LegSecAltIDGrp;
    expect(legSecAltIDGrp).toBeTruthy();
    expect(Array.isArray(legSecAltIDGrp)).toEqual(true);
    expect(legSecAltIDGrp.length).toEqual(3);
    const index = 1;
    expect(legSecAltIDGrp[index].type).toEqual(segment_type_1.SegmentType.Component);
    expect(legSecAltIDGrp[index].depth).toEqual(4);
    expect(legSecAltIDGrp[index].startTag).toEqual(604);
    expect(legSecAltIDGrp[index].startPosition).toEqual(469);
    expect(legSecAltIDGrp[index].endPosition).toEqual(475);
    expect(legSecAltIDGrp[index].endTag).toEqual(606);
    const noLegSecurityAltID = structure.layout.NoLegSecurityAltID;
    expect(noLegSecurityAltID).toBeTruthy();
    expect(Array.isArray(noLegSecurityAltID)).toEqual(true);
    expect(noLegSecurityAltID.length).toEqual(3);
    expect(noLegSecurityAltID[index].type).toEqual(segment_type_1.SegmentType.Group);
    expect(noLegSecurityAltID[index].depth).toEqual(5);
    expect(noLegSecurityAltID[index].startTag).toEqual(604);
    expect(noLegSecurityAltID[index].startPosition).toEqual(469);
    expect(noLegSecurityAltID[index].endPosition).toEqual(475);
    expect(noLegSecurityAltID[index].endTag).toEqual(606);
    expect(noLegSecurityAltID[index].delimiterTag).toEqual(605);
    expect(noLegSecurityAltID[index].delimiterPositions).toEqual([470, 472, 474]);
});
test('LegSecAltIDGrp [2] structure', () => {
    const legSecAltIDGrp = structure.layout.LegSecAltIDGrp;
    expect(legSecAltIDGrp).toBeTruthy();
    expect(Array.isArray(legSecAltIDGrp)).toEqual(true);
    expect(legSecAltIDGrp.length).toEqual(3);
    const index = 2;
    expect(legSecAltIDGrp[index].type).toEqual(segment_type_1.SegmentType.Component);
    expect(legSecAltIDGrp[index].depth).toEqual(4);
    expect(legSecAltIDGrp[index].startTag).toEqual(604);
    expect(legSecAltIDGrp[index].startPosition).toEqual(558);
    expect(legSecAltIDGrp[index].endPosition).toEqual(564);
    expect(legSecAltIDGrp[index].endTag).toEqual(606);
    const noLegSecurityAltID = structure.layout.NoLegSecurityAltID;
    expect(noLegSecurityAltID).toBeTruthy();
    expect(Array.isArray(noLegSecurityAltID)).toEqual(true);
    expect(noLegSecurityAltID.length).toEqual(3);
    expect(noLegSecurityAltID[index].type).toEqual(segment_type_1.SegmentType.Group);
    expect(noLegSecurityAltID[index].depth).toEqual(5);
    expect(noLegSecurityAltID[index].startTag).toEqual(604);
    expect(noLegSecurityAltID[index].startPosition).toEqual(558);
    expect(noLegSecurityAltID[index].endPosition).toEqual(564);
    expect(noLegSecurityAltID[index].endTag).toEqual(606);
    expect(noLegSecurityAltID[index].delimiterTag).toEqual(605);
    expect(noLegSecurityAltID[index].delimiterPositions).toEqual([559, 561, 563]);
});
test('expect one message view from one line fix file', () => {
    expect(views).toHaveLength(1);
}, 1000);
test('can create object from view', () => {
    const erView = views[0];
    const erAsObject = erView.toObject();
    expect(erAsObject).toBeTruthy();
}, 1000);
test('simple tag decoding', () => {
    const erView = views[0];
    expect(erView.getString(35)).toEqual('8');
    expect(erView.getString('MsgType')).toEqual('8');
    expect(erView.getString(8)).toEqual('FIX4.4');
    expect(erView.getTyped(9)).toEqual(6545);
    expect(erView.getTyped('TotNumReports')).toEqual(19404);
    expect(erView.getTyped('StrikePrice')).toEqual(52639);
}, 1000);
test('simple repeated tag decoding', () => {
    const erView = views[0];
    expect(erView.getStrings('PartyID')).toEqual(['magna.', 'iaculis', 'vitae,']);
}, 1000);
test('repeated group decoding of Parties', () => {
    const erView = views[0];
    const partyView = erView.getView('Parties');
    expect(partyView).toBeTruthy();
    const partyViewAsObject = partyView.toObject();
    expect(partyViewAsObject).toBeTruthy();
    expect(partyViewAsObject.NoPartyIDs.length).toEqual(3);
    expect(partyViewAsObject.NoPartyIDs[0]).toEqual({
        PartyID: 'magna.',
        PartyIDSource: '9',
        PartyRole: 28,
        PtysSubGrp: {
            NoPartySubIDs: [
                {
                    PartySubID: 'et',
                    PartySubIDType: 22
                },
                {
                    PartySubID: 'leo,',
                    PartySubIDType: 10
                }
            ]
        }
    });
    const noParties = partyView.getView('NoPartyIDs');
    expect(noParties).toBeTruthy();
    expect(noParties.groupCount()).toEqual(3);
    const np0View = noParties.getGroupInstance(0);
    expect(np0View).toBeTruthy();
    expect(np0View.getString('PartyID')).toEqual('magna.');
    expect(np0View.getString('PartyIDSource')).toEqual('9');
    const np0ViewPtysSubGrp = np0View.getView('PtysSubGrp');
    const np0ViewPtysSubGrpAsObject = np0ViewPtysSubGrp.toObject();
    expect(np0ViewPtysSubGrpAsObject).toBeTruthy();
    expect(np0ViewPtysSubGrpAsObject).toEqual(partyViewAsObject.NoPartyIDs[0].PtysSubGrp);
}, 1000);
test('instrument component decode', () => {
    const erView = views[0];
    const instrumentView = erView.getView('Instrument');
    expect(instrumentView).toBeTruthy();
    expect(instrumentView.getString('Symbol')).toEqual('ac,');
    const secAltIDGrpAsObject = instrumentView.getView('SecAltIDGrp').toObject();
    expect(secAltIDGrpAsObject).toBeTruthy();
    expect(secAltIDGrpAsObject.NoSecurityAltID.length).toEqual(2);
}, 1000);
test('UndInstrmtGrp component decode', () => {
    const erView = views[0];
    const undInstrmtGrpView = erView.getView('UndInstrmtGrp');
    expect(undInstrmtGrpView).toBeTruthy();
    const undInstrmtGrpViewAsObject = undInstrmtGrpView.toObject();
    expect(undInstrmtGrpViewAsObject).toBeTruthy();
    expect(undInstrmtGrpViewAsObject.NoUnderlyings.length).toEqual(2);
    const underlying0 = undInstrmtGrpViewAsObject.NoUnderlyings[0].UnderlyingInstrument;
    expect(underlying0).toBeTruthy();
    expect(underlying0.UnderlyingSymbol).toEqual('massa.');
    expect(underlying0.UndSecAltIDGrp).toEqual({
        NoUnderlyingSecurityAltID: [
            {
                UnderlyingSecurityAltID: 'ornare',
                UnderlyingSecurityAltIDSource: 'magna.'
            },
            {
                UnderlyingSecurityAltID: 'non',
                UnderlyingSecurityAltIDSource: 'at'
            },
            {
                UnderlyingSecurityAltID: 'hendrerit',
                UnderlyingSecurityAltIDSource: 'Pellentesque'
            }
        ]
    });
    const underlying1 = undInstrmtGrpViewAsObject.NoUnderlyings[1].UnderlyingInstrument;
    expect(underlying1).toBeTruthy();
    expect(underlying1.UnderlyingSymbol).toEqual('erat');
    expect(underlying1.UndSecAltIDGrp).toEqual({
        NoUnderlyingSecurityAltID: [
            {
                UnderlyingSecurityAltID: 'Quisque',
                UnderlyingSecurityAltIDSource: 'tortor'
            }
        ]
    });
}, 1000);
//# sourceMappingURL=execution-report.test.js.map