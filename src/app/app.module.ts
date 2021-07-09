import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMarqueComponent } from './components/add-marque/add-marque.component';
import { MarqueDetailsComponent } from './components/marque-details/marque-details.component';
import { MarquesListComponent } from './components/marques-list/marques-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMarqueComponent,
    MarqueDetailsComponent,
    MarquesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
