import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  User = {
    name: '',
    email: '',
    contact:'',
    address: '',
    password: ''
  };

  isRegistered: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    window.localStorage.setItem('user_name', this.User.name);
    window.localStorage.setItem('user_email', this.User.email);
    window.localStorage.setItem('user_password', this.User.password);

    window.localStorage.setItem('user_address', this.User.address);
    window.localStorage.setItem('user_contact', this.User.contact);

    this.isRegistered = true;
    //M.toast({html: 'You are registered. Please return to login page!', classes: 'rounded', displayLength: 4000});
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
