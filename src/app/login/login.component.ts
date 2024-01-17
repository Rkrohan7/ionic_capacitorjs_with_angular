import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {

    
    console.log('Login submitted:', this.username, this.password);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
