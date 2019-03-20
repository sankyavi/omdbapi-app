import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../common/category.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  username: string;
  cat: string;

  constructor(
    private router: Router,
    private categoryService : CategoryService
  ) { }

  ngOnInit() {
    this.username = window.localStorage.getItem('user_name');
  }

  goToLogin() {
    window.localStorage.removeItem('isLogged');
    this.router.navigate(['/login']);
  }

  deleteProfile(){
    window.localStorage.clear();
    this.router.navigate(['/register']);
  }

  addCategory() {
    this.categoryService.addCategory(this.cat);
    this.cat = '';
  }

}
