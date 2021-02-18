import { UserEmail } from "./UserEmail";

export class UserIdAlreadyExists extends Error {
    constructor(email: UserEmail) {
        super(`User email ${email.value} already exists`);
      }
}