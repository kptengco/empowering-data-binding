import { IUserDocument } from "./user-document.interface";

export class UserDocumentModel implements IUserDocument {

    constructor(
        public documentType: string,
        public description: string
    ) { }
}
