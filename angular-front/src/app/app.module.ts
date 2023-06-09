import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FeedbackSectionComponent } from './feedback-section/feedback-section.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MainPageComponent,
    NavbarComponent,
    MovieDetailComponent,
    FeedbackSectionComponent,
    CharacterCardComponent,
    CommentSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
