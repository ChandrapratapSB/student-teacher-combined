import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentCreateDTO } from './dto/create-student.input';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [Student], { name: 'getAllStudents' })
  getAllStudents() {
    return this.studentService.findAll();
  }

  @Query(() => Student, { name: 'getStudentById' })
  getStudentById(@Args('id') studentId: string) {
    return this.studentService.findOneOrFail(studentId);
  }

  @Mutation(() => Student, { name: 'createStudent' })
  createStudent(@Args('student') student: StudentCreateDTO) {
    return this.studentService.create(student);
  }
}
