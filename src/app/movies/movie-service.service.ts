import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { MovieDetail } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private url_search = 'http://www.omdbapi.com/';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(s: string, page, y) {
    if(s === ''){
      s = 'one';
    }
    return this.http.get(`
    ${this.url_search}?s=${s}&y=${y}&page=${page}`)
  }

  getMovieDetail(id: string) : Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`
    ${this.url_search}?i=${id}`)
  }

}
