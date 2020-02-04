import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

 static URL = 'http://localhost:3000/tickets';

//  editable = false;

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<any> {
    return this.http.get(TicketService.URL);
  }

  getTicketById(id: number): Observable<any> {
    return this.http.get(TicketService.URL + id);
  }

  createTicket(newTicket: Ticket): Observable<any> {
    return this.http.post(TicketService.URL, newTicket);
  }

  updateTicket(ticketUpdate: Ticket): Observable<any> {
    const id = ticketUpdate.id;
    return this.http.put(TicketService.URL + id, ticketUpdate);
  }

  deleteTicket(id: number): Observable<any> {
  return this.http.delete(TicketService.URL + '/' + id);
  }


}
