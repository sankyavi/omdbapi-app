import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../common/local-storage-service';
import { MovieDetail } from '../movies/movie.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noUserReviews: boolean = true;
  movies: MovieDetail[];

  constructor(
    private localstorageservice: LocalStorageService
  ) { }

  ngOnInit() {
    this.movies = this.localstorageservice.getFromLocalStorage();
    console.log(this.movies);
    if(this.movies && this.movies.length > 0){
      this.noUserReviews = false;
    }
  }

}
