import { Component } from "@angular/core";

import { UserDocumentModel } from "src/shared/model/user-document";
import { UserDocumentService } from "src/shared/service/user-document";

@Component({
    selector: "app-user-document",
    templateUrl: "./user-document.component.html",
    styleUrls: ["./user-document.component.scss"]
})
export class UserDocumentComponent {

    private get list(): UserDocumentModel[] {
        return this.userDocumentService.list;
    }

    constructor(
        private readonly userDocumentService: UserDocumentService
    ) { }

    public add(): void {
        const documentCount = this.list.length + 1;

        const document = new UserDocumentModel(
            `passport-${documentCount}`,
            `xyz-${documentCount}`
        );

        this.userDocumentService.addDocument(document);
    }
}
