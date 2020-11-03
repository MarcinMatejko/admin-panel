import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  maxDate: Date;

  client: Client;
  @ViewChild('clientForm') form: any;


  constructor() {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 18, 10, 0);
   }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}
