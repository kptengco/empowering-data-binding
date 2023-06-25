import { Component, OnInit } from "@angular/core";

import { UserInfoModel } from "src/shared/model/user-info";
import { UserInfoService } from "src/shared/service/user-info";

@Component({
    selector: "app-user-info",
    templateUrl: "./user-info.component.html",
    styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {

    public get firstName(): string {
        return this.userInfoService.firstName;
    }

    public get lastName(): string {
        return this.userInfoService.lastName;
    }

    public get birthdate(): string {
        return this.userInfoService.birthdate;
    }

    private updateCounter: number = 0;

    constructor(
        private readonly userInfoService: UserInfoService
    ) { }

    public ngOnInit(): void {
        this.userInfoService.updateInfo(new UserInfoModel(
            "bob",
            "doe",
            "1970-01-01"
        ));
    }

    public update(): void {
        this.updateCounter++;

        this.userInfoService.updateInfo(new UserInfoModel(
            "bob",
            "doe",
            `${1970 + this.updateCounter}-01-01`
        ));
    }
}
