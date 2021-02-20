import { User } from "../domain/User";

export class UserResponse {

  readonly id: string;
  readonly email: string;

  constructor(id: string, email: string) {
    this.id = id;
    this.email = email;
  }
  
  public static fromAggregate(user: User): UserResponse {
    return new UserResponse(user.id.value, user.email.value);
  }

}