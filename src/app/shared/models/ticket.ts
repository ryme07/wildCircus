export class Ticket {
    id: number;
    title: string;
    date: Date;
    numTicket: number;

    constructor(input?: Ticket) {
        if (input != null) {
            Object.assign(this, input);
        }

    }

}
