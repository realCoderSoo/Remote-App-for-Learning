import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';
import { ParentCombo } from 'src/mock/pipes/combine_endpoints_pipe/ParentCombo';
import { StudentGrade } from '../../core/models/StudentGrade';
import { StudentGradeCalculation } from '../../core/calculations/StudentGradeCalculation';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentListComponent implements OnInit {
  parents: ParentCombo;
  studentGradeCalculation: StudentGradeCalculation;
  studentGradesArray: StudentGrade[] = new Array();
  items = ['STUDENT NUMBER', 'FULL NAME', 'CURRENT GRADE'];
  routingPage = 'Student';
  courseCode: string;
  page = 1;
  pageSize = 10;

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {
    this.ngOnInit();
    this.loadParents();
    this.studentGradeCalculation = new StudentGradeCalculation();
    this.studentGradesArray = this.studentGradeCalculation.getAllStudentsAndGradesForCourse(
      this.courseCode
    );
  }

  ngOnInit(): void {
    if (this.localStorageService.getItem('Route') == 'Student') {
      this.routingPage = 'Student';
    } else {
      this.routingPage = 'Teacher';
    }
    this.route.paramMap.subscribe((paramMap) => {
      this.courseCode = paramMap.get('id');
    });
  }

  loadParents() {
    this.parents = new ParentCombo();
  }

  setTheme() {
    var color;
    if (this.localStorageService.getItem('theme') === 'light') {
      color = '#000';
    } else if (this.localStorageService.getItem('theme') === 'dark') {
      color = '#FFFFFF';
    }
    let styles = {
      color: color,
    };
    return styles;
  }

  setTableTheme() {
    var color;
    var backgroundColor;
    if (this.localStorageService.getItem('theme') === 'light') {
      color = '#000';
      backgroundColor = '#FFFFFF';
    } else if (this.localStorageService.getItem('theme') === 'dark') {
      color = '#FFFFFF';
      backgroundColor = '#1a2c42';
    }
    let styles = {
      background: backgroundColor,
      color: color,
    };
    return styles;
  }

  setGradeColor(studentGrade: number) {
    var color;
    switch (true) {
      case studentGrade >= 90:
        color = '#218513';
        break;
      case studentGrade >= 80:
        color = '#61de21';
        break;
      case studentGrade >= 70:
        color = '#d5e41b';
        break;
      case studentGrade >= 60:
        color = '#ee7a11';
        break;
      case studentGrade >= 50:
        color = '#e93d16';
        break;
      default:
        color = 'red';
        break;
    }
    let styles = {
      'border-color': color,
    };
    return styles;
  }
}
