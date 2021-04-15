export class Role {
  id: string;
  displayName: string;
  code: string;
  desc: string;
  roleAlias: string;
  isCascading: boolean;
  accessFutureCourses: boolean;
  accessInactiveCourses: boolean;
  accessPastCourses: boolean;
  showInGrades: boolean;
  showInUserProgress: boolean;
  inClassList: boolean;
}
