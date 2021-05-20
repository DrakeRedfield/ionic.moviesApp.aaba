import { Component, Input, OnInit } from '@angular/core';
import { HttprequestService } from '../../services/httprequest.service';
import { movieDetails, Crew, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { StoragesService } from '../../services/storages.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  slidesOptionsActors = {
    // initialSlide: 0,
    // direction: 'horizontal',
    // speed: 300,
    // effect: slide,
    // spaceBetween: 8,
    slidesPerView: 2.4,
    freeMode: true,
    // loop: true
  };

  @Input() id: number;
  data: movieDetails ={};
  actores: Cast[]
  hiddenDescription: number = 150;
  isFavorite: boolean = false;
  hasChanged: boolean = false;

  constructor(
    private requests: HttprequestService,
    private modalController: ModalController,
    private localStorage: StoragesService,
  ) { }

  async ngOnInit() {
    console.log(this.id)
    this.getDetails();
    this.getActors();
    this.isFavorite = await this.localStorage.findFavorite(this.id);
  }

  getDetails(){
    this.requests.movieDetail( String(this.id) ).subscribe( resp =>{
      console.log(resp)
      this.data = resp;
    });
  }

  async saveFavorite(){
    this.hasChanged = true;
    this.isFavorite = await this.localStorage.saveFavorite(this.data);
  }

  getActors(){
    this.requests.getActors( String(this.id) ).subscribe( resp =>{
      console.log('Actores',resp)
      this.actores = resp.cast;
    });
  }

  cerrar(){
    this.modalController.dismiss({
      'changed': this.hasChanged
    });
  }
}
