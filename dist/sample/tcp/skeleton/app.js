"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const runtime_1 = require("../../../runtime");
const skeleton_session_1 = require("./skeleton-session");
class AppLauncher extends runtime_1.SessionLauncher {
    constructor() {
        super('data/session/test-initiator.json', 'data/session/test-acceptor.json');
    }
    makeFactory(config) {
        return {
            makeSession: () => new skeleton_session_1.SkeletonSession(config, 45, false)
        };
    }
}
const l = new AppLauncher();
l.exec();
//# sourceMappingURL=app.js.map