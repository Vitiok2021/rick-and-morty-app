import { Component, inject } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { RouterLink } from '@angular/router';
import { LocationCardComponent } from '../../cards/location-card/location-card.component';
import { Location } from '../../models/character';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-location-list',
  imports: [RouterLink, LocationCardComponent, PaginationComponent],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss',
})
export class LocationListComponent {
  locations: Location[] = [];
  private rickAndMorty = inject(RickAndMortyService);
  totalPages: number = 0;

  currentPage: number = 1;

  searchQuery: string = '';

  constructor() {
    this.loadLocations();
  }
  loadLocations() {
    this.rickAndMorty
      .getLocations(this.currentPage, this.searchQuery)
      .subscribe((data) => {
        console.log('Locations:', data);
        this.locations = data.results;
        this.totalPages = data.info.pages;
      });
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadLocations();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadLocations();
    }
  }
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.currentPage = 1;
    this.loadLocations();
  }
}
