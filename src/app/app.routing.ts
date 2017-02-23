import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'repo/:user', component: RepositoriesComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
