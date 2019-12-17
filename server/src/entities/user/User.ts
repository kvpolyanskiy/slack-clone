import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique, ManyToMany, JoinTable } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Workspace } from '../workspace';

@ObjectType()
@Entity('users')
@Unique(['email', 'username'])
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Column('int', {default: 0})
  tokenVersion: number;

  @ManyToMany(() => Workspace)
  @JoinTable()
  workspaces: Workspace[];
}
