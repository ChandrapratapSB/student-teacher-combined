import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Student {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  firstName: string;
  
  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  class: string;

  @Field({nullable: true})
  @Column({nullable: true})
  section: string;
}
