import { Course } from "src/app/core/models/Course";
import CoursesJson from "src/mock/data/mock-canvas-endpoint/courses.json";
import SectionsJson from "src/mock/data/mock-canvas-endpoint/sections.json";
import { MockCourse } from "src/mock/models/mock-canvas-models/Course";
import { MockSection } from "src/mock/models/mock-canvas-models/Section";

export class CCourseInfoPipe {

    courses:Course[] = new Array();

    createCourses() {
        var section;
        let mockCourses:MockCourse[] = JSON.parse(JSON.stringify(CoursesJson.courses));
        let mockSections:MockSection[] = JSON.parse(JSON.stringify(SectionsJson.sections));
        for(let i in mockCourses) {
            for (let j in mockSections) {
                if (mockSections[j].course_id == mockCourses[i].course_code) {
                    section = mockSections[j].name;
                }
            }
            this.courses[i] = new Course(mockCourses[i].course_code, section, mockCourses[i].name);
        }
    }

    get() {
        if (this.courses != null) {
             return this.courses;
        }
    }
}