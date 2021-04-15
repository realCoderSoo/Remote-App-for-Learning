import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../features/login/login.component';
import { CoursesComponent } from '../features/courses/courses.component';
import { StudentListComponent } from '../features/studentlist/studentlist.component';
import { AnalyticsComponent } from '../features/analytics/analytics.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'studentlist/:id', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'analytics/:courseid/:studentid', component: AnalyticsComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

