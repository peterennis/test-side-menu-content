import { AppState } from '../../app/app.global';
import { Component } from '@angular/core';

@Component({
  selector: 'page-themes',
  templateUrl: 'themes.html'
})
export class ThemesPage {

  /* Thanks to Scott: https://github.com/ScottMBerger for this feature! */
  fontSize: any;
  paillarde = {
    title: 'oi',
    categories: [
      {
        name: 'oasd'
      },
      {
        name: 'oasasd'
      }
    ]
  }

  constructor(public global: AppState) {
  }

  ionViewDidLoad() {
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
  }
}
