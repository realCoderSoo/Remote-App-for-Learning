import { Student } from 'src/app/core/models/Student';
import { User } from 'src/mock/models/mock-brightspcae-models/User';
import UsersJson from 'src/mock/data/mock-brightspace-endpoint/users.json';
import { Teacher } from 'src/app/core/models/Teacher';
import { Parent } from 'src/app/core/models/Parent';

export class UserInfoPipe {
  students: Student[] = new Array();
  teachers: Teacher[] = new Array();
  parents: Parent[] = new Array();

  createStudents() {
    let mockUsers: User[] = JSON.parse(
      JSON.stringify(UsersJson['User.UserData'])
    );

    mockUsers.forEach((val) => {
      if (val.roleId == '01') {
        this.students.push(
          new Student(val.userId, val.firstName, val.middleName, val.lastName)
        );
      } else if (val.roleId == '02') {
        this.parents.push(
          new Parent(val.userId, val.firstName, val.middleName, val.lastName)
        );
      } else {
        this.teachers.push(
          new Teacher(val.userId, val.firstName, val.middleName, val.lastName)
        );
      }
    });
  }

  getStudents() {
    return this.students;
  }

  getTeachers() {
    return this.teachers;
  }

  getParents() {
    return this.parents;
  }
}
