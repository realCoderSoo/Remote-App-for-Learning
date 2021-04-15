import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'task-reward-application';
  storedTheme: string = localStorage.getItem('theme-color');

  showHead: boolean = false;

  constructor(private router: Router, private localStorageService: LocalStorageService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  setTheme() {
    if (this.storedTheme === 'theme-dark') {
      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = localStorage.getItem('theme-color');
      this.localStorageService.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');
      this.localStorageService.setItem('theme', 'dark');
    }
  }

  getTableTheme() {
    var color;
    var backgroundColor;
    if (this.localStorageService.getItem('theme') === 'light') {
      color = '#000';
      backgroundColor = '#FFFFFF';
    } else if (this.localStorageService.getItem('theme') === 'dark') {
      color =  '#FFFFFF';
      backgroundColor = '#1a2c42';
    }
    let styles = {
      background: backgroundColor,
      color: color,
    };
    return styles;
  }

  getDropdownTheme() {
    var backgroundColor;
    var color;
    var border;
    if (this.localStorageService.getItem('theme') === 'light') {
      backgroundColor = '#FFFFFF';
      color = '#000';
      border = '0.5px solid #c1c3d1'
    } else if (this.localStorageService.getItem('theme') === 'dark') {
      backgroundColor = '#1a2c42';
      color = '#FFFFFF';
      border = '0.5px solid #8d959e'
    }
    let styles = {
      background: backgroundColor,
      color: color,
      border: border
    };
    return styles;
  }

  getTheme() {
    var color;
    if (this.localStorageService.getItem('theme') === 'light') {
      color = '#000';
    } else if (this.localStorageService.getItem('theme') === 'dark') {
      color = '#FFFFFF';
    }
    let styles = {
      color: color
    };
    return styles;
  }
}
