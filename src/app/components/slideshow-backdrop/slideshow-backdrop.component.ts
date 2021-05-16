import { Component, Input, OnInit } from '@angular/core';
import { movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input()newestMovies: movie[] = [];

  slidesOptions = {
    slidesPerView: 1.1,
    freeMode: true,
  };

  constructor() { }

  ngOnInit() {}

}
