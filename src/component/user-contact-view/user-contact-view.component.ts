import { Component } from "@angular/core";

import { UserContactModel } from "src/shared/model/user-contact";
import { UserContactService } from "src/shared/service/user-contact";

@Component({
    selector: "app-user-contact-view",
    templateUrl: "./user-contact-view.component.html",
    styleUrls: ["./user-contact-view.component.scss"]
})
export class UserContactViewComponent {

    public get list(): UserContactModel[] {
        return this.userContactService.list;
    }

    public get noContact(): boolean {
        return this.list.length === 0;
    }

    public readonly cols: string[] = ["Description", "Phone", "Email"];

    constructor(
        private readonly userContactService: UserContactService
    ) { }
}
