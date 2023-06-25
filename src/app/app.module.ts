import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";

import { UserContactComponent } from "src/component/user-contact";
import { UserContactViewComponent } from "src/component/user-contact-view";
import { UserDocumentComponent } from "src/component/user-document";
import { UserDocumentViewComponent } from "src/component/user-document-view";
import { UserInfoComponent } from "src/component/user-info";
import { UserInfoCardComponent } from "src/component/user-info-card";

@NgModule({
    declarations: [
        AppComponent,
        UserContactComponent,
        UserContactViewComponent,
        UserDocumentComponent,
        UserDocumentViewComponent,
        UserInfoComponent,
        UserInfoCardComponent
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
