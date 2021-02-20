import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class GetAllUsers {

  readonly repository: UserRepository;
  
  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async handle(): Promise<User[]> {
    return await this.repository.all();
  }
}