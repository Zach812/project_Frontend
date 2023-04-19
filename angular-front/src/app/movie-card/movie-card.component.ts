import { Component, Input } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: Movie = {
    id: NaN,
    name: '',
    desc: '',
    pict: '',
    order: NaN,
  };
}
