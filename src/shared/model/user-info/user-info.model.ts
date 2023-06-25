import { IUserInfo } from "./user-info.interface";

export class UserInfoModel implements IUserInfo {

    constructor(
        public firstName: string,
        public lastName: string,
        public birthdate: string
    ) { }
}
