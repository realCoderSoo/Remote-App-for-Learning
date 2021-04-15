import { Course } from 'src/app/core/models/Course';
import { Grade } from 'src/app/core/models/Grade';
import { BSGradePipe } from '../mock-brightspace-pipes/BSGradePipe';
import { GCGradeInfoPipe } from '../mock-google-classroom-pipes/GCGradeInfoPipe';
import { CGradeInfoPipe } from '../mock-canvas-pipes/CGradeInfoPipe';

export class GradeCombo {
  GCgradeBank: GCGradeInfoPipe;
  BSgradeBank: BSGradePipe;
  CgradeBank: CGradeInfoPipe;
  BSGrades: Grade[];
  GCGrades: Grade[];
  CGrades: Grade[];
  combinedGrades: Grade[] = new Array();

  constructor() {
    this.loadPipes();
    this.GCgradeBank.createGrades();
    this.CGrades = this.CgradeBank.getGrades();
    this.GCGrades = this.GCgradeBank.get();
    this.BSGrades = this.BSgradeBank.getGrades();

    for (let i in this.GCGrades) {
      this.combinedGrades[i] = new Grade(
        this.GCGrades[i].courseCode,
        this.GCGrades[i].studentNumber,
        this.GCGrades[i].percentageGrade
      );
    }

    this.BSGrades.forEach((val) => {
      this.combinedGrades.push(val);
    });

    this.combinedGrades = this.combinedGrades.concat(this.CGrades);
  }

  loadPipes() {
    this.GCgradeBank = new GCGradeInfoPipe();
    this.BSgradeBank = new BSGradePipe();
    this.CgradeBank = new CGradeInfoPipe();
  }

  getAll() {
    if (this.combinedGrades != null) {
      return this.combinedGrades;
    }
  }

  getStudentGrades(studentNumber: string) {
    let returnedGrades: number[] = new Array();
    if (this.combinedGrades != null) {
      for (let i in this.combinedGrades) {
        if (this.combinedGrades[i].studentNumber == studentNumber) {
          returnedGrades.push(this.combinedGrades[i].percentageGrade);
        }
      }
    }
    return returnedGrades;
  }

  getRelevantStudentGrades(studentNumber: string, courseCode: string) {
    let returnedGrades: number[] = new Array();
    if (this.combinedGrades != null) {
      for (let i in this.combinedGrades) {
        if (
          this.combinedGrades[i].studentNumber == studentNumber &&
          this.combinedGrades[i].courseCode == courseCode
        ) {
          returnedGrades.push(this.combinedGrades[i].percentageGrade * 100);
        }
      }
    }
    return returnedGrades;
  }
}
