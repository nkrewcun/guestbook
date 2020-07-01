import {Component, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.css']
})
export class EditMessageComponent implements OnInit {

  message = new Message();
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private router: Router) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.messageService.getById(id).subscribe((data: Message) => {
      this.message = data;
      this.isLoading = false;
    });
  }

  editMessage(): void {
    this.messageService.edit(this.message).subscribe(() => {
      this.router.navigate(['/messages', this.message.id]);
    });
  }
}
