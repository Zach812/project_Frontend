import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})

export class CommentSectionComponent implements OnInit {

  @Input() STARS: any = 0;
  @Output() starsUpdate = new EventEmitter<number>();

  comments = [
    { user: 'John', message: 'Great article!' },
    { user: 'Sarah', message: 'Thanks for sharing.' }
  ];

  newComment = {
    user: '',
    message: '',
  };

  addComment() {
    this.comments.push(this.newComment);
    this.newComment = {
      user: '',
      message: ''
    };

    this.starsUpdate.emit(0);
  }

  ngOnInit() {

  }

}