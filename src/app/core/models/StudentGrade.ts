import { Grade } from "src/app/core/models/Grade";
import { Student } from "src/app/core/models/Student";

export class StudentGrade {
    studentNumber: string;
    studentFirstName: string;
    studentLastName: string;
    studentGrade: number;

    constructor(studentNumber: string, studentFirstName: string, studentLastName: string, studentGrade: number) {
        this.studentNumber = studentNumber;
		this.studentFirstName = studentFirstName;
		this.studentLastName = studentLastName;
        this.studentGrade = studentGrade;
    }
}