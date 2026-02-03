import { Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationListComponent } from './pages/location-list/location-list.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: 'character',
    component: CharacterListComponent,
  },
  {
    path: 'character/:id',
    component: CharacterDetailsComponent,
  },
  {
    path: 'locations',
    component: LocationListComponent,
  },
  {
    path: 'location/:id',
    component: LocationDetailsComponent,
  },
  {
    path: 'episodes',
    component: EpisodeListComponent,
  },
  {
    path: 'episode/:id',
    component: EpisodeDetailsComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
