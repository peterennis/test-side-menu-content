import { SideMenuSettings } from './../shared/side-menu-content/side-menu-content.component';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';   
import { SplashScreen } from '@ionic-native/splash-screen';   

import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { SassyPage } from '../pages/sassy/sassy';

import { AppState } from './app.global';
import { TranslateService } from '@ngx-translate/core';

// Models
import { MenuOptionModel, SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

	@ViewChild(Nav) nav: Nav;

 	// Get the instance to call the public methods
	@ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  public rootPage: any = HomePage;
  //rootPage = TabsPage;
  textDir: string = "ltr";

  //pages: Array<{title: string, component: any, icon: string}>;

  state: any;

  // Options to show in the SideMenuComponent
	public options: Array<MenuOptionModel>;
  
  // Settings for the SideMenuComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'my-selected-option',
    subOptionIndentation: {
      md: '56px',
      ios: '64px',
      wp: '56px'
    }
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    public translate: TranslateService,
    public global: AppState) {
    
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('en');
      // Set Platform Language
      let userLang = navigator.language.split('-')[0]; // use navigator lang if available
      userLang = /(ar|de|en|es)/gi.test(userLang) ? userLang : 'de'; // Set default to en if no other language could be found
      console.log(userLang)
      this.translate.use(userLang);

	// Initialize some options
			this.initializeOptions();
    });
  }

	private initializeOptions(): void {
		this.options = new Array<MenuOptionModel>();

		// Load simple menu options
		// ------------------------------------------
		this.options.push({
      iconName: 'home',
			displayName: 'Home',
			component: HomePage,
			
			// This option is already selected
			selected: true
		});

		this.options.push({
			iconName: 'analytics',
			displayName: 'Option 1',
			component: DetailsPage
		});

		this.options.push({
			iconName: 'apps',
			displayName: 'Option 2',
			component: DetailsPage
		});

		// Load options with nested items (with icons)
		// -----------------------------------------------
		this.options.push({
			displayName: 'Pandas',
			subItems: [
				{
					iconName: 'paw',
					displayName: 'Sassy',
					component: SassyPage
				},
				{
					iconName: 'bookmark',
					displayName: 'Sub Option 2',
					component: DetailsPage
				}
			]
		});

		// Load options with nested items (without icons)
		// -----------------------------------------------
		this.options.push({
			displayName: 'Sub options without icons',
			subItems: [
				{
					displayName: 'Sub Option 4',
					component: DetailsPage
				},
				{
					displayName: 'Sub Option 5',
					component: DetailsPage
				},
				{
					displayName: 'Sub Option 6',
					component: DetailsPage
				},
				{
					displayName: 'Sub Option 7',
					component: DetailsPage
				}
			]
		});

		// Load special options
		// -----------------------------------------------
		this.options.push({
			displayName: 'Special options',
			subItems: [
				{
					iconName: 'log-in',
					displayName: 'Login',
					custom: {
						isLogin: true
					}
				},
				{
					iconName: 'log-out',
					displayName: 'Logout',
					custom: {
						isLogout: true
					}
				},
				{
					iconName: 'globe',
					displayName: 'Open Google',
					custom: {
						isExternalLink: true,
						externalUrl: 'http://www.google.com'
					}
				}
			]
		});
  }

	public selectOption(option: MenuOptionModel): void {
		this.menuCtrl.close().then(() => {

			if (option.custom && option.custom.isLogin) {
				this.presentAlert('You\'ve clicked the login option!');
			} else if (option.custom && option.custom.isLogout) {
				this.presentAlert('You\'ve clicked the logout option!');
			} else if(option.custom && option.custom.isExternalLink) {
				let url = option.custom.externalUrl;
				window.open(url, '_blank');
			} else {
				// Redirect to the selected page
				this.nav.setRoot(option.component || DetailsPage, { 'title': option.displayName });
			}
		});
	}

	public collapseMenuOptions(): void {
		// Collapse all the options
		this.sideMenu.collapseAllOptions();
  }

  public presentAlert(message: string): void {
		let alert = this.alertCtrl.create({
			title: 'Information',
			message: message,
			buttons: ['Ok']
		});
		alert.present();
  }

}
