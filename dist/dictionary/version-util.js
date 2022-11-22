"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionUtil = void 0;
const fix_versions_1 = require("./fix-versions");
class VersionUtil {
    static resolve(description) {
        let version = fix_versions_1.FixVersion.Unknown;
        if (description.indexOf('FIX.4.0') >= 0) {
            version = fix_versions_1.FixVersion.FIX40;
        }
        else if (description.indexOf('FIX.4.1') >= 0) {
            version = fix_versions_1.FixVersion.FIX41;
        }
        else if (description.indexOf('FIX.4.2') >= 0) {
            version = fix_versions_1.FixVersion.FIX42;
        }
        else if (description.indexOf('FIX.4.3') >= 0) {
            version = fix_versions_1.FixVersion.FIX43;
        }
        else if (description.indexOf('FIX.4.4') >= 0) {
            version = fix_versions_1.FixVersion.FIX44;
        }
        else if (description.indexOf('FIX.5.0') >= 0) {
            version = fix_versions_1.FixVersion.FIX50;
        }
        else if (description.indexOf('FIX.5.0SP1') >= 0) {
            version = fix_versions_1.FixVersion.FIX50SP1;
        }
        else if (description.indexOf('FIX.5.0SP1') >= 0) {
            version = fix_versions_1.FixVersion.FIX50SP2;
        }
        return version;
    }
}
exports.VersionUtil = VersionUtil;
//# sourceMappingURL=version-util.js.map