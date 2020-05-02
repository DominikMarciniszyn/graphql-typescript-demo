import { InputType, Field } from 'type-graphql';


@InputType()
export class CreateUserInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  nickname: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
