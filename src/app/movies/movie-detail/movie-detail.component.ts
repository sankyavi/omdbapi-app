import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { MovieDetail } from '../movie.model';
import { MovieServiceService } from '../movie-service.service';
import { map, switchMap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/common/local-storage-service';
import { CategoryService } from 'src/app/common/category.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  sub: Subscription;
  id: string;

  userrating: number = 5;
  movie: MovieDetail;
  categories: string[] = [];
  selectedCategories: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieservice: MovieServiceService,
    private localstorageservice: LocalStorageService,
    private router: Router,
    private categoryService : CategoryService) {}

  ngOnInit() {
    this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.movieservice.getMovieDetail(id)),
    ).subscribe( data => {
      this.movie = data;
    },
    err => { console.log('err occured' + err) },
    () => { console.log('done') }
    )

    this.categories = this.categoryService.getCategories();
  }

  selectedCategory(category) {
    this.selectedCategories.push(category);
  }

  pushCategory(category) {
    this.categories.push(category);
  }

  saveReview() {
    this.movie['userRating'] = this.userrating.toString();
    this.movie['categories'] = this.selectedCategories.toString();
    this.localstorageservice.storeOnLocalStorage(this.movie);
    this.router.navigate(['/dashboard']);
  }

}
