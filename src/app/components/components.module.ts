import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { SubtitleComponent } from './subtitle/subtitle.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent,
    SubtitleComponent,
  ],
  exports:[
    HeaderComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent,
    SubtitleComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  entryComponents:[
    DetalleComponent
  ]
})
export class ComponentsModule { }
