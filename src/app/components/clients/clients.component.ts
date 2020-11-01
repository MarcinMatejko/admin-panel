import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  displayedColumns: string[] = ['firstName', 'lastName', 'dob', 'industry', 'subcategory', 'phone', 'email'];

  constructor( private clientService: ClientService) { }

  ngOnInit(): void {
    this.clients = this.clientService.getClients()

  }

}
