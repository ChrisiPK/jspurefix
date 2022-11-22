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
const buffer_1 = require("../../buffer");
const ascii_1 = require("../../buffer/ascii");
const buffer = new buffer_1.ElasticBuffer();
let timeFormatter;
const localDateTime = new Date(2010, 7, 6, 15, 55, 59, 123);
const localDateTimeMidnight = new Date(2010, 4, 6, 0, 0, 0, 0);
const localDate = new Date(localDateTime.getFullYear(), localDateTime.getMonth(), localDateTime.getDate(), 0, 0, 0, 0);
const localTime = new Date(0, 0, 0, localDateTime.getHours(), localDateTime.getMinutes(), localDateTime.getSeconds(), localDateTime.getMilliseconds());
const localTimeMidnight = new Date(0, 0, 0, localDateTimeMidnight.getHours(), localDateTimeMidnight.getMinutes(), localDateTimeMidnight.getSeconds(), localDateTimeMidnight.getMilliseconds());
const utcDateTime = new Date(Date.UTC(localDateTime.getFullYear(), localDateTime.getMonth(), localDateTime.getDate(), localDateTime.getHours(), localDateTime.getMinutes(), localDateTime.getSeconds(), localDateTime.getMilliseconds()));
const utcTime = new Date(Date.UTC(0, 0, 0, localDateTime.getHours(), localDateTime.getMinutes(), localDateTime.getSeconds(), localDateTime.getMilliseconds()));
const utcDate = new Date(Date.UTC(localDateTime.getFullYear(), localDateTime.getMonth(), localDateTime.getDate()));
const dateLength = 4 + 2 + 2;
const timeLength = 2 + 1 + 2 + 1 + 2 + 1 + 3;
const dateTimeLength = dateLength + 1 + timeLength;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    timeFormatter = new ascii_1.TimeFormatter(buffer);
}));
test('check LocalDate', () => {
    buffer.reset();
    timeFormatter.writeLocalDate(localDateTime);
    expect(buffer.getPos()).toEqual(dateLength);
    expect(buffer.toString()).toEqual('20100806');
    expect(timeFormatter.getLocalDate(0)).toEqual(localDate);
});
test('check LocalTime', () => {
    buffer.reset();
    timeFormatter.writeLocalTime(localDateTime);
    expect(buffer.getPos()).toEqual(timeLength);
    expect(buffer.toString()).toEqual('15:55:59.123');
    expect(timeFormatter.getLocalTime(0)).toEqual(localTime);
});
test('check LocalTime Midnight', () => {
    buffer.reset();
    timeFormatter.writeLocalTime(localDateTimeMidnight);
    expect(buffer.getPos()).toEqual(timeLength);
    expect(buffer.toString()).toEqual('00:00:00.000');
    expect(timeFormatter.getLocalTime(0)).toEqual(localTimeMidnight);
});
test('check LocalTimestamp Midnight', () => {
    buffer.reset();
    timeFormatter.writeLocalTimestamp(localDateTimeMidnight);
    expect(buffer.getPos()).toEqual(dateTimeLength);
    expect(buffer.toString()).toEqual('20100506-00:00:00.000');
    expect(timeFormatter.getLocalTimestamp(0, dateTimeLength)).toEqual(localDateTimeMidnight);
});
test('check LocalTimestamp', () => {
    buffer.reset();
    timeFormatter.writeLocalTimestamp(localDateTime);
    expect(buffer.getPos()).toEqual(dateTimeLength);
    expect(buffer.toString()).toEqual('20100806-15:55:59.123');
    expect(timeFormatter.getLocalTimestamp(0, dateTimeLength)).toEqual(localDateTime);
});
test('check UtcDate', () => {
    buffer.reset();
    timeFormatter.writeUtcDate(utcDateTime);
    expect(buffer.getPos()).toEqual(dateLength);
    expect(buffer.toString()).toEqual('20100806');
    expect(timeFormatter.getUtcDate(0)).toEqual(utcDate);
});
test('check LocalTime', () => {
    buffer.reset();
    timeFormatter.writeUtcTime(utcDateTime);
    expect(buffer.getPos()).toEqual(timeLength);
    expect(buffer.toString()).toEqual('15:55:59.123');
    expect(timeFormatter.getUtcTime(0)).toEqual(utcTime);
});
//# sourceMappingURL=time-formatter.test.js.map