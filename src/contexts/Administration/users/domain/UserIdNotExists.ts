import { UserId } from "../../shared/domain/UserId";

export class UserIdNotExists extends Error {
    constructor(id: UserId) {
        super(`User id ${id.value} not exists`);
      }
}