import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/models/Client';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    dob: null,
    industry: '',
    subcategory: '',
    phone: '',
    email: '',
    id: ''
  }

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)

    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
      console.log(this.client)

    })



  }

}
