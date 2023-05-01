import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs';
import { MOVIES } from '../mock-movies';
import { RatingsService } from '../ratings.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  movies: Movie[] = [];
  ordered: Movie[] = [];
  ranked: any[] = [];
  constructor(
    private moviesService: MoviesService,
    private rateService: RatingsService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.rateService.getRatings().subscribe((ratings) => {
        this.ranked = this.moviesService.getMoviesByRank(movies, ratings);
        this.ranked = this.ranked.sort((p1, p2) => {
          if (p1.rank > p2.rank) return -1;
          if (p1.rank < p2.rank) return 1;
          return 0;
        });
      });
      this.movies = [...movies];
      this.ordered = movies.sort((p1, p2) => {
        if (p1.order < p2.order) return -1;
        if (p1.order > p2.order) return 1;
        return 0;
      });
    });
  }
}
