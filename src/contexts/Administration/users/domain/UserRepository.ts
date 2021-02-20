import { Nullable } from "../../../Shared/domain/Nullable";
import { UserId } from "../../shared/domain/UserId";
import { User } from "./User";

export interface UserRepository {

    save(course: User): Promise<void>;
    find(id: UserId): Promise<Nullable<User>>;
    search(): Promise<Array<User>>;
    all(): Promise<Array<User>>;
}