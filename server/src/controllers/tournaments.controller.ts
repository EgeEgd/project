import { NextFunction, Request, Response } from "express";

import Tournament from "../model/tournament";

const TournamentsController = {
    async createTournament(req: Request, res:Response){
        try {
            //create a tournament
            // read input (req)
            const { title, date, attendees } = req.body
            // work with models
            const tournament = Tournament.create(title, new Date(date), attendees)
            // write output (res)
            res.status(201).send(tournament)
        } catch(e) {
            console.error(e)
            res.status(500).send(e)
        }
    }, 
    async getTournament(){}, //see info of one tournament (matchups and results too) 
    async patchTournaments(){}, //add competitors to tournament
    async putTournaments(){}, //overwrite instead of add ^^
    async getAttendees(){}, //list of attendees with their point total
    async getAttendee(){} //get one ^^

};

export default TournamentsController