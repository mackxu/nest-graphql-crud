import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student, Teacher } from 'src/auto.graphql';

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
  @Query('teachers')
  async getTeachers() {
    return teacherList;
  }
  @Mutation('addStudent')
  async createStudent(
    @Args('name') name: string,
    @Args('sex') sex: boolean,
    @Args('age') age?: number,
  ) {
    const oneStudent = {
      id: Math.floor(Math.random() * 1000),
      name,
      sex,
      age,
    };

    studentList.push(oneStudent);
    return oneStudent;
  }
}
