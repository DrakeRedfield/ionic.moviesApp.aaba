import { Component, OnInit } from '@angular/core';
import { StoragesService } from '../../services/storages.service';
import { resultSearchMovie, movieDetails, Genre } from '../../interfaces/interfaces';
import { HttprequestService } from '../../services/httprequest.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoritesMovies: movieDetails[] = [];
  genresList: Genre[] = [];
  // displayedMovies

  constructor(
    private localStorage: StoragesService,
    private requests: HttprequestService,
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.favoritesMovies = await this.localStorage.loadFavorites()
    this.loadGenres();
  }

  async loadGenres(){
    this.genresList = await this.requests.loadGenres();
  }

  async closedModal( event ){
    if(event.changed){
      this.favoritesMovies = await this.localStorage.loadFavorites()
    }
  }

}
