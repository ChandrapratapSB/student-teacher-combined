import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { TeacherService } from 'src/teacher/teacher.service';
import { Repository } from 'typeorm';
import { StudentCreateDTO } from './dto/create-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private teacherService: TeacherService,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOneOrFail(studentId: string): Promise<Student> {
    return this.studentRepository.findOneOrFail(studentId);
  }

  async create(studentDTO: StudentCreateDTO): Promise<Student> {
    const student = this.studentRepository.create(studentDTO);
    return this.studentRepository.save(student);
  }

  async getClassTeacher(id: string): Promise<Teacher> {
    return this.teacherService.findOne(id);
  }
}
