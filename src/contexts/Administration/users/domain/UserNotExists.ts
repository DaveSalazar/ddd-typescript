import { UserEmail } from "./UserEmail";

export class UserNotExists extends Error {
  constructor(email: UserEmail) {
    super(`User email: ${email.value} not exists`);
  }
}
