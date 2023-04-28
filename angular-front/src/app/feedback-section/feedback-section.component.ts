import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-section',
  templateUrl: './feedback-section.component.html',
  styleUrls: ['./feedback-section.component.css']
})
export class FeedbackSectionComponent{
    Stars: number[] = [1,2,3,4,5];
    selectedValue: number = 0;

    countStar(star: number){
      this.selectedValue = star;
    }
}
