import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'; // Assuming you have axios installed

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  showErrorToast: boolean = false;
  constructor(private router: Router) {}

  async onSubmit() {
    if (!this.username || !this.password) {
      this.showErrorToast = true;
      return;
    }

    const data = {
      username: this.username,
      password: this.password,
    };

    try {
      const response = await axios.post('http://192.168.1.17:8080/api/authenticate', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.status);

      if (response.status === 200) {
        this.router.navigate(['/dashboard']);
      } else {
        window.location.reload();
      }

      console.log(response);
    } catch (error) {
      console.error('An error occurred during login', error);
      this.showErrorToast = true;
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
