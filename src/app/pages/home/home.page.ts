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

  constructor(
    private requests:HttprequestService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.requests.getPremiere().subscribe( resp =>{
      // resp.
      this.newestMovies = resp.results;
    });
  }

}
