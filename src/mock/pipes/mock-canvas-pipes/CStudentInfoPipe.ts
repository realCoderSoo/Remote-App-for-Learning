import { Student } from "src/app/core/models/Student";
import StudentsJson from "src/mock/data/mock-canvas-endpoint/students.json";
import { MockStudent } from "src/mock/models/mock-canvas-models/Student";

export class CStudentInfoPipe {

    students:Student[] = new Array();

    createStudents() {
        let mockStudents:MockStudent[] = JSON.parse(JSON.stringify(StudentsJson.users));
        for(let i in mockStudents) {
            var mockStudentSplitName = mockStudents[i].name.split(" ", 2);
            this.students[i] = new Student(mockStudents[i].id, mockStudentSplitName[0],
            "", mockStudentSplitName[1]);
        }
    }

    get() {
        if (this.students != null) {
             return this.students;
        }
    }
}