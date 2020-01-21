import { InputType, Field } from 'type-graphql';

@InputType()
export class AddMessageInput {
  @Field()
  text: string;

  @Field()
  channelId: string;
}
