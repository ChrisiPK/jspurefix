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
exports.IncludeGraph = void 0;
const collections_1 = require("../../../collections");
const path = require("path");
const fs = require("fs");
class IncludeGraph {
    constructor(root, main) {
        this.root = root;
        this.main = main;
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            this.includes = yield this.getIncludes(this.main);
            this.assignNodes();
            this.getGraph();
        });
    }
    resolve(file) {
        const label = this.nodes.get(file);
        if (label == null) {
            return null;
        }
        const depends = [];
        this.resolve_nodes(label, depends);
        return depends.map((i) => {
            return this.graph[i].file;
        });
    }
    resolve_nodes(label, depends) {
        const node = this.graph[label];
        for (let e of node.edges) {
            if (depends.indexOf(e) < 0) {
                this.resolve_nodes(e, depends);
            }
        }
        depends.push(label);
    }
    getGraph() {
        const nodes = this.nodes;
        this.graph = this.includes.reduce((a, current) => {
            const parent = nodes.get(current.parent);
            let parentNode = a[parent];
            if (!parentNode) {
                a[parent] = parentNode = {
                    file: current.parent,
                    node: parent,
                    edges: []
                };
            }
            current.children.forEach((s) => {
                const child = nodes.get(s);
                if (parentNode.edges.indexOf(child) < 0) {
                    parentNode.edges.push(child);
                }
            });
            return a;
        }, {});
    }
    assignNodes() {
        let next = 0;
        this.nodes = this.includes.reduce((a, current) => {
            if (!a.containsKey(current.parent)) {
                a.add(current.parent, next++);
            }
            current.children.forEach((c) => {
                if (!a.containsKey(c)) {
                    a.add(c, next++);
                }
            });
            return a;
        }, new collections_1.Dictionary());
    }
    scanIncludes(file) {
        return new Promise((accept, reject) => {
            const includes = [];
            const pass = fs.createReadStream(path.join(this.root, file));
            const saxStream = require('sax').createStream(true, {});
            saxStream.on('opentag', (node) => {
                const saxNode = node;
                switch (saxNode.name) {
                    case 'xs:include': {
                        includes.push(saxNode.attributes.schemaLocation);
                        break;
                    }
                }
            });
            saxStream.on('ready', () => {
                accept(includes);
            });
            saxStream.on('error', (r) => {
                reject(r);
            });
            pass.pipe(saxStream);
        });
    }
    getIncludes(main) {
        const q = [];
        q.push([main]);
        const ordered = [];
        const seen = new collections_1.Dictionary();
        return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                while (q.length > 0) {
                    const batch = q.pop();
                    for (let next of batch) {
                        if (seen.containsKey(next)) {
                            continue;
                        }
                        seen.add(next, true);
                        const includes = yield this.scanIncludes(next);
                        ordered.push({
                            parent: next,
                            children: includes
                        });
                        q.push(includes);
                    }
                }
                accept(ordered);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
}
exports.IncludeGraph = IncludeGraph;
//# sourceMappingURL=include-graph.js.map