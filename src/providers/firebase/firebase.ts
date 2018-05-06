import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

//  constructor(public http: Http, public afd: AngularFireDatabase) {
//  constructor(public afd: AngularFireDatabase) {
    constructor( ) {
    console.log('Hello FirebaseProvider Provider');
  }

  getMyItems() {
    //return this.afd.list('/myList/');
  }
 
  addMyItem(name) {
    //this.afd.list('/myList/').push(name);
  }
 
  removeMyItem(id) {
    //this.afd.list('/myList/').remove(id);
  }
}
