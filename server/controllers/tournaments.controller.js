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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tournament_1 = __importDefault(require("../model/tournament"));
const TournamentsController = {
    createTournament(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //create a tournament
                // read input (req)
                const { title, date, attendees } = req.body;
                // work with models
                const tournament = tournament_1.default.create(title, new Date(date), attendees);
                // write output (res)
                res.status(201).send(tournament);
            }
            catch (e) {
                console.error(e);
                res.status(500).send(e);
            }
        });
    },
    getTournament() {
        return __awaiter(this, void 0, void 0, function* () { });
    },
    patchTournaments() {
        return __awaiter(this, void 0, void 0, function* () { });
    },
    putTournaments() {
        return __awaiter(this, void 0, void 0, function* () { });
    },
    getAttendees() {
        return __awaiter(this, void 0, void 0, function* () { });
    },
    getAttendee() {
        return __awaiter(this, void 0, void 0, function* () { });
    } //get one ^^
};
exports.default = TournamentsController;
//# sourceMappingURL=tournaments.controller.js.map