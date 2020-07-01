import {Component, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(private route: ActivatedRoute, private messageService: MessageService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.messageService.getById(this.id).subscribe((data: Message) => {
      this.message = data;
      this.isLoading = false;
    });
  }

  delete(id: number) {
    this.isLoading = true;
    this.messageService.removeById(id).subscribe(() => {
      this.router.navigate(['/messages']);
      this.isLoading = false;
    });
  }

}
