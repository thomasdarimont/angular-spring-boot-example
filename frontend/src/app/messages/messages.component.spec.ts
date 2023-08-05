import {ComponentFixture, TestBed} from '@angular/core/testing';
// Http testing module and mocking controller
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {MessagesComponent} from './messages.component';
import {HttpClient} from "@angular/common/http";
import {MessageItem} from "./MessageItem";

describe('MessagesComponent', () => {
    let component: MessagesComponent;
    let fixture: ComponentFixture<MessagesComponent>;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;


    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [MessagesComponent]
        }).compileComponents();

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);

        fixture = TestBed.createComponent(MessagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {

        const testData: MessageItem[] = [
            {
                id: "1",
                text: "Message 1"
            },
            {
                id: "2",
                text: "Message 2"
            },
        ];

        // Make an HTTP GET request
        let messagesUrl = "/api/myapp/messages";
        httpClient.get<MessageItem[]>(messagesUrl)
            .subscribe(data =>
                // When observable resolves, result should match test data
                expect(data).toEqual(testData)
            );

        const req = httpTestingController.expectOne(messagesUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(testData);

        expect(component).toBeTruthy();

        // component.ngOnInit();
        //
        // expect(component.messages).toBeTruthy();
        // expect(component.messages.length).toBe(2);
    });
});
