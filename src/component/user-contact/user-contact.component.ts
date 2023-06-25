import { Component } from "@angular/core";

import { UserContactModel } from "src/shared/model/user-contact";
import { UserContactService } from "src/shared/service/user-contact";

@Component({
    selector: "app-user-contact",
    templateUrl: "./user-contact.component.html",
    styleUrls: ["./user-contact.component.scss"]
})
export class UserContactComponent {

    private get list(): UserContactModel[] {
        return this.userContactService.list;
    }

    constructor(
        private readonly userContactService: UserContactService
    ) { }

    public add(): void {
        const contactCount = this.list.length + 1;

        const contact = new UserContactModel(
            `12345-${contactCount}`,
            `abc.${contactCount}@gmail.com`,
            `Contact ${contactCount}`
        );

        this.userContactService.addContact(contact);
    }
}
