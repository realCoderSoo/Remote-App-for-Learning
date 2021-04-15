import { Course } from "./Course";
import { Grade } from "./Grade";
import { Parent } from "./Parent";

export class Student {
    googleClassroomUsername: string;
	canvasUsername: string;
	brightspaceUsername: string;
	studentNumber: string;
	firstName: string;
	middleName: string;
	lastName: string;
	grades: Grade[];
	courses: Course[];
	parents: Parent[];

	constructor (studentNumber: string, firstName: string, middleName: string, lastName: string) {
		this.studentNumber = studentNumber;
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

	setGrades(grades: Grade[]) {
		this.grades = grades;
	}

	addGrade(grade: Grade) {
		this.grades.push(grade);
	}

	setCourses(courses: Course[]) {
		this.courses = courses;
	}

	setParents(parents: Parent[]) {
		this.parents = parents;
	}

	addParent(parent: Parent) {
		this.parents.push(parent);
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

	getStudentNumber() {
		return this.studentNumber;
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

	getGrades() {
		if (this.grades != null) {
			return this.grades;
		}
	}

	getCourses() {
		if (this.courses != null) {
			return this.courses;
		}
	}

	getParents() {
		if (this.parents != null) {
			return this.parents;
		}
	}
}