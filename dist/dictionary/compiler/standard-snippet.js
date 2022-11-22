"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardSnippet = void 0;
const _ = require("lodash");
class StandardSnippet {
    constructor(settings) {
        this.settings = settings;
    }
    static rhsJustify(txt, width) {
        let align = require('align-text');
        return align(txt, width);
    }
    import(name, isMsg, indent) {
        const spaces = this.spaces(indent);
        const fileName = _.snakeCase(name);
        const path = isMsg ? `./set/${fileName}` : `./${fileName}`;
        return `${spaces}import { I${name} } from '${path}'`;
    }
    interface(name, indent) {
        const spaces = this.spaces(indent);
        return `${spaces}export interface I${name}`;
    }
    startBlockComment(indent) {
        const spaces = this.spaces(indent);
        return `${spaces}/*`;
    }
    endBlockComment(indent) {
        const spaces = this.spaces(indent);
        return `${spaces}*/`;
    }
    startBlock(indent) {
        const spaces = this.spaces(indent);
        return `${spaces}{`;
    }
    endBlock(indent) {
        const spaces = this.spaces(indent);
        return `${spaces}}`;
    }
    group(name, type, required, indent) {
        const spaces = this.spaces(indent);
        return `${spaces}${name}${required ? '' : '?'}: I${type}[]`;
    }
    component(name, required, indent) {
        const spaces = this.spaces(indent);
        return `${spaces}${name}${required ? '' : '?'}: I${name}`;
    }
    simple(name, type, required, indent) {
        const spaces = this.spaces(indent);
        return `${spaces}${name}${required ? '' : '?'}: ${type}`;
    }
    enum(name, indent) {
        const spaces = this.spaces(indent);
        return `export ${spaces}enum ${name}`;
    }
    enumValue(name, val, indent) {
        const spaces = this.spaces(indent);
        if (typeof (val) === 'string') {
            return `${spaces}${name} = '${val}'`;
        }
        return `${spaces}${name} = ${val}`;
    }
    spaces(indent) {
        return ' '.repeat(this.settings.spaces * indent);
    }
    commentLine(line, justify) {
        return StandardSnippet.rhsJustify(`// ${line}`, justify);
    }
    commentBox(str) {
        let wrap = require('word-wrap');
        let text = wrap(str, {
            width: 60,
            indent: ' '
        });
        let lines = text.split('\n').map((a) => a.trim());
        let max = this.longest(lines).length + 2;
        const newLine = require('os').EOL;
        lines = lines.map(function (line) {
            line = ` ${line} `;
            let diff = max - line.length;
            return '*' + line + ' '.repeat(diff) + '*';
        });
        let stars = '*'.repeat(lines[0].length);
        return stars + newLine
            + lines.join(newLine)
            + newLine
            + stars;
    }
    longest(arr) {
        return arr.reduce(function (a, b) {
            return a.length > b.length ? a : b;
        });
    }
}
exports.StandardSnippet = StandardSnippet;
//# sourceMappingURL=standard-snippet.js.map