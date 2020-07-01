import {Component, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {MessageService} from "../../services/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  message = new Message();

  constructor(private messageService: MessageService, private router: Router) {
  }

  ngOnInit(): void {

  }

  addMessage() {
    this.messageService.add(this.message).subscribe(() => {
      this.router.navigate(['/messages']);
    });
  }
}
