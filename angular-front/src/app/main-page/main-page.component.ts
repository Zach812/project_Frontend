import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs';
import { MOVIES } from '../mock-movies';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .subscribe((movies) => (this.movies = movies));
  }
}
