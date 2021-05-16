import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  // url = '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'

  transform( image: string, size: string = 'w500'): unknown {
    // return null;
    if( !image ){
      return  './assets/img/no-image-banner.jpg';
    }
    const url = `${URL}/${size}${image}`;

    return url;
  }

}
