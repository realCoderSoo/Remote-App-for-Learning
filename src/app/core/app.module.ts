import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from '../features/login/login.component';
import { CoursesComponent } from '../features/courses/courses.component';
import { StudentListComponent } from '../features/studentlist/studentlist.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { AnalyticsComponent } from '../features/analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppComponent } from './components/main/app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoursesComponent,
    StudentListComponent,
    NotFoundComponent,
    AnalyticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    NgCircleProgressModule.forRoot({}),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
