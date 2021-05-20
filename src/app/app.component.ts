import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { StoragesService } from './services/storages.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Películas', url: '/home', icon: 'film' },
    { title: 'Buscar', url: '/search-page', icon: 'search' },
    { title: 'Favoritos', url: '/favorites', icon: 'heart' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private platform: Platform,
    private storage: Storage,
    private storages: StoragesService,
  ) {}
  
  ngOnInit(){
    this.storage.create();
  }
  
}
