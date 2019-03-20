import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { MovieDetail } from '../movies/movie.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  STORAGE_KEY = 'local_moviereviewlist';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  storeOnLocalStorage(moviereview: MovieDetail): void {
    const currentReviewList = this.storage.get(this.STORAGE_KEY) || [];
    let movieFound: boolean = false;
    // push new movie review to array
    //need to check if movie review already exists
    currentReviewList.forEach(function (element) {
      console.log(element);
      if (element.imdbID === moviereview.imdbID) {
        element['userRating'] = moviereview.userRating;
        element['categories'] = moviereview.categories;
        movieFound = true;
      }
    });

    // pushing the movie if its a new review
    if (!movieFound) {
      currentReviewList.push(moviereview);
    }

    // insert updated array to local storage
    this.storage.set(this.STORAGE_KEY, currentReviewList);
    console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
  }

  getFromLocalStorage() {
    return this.storage.get(this.STORAGE_KEY);
  }

  deleteFromLocalStorage(id): void {
    const currentReviewList = this.storage.get(this.STORAGE_KEY);
    // get index of object with id
    var removeIndex = currentReviewList.map(function (item) { return item.imdbID; }).indexOf(id);
    // remove object
    currentReviewList.splice(removeIndex, 1);
    this.storage.set(this.STORAGE_KEY, currentReviewList);
  }


}
