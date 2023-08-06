import {Message, MessagesService} from "./messages.service";
import {Observable} from "rxjs";

export class MessagesServiceMock implements MessagesService {

    private _messages: Message[] = [];

    get messages(): Message[] {
        return this._messages;
    }

    set messages(value: Message[]) {
        this._messages = value;
    }

    fetchServerMessages(): Observable<Message[]> {
        return new Observable(observer => {
            observer.next(this._messages);
            observer.complete()
        });
    }
}