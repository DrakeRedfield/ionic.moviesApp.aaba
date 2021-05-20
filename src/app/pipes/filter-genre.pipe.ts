import { Pipe, PipeTransform } from '@angular/core';
import { Genre, movieDetails, displayFavorite } from '../interfaces/interfaces';

@Pipe({
  name: 'filterGenre'
})
export class FilterGenrePipe implements PipeTransform {

  transform(genresList: Genre[], favoritesMovies: movieDetails[]): displayFavorite[] {
    
    return genresList.reduce(( result:displayFavorite[], value:Genre, index, array) =>{
      const movies = favoritesMovies.filter( el => el.genres.find( x => x.id == value.id ) );
      if( movies.length > 0 ) {
        result.push({
          idGenre: value.id,
          genre: value.name,
          movies: movies
        })
      }
      return result;
    },[]);
  }

}
