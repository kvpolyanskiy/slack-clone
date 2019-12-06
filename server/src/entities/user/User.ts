import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

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
}
