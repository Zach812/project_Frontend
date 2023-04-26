import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  movies: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService
      .getMovies()
      .subscribe((models) => console.log(models));
  }
}
