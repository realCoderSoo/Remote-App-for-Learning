import { Grade } from 'src/app/core/models/Grade';
import SubmissionJson from 'src/mock/data/mock-canvas-endpoint/submissions.json';
import AssignmentJson from 'src/mock/data/mock-canvas-endpoint/assignments.json';
import { MockAssignment } from 'src/mock/models/mock-canvas-models/Assignment';
import { MockSubmission } from 'src/mock/models/mock-canvas-models/Submission';

export class CGradeInfoPipe {
  grades: Grade[] = new Array();

  getGrades() {
    let mockAssignments: MockAssignment[] = JSON.parse(
      JSON.stringify(AssignmentJson.assignments)
    );
    let mockSubmissions: MockSubmission[] = JSON.parse(
      JSON.stringify(SubmissionJson.submissions)
    );

    let tempGrade: number;
    let actualGrade: number[] = new Array();

    for (let i in mockAssignments) {
      for (let j in mockSubmissions) {
        if (
          mockSubmissions[j].course.course_code ==
            mockAssignments[i].course_id &&
          mockSubmissions[j].assignment_id == mockAssignments[i].id
        ) {
          tempGrade =
            mockSubmissions[j].grade / mockAssignments[i].points_possible;
        }
      }
      if (tempGrade != null) {
        actualGrade.push(tempGrade);
      } else {
        actualGrade.push(0);
      }
    }

    for (let i in mockSubmissions) {
      this.grades[i] = new Grade(
        mockSubmissions[i].course.course_code,
        mockSubmissions[i].user_id,
        actualGrade[i]
      );
    }

    // console.log(this.grades);
    return this.grades;
  }
}
