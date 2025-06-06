import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private orderService: OrderService, private router: Router) {}

  // ...existing code...
login() {
  this.error = '';
  this.orderService.login(this.username, this.password).subscribe({
    next: (res: any) => {
      if (res && res.token) {
        localStorage.setItem('jwt_token', res.token);
        this.router.navigate(['/users']); // Redirect to user page
      } else {
        this.error = 'Invalid response from server';
      }
    },
    error: () => {
      this.error = 'Login failed. Please check your credentials.';
    }
  });
}
}