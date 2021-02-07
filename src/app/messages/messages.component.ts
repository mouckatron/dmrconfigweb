import { Component, OnInit } from '@angular/core';

import { Message } from '../serviceobjects/Message'
import { MessagesService } from '../services/messages.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    messages: Message[];

    constructor(private messagesService: MessagesService) { }

    ngOnInit(): void {
        this.getMessages();
    }

    getMessages(): void {
        this.messages = this.messagesService.getMessages();
    }

}
