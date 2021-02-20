import { User } from "../domain/User";
import { UserResponse } from "./UserResponse";

export class UsersResponse {
  readonly users: Array<UserResponse>;

  constructor(users: Array<UserResponse>) {
    this.users = users;
  } 

}