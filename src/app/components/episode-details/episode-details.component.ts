import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Episode } from '../../models/character';
import { FavoriteBtnComponent } from '../favorite-btn/favorite-btn.component';

@Component({
  selector: 'app-episode-details',
  imports: [RouterLink, FavoriteBtnComponent],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.scss',
})
export class EpisodeDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private rickAndMorty = inject(RickAndMortyService);

  episode: Episode | null = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.rickAndMorty.getEpisode(Number(id)).subscribe((data) => {
        this.episode = data;
      });
    }
  }
}
