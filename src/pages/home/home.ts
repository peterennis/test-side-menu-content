import { Component } from '@angular/core';

// SideMenuComponent
import { SideMenuRedirectEvent, SideMenuRedirectEventData } from './../../shared/side-menu-content/side-menu-content.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
