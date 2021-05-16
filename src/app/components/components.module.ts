import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
  ],
  exports:[
    HeaderComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
})
export class ComponentsModule { }
