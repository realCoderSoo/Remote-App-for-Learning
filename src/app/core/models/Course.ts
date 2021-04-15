export class Course {
    courseCode: string;
    section: string;
	name: string;

    constructor (courseCode: string, section: string, name: string) {
        this.courseCode = courseCode;
        this.section = section;
        this.name = name;
    }
}