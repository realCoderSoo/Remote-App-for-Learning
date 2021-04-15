import { GradeCombo } from 'src/mock/pipes/combine_endpoints_pipe/GradeCombo';
import { StudentCombo } from 'src/mock/pipes/combine_endpoints_pipe/StudentCombo';
import { StudentGrade } from '../models/StudentGrade';

export class StudentGradeCalculation {
  students: StudentCombo;
  grades: GradeCombo;

  constructor() {
    this.students = new StudentCombo();
    this.grades = new GradeCombo();
  }

  getAllStudentsAndGradesForCourse(courseCode: string) {
    let unsortedStudentsArray = Object.values(this.students.getAllStudents());
    let tempGrades = new Array();
    let relevantGrades = new Array();
    let studentGradesArray: StudentGrade[] = new Array();
    let studentsArray = new Array();
    let incrementNumber = 0;
    tempGrades = this.grades.getAll();
    for (let i in tempGrades) {
      if (tempGrades[i].courseCode == courseCode) {
        relevantGrades.push(tempGrades[i]);
      }
    }
    for (let i in unsortedStudentsArray) {
      for (let j in relevantGrades) {
        if (
          unsortedStudentsArray[i].studentNumber ==
            relevantGrades[j].studentNumber &&
          !studentsArray.includes(unsortedStudentsArray[i])
        ) {
          studentsArray.push(unsortedStudentsArray[i]);
          let individualStudentGrade = this.getIndividualStudentGrade(
            courseCode,
            unsortedStudentsArray[i].studentNumber
          );
          studentGradesArray[incrementNumber] = new StudentGrade(
            unsortedStudentsArray[i].studentNumber,
            unsortedStudentsArray[i].firstName,
            unsortedStudentsArray[i].lastName,
            individualStudentGrade
          );
          incrementNumber++;
        }
      }
    }
    return studentGradesArray;
  }

  getIndividualStudentGrade(courseCode: string, studentNumber: string) {
    let relevantGrades = this.grades.getRelevantStudentGrades(
      studentNumber,
      courseCode
    );
    let overallPercentage =
      relevantGrades.reduce((a, b) => a + b) / relevantGrades.length;
    overallPercentage = Number(
      (Math.round(overallPercentage * 10) / 10).toFixed(1)
    );
    return overallPercentage;
  }
}
