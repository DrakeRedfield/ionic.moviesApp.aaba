import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { movie } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input()movies: movie[] = [];
  @Output() closedModal = new EventEmitter;

  slidesOptions = {
    slidesPerView: 3.4,
    freeMode: true,
  };

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    // this.newestMovies[0].poster_path
  }

  async showDetalle( id ){
    const alert = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });
    alert.present();
    alert.onWillDismiss().then(resp => this.closedModal.emit(resp.data))
  }

}
