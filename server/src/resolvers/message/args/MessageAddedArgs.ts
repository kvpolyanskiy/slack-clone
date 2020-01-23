import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class MessageAddedArgs {
  @Field()
  channelId: string;
}
