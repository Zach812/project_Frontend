import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './Character';
import { MoviesService } from './movies.service';

const CHARACTERS_API = 'http://127.0.0.1:8000/characters/';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getCharactersPg1(): Observable<Character[]> {
    return this.http.get<Character[]>(CHARACTERS_API);
  }

  filterChracters(characters: Character[], id: number) {
    return characters.filter(
      (character) =>
        String(character.movieId) == `http://127.0.0.1:8000/movies/${id}/`
    );
  }
}
