import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPipe } from './images.pipe';
import { ListparesPipe } from './listpares.pipe';



@NgModule({
  declarations: [
    ImagesPipe,
    ListparesPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagesPipe,
    ListparesPipe
  ]
})
export class PipesModule { }
