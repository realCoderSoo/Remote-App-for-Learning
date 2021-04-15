import { Student } from 'src/app/core/models/Student';
import { isJSDocThisTag } from 'typescript';
import { UserInfoPipe } from '../mock-brightspace-pipes/BSUserInfoPipe';
import { CStudentInfoPipe } from '../mock-canvas-pipes/CStudentInfoPipe';
import { GCStudentInfoPipe } from '../mock-google-classroom-pipes/GCStudentInfoPipe';

export class StudentCombo {
  GCstudentBank: GCStudentInfoPipe;
  BSStudentBank: UserInfoPipe;
  CStudentBank: CStudentInfoPipe;
  GCStudents: Student[];
  BSStudent: Student[];
  CStudents: Student[];
  combinedStudents: Student[] = new Array();
  sortedStudents: Student[] = new Array();

  constructor() {
    this.loadPipes();
    this.GCstudentBank.createStudents();
    this.BSStudentBank.createStudents();
    this.CStudentBank.createStudents();
    this.BSStudent = this.BSStudentBank.getStudents();
    this.GCStudents = this.GCstudentBank.get();
    this.CStudents = this.CStudentBank.get();
    for (let i in this.GCStudents) {
      this.combinedStudents[i] = new Student(
        this.GCStudents[i].studentNumber,
        this.GCStudents[i].firstName,
        this.GCStudents[i].middleName,
        this.GCStudents[i].lastName
      );
    }

    this.BSStudent.forEach((val) => {
      this.combinedStudents.push(val);
    });

    this.combinedStudents = this.combinedStudents.concat(this.CStudents);

    var uniqueStudents = this.combinedStudents.filter(
      (v, i, a) =>
        a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
    );

    // console.log(this.combinedStudents);
    this.combinedStudents = uniqueStudents;
  }

  loadPipes() {
    this.GCstudentBank = new GCStudentInfoPipe();
    this.BSStudentBank = new UserInfoPipe();
    this.CStudentBank = new CStudentInfoPipe();
  }

  getAllStudents() {
    if (this.combinedStudents != null) {
      return this.combinedStudents;
    }
  }

  getStudent(studentNumber: string) {
    let student: Student;
    student = this.combinedStudents.find(
      (x) => x.studentNumber == studentNumber
    );
    return student;
  }
}
