import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Message, TOKEN_MESSAGES_SERVICE, MessagesService} from "./messages.service";

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
class MessagesComponent implements OnInit {

    messages: Message[] = [];

    constructor(@Inject(TOKEN_MESSAGES_SERVICE) private messageService: MessagesService) {
    }

    ngOnInit(): void {
        this.fetchServerMessages();
    }

    fetchServerMessages() {
        this.messageService.fetchServerMessages().subscribe(messages => {
            return this.messages = messages;
        });
    }
}

export {MessagesComponent, Message};