import { Component, Input } from '@angular/core';
import { Location } from '../../models/character';
import { FavoriteBtnComponent } from '../../components/favorite-btn/favorite-btn.component';

@Component({
  selector: 'app-location-card',
  imports: [FavoriteBtnComponent],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss',
})
export class LocationCardComponent {
  @Input() location!: Location;
}
