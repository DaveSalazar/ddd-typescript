import { Nullable } from "../../../../Shared/domain/Nullable";
import { UserId } from "../../../shared/domain/UserId";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  
  private data: Array<User>;
  constructor() {
    this.data = [];
  }

  async all(): Promise<User[]> {
    await setTimeout(() => {}, 1000);
    console.log('data fetched!')
    return this.data;
  }

  async save(user: User): Promise<void> {
   await setTimeout(() => {}, 1000);
   this.data.push(user)
   console.log('data saved!', this.data)
  }

  find(id: UserId): Promise<Nullable<User>> {
    throw new Error("Method not implemented.");
  }

  search(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  

}