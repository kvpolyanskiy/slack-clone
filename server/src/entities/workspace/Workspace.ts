import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, BaseEntity, Unique, JoinColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { User } from '../user';

@ObjectType()
@Entity('workspaces')
@Unique(['name'])
export class Workspace extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({nullable: true})
  ownerId: string;

  @Field()
  @Column('bytea', {nullable: true})
  avatar: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'ownerId'})
  owner: User;
}
