export class User {


    id?: number;
    lastname: string;
    firstname: string;
    email: string;
    tickets!: Tickets[];

}

interface Tickets {

    date: Date;
    numTicket: number;
}
