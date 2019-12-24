import { IsEmail, Length, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(3, 255)
  username: string;

  @Field()
  @MinLength(3)
  password: string;
}
