import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LanguageService } from './../providers/language-service/language-service';

//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { SassyPage } from '../pages/sassy/sassy';

import { AppState } from './app.global';

// Custom components
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';

//Ref: https://github.com/angular/angularfire2/blob/master/docs/version-4-upgrade.md
//Ref: https://stackoverflow.com/questions/43990887/getting-an-error-has-no-exported-member-angularfire-authproviders-authmethod
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'; // for auth   
import {AngularFireDatabaseModule} from 'angularfire2/database'; // for database

import { AngularFireAuth } from 'angularfire2/auth'; // for auth
import { AngularFireDatabase } from 'angular2/database'; // for database
////import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'; // for Observables

import { environment } from '../environments/environment';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

//import { FirebaseProvider } from './../providers/firebase/firebase';

// Initialize Firebase
export const firebaseConfig = { 
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "" 
}

export function createTranslateLoader(http: HttpClient ) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SassyPage,
    SideMenuContentComponent,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SassyPage,
    DetailsPage
  ],
  providers: [
    AppState,
////    FirebaseProvider,    
    LanguageService,
    SplashScreen,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
