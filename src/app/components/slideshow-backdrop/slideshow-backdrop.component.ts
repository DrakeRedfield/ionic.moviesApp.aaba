import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { movie } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input()movies: movie[] = [];

  slidesOptions = {
    slidesPerView: 1.1,
    freeMode: true,
  };

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  async showDetalle( id ){
    const alert = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });

    alert.present();
    
  }

}
