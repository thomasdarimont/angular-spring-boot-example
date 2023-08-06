import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MessagesComponent} from './messages/messages.component';
import {TOKEN_MESSAGES_SERVICE, MessagesServiceImpl} from "./messages/messages.service";

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ //
        {provide: TOKEN_MESSAGES_SERVICE, useClass: MessagesServiceImpl}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
