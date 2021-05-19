import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../../services/httprequest.service';
import { resultSearchMovie, movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../components/detalle/detalle.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {

  searchText: string = '';
  ideas: string[] = [
    'Spiderman', 'Tierra de Osos', 'Soul',
    'Happy Feet', 'Kimetsu No Yaiba: Mugen Ressha-Hen'
  ];
  showLoading: boolean = false;

  movies: resultSearchMovie[] = [];
  
  constructor(
    private requests: HttprequestService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  searchMovie( event ){
    this.searchText = event.detail.value; 
    this.movies = [];
    if(this.searchText.trim() != ''){
      this.showLoading = true;
      this.requests.searchMovie(this.searchText).subscribe( resp =>{
        this.movies = resp.results;
        console.log(this.movies);
        this.showLoading = false;
      })
    }
  }

  async showDetails(id){
    const alert = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });
    alert.present();
  }

}
