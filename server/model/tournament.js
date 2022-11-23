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
const prisma_1 = __importDefault(require("../lib/prisma"));
class Tournament {
    constructor(id, titel, date, attendeeList) {
        this.id = id;
        this.titel = titel;
        this.date = date;
        this.attendeeList = attendeeList;
    }
    static create(title, date, attendees) {
        return __awaiter(this, void 0, void 0, function* () {
            const tournament = yield prisma_1.default.tournament.create({
                data: {
                    title,
                    date: date.toISOString(),
                    attendeeList: {
                        create: attendees.map(attendee => ({
                            points: 0,
                            is: {
                                createOrConnect: {
                                    where: {
                                        username: attendee
                                    },
                                    create: {
                                        username: attendee,
                                        points: 0
                                    }
                                }
                            }
                        }))
                    }
                }
            });
            return tournament;
        });
    }
}
exports.default = Tournament;
//# sourceMappingURL=tournament.js.map