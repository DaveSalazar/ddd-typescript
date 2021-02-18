import { Nullable } from "../../../Shared/domain/Nullable";
import { ProfileId } from "../../shared/domain/ProfileId";
import { Profile } from "./Profile";

export interface ProfileRepository {
  save(course: Profile): Promise<void>;
  find(id: ProfileId): Promise<Nullable<Profile>>;
  search(): Promise<Array<Profile>>;
}
