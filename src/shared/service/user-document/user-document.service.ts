import { Injectable } from "@angular/core";

import { UserDocumentModel } from "src/shared/model/user-document";

@Injectable()
export class UserDocumentService {

    private readonly _list: UserDocumentModel[] = [];

    public get list(): UserDocumentModel[] {
        return this._list;
    }

    public addDocument(contact: UserDocumentModel): void {
        this._list.push(contact);
    }
}
