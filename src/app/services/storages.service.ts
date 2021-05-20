import { Injectable, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { movieDetails } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StoragesService implements OnInit {

  favoritesMovies: movieDetails[] = [];
  
  constructor(
    private storage: Storage,
    private toastController: ToastController,
  ) { 
    // this.loadFavorites();
  }

  async ngOnInit(){
    this.storage.get('favorites').then( favs =>{
      this.favoritesMovies = favs;
    });
  }

  async findFavorite(id: number){
    await this.loadFavorites();
    const exist = this.favoritesMovies.find( film => film.id == id )
    return (exist)? true: false;
  }

  async loadFavorites(){
    const favorites = await this.storage.get('favorites');
    this.favoritesMovies = favorites || [];
    return this.favoritesMovies;
  }

  async saveFavorite( movie: movieDetails ){
    const findMovie = (film)=> film.id == movie.id;
    if( !this.favoritesMovies.find(findMovie) ){
      this.favoritesMovies.push(movie);
      return this.storage.set('favorites',this.favoritesMovies).then( resp =>{
        this.showMessage('Película agregada a Favoritos.');
        return true;
      });
    }else{
      this.favoritesMovies = this.favoritesMovies.filter( film => film.id !== movie.id);
      return this.storage.set('favorites',this.favoritesMovies).then( resp =>{
        this.showMessage('Película eliminada de Favoritos.');
        return false;
      });
    }
  }

  async showMessage(msg){
    const toast = await this.toastController.create({
      duration:1000,
      message: msg
    });
    toast.present();
  }
}
