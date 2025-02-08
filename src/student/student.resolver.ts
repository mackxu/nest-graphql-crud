import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student, Teacher } from 'src/auto.graphql';
import { CreateStudentDto } from './dto/create-student';

const studentList: Student[] = [
  { id: 1, name: 'aaa', sex: false, age: 20 },
  { id: 2, name: 'bbb', sex: true, age: 22 },
  { id: 4, name: 'ccc', sex: false, age: 18 },
];
const teacherList: Teacher[] = [
  {
    id: 1,
    name: 'zhangsan',
    subject: [],
    students: studentList,
  },
];

@Resolver()
export class StudentResolver {
  @Query('students')
  async getStudents() {
    return studentList;
  }
  @Query('studentById')
  async getStudentById(@Args('id') id: number) {
    return studentList.find((s) => s.id === id);
  }
  @Query('teachers')
  async getTeachers() {
    return teacherList;
  }
  @Mutation('addStudent')
  async creat(@Args('createInput') input: CreateStudentDto) {
    const oneStudent = {
      id: Math.floor(Math.random() * 1000),
      ...input,
    };

    console.log(input, 'aaa');

    studentList.push(oneStudent);
    return oneStudent;
  }
  @Mutation('updateStudent')
  async update(
    @Args('id') id: number,
    @Args('name') name: string,
    @Args('sex') sex: boolean,
    @Args('age') age: number,
  ) {
    const entity = studentList.find((s) => s.id === id);
    if (!entity) {
      return null;
    }
    Object.assign(entity, {
      name,
      sex,
      age,
    });
    return entity;
  }

  @Mutation('delStudent')
  async remove(@Args('id') id: number) {
    const idx = studentList.findIndex((s) => s.id === id);
    if (idx === -1) {
      return {
        id,
        success: false,
      };
    }
    studentList.splice(idx, 1);
    return { id, success: true };
  }
}
