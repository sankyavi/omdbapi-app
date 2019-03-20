import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: string[] = ['category', 'category2', 'category3', 'category4'];

  constructor() { }
  
  getCategories() {
    return this.categories;
  }

  addCategory(category: string) {
    this.categories.push(category);
  }
}
