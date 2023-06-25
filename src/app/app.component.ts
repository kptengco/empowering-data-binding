import { Component } from "@angular/core";

import { UserContactService } from "src/shared/service/user-contact";
import { UserDocumentService } from "src/shared/service/user-document";
import { UserInfoService } from "src/shared/service/user-info";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    viewProviders: [
        UserContactService,
        UserDocumentService,
        UserInfoService
    ]
})
export class AppComponent { }
