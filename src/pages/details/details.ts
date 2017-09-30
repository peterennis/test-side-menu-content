import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-details',
	templateUrl: 'details.html'
})
export class DetailsPage {

	public title: string;

	constructor(private navParams: NavParams) {
		this.title = this.navParams.get('title');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
}
