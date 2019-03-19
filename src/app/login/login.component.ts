import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  User = {
    email: '',
    password: ''
  };

  private error: boolean;

  constructor(private router: Router) { }

  login() {
    // TODO check localstorage for session user and password
      this.router.navigate(['/dashboard']);

      this.error = true;

  }

  register() {
    this.router.navigate(['/register']);
  }

}
