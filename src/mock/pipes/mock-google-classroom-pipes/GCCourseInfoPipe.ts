import { Course } from "src/app/core/models/Course";
import CoursesJson from "src/mock/data/mock-google-classroom-endpoint/courses.json";
import { MockCourse } from "src/mock/models/mock-google-classroom-models/Course";

export class GCCourseInfoPipe {

    courses:Course[] = new Array();

    createCourses() {
        let mockCourses:MockCourse[] = JSON.parse(JSON.stringify(CoursesJson.courses));
        for(let i in mockCourses) {
            this.courses[i] = new Course(mockCourses[i].id, mockCourses[i].section, mockCourses[i].name);
        }
    }

    get() {
        if (this.courses != null) {
             return this.courses;
        }
    }
}