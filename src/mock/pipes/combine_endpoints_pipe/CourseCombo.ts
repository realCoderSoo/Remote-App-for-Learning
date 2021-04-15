import { Course } from 'src/app/core/models/Course';
import { GCCourseInfoPipe } from '../mock-google-classroom-pipes/GCCourseInfoPipe';
import { CCourseInfoPipe } from '../mock-canvas-pipes/CCourseInfoPipe';
import { BSCourseInfoPipe } from '../mock-brightspace-pipes/BSCourseInfoPipe';

export class CourseCombo {
  GCcourseBank: GCCourseInfoPipe;
  CcourseBank: CCourseInfoPipe;
  BScourseBank: BSCourseInfoPipe;
  GCCourses: Course[];
  CCourses: Course[];
  BSCourses: Course[];
  combinedCourses: Course[] = new Array();

  constructor() {
    this.loadPipes();
    this.GCcourseBank.createCourses();
    this.CcourseBank.createCourses();
    this.BScourseBank.createCourses();
    this.BSCourses = this.BScourseBank.get();
    this.GCCourses = this.GCcourseBank.get();
    this.CCourses = this.CcourseBank.get();

    for (var i = 0; i < this.GCCourses.length; i++) {
      this.combinedCourses[i] = new Course(
        this.GCCourses[i].courseCode,
        this.GCCourses[i].section,
        this.GCCourses[i].name
      );
    }

    this.BSCourses.forEach((val) => {
      this.combinedCourses.push(val);
    });

    this.combinedCourses = this.combinedCourses.concat(this.CCourses);

    // console.log(this.combinedCourses);
  }

  loadPipes() {
    this.GCcourseBank = new GCCourseInfoPipe();
    this.CcourseBank = new CCourseInfoPipe();
    this.BScourseBank = new BSCourseInfoPipe();
  }

  get() {
    if (this.combinedCourses != null) {
      return this.combinedCourses;
    }
  }
}
