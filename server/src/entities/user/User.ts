import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Field()
  @Column({unique: true})
  username: string;

  @Field()
  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column('int', {default: 0})
  tokenVersion: number;
}
