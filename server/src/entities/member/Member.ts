import { Entity, JoinColumn, ManyToOne, PrimaryColumn, BaseEntity } from 'typeorm';
import { User } from '../user';
import { Workspace } from '../workspace';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('members')
export class Member extends BaseEntity {
  @Field()
  @PrimaryColumn()
  userId: string;

  @Field()
  @PrimaryColumn()
  workspaceId: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'userId'})
  user: User;

  @ManyToOne(() => Workspace)
  @JoinColumn({name: 'workspaceId'})
  workspace: Workspace;
}
