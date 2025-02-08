
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateStudentInput {
    name: string;
    sex: boolean;
    age?: Nullable<number>;
}

export class Student {
    id: number;
    name: string;
    sex: boolean;
    age?: Nullable<number>;
}

export class Teacher {
    id: number;
    name: string;
    subject: Nullable<string>[];
    students: Nullable<Student>[];
}

export abstract class IQuery {
    abstract students(): Nullable<Student>[] | Promise<Nullable<Student>[]>;

    abstract studentById(id: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract teachers(): Nullable<Teacher>[] | Promise<Nullable<Teacher>[]>;
}

export class DelStudentRes {
    id: number;
    success: boolean;
}

export abstract class IMutation {
    abstract addStudent(createInput?: Nullable<CreateStudentInput>): Student | Promise<Student>;

    abstract updateStudent(id: number, name?: Nullable<string>, sex?: Nullable<boolean>, age?: Nullable<number>): Nullable<Student> | Promise<Nullable<Student>>;

    abstract delStudent(id: number): DelStudentRes | Promise<DelStudentRes>;
}

type Nullable<T> = T | null;
