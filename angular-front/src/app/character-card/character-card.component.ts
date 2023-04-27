import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.movieService
      .getMovies()
      .subscribe(
        (movies) => (this.movie = this.movieService.getMovie(name, movies))
      );
  }
}
