import express from 'express'
import TournamentsController from "./controllers/tournaments.controller";

export const router = express.Router();

router.post("/tournaments", TournamentsController.createTournament);
router.get("/tournaments/:tournamentId", TournamentsController.getTournament);