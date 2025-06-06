import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Order Management System';
  showLayout = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // If on login page and token exists, redirect to /users
        if (this.router.url === '/' && localStorage.getItem('jwt_token')) {
          this.router.navigate(['/users']);
        }
        // Show layout only if not on login page
        this.showLayout = this.router.url !== '/';
      }
    });
  }
}