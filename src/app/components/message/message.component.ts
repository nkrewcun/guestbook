import {Component, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  id: number;
  message: Message;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.messageService.getById(this.id).subscribe((data: Message) => {
      this.message = data;
      this.isLoading = false;
    });

  }

}
