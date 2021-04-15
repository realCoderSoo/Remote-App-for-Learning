import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { StudentGradeCalculation } from 'src/app/core/calculations/StudentGradeCalculation';
import { Student } from 'src/app/core/models/Student';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';
import { StudentCombo } from 'src/mock/pipes/combine_endpoints_pipe/StudentCombo';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  student: string;
  course: string;
  studentGradeCalculation: StudentGradeCalculation;
  allStudentInfo: StudentCombo;
  fullStudent: Student;
  overallPercentage: number;
  progressColor;
  progressColorLight;

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {
    this.ngOnInit();
    this.studentGradeCalculation = new StudentGradeCalculation();
    this.loadGradeColours();
    this.allStudentInfo = new StudentCombo();
    this.fullStudent = this.allStudentInfo.getStudent(this.student);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.student = (<any>this.route.snapshot.params).studentid;
      this.course = (<any>this.route.snapshot.params).courseid;
    });
  }

  loadGradeColours() {
    this.overallPercentage = this.studentGradeCalculation.getIndividualStudentGrade(
      this.course,
      this.student
    );
    switch (true) {
      case this.overallPercentage >= 90:
        this.progressColor = '#218513';
        this.progressColorLight = '#2bad18';
        break;
      case this.overallPercentage >= 80:
        this.progressColor = '#61de21';
        this.progressColorLight = '#80e54b';
        break;
      case this.overallPercentage >= 70:
        this.progressColor = '#d5e41b';
        this.progressColorLight = '#dbe73b';
        break;
      case this.overallPercentage >= 60:
        this.progressColor = '#ee7a11';
        this.progressColorLight = '#f18931';
        break;
      case this.overallPercentage >= 50:
        this.progressColor = '#e93d16';
        this.progressColorLight = '#ed5f3e';
        break;
      default:
        this.progressColor = 'red';
        this.progressColorLight = 'red';
        break;
    }
  }

  // grade data line chart setup

  public lineChartData: ChartDataSets[] = [
    { data: [1, 2, 0, 1, 4, 1, 0], label: 'Tasks Completed' },
  ];
  public lineChartLabels: Label[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#000',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  setPageTheme() {
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

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
  ];

  public chartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
