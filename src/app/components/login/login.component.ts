import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {
    login: 'marcin',
    password: '123',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    this.user = value;
    if (value.login === 'marcin' && value.password === '123') {
      localStorage.setItem('loggedIn', 'jestes zalogowany');
      this.router.navigate(['/']);
    }
  }
}
