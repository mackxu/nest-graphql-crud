
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

    abstract teachers(): Nullable<Teacher>[] | Promise<Nullable<Teacher>[]>;
}

export abstract class IMutation {
    abstract addStudent(name: string, sex: boolean, age?: Nullable<number>): Student | Promise<Student>;

    abstract updateStudent(name?: Nullable<string>, sex?: Nullable<boolean>, age?: Nullable<number>): Student | Promise<Student>;
}

type Nullable<T> = T | null;
