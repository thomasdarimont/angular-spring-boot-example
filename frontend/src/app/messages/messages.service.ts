import {Injectable, InjectionToken} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


interface Message {
    id: string;
    text: string;
}

interface MessagesService {
    fetchServerMessages(): Observable<Message[]>
}

const TOKEN_MESSAGES_SERVICE = new InjectionToken<MessagesService>("MESSAGES_SERVICE");

@Injectable()
class MessagesServiceImpl implements MessagesService{

    public constructor(protected http: HttpClient) {
    }

    public fetchServerMessages(): Observable<Message[]> {
        return this.http.get<Message[]>("api/myapp/messages");
    }
}

export {Message, MessagesService, MessagesServiceImpl, TOKEN_MESSAGES_SERVICE}