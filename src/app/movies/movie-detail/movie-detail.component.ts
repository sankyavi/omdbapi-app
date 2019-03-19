import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { MovieDetail } from '../movie.model';
import { MovieServiceService } from '../movie-service.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  sub: Subscription;
  id: string;
  movie$: Observable<MovieDetail>;

  constructor(
    private route: ActivatedRoute,
    private movieservice: MovieServiceService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
    });

    this.movie$ = this.route.paramMap.pipe(
      map(paramsMap => paramsMap.get('id')),
      switchMap(carId => this.movieservice.getMovieDetail(this.id))
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
