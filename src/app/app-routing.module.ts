import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessagesComponent} from "./components/messages/messages.component";
import {MessageComponent} from "./components/message/message.component";
import {EditMessageComponent} from "./components/edit-message/edit-message.component";
import {AddMessageComponent} from "./components/add-message/add-message.component";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages/add', component: AddMessageComponent},
  {path: 'messages/:id', component: MessageComponent},
  {path: 'messages/edit/:id', component: EditMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
