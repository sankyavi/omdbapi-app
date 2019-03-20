import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-explore',
  templateUrl: './movie-explore.component.html',
  styleUrls: ['./movie-explore.component.scss']
})
export class MovieExploreComponent implements OnInit {

  Movie = {
    movieTitle: '',
    year: '',
    type: ''
  }

  page: number = 1;
  movies: Movie[];
  total_results: number;
  error: boolean = false;

  constructor(
    private movieService: MovieServiceService
  ) { }

  ngOnInit() {
    this.Movie.movieTitle = 'one';
    this.searchForMovies();
    this.Movie.movieTitle = '';
  }

  searchForMovies() {
    this.error = false;
    this.movieService.getMovies(this.Movie.movieTitle, this.page, this.Movie.year, this.Movie.type)
      .subscribe(
        response => {
          this.movies = response['Search'];
          this.total_results = response['totalResults'];
          if(response['Error']){
            this.error = true;
          }
        },
        error => console.error(error)
      );
  }

  pageChanged(page){
    console.log(page);  
    this.page = page;
    this.searchForMovies();
  }

  resetSearchForMovies() {
    this.Movie.movieTitle = '';
    this.page = 1;
    this.searchForMovies();
  }

  // ngAfterViewChecked() {
  //   $(document).ready(function(){
  //     $('select').formSelect();
  //   });
  // }


}
