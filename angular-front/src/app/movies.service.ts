import { Injectable, OnInit } from '@angular/core';
import { MOVIES } from './mock-movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from './Movie';

const MOVIES_API = 'http://127.0.0.1:8000/movies/';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

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
    return movie;
  }

  search(search: string): Observable<Movie[]> {
    if (!search.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${MOVIES_API}?name=${search}`);
  }
}
