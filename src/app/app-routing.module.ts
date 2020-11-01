import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';

import { ClientsComponent } from './components/clients/clients.component'
import { AddClientComponent } from './components/add-client/add-client.component'
import { EditClientComponent } from './components/edit-client/edit-client.component'

const routes: Routes = [
  {path: '', component: ClientsComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent}
]
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
