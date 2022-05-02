import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentCreateDTO } from './dto/create-student.input';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [Student], { name: 'getAllStudents' })
  getAllStudents() {
    this.studentService.findAll();
  }

  @Mutation(() => Student, { name: 'createStudent' })
  createStudent(@Args('studentInput') student: StudentCreateDTO) {
    this.studentService.create(student);
  }
}
