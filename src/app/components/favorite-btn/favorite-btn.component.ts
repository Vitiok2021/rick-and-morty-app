import { Component, Input, OnInit } from '@angular/core';

type FavoriteType = 'character' | 'location' | 'episode';

@Component({
  selector: 'app-favorite-btn',
  imports: [],
  templateUrl: './favorite-btn.component.html',
  styleUrl: './favorite-btn.component.scss',
})
export class FavoriteBtnComponent implements OnInit {
  @Input() id!: number;
  @Input() type!: FavoriteType;

  isFavorite: boolean = false;
  private storageKey: string = '';

  ngOnInit(): void {
    this.storageKey = this.getStorageKey();

    const favorites = this.getFavorites();
    this.isFavorite = favorites.includes(this.id);
  }
  toggleFavorite(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.isFavorite = !this.isFavorite;
    const favorites = this.getFavorites();

    if (this.isFavorite) {
      favorites.push(this.id);
    } else {
      const index = favorites.indexOf(this.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
  private getStorageKey(): string {
    switch (this.type) {
      case 'character':
        return 'favoriteCharacters';
      case 'location':
        return 'favoriteLocations';
      case 'episode':
        return 'favoriteEpisodes';
      default:
        return '';
    }
  }
  getFavorites(): number[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
