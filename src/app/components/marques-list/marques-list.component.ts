import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque.model';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-marques-list',
  templateUrl: './marques-list.component.html',
  styleUrls: ['./marques-list.component.css']
})
export class MarquesListComponent implements OnInit {

  marques?: Marque[];
  currentMarque: Marque = {};
  currentIndex = -1;
  nom = '';

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.retrieveMarques();
  }

  retrieveMarques(): void {
    this.marqueService.getAll()
      .subscribe(
        data => {
          this.marques = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMarques();
    this.currentMarque = {};
    this.currentIndex = -1;
  }

  setActiveMarque(marque: Marque, index: number): void {
    this.currentMarque = marque;
    this.currentIndex = index;
  }

}
