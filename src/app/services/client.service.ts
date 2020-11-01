import { Injectable } from '@angular/core';

// import { Observable } from "rxjs";
// import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients() {
    return [
      {
        "firstName": "Andrzej",
        "lastName": "Doe",
        "dob": new Date(1995,11,17),
        "industry": "Finanse",
        "subcategory": "Bank",
        "phone": "123456789",
        "email": "andrzej@gmail.com"
      },
      {
        "firstName": "Marek",
        "lastName": "Smith",
        "dob": new Date(1990,5,22),
        "industry": "Media",
        "subcategory": "Radio",
        "phone": "987654321",
        "email": "marek@gmail.com"
      },
      {
        "firstName": "Patryk",
        "lastName": "Williams",
        "dob": new Date(1980,12,28),
        "industry": "Podróże",
        "subcategory": "Krajowe",
        "phone": "789456123",
        "email": "patryk@gmail.com"
      },
      {
        "firstName": "Bartek",
        "lastName": "Sroka",
        "dob": new Date(1980,12,28),
        "industry": "Podróże",
        "subcategory": "Zagraniczne",
        "phone": "789456123",
        "email": "patryk@gmail.com"
      },
    ];
  }
  }

