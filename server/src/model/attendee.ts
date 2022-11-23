import Tournament from './tournament'
import User from './user'

class Attendee {
  constructor(
    public id: number,
    public points: number,
    public tournament?: Tournament,
    public user?: User
  ) {}
}

export default Attendee