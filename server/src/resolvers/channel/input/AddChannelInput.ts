import { Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class AddChannelInput {
  @Field()
  @Length(3, 255)
  name: string;

  @Field()
  workspaceId: string;
}
