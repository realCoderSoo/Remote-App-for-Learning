import { Student } from 'src/app/core/models/Student';
import { GradeValue } from 'src/mock/models/mock-brightspcae-models/Gradevalue';
import GradeValueJson from 'src/mock/data/mock-brightspace-endpoint/gradeValue.json';
import { UserInfoPipe } from './BSUserInfoPipe';
import { Grade } from 'src/app/core/models/Grade';

export class BSGradePipe {
  users: UserInfoPipe;
  students: Student[] = new Array();
  grades: GradeValue[] = new Array();
  updateGrade: Grade[] = new Array();

  getGrades() {
    this.grades = JSON.parse(
      JSON.stringify(GradeValueJson['Grade.GradeValue'])
    );

    this.grades.forEach((val) => {
      this.updateGrade.push(
        new Grade(val.GradeObjectIdentifier, val.UserId, val.DisplayedGrade)
      );
    });

    return this.updateGrade;
  }
}
