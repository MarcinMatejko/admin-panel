import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { NgForm} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { Client } from 'src/app/models/Client';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    dob: null,
    industry: '',
    subcategory: '',
    phone: '',
    email: '',
    id: null
  };

  maxDate: Date;
  @ViewChild('clientForm') form: NgForm;


  constructor(
    private clientService: ClientService,
    private router: Router
    ) {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 18, 10, 0);
   }

  ngOnInit(): void {

  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {

    console.log(value, valid)

    if(!valid) {
      console.log('Wypełnij formularz')
    } else {
      this.clientService.newClient(value).subscribe(client => {
      this.router.navigate(['/'])
       });
    }

  }
}
