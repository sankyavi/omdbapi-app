import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { MovieDetail } from '../movie.model';
import { MovieServiceService } from '../movie-service.service';
import { map, switchMap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/common/local-storage-service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  sub: Subscription;
  id: string;

  userrating: number;
  movie: MovieDetail;
  categories: string[] = ['category', 'category2', 'category3', 'category4'];
  selectedCategories: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieservice: MovieServiceService,
    private localstorageservice: LocalStorageService,
    private router: Router) {}

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
  }

  selectedCategory(category) {
    this.selectedCategories.push(category);
  }

  saveReview() {
    this.movie['userRating'] = this.userrating.toString();
    this.movie['categories'] = this.selectedCategories.toString();
    this.localstorageservice.storeOnLocalStorage(this.movie);
    this.router.navigate(['/dashboard']);
  }

}
