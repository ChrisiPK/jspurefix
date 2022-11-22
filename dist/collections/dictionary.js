"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
class Dictionary {
    constructor() {
        this.container = {};
    }
    count() {
        const keys = Object.keys(this.container);
        return keys.length;
    }
    values() {
        const va = [];
        const keys = Object.keys(this.container);
        keys.forEach((k) => va.push(this.container[k]));
        return va;
    }
    keys() {
        return Object.keys(this.container);
    }
    toString() {
        return this.keys().reduce((a, current) => {
            const token = a.length > 0 ? ', ' : '';
            return a + `${token}${this.container[current].toString() || ''}`;
        }, '');
    }
    containsKey(key) {
        return this.container[key] != null;
    }
    add(key, v) {
        if (this.containsKey(key)) {
            const msg = `duplicate key ${key}`;
            throw new Error(msg);
        }
        this.container[key] = v;
    }
    addUpdate(key, v) {
        this.container[key] = v;
    }
    remove(key) {
        delete this.container[key];
    }
    get(key) {
        return this.container[key];
    }
    clear() {
        this.keys().forEach(k => {
            this.remove(k);
        });
    }
    forEach(cb) {
        Object.keys(this.container).forEach((k) => cb(k, this.container[k]));
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=dictionary.js.map