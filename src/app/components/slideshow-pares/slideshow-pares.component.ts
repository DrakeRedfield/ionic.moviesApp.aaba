import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { movie } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @ViewChild( IonSlides, {static: true} ) swipper: IonSlides

  @Input()movies: movie[] = [];
  @Output() isEnd = new EventEmitter;

  slidesOptions = {
    slidesPerView: 3.4,
    freeMode: true,
  };

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  slideChanged(){
    this.swipper.isEnd().then(resp =>{
      if(resp){
        this.isEnd.emit(true);
      }
    })
  }

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
