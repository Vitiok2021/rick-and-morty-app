import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';
import { FavoriteBtnComponent } from '../../components/favorite-btn/favorite-btn.component';

@Component({
  selector: 'app-character-card',
  imports: [FavoriteBtnComponent],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
