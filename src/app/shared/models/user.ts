export class User {


    id?: number;
    // name: string;
    lastname: string;
    firstname: string;
    email: string;
    tickets: Tickets[];

}

interface Tickets {
    id?: number;
    numTicket: number;
    date: Date;
}
