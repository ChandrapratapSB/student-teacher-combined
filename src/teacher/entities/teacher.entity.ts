import { ObjectType, Field } from '@nestjs/graphql';
import { Student } from 'src/student/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Teacher {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  subject: string;

  @OneToMany(() => Student, (student) => student.teacher)
  @Field(() => [Student], { nullable: true })
  students: Student[];
}
