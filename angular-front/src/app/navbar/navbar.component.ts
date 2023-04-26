import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Movie } from '../Movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  movies$!: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private moviesService: MoviesService){}
  
  search(search: string){
    this.searchTerms.next(search);
  }

  ngOnInit(): void{
    this.movies$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((search: string) => this.moviesService.search(search)),
    );
  }
}
