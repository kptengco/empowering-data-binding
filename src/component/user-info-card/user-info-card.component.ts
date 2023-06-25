import { Component, AfterViewChecked } from "@angular/core";

import { UserContactService } from "src/shared/service/user-contact";
import { UserDocumentService } from "src/shared/service/user-document";
import { UserInfoService } from "src/shared/service/user-info";

@Component({
    selector: "app-user-info-card",
    templateUrl: "./user-info-card.component.html",
    styleUrls: ["./user-info-card.component.scss"]
})
export class UserInfoCardComponent implements AfterViewChecked {

    public get contactCount(): number {
        return this.userContactService.list.length;
    }

    public get documentCount(): number {
        return this.userDocumentService.list.length;
    }

    public get firstName(): string {
        return this.userInfoService.firstName;
    }

    public get lastName(): string {
        return this.userInfoService.lastName;
    }

    public get birthdate(): string {
        return this.userInfoService.birthdate;
    }

    private contactListCount!: number;
    private documentListCount!: number;

    constructor(
        private readonly userContactService: UserContactService,
        private readonly userDocumentService: UserDocumentService,
        private readonly userInfoService: UserInfoService
    ) { }

    public ngAfterViewChecked(): void {
        this.contactCountChanged();
        this.documentCountChanged();
    }

    private contactCountChanged(): void {
        if (this.contactListCount === undefined) {
            this.contactListCount = this.contactCount;
            return;
        }

        if (this.contactListCount !== this.contactCount) {
            this.contactListCount = this.contactCount;

            console.log('UserInfoCardComponent: contact count changed detected, we can do now some API call or whatever process');
        }
    }

    private documentCountChanged(): void {
        if (this.documentListCount === undefined) {
            this.documentListCount = this.documentCount;
            return;
        }

        if (this.documentListCount !== this.documentCount) {
            this.documentListCount = this.documentCount;

            console.log('UserInfoCardComponent: document count changed detected, we can do now some API call or whatever process');
        }
    }
}
