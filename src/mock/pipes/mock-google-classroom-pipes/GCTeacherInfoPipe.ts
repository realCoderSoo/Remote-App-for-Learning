import { Teacher } from "src/app/core/models/Teacher";
import TeachersJson from "src/mock/data/mock-google-classroom-endpoint/teachers.json";
import { MockTeacher } from "src/mock/models/mock-google-classroom-models/Teacher";

export class GCTeacherInfoPipe {

    teachers:Teacher[] = new Array();

    createTeachers() {
        let mockTeachers:MockTeacher[] = JSON.parse(JSON.stringify(TeachersJson["courses.teachers"]));
        for(let i in mockTeachers) {
            this.teachers[i] = new Teacher(mockTeachers[i].userId, mockTeachers[i].profile.name.givenName,
            "", mockTeachers[i].profile.name.familyName);
        }
    }

    get() {
        if (this.teachers != null) {
             return this.teachers;
        }
    }
}