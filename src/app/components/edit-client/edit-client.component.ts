import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/models/Client';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
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
    id: '',
  };
  maxDate: Date;

  private map = new Map<string, string[]>([
    ['Finanse', ['Bank', 'Ubezpieczenia']],
    ['Media', ['TV', 'Radio']],
    ['Podróże', ['Krajowe', 'Zagraniczne']],
  ]);

  industry: string;
  subcateogory: string;

  get industries(): string[] {
    return Array.from(this.map.keys());
  }

  get subcategories(): string[] | undefined {
    return this.map.get(this.industry);
  }

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 18, 10, 0);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientService
      .getClient(this.id)
      .subscribe((client) => (this.client = client));
  }

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    if (!valid) {
      console.log('Wypełnij formularz');
    } else {
      value.id = this.id;
      this.clientService.updateClient(value).subscribe();
      this.router.navigate(['/']);
    }
  }
}
