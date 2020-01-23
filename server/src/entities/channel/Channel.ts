import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Workspace } from '../workspace';
import { Message } from '../message';
import { Lazy } from '../../types';

@Entity('channels')
@ObjectType()
export class Channel extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  workspaceId: string;

  @ManyToOne(() => Workspace)
  @JoinColumn({name: 'workspaceId'})
  workspace: Workspace;

  @Field(() => [Message])
  @OneToMany(() => Message, (message) => message.channel)
  messages: Lazy<Message[]>;
}
