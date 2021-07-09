import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarquesListComponent } from './components/marques-list/marques-list.component';
import { MarqueDetailsComponent } from './components/marque-details/marque-details.component';
import { AddMarqueComponent } from './components/add-marque/add-marque.component';

const routes: Routes = [
  { path: '', redirectTo: 'marques', pathMatch: 'full' },
  { path: 'marques', component: MarquesListComponent },
  { path: 'marques/:id', component: MarqueDetailsComponent },
  { path: 'ajouter', component: AddMarqueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
