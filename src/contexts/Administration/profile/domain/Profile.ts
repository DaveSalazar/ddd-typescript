import { AggregateRoot } from "../../../Shared/domain/AggregateRoot";
import { ProfileId } from "../../shared/domain/ProfileId";
import { ProfileFirstName } from "./ProfileFirstName";
import { ProfileLastName } from "./ProfileLastName";

export class Profile extends AggregateRoot {
  readonly id: ProfileId;
  readonly firstName: ProfileFirstName;
  readonly lastName: ProfileLastName;

  constructor(
    id: ProfileId,
    firstName: ProfileFirstName,
    lastName: ProfileLastName
  ) {
    super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toPrimitives() {
    throw new Error("Method not implemented.");
  }
}
