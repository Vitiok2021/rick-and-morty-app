import { Component, inject, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character, Episode } from '../../models/character';
import { RouterLink } from '@angular/router';
import { CharacterCardComponent } from '../../cards/character-card/character-card.component';
import { LocationCardComponent } from '../../cards/location-card/location-card.component';
import { Location } from '../../models/character';
import { EpisodeCardComponent } from '../../cards/episode-card/episode-card.component';

@Component({
  selector: 'app-favorites',
  imports: [
    RouterLink,
    CharacterCardComponent,
    LocationCardComponent,
    EpisodeCardComponent,
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  private rickAndMorty = inject(RickAndMortyService);

  characters: Character[] = [];
  locations: Location[] = [];
  episodes: Episode[] = [];

  activeTab: 'characters' | 'locations' | 'episodes' = 'characters';

  ngOnInit(): void {
    this.loadFavorites();
    this.loadLocations();
    this.loadEpisodes();
  }
  loadFavorites() {
    const favoritesData = localStorage.getItem('favoriteCharacters');
    if (favoritesData) {
      const ids: number[] = JSON.parse(favoritesData);
      if (ids.length > 0) {
        this.rickAndMorty.getMultipleCharacters(ids).subscribe((data) => {
          this.characters = Array.isArray(data) ? data : [data];
        });
      }
    }
  }
  loadLocations() {
    const favoritesData = localStorage.getItem('favoriteLocations');
    if (favoritesData) {
      const ids: number[] = JSON.parse(favoritesData);
      if (ids.length > 0) {
        this.rickAndMorty.getMultipleLocations(ids).subscribe((data) => {
          this.locations = Array.isArray(data) ? data : [data];
        });
      }
    }
  }
  loadEpisodes() {
    const favoritesData = localStorage.getItem('favoriteEpisodes');
    if (favoritesData) {
      const ids: number[] = JSON.parse(favoritesData);
      if (ids.length > 0) {
        this.rickAndMorty.getMultipleEpisodes(ids).subscribe((data) => {
          this.episodes = Array.isArray(data) ? data : [data];
        });
      }
    }
  }
}
