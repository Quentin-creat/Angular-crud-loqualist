import { Component, OnInit } from '@angular/core';
import { MarqueService } from 'src/app/services/marque.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from 'src/app/models/marque.model';

@Component({
  selector: 'app-marque-details',
  templateUrl: './marque-details.component.html',
  styleUrls: ['./marque-details.component.css']
})
export class MarqueDetailsComponent implements OnInit {

  currentMarque: Marque = {
    nom: '',
    description: ''
  };
  message = '';

  constructor(
    private marqueService: MarqueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getMarque(this.route.snapshot.params.id);
  }

  getMarque(id: string): void {
    this.marqueService.get(id)
      .subscribe(
        data => {
          this.currentMarque = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateMarque(): void {
    this.message = '';

    this.marqueService.update(this.currentMarque.id, this.currentMarque)
      .subscribe(
        response => {
          console.log(response);
          if(response.message) {
            //this.message = 'La marque a bien été modifiée !';
            this.router.navigate(['/marques']);
          }
        },
        error => {
          console.log(error);
        });
  }

  deleteMarque(): void {
    this.marqueService.delete(this.currentMarque.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/marques']);
        },
        error => {
          console.log(error);
        });
  }

}
