import {Component, OnInit} from '@angular/core';
import {MessageItem} from "./MessageItem";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    messages: MessageItem[] = [];

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.getServerMessages().subscribe(messages => this.messages = messages);
    }

    getServerMessages(): Observable<MessageItem[]> {
        return this.httpClient.get<MessageItem[]>("api/myapp/messages");
    }
}
