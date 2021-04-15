import { Course } from 'src/app/core/models/Course';
import { MockCourse } from 'src/mock/models/mock-brightspcae-models/Course';
import CourseOfferingJson from 'src/mock/data/mock-brightspace-endpoint/CourseOffering.json';

export class BSCourseInfoPipe {
  courses: Course[] = new Array();

  createCourses() {
    let mockCourses: MockCourse[] = JSON.parse(
      JSON.stringify(CourseOfferingJson['Course.CourseOffering'])
    );

    mockCourses.forEach((val) => {
      this.courses.push(
        new Course(val.CourseTemplate.name, val.code, val.name)
      );
    });
  }

  get() {
    return this.courses;
  }
}
