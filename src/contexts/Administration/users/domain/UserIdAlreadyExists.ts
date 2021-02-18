import { UserId } from "../../shared/domain/UserId";

export class UserIdAlreadyExists extends Error {
    constructor(id: UserId) {
        super(`User id ${id.value} already exists`);
      }
}