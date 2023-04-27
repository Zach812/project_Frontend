import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-section',
  templateUrl: './feedback-section.component.html',
  styleUrls: ['./feedback-section.component.css']
})
export class FeedbackSectionComponent{
    Stars: number[] = [1,2,3,4,5];
    selectedValue = 0;

    countStar(star: number){
      this.selectedValue = star;
    }
}
