import { Component, OnInit } from '@angular/core';
import {Message} from "../../models/message";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  isLoading: boolean;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.messageService.getAll().subscribe((data: Message[]) => {
      this.messages = data;
      console.log(data);
      this.isLoading = false;
    });
  }

}
