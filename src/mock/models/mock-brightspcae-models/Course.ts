import { BasicOrgUnit } from './BasicOrgUnit';

export class MockCourse {
  identifier: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  CourseTemplate: BasicOrgUnit;
  semester: BasicOrgUnit;
  department: BasicOrgUnit;
  description: string;
  canSelfRegister: boolean;
  name: string;
  code: string;
  path: string;
}
