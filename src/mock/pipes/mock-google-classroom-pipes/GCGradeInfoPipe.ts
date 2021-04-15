import { Grade } from "src/app/core/models/Grade";
import StudentSubmissionJson from "src/mock/data/mock-google-classroom-endpoint/studentSubmission.json";
import CourseworkJson from "src/mock/data/mock-google-classroom-endpoint/coursework.json";
import { MockCoursework } from "src/mock/models/mock-google-classroom-models/Coursework";
import { MockStudentSubmission } from "src/mock/models/mock-google-classroom-models/StudentSubmission";

export class GCGradeInfoPipe {

    //mockCourseWork = <MockCoursework[]>JSON.parse(CourseworkJson);
 //mockStudentSubmissions = <MockStudentSubmission[]>JSON.parse(StudentSubmissionJson);
    grades:Grade[] = new Array();

    createGrades() {
        let mockCoursework:MockCoursework[] = JSON.parse(JSON.stringify(CourseworkJson["courses.courseWork"]));
        let mockStudentSubmissions:MockStudentSubmission[] = JSON.parse(JSON.stringify(StudentSubmissionJson["courses.courseWork.studentSubmission"]));

        let tempGrade: number;
        let actualGrade: number[] = new Array();
        for (let i in mockStudentSubmissions) {
            for (let j in mockCoursework) {
                if (mockStudentSubmissions[i].courseId == mockCoursework[j].courseId &&
                    mockStudentSubmissions[i].courseWorkId == mockCoursework[j].id) {
                    tempGrade = mockStudentSubmissions[i].assignedGrade / mockCoursework[j].maxPoints;
                }
            }
            if (tempGrade != null) {
                actualGrade.push(tempGrade);
            } else {
                actualGrade.push(0);
            }
        }
        for(let i in mockStudentSubmissions) {
            this.grades[i] = new Grade(mockStudentSubmissions[i].courseId, mockStudentSubmissions[i].userId, actualGrade[i]);
        }
    }

    get() {
        if (this.grades != null) {
            return this.grades;
       }
    }
}