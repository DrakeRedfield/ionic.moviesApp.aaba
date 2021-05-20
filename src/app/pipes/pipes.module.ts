import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPipe } from './images.pipe';
import { ListparesPipe } from './listpares.pipe';
import { FilterGenrePipe } from './filter-genre.pipe';



@NgModule({
  declarations: [
    ImagesPipe,
    ListparesPipe,
    FilterGenrePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagesPipe,
    ListparesPipe,
    FilterGenrePipe
  ]
})
export class PipesModule { }
