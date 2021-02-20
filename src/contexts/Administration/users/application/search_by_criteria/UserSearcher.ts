import { UserRepository } from "../../domain/UserRepository";

export class UserSearcher {
  
  readonly repository: UserRepository;
  
  constructor(repository: UserRepository) {
    this.repository = repository
  }
}