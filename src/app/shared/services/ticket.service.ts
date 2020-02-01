import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

 static URL = 'http://localhost:3000/tickets';

 editable = false;

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(TicketService.URL);
  }

  getTicketById(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(TicketService.URL + id);
  }

  createTicket(newTicket): Observable<Ticket[]> {
    return this.http.post<Ticket[]>(TicketService.URL, newTicket);
  }

  updateTicket(ticketUpdate): Observable<Ticket[]> {
    const id = ticketUpdate.id;
    return this.http.put<Ticket[]>(TicketService.URL + id, ticketUpdate);
  }



  deleteTicket(id: number): Observable<any> {
  return this.http.delete(TicketService.URL + '/' + id);
  }


}
