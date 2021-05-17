import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../../services/httprequest.service';
import { movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  newestMovies: movie[] = [];
  popularMovies: movie[] = [];

  constructor(
    private requests:HttprequestService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.requests.getPremiere().subscribe( resp =>{
      this.newestMovies = resp.results;
    });
    this.getPopular();
  }

  morePopular(){
    this.getPopular();
  }

  getPopular(){
    this.requests.getPopular().subscribe( resp =>{
      const temparr = [...this.popularMovies, ...resp.results]
      this.popularMovies = temparr;
    });
    
  }

}
