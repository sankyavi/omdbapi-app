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

  errormessage: string = '';

  private error: boolean;

  constructor(private router: Router) { }

  login() {
    // TODO check localstorage for session user and password

    if ((window.localStorage.getItem('user_email') == null)){
      this.error = true;
      this.errormessage = 'User Not Found. Please register first.';
    }else if ((window.localStorage.getItem('user_email') !== null) && (window.localStorage.getItem('user_email') !== this.User.email)) {
      this.error = true;
      this.errormessage = `User Not Found With The Email ID ${this.User.email}.`;
    } else if ((window.localStorage.getItem('user_password') !== null) && (window.localStorage.getItem('user_password') !== this.User.password)) {
      this.error = true;
      this.errormessage = "Password is wrong";
    } else {
      this.error = false;
    }

    if (!this.error) {
      window.localStorage.setItem('isLogged', 'true');
      this.router.navigate(['/dashboard']);
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

}
