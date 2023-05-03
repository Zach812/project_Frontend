import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';
import { CharactersService } from '../characters.service';
import { Character } from '../Character';
import { Movie } from '../Movie';
import { RatingsService } from '../ratings.service';
import { Rating } from '../Rating';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = {
    id: 5,
    name: '',
    description: '',
    picture: '',
    order: NaN,
  };
  characters: Character[] = [];
  ratings: Rating[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private characterService: CharactersService,
    private location: Location,
    private ratingService: RatingsService
  ) {}

  ngOnInit(): void {
    this.getMovie();
    this.ratingService.getRatings().subscribe((ratings) => {
      this.ratings = this.ratingService.getMovieRatings(ratings, this.movie.id);
    });
  }

  getMovie(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.movieService.getMovies().subscribe((movies) => {
      this.movie = this.movieService.getMovie(name, movies);

      this.getCharacters(this.movieService.getMovie(name, movies)?.id);
    });
  }

  getCharacters(id: number) {
    this.characterService.getCharactersPg1().subscribe((characters) => {
      this.characters = this.characterService.filterChracters(characters, id);
    });
  }

  goBack() {
    this.location.go('/home');
    window.location.reload();
  }
}
