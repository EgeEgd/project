"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(router_1.router);
function startServer() {
    var _a;
    const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
    const server = app.listen(PORT, () => {
        console.log(`:rocket: Server running and listening on http://localhost:${PORT}/`);
    });
    process.on("SIGTERM", () => {
        server.close();
    });
    return server;
}
exports.startServer = startServer;
exports.default = app;
//# sourceMappingURL=app.js.map