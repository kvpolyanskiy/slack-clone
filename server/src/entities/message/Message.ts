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

  @Field()
  @Column()
  userId: string;

  @Field()
  @Column()
  channelId: string;

  @Field()
  @Column()
  text: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'userId'})
  user: User;

  @ManyToOne(() => Channel)
  @JoinColumn({name: 'channelId'})
  channel: Channel;
}
