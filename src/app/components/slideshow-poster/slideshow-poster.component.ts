import { Component, Input, OnInit } from '@angular/core';
import { movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input()newestMovies: movie[] = [];

  slidesOptions = {
    slidesPerView: 3.4,
    freeMode: true,
  };

  constructor() { }

  ngOnInit() {
    // this.newestMovies[0].poster_path
  }

}
