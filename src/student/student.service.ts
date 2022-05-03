import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCreateDTO } from './dto/create-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOneOrFail(studentId: string): Promise<Student> {
    return this.studentRepository.findOneOrFail(studentId);
  }

  async create(studentDTO: StudentCreateDTO): Promise<Student> {
    let student = this.studentRepository.create(studentDTO);
    return this.studentRepository.save(student);
  }
}
