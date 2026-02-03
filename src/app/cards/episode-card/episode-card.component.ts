import { Component, Input } from '@angular/core';
import { Episode } from '../../models/character';
import { FavoriteBtnComponent } from '../../components/favorite-btn/favorite-btn.component';

@Component({
  selector: 'app-episode-card',
  imports: [FavoriteBtnComponent],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss',
})
export class EpisodeCardComponent {
  @Input() episode!: Episode;
}
