import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserSave {

  readonly repository: UserRepository;
  
  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async run(user: User) {
    this.repository.save(user);
  }
}