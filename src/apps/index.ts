import { UserId } from "../contexts/Administration/shared/domain/UserId";
import { GetAllUsers } from "../contexts/Administration/users/application/get_all/GetAllUsers";
import { UserSave } from "../contexts/Administration/users/application/save/UserSave"
import { User } from "../contexts/Administration/users/domain/User";
import { UserEmail } from "../contexts/Administration/users/domain/UserEmail";
import { InMemoryUserRepository } from "../contexts/Administration/users/infrastructure/persistence/InMemoryUserRepository"

const main = async () => {
  console.log('DDD Hexagonl Clean Architecture!')
  const repository = new InMemoryUserRepository();
  const save = new UserSave(repository);
  await save.run(new User(new UserId('529242cc-c3dd-43ac-9cd1-a4cbd8f24bd0'), new UserEmail('asd@asd.com')));
  const all = new GetAllUsers(repository);
  const data = await all.handle()
  console.log(data)
}

main()
