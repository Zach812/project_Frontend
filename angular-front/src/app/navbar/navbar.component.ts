import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Movie } from '../Movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  movies$: Movie[] = [];
  private searchTerms = new Subject<string>();
  constructor(private moviesService: MoviesService) {}

  search(search: string) {
    if (search.trim()) {
      this.searchTerms.next(search.toLowerCase());
      this.moviesService
        .getMovies()
        .subscribe(
          (movies) =>
            (this.movies$ = movies.filter((movie) =>
              movie.name.toLowerCase().includes(search.toLowerCase())
            ))
        );
    } else {
      this.movies$ = [];
    }
  }

  ngOnInit(): void {
    this.movies$ = [];
  }
}
