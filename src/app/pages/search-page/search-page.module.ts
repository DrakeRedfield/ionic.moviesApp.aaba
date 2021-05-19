import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPagePageRoutingModule } from './search-page-routing.module';

import { SearchPagePage } from './search-page.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    ComponentsModule,
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPagePageRoutingModule
  ],
  declarations: [SearchPagePage]
})
export class SearchPagePageModule {}
