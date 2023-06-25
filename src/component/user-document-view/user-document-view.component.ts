import { Component } from "@angular/core";

import { UserDocumentModel } from "src/shared/model/user-document";
import { UserDocumentService } from "src/shared/service/user-document";

@Component({
    selector: "app-user-document-view",
    templateUrl: "./user-document-view.component.html",
    styleUrls: ["./user-document-view.component.scss"]
})
export class UserDocumentViewComponent {

    public get list(): UserDocumentModel[] {
        return this.userDocumentService.list;
    }

    public get noDocument(): boolean {
        return this.list.length === 0;
    }

    public readonly cols: string[] = ["Document Type", "Description"];

    constructor(
        private readonly userDocumentService: UserDocumentService
    ) { }
}
