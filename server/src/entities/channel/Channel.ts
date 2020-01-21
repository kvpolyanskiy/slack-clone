import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Workspace } from '../workspace';

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
}
