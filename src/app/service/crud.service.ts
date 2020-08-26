import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  items: Observable<any[]>;
  obj;
  database;
  number;

  constructor(public fireservice: AngularFireDatabase, private firestore: AngularFirestore) { }

  findByIndex(index) {
    this.obj = this.fireservice.object('/' + index).valueChanges();
    return this.obj;
  }

  getDatabase() {
    this.database = this.fireservice.list('/', ref => ref.orderByChild('nb_alerts'));
    return this.database;
  }

  findByFundName(fund_name) {
    this.items = this.fireservice.list('/', ref => ref.orderByChild('fund_name')
      .equalTo(fund_name)
      .limitToFirst(50))
      .valueChanges();
    return this.items;
  }

  findClass() {
    this.items = this.fireservice.list('/', ref => ref.orderByChild('share_class_name')
      .equalTo('Class G Hedged')
      .limitToLast(10))
      .valueChanges();
    return this.items;
  }

}
