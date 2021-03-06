import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { responseMB, movieDetails, responseCredits, responseSearch, responseGenres, Genre } from '../interfaces/interfaces';

const url_server = environment.urlMDB
const api_key = environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {

  indexPopular = 0;

  constructor(
    private http: HttpClient,
  ) { }

  private createQuery<T>( url ){
    url = url_server + url
    url += `&api_key=${api_key}&language=es&include_image_lenguage=es`
    console.log(url)
    return this.http.get<T>(url);
  }

  getPremiere(){
    const now = new Date();
    now.setMonth(now.getMonth()-1);
    const nextMonth = new Date( now.getFullYear(),now.getMonth() + 1, 0);

    const inicio = this.formatingDate(now);
    const fin = this.formatingDate(nextMonth);
    return this.createQuery<responseMB>(`/discover/movie?primary_release_date.lte=${fin}&primary_release_date.gte=${inicio}`);
  }

  getPopular(){
    this.indexPopular++;
    return this.createQuery<responseMB>(`/discover/movie?sort_by=popularity.desc&page=${this.indexPopular}`);
  }

  movieDetail( id: string ){
    return this.createQuery<movieDetails>(`/movie/${id}?a=1`);
  }

  getActors( id: string ){
    return this.createQuery<responseCredits>(`/movie/${id}/credits?a=1`);
  }

  searchMovie( strSearch: string ){
    return this.createQuery<responseSearch>(`/search/movie?a=1&query=${strSearch}`);
  }

  formatingDate(fecha: Date){
    let mes: any = fecha.getMonth()+1;
    let dia: any = fecha.getMonth();
    mes = ( mes < 10? `0${mes}`:`${mes}`)
    return `${fecha.getFullYear()}-${mes}-01`
  }

  loadGenres(): Promise<Genre[]>{
    return new Promise( resolve =>{
      this.createQuery<responseGenres>(`/genre/movie/list?a=1`).subscribe( (resp) =>{
        resolve(resp.genres)
      });
    })
  }
}
