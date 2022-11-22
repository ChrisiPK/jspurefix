"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageParser = void 0;
const definition_1 = require("../../definition");
const node_parser_1 = require("./node-parser");
const parse_context_1 = require("./parse-context");
const contained_1 = require("../../contained");
class MessageParser extends node_parser_1.NodeParser {
    constructor(definitions, passes) {
        super(definitions, passes);
        this.passes = passes;
    }
    open(line, node) {
        switch (node.name) {
            case 'message': {
                const att = node.attributes;
                const msg = new definition_1.MessageDefinition(att.name, att.name, att.msgtype, att.msgcat, null);
                const context = new parse_context_1.ParseContext(msg.name, true, msg);
                const hdr = this.definitions.component.get('StandardHeader');
                const contained = new contained_1.ContainedComponentField(hdr, msg.fields.length, true);
                msg.add(contained);
                this.parseContexts.push(context);
                break;
            }
            case 'field': {
                this.addSimple(node);
                break;
            }
            case 'component': {
                if (node.isSelfClosing) {
                    this.addComponentField(node.attributes.name, node);
                }
                break;
            }
            case 'group': {
                if (!node.isSelfClosing) {
                    this.beginGroupDefinition(node);
                }
                break;
            }
        }
    }
    close(line, name) {
        switch (name) {
            case 'message': {
                const parent = this.parseContexts.pop();
                const message = parent.asMessage();
                if (message != null) {
                    this.definitions.addMessage(message);
                }
                break;
            }
            case 'group': {
                this.addGroupField(name);
                break;
            }
        }
    }
}
exports.MessageParser = MessageParser;
//# sourceMappingURL=message-parser.js.map