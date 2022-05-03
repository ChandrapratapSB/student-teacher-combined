import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { StudentCreateDTO } from './dto/create-student.input';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';

@Resolver(() => Student)
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
  createStudent(@Args('studentInput') student: StudentCreateDTO) {
    return this.studentService.create(student);
  }

  @ResolveField(() => Teacher)
  teacher(@Parent() student: Student) {
    return this.studentService.getClassTeacher(student.teacherId);
  }
}
