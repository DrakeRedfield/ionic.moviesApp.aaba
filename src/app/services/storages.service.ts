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
  ) { }

  async ngOnInit(){
    this.storage.get('favorites').then( favs =>{
      this.favoritesMovies = favs;
    });
  }

  async saveFavorite( movie: movieDetails ){
    const findMovie = (film)=> film == movie;
    // console.log(this.favoritesMovies)
    // this.favoritesMovies = await ;
    this.storage.get('favorites').then( resp =>{
      console.log(resp)
      this.favoritesMovies = resp;
      console.log(resp.find(findMovie));
      if( !resp.find(findMovie) ){
        // this.favoritesMovies.push(movie);
        // this.storage.set('favorites',this.favoritesMovies).then( resp =>{
        //   this.showMessage('Película agregada a Favoritos.')
        // });
        console.log('No existe la película');
      }else{
        console.log('Existe la película');
      }
    })
    
  }

  async showMessage(msg){
    const toast = await this.toastController.create({
      duration:1000,
      message: msg
    });
    toast.present();
  }
}
