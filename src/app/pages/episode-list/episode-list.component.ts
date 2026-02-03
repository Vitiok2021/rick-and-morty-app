import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EpisodeCardComponent } from '../../cards/episode-card/episode-card.component';
import { Episode } from '../../models/character';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-episode-list',
  imports: [RouterLink, EpisodeCardComponent, PaginationComponent],
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss',
})
export class EpisodeListComponent implements OnInit {
  private rickAndMorty = inject(RickAndMortyService);
  episodes: Episode[] = [];
  totalPages: number = 0;

  currentPage: number = 1;

  searchQuery: string = '';
  ngOnInit(): void {
    this.loadEpisode();
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.loadEpisode();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.loadEpisode();
    }
  }
  loadEpisode() {
    this.rickAndMorty
      .getEpisodes(this.currentPage, this.searchQuery)
      .subscribe((data) => {
        this.episodes = data.results;
        this.totalPages = data.info.pages;
        console.log(data);
      });
  }
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.currentPage = 1;
    this.loadEpisode();
  }
}
