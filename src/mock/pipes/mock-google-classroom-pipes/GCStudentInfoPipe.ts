import { Student } from "src/app/core/models/Student";
import StudentsJson from "src/mock/data/mock-google-classroom-endpoint/students.json";
import { MockStudent } from "src/mock/models/mock-google-classroom-models/Student";

export class GCStudentInfoPipe {

    students:Student[] = new Array();

    createStudents() {
        let mockStudents:MockStudent[] = JSON.parse(JSON.stringify(StudentsJson["courses.students"]));
        for(let i in mockStudents) {
            this.students[i] = new Student(mockStudents[i].userId, mockStudents[i].profile.name.givenName,
            "", mockStudents[i].profile.name.familyName);
        }
    }

    get() {
        if (this.students != null) {
             return this.students;
        }
    }
}