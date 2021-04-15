import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  setRoute(route) {
    if (route == 'Teacher') {
      this.localStorageService.setItem('Route', 'Teacher');
    } else if (route == 'Student') {
      this.localStorageService.setItem('Route', 'Student');
    } else if (route == 'Parent') {
      this.localStorageService.setItem('Route', 'Parent');
    }
    // console.log(this.localStorageService.getItem('Route'));
  }
}
