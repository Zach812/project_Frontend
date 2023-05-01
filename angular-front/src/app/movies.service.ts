import { Injectable, OnInit } from '@angular/core';
import { MOVIES } from './mock-movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from './Movie';
import { Rating } from './Rating';
import { RatingsService } from './ratings.service';

const MOVIES_API = 'http://127.0.0.1:8000/movies/';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private http: HttpClient,
    private ratingService: RatingsService
  ) {}

  movies: Movie[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getMovies() {
    this.http
      .get<Movie[]>(MOVIES_API)
      .subscribe((movies) => (this.movies = movies));
    return this.http.get<Movie[]>(MOVIES_API);
  }

  getMovie(name: string, array: Movie[]) {
    const movie = array.find((m) => m.name == name);
    if (movie) {
      return movie;
    } else {
      return {
        id: NaN,
        name: '',
        description: '',
        picture: '',
        order: NaN,
      };
    }
  }

  getMoviesByRank(array: Movie[], ratings: Rating[]) {
    let copy: any = [...array];
    array.map((movie, index) => {
      let totalRating = 0;
      let Ratings = this.ratingService.getMovieRatings(ratings, movie.id);
      for (let i = 0; i < Ratings.length; i++) {
        totalRating += Ratings[i].rating;
      }
      if (Ratings.length == 0) {
        copy[index]['rank'] = 0;
      } else {
        copy[index]['rank'] = totalRating / Ratings.length;
      }
    });
    return copy;
  }

  search(search: string): Observable<Movie[]> {
    if (!search.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${MOVIES_API}?name=${search}`);
  }
}
