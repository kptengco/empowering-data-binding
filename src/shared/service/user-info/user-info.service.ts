import { Injectable } from "@angular/core";

import { UserInfoModel } from "src/shared/model/user-info";

@Injectable()
export class UserInfoService {

    public get firstName(): string {
        return this.info?.firstName;
    }

    public get lastName(): string {
        return this.info?.lastName;
    }

    public get birthdate(): string {
        return this.info?.birthdate;
    }

    private info!: UserInfoModel;

    public updateInfo(contact: UserInfoModel): void {
        this.info = contact;
    }
}
