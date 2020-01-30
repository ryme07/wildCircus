import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

 static URL = 'http://localhost:3000/tickets';

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(TicketService.URL);
  }

  getTicketById(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(TicketService.URL + id);
  }

  createTicket(newTicket) {
    return this.http.post(TicketService.URL, newTicket);
  }

  updateTicket(ticketUpdate) {
    const id = ticketUpdate.id;
    return this.http.put(TicketService.URL + id, ticketUpdate);
  }

  deleteTicket(id: number) {
    return this.http.delete(TicketService.URL + id);
  }


}
