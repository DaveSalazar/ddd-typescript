import { Nullable } from "../../../../Shared/domain/Nullable";
import { ProfileId } from "../../../shared/domain/ProfileId";
import { Profile } from "../../domain/Profile";
import { ProfileRepository } from "../../domain/ProfileRepository";

export class InMemoryProfileRepository implements ProfileRepository {
  
  save(course: Profile): Promise<void> {
    throw new Error("Method not implemented.");
  }
  find(id: ProfileId): Promise<Nullable<Profile>> {
    throw new Error("Method not implemented.");
  }
  search(): Promise<Profile[]> {
    throw new Error("Method not implemented.");
  }

}