"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpJsonSampleAdapter = void 0;
const http_transaction_1 = require("./http-transaction");
const collections_1 = require("../../collections");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
let HttpJsonSampleAdapter = class HttpJsonSampleAdapter {
    constructor(config) {
        this.config = config;
        this.queue = [];
        this.token = null;
        this.routes = new collections_1.Dictionary();
        this.logger = config.logFactory.logger('http.adapter');
        const routes = this.routes;
        const options = config.description.application.http.options;
        if (!options) {
            return;
        }
        options.forEach((o) => {
            routes.addUpdate(o.name, o);
        });
        this.logger.info(`instance created routes ${routes.count()}`);
    }
    getOptions(data) {
        const q = this.queue;
        if (q.length === 0) {
            return null;
        }
        const next = q.shift();
        const options = next.options;
        options.body = {
            fixml: data.toString()
        };
        this.logger.info(`${next.msgType}: ${next.options.method} ${next.options.uri} ${data.length}`);
        return options;
    }
    endMessage(m) {
        if (!this.token) {
            const headers = m.headers;
            this.token = headers.authorization;
            this.logger.info(`receive token ${this.token}`);
        }
        return m.body;
    }
    beginMessage(msgType) {
        const routes = this.routes;
        const route = routes.get(msgType) || routes.get('default');
        const options = {
            method: route.value.method,
            uri: route.value.uri,
            json: route.value.json,
            resolveWithFullResponse: route.value.resolveWithFullResponse,
            headers: route.value.headers
        };
        const headers = options.headers;
        if (headers) {
            if (this.token) {
                headers.authorization = this.token;
            }
            else if (msgType === 'UserReq') {
                delete headers.authorization;
            }
        }
        this.queue.push(new http_transaction_1.HttpTransaction(msgType, options));
    }
};
HttpJsonSampleAdapter = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __metadata("design:paramtypes", [Object])
], HttpJsonSampleAdapter);
exports.HttpJsonSampleAdapter = HttpJsonSampleAdapter;
//# sourceMappingURL=http-json-sample-adapter.js.map