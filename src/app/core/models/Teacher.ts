import { Course } from "./Course";
import { Student } from "./Student";

export class Teacher {
    googleClassroomUsername: string;
	canvasUsername: string;
	brightspaceUsername: string;
    teacherNumber: string;
	firstName: string;
	middleName: string;
	lastName: string;
	courses: Course[];
	students: Student[];

	constructor (teacherNumber: string, firstName: string, middleName: string, lastName: string) {
		this.teacherNumber = teacherNumber;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
    }

	setGoogleClassroomUsername(googleClassroomUsername: string) {
		this.googleClassroomUsername = googleClassroomUsername;
	}

	setCanvasUsername(canvasUsername: string) {
		this.canvasUsername = canvasUsername;
	}

	setBrightSpaceUsername(brightspaceUsername: string) {
		this.brightspaceUsername = brightspaceUsername;
	}

	setCourses(courses: Course[]) {
		this.courses = courses;
	}

	setStudents(students: Student[]) {
		this.students = students;
	}

	getGoogleClassroomUsername() {
		if (this.googleClassroomUsername != null) {
			return this.googleClassroomUsername;
		}
	}

	getCanvasUsername() {
		if (this.canvasUsername != null) {
			return this.canvasUsername;
		}
	}

	getBrightspaceUsername() {
		if (this.brightspaceUsername != null) {
			return this.brightspaceUsername;
		}
	}

	getTeacherNumber() {
		return this.teacherNumber;
	}

	getFirstName() {
		return this.firstName;
	}

	getMiddleName() {
		return this.middleName;
	}

	getLastName() {
		return this.lastName;
	}

	getCourses() {
		if (this.courses != null) {
			return this.courses;
		}
	}

	getStudents() {
		if (this.students != null) {
			return this.students;
		}
	}
}