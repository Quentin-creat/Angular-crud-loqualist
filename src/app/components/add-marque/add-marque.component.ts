import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque.model';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.css']
})
export class AddMarqueComponent implements OnInit {

  marque: Marque = {
    nom: '',
    description: ''
  };
  submitted = false;

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
  }

  saveMarque(): void {
    const data = {
      nom: this.marque.nom,
      description: this.marque.description
    };

    this.marqueService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newMarque(): void {
    this.submitted = false;
    this.marque = {
      nom: '',
      description: ''
    };
  }

}
