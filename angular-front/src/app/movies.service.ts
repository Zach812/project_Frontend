import { Injectable } from '@angular/core';
import { MOVIES } from './mock-movies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

const MOVIES_API = 'http://127.0.0.1:8000/movies/';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(MOVIES_API);
  }

  getMovie(id: number) {
    const movie = MOVIES.find((m) => m.id == id);
    return movie;
  }
}
