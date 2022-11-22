"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_launcher_1 = require("../trade-capture/app-launcher");
const l = new app_launcher_1.AppLauncher('data/session/test-initiator-tls.json', 'data/session/test-acceptor-tls.json');
l.exec();
//# sourceMappingURL=app.js.map