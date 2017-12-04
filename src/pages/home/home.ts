// Angular
import { Component } from '@angular/core';

// Ionic
//#Not Used#//import { NavController, Events } from "ionic-angular";

// Pages
//#Not Used#//import { DetailsPage } from "../details/details";

// Side Menu Component
//#Not Used#//import { SideMenuRedirectEvent, SideMenuRedirectEventData } from './../../shared/side-menu-content/models/side-menu-redirect-events';

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
