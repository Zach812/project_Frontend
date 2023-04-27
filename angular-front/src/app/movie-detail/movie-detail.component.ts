import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';
import { CharactersService } from '../characters.service';
import { Character } from '../Character';
import { Movie } from '../Movie';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  characters: Character[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private characterService: CharactersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.movieService.getMovies().subscribe((movies) => {
      this.movie = this.movieService.getMovie(name, movies);

      this.getCharacters(this.movieService.getMovie(name, movies)?.name);
    });
  }

  getCharacters(name: any): void {
    this.characterService
      .getCharacters()
      .subscribe(
        (characters) =>
          (this.characters = characters.filter((character) =>
            this.movieService.getMovieByURL(String(character.movieId), name)
          ))
      );
  }

  goBack() {
    this.location.go('/home');
    window.location.reload();
  }
}
