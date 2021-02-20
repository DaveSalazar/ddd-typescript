import { UserId } from "../../../shared/domain/UserId";
import { UserNotExists } from "../../domain/UserNotExists";
import { UserRepository } from "../../domain/UserRepository";
import { UserResponse } from "../UserResponse";

export  class UserFinder {

  readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async handle(id: UserId): Promise<UserResponse> {
    const user = await this.repository.find(id)
    if(user)
      return UserResponse.fromAggregate(user);
    else 
      throw new UserNotExists(id)
  }
}