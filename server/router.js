"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const tournaments_controller_1 = __importDefault(require("./controllers/tournaments.controller"));
exports.router = express_1.default.Router();
exports.router.post("/tournaments", tournaments_controller_1.default.createTournament);
exports.router.get("/tournaments/:tournamentId", tournaments_controller_1.default.getTournament);
//# sourceMappingURL=router.js.map