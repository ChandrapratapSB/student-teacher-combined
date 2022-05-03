import { Field, ObjectType } from '@nestjs/graphql';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Field({ nullable: true })
  @Column({ nullable: true })
  section: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.students)
  @Field(() => Teacher)
  teacher: Teacher;

  @Column()
  @Field()
  teacherId: string;
}
