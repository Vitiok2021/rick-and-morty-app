import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, Character, Episode, Location } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private http = inject(HttpClient);

  private apiUrl = 'https://rickandmortyapi.com/api';

  getCharacters(page: number = 1, name: string = '', status: string = '') {
    let params = new HttpParams().set('page', page.toString());
    if (name) {
      params = params.set('name', name);
    }
    if (status) {
      params = params.set('status', status);
    }
    return this.http.get<ApiResponse<Character>>(`${this.apiUrl}/character`, {
      params,
    });
  }
  getCharacter(id: number) {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }
  getLocations(page: number = 1, name: string = '') {
    let params = new HttpParams().set('page', page.toString());

    if (name) {
      params = params.set('name', name);
    }
    return this.http.get<ApiResponse<Location>>(`${this.apiUrl}/location`, {
      params,
    });
  }
  getLocation(id: number) {
    return this.http.get<Location>(`${this.apiUrl}/location/${id}`);
  }
  getEpisodes(page: number = 1, name: string = '') {
    let params = new HttpParams().set('page', page.toString());
    if (name) {
      params = params.set('name', name);
    }
    return this.http.get<ApiResponse<Episode>>(`${this.apiUrl}/episode`, {
      params,
    });
  }
  getEpisode(id: number) {
    return this.http.get<Episode>(`${this.apiUrl}/episode/${id}`);
  }
  getMultipleCharacters(ids: number[]) {
    return this.http.get<Character[] | Character>(
      `${this.apiUrl}/character/${ids.join(',')}`,
    );
  }
  getMultipleLocations(ids: number[]) {
    return this.http.get<Location[] | Location>(
      `${this.apiUrl}/location/${ids.join(',')}`,
    );
  }
  getMultipleEpisodes(ids: number[]) {
    return this.http.get<Episode[] | Episode>(
      `${this.apiUrl}/episode/${ids.join(',')}`,
    );
  }
}
