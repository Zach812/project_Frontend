import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie = {
    id: NaN,
    name: '',
    description: '',
    picture: '',
    order: NaN,
  };

  ngOnInit(): void {
    console.log(this.movie);
  }
}
