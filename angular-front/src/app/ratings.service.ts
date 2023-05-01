import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from './Rating';

const RATINGS_API = 'http://127.0.0.1:8000/ratings/';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  constructor(private http: HttpClient) {}

  getRatings(): Observable<Rating[]> {
    return this.http.get<Rating[]>(RATINGS_API);
  }

  getMovieRatings(ratings: Rating[], id: number) {
    return ratings.filter(
      (rating) =>
        String(rating.movieId) == `http://127.0.0.1:8000/movies/${id}/`
    );
  }

  addRating(newRating: Rating) {
    this.http
      .post<Rating>(RATINGS_API, newRating)
      .subscribe((item) => console.log(item));
  }
}
