import { AggregateRoot } from "../../../Shared/domain/AggregateRoot";
import { UserId } from "../../shared/domain/UserId";
import { UserEmail } from "./UserEmail";

export class User extends AggregateRoot {

    readonly id: UserId;
    readonly email: UserEmail;

    constructor(id: UserId, email: UserEmail) {
        super();
        this.id = id;
        this.email = email;
    }

    toPrimitives() {
        throw new Error("Method not implemented.");
    }

}