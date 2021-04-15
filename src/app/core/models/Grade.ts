export class Grade {
    courseCode: string;
	studentNumber: string;
	percentageGrade: number;

	constructor (courseCode: string, studentNumber: string, percentageGrade: number) {
        this.courseCode = courseCode;
        this.studentNumber = studentNumber;
		this.percentageGrade = percentageGrade;
    }
}