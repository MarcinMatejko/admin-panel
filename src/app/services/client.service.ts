import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { Client } from '../models/Client';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsUrl: string = "http://localhost:3000/clients/";

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  getClient(id: string): Observable<Client>{
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url)
  }

  newClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, client, httpOptions)
  }

  updateClient(client: Client) {
    const url = `${this.clientsUrl}/${client.id}`;
    return this.http.put<Client>(url, client, httpOptions)
  }
}
