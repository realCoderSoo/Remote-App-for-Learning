import { Component, OnInit } from '@angular/core';
import { CourseIconLookup } from 'src/app/core/lookup-tables/CourseIconLookup';
import { CourseIcon } from 'src/app/core/models/CourseIcon';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';
import { CourseCombo } from 'src/mock/pipes/combine_endpoints_pipe/CourseCombo';
import { TeacherCombo } from 'src/mock/pipes/combine_endpoints_pipe/TeacherCombo';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  teachers:TeacherCombo;
  courses:CourseCombo;
  coursesArray = new Array();
  coursesAndIconsArray = new Array();
  courseIconLookup:CourseIconLookup;
  routingPage = 'Student';
  studentNumber:string;

  tester = 'fas fa-archway';

  constructor(private localStorageService: LocalStorageService) {
    this.loadTeachers();
    this.loadCourses();
    this.localStorageService.setItem("StudentID", "000001");
    this.studentNumber = this.localStorageService.getItem("StudentID");
  }

  ngOnInit(): void {
    if (this.localStorageService.getItem('Route') == "Student") {
      this.routingPage = 'Student';
    } else {
      this.routingPage = 'Teacher';
    }
  }

  loadTeachers() {
    this.teachers = new TeacherCombo();
  }

  loadCourses() {
    this.courses = new CourseCombo();
    this.coursesArray = Object.values(this.courses.get());
    this.courseIconLookup = new CourseIconLookup();
    var tempIcon: string;
    var tempCourseIcon: CourseIcon;
    for (var i in this.coursesArray) {
      tempIcon = this.courseIconLookup.getCourseIcon(this.coursesArray[i].name);
      tempCourseIcon = new CourseIcon(this.coursesArray[i].name, this.coursesArray[i].courseCode, tempIcon);
      this.coursesAndIconsArray.push(tempCourseIcon);
    }
  }

  setHeaderTheme() {
    var color;
    if (this.localStorageService.getItem('theme') === 'light') {
      color = '#000';
    } else if (this.localStorageService.getItem('theme') === 'dark') {
      color = '#FFFFFF';
    }
    let styles = {
      'color': color
    };
    return styles;
  }

  setButtonTheme() {
    var backgroundColor;
    var border;
    var color;
    if (this.localStorageService.getItem('theme') === 'light') {
      backgroundColor = '#FFFFFF';
      color = '#000';
      border = 'solid 1px #C1C3D1';
    } else if (this.localStorageService.getItem('theme') === 'dark') {
      backgroundColor = '#1a2c42';
      color = '#FFFFFF';
      border = 'solid 1px #6a7b8f';
    }
    let styles = {
      'background-color': backgroundColor,
      'color': color,
      'border': border
    };
    return styles;
  }

  setButtonBackgroundTheme() {
    var backgroundColor;
    var color;
    if (this.localStorageService.getItem('theme') === 'light') {
      backgroundColor = '#bdbdbd';
      color = '#000';
    } else if (this.localStorageService.getItem('theme') === 'dark') {
      backgroundColor = '#FFFFFF';
      color = '#FFFFFF';
    }
    let styles = {
      'background-color': backgroundColor,
      'color': color
    };
    return styles;
  }

}
