import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from '../models/user';
import { CreateUserInput } from '../inputs/create_user_input';
import { UpdateUserInput } from '../inputs/update_user_input';


@Resolver()
export class UserResolver {

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User)
  user(@Arg("id") id: string) {
    return User.findOne({ where: { id }});
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = User.create(data);
    await user.save();
    return user;
  }

  @Mutation(() => User)
  async updateUser(@Arg("id") id: string, @Arg("data") data: UpdateUserInput) {
    const user = await User.findOne({ where: { id }});

    if (!user) {
      throw new Error(`The user with id: ${id} does not exist!`);
    }

    Object.assign(user, data);
    await user.save();

    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: string) {
    const user = await User.findOne({ where: { id }});

    if (!user) {
      throw new Error(`The user with id: ${id} does not exist!`);
    }

    await user.remove();
    return true;
  }
}
