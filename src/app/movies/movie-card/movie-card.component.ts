import { Component, OnInit , Input} from '@angular/core';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMovieDetail() {
    this.router.navigate(['movies-detail', this.movie.imdbID]);
  }

}
