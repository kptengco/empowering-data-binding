import { Injectable } from "@angular/core";

import { UserContactModel } from "src/shared/model/user-contact";

@Injectable()
export class UserContactService {

    private readonly _list: UserContactModel[] = [];

    public get list(): UserContactModel[] {
        return this._list;
    }

    public addContact(contact: UserContactModel): void {
        this._list.push(contact);
    }
}
