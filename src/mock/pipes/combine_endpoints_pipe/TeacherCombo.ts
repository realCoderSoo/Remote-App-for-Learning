import { Teacher } from "src/app/core/models/Teacher";
import { GCTeacherInfoPipe } from "../mock-google-classroom-pipes/GCTeacherInfoPipe";

export class TeacherCombo {
    GCTeacherBank:GCTeacherInfoPipe;
    GCTeachers:Teacher[];
    CTeachers:Teacher[];
    combinedTeachers:Teacher[] = new Array();
    h:number = 0;
    
    constructor() {
        this.loadPipes();
        this.GCTeacherBank.createTeachers();
        this.GCTeachers = this.GCTeacherBank.get();
        for(let i in this.GCTeachers) {
            this.combinedTeachers[i] = new Teacher(this.GCTeachers[i].teacherNumber,
                this.GCTeachers[i].firstName, this.GCTeachers[i].middleName, this.GCTeachers[i].lastName);
            ++this.h;
        }
        for(let j in this.CTeachers) {
            this.combinedTeachers[this.h] = new Teacher(this.CTeachers[j].teacherNumber,
                this.CTeachers[j].firstName, this.GCTeachers[j].middleName, this.GCTeachers[j].lastName);
            ++this.h;
        }
        var uniqueTeachers = this.combinedTeachers.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i);
        this.combinedTeachers = uniqueTeachers;
    }

    loadPipes() {
        this.GCTeacherBank = new GCTeacherInfoPipe();
    }

    get() {
        if (this.combinedTeachers != null) {
            return this.combinedTeachers;
       }
    }
}