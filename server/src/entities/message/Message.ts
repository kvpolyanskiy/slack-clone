import { PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn, Column, CreateDateColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from '../user';
import { Channel } from '../channel';

@ObjectType()
@Entity('messages')
export class Message extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Column()
  userId: string;

  @Field()
  @Column()
  channelId: string;

  @Field()
  @Column()
  text: string;

  @ManyToOne(() => Channel, (channel) => channel.messages)
  @JoinColumn({name: 'channelId'})
  channel: Channel;

  @Field(() => User, {nullable: true})
  @ManyToOne(() => User)
  @JoinColumn({name: 'userId'})
  user: Promise<User>;
}
