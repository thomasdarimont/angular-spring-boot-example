import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ngMocks} from 'ng-mocks';
import {MessagesComponent} from './messages.component';
import {TOKEN_MESSAGES_SERVICE} from "./messages.service";
import {MessagesServiceMock} from "./mock-messages.service";

// auto spy
ngMocks.autoSpy('jasmine');

describe('MessagesComponent', () => {

    let component: MessagesComponent;
    let fixture: ComponentFixture<MessagesComponent>;
    let messagesServiceMock: MessagesServiceMock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            declarations: [MessagesComponent],
            providers: [
                // Provide the mock service using the same InjectionToken as the real service
                {provide: TOKEN_MESSAGES_SERVICE, useClass: MessagesServiceMock}
            ]
        }).compileComponents();

        messagesServiceMock = TestBed.inject(TOKEN_MESSAGES_SERVICE) as MessagesServiceMock;
        fixture = TestBed.createComponent(MessagesComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        // Set the messages directly in the service mock
        messagesServiceMock.messages = [
            {
                id: "1",
                text: "Message 1",
            },
            {
                id: "2",
                text: "Message 2",
            },
            {
                id: "3",
                text: "Message 3",
            },
        ];

        // Manually trigger the component to re-fetch the messages
        fixture.detectChanges();

        expect(component).toBeTruthy();
        expect(component.messages).toBeTruthy();
        expect(component.messages.length).toBe(3);
    });
});
