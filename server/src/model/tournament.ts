import prisma from "../lib/prisma";
import Attendee from "./attendee";
import User from './user'

class Tournament {
  constructor(
    public id: number, 
    public titel: string,
    public date: string,
    public attendeeList: Array<Attendee>) {}

  static async create(title:string, date:Date, attendees:Array<string>) {
    
    
    const tournament = await prisma.tournament.create({
      data: {
        title,
        date: date.toISOString(),
        
      
      }
    })

    return tournament
  }
}
export default Tournament;