import { Component, OnInit } from '@angular/core';

 

@Component({

  selector: 'app-comment-section',

  templateUrl: './comment-section.component.html',

  styleUrls: ['./comment-section.component.css']

})

export class CommentSectionComponent implements OnInit {

  comments = [

    { user: 'John', message: 'Great article!' },

    { user: 'Sarah', message: 'Thanks for sharing.' }

  ];

 

  newComment = {

    user: '',

    message: ''

  };

 

  addComment() {

    this.comments.push(this.newComment);

    this.newComment = {

      user: '',

      message: ''

    };

  }

 

  ngOnInit() {

  }

}