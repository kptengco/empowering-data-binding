import { IUserContact } from "./user-contact.interface";

export class UserContactModel implements IUserContact {

    constructor(
        public phone: string,
        public email: string,
        public description: string
    ) { }
}
