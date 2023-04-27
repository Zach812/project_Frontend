import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';
import { CharactersService } from '../characters.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private characterService: CharactersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
    this.getCharacters();
  }

  getMovie(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.movieService
      .getMovies()
      .subscribe(
        (movies) => (this.movie = this.movieService.getMovie(name, movies))
      );
  }

  getCharacters(): void {
    this.characterService
      .getCharacters()
      .subscribe((characters) => console.log(characters));
  }

  goBack() {
    this.location.back();
  }
}
