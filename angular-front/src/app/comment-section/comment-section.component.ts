import { Component, Input, OnInit } from '@angular/core';
import { RatingsService } from '../ratings.service';
import { Movie } from '../Movie';
import { Rating } from '../Rating';

@Component({
  selector: 'app-comment-section',

  templateUrl: './comment-section.component.html',

  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  @Input() ratings!: Rating[];
  @Input() id!: any;
  constructor(private ratingService: RatingsService) {}

  Stars: number[] = [1, 2, 3, 4, 5];
  selectedValue = 0;
  comment = '';
  name = '';
  countStar(star: number) {
    this.selectedValue = star;
  }

  addComment() {
    const newComment: Rating = {
      movieId: `http://127.0.0.1:8000/movies/${this.id}/`,
      rating: this.selectedValue,
      name: this.name,
      comment: this.comment,
    };
    this.ratingService.addRating(newComment);
    window.location.reload();
  }

  ngOnInit() {
    this.ratingService.getRatings().subscribe((ratings) => {
      this.ratings = this.ratingService.getMovieRatings(ratings, this.id);
    });
  }
}
