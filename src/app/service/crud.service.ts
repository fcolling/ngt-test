import { Register } from './../shared/register';
import { Observable } from 'rxjs';
import { Injectable, Query } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { firestore } from 'firebase';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  registersRef: AngularFireList<any>;
  registerRef: AngularFireObject<any>;
  items: Observable<any[]>;
  obj;
  database;
  number;

  constructor(public fireservice: AngularFireDatabase, private firestore: AngularFirestore) {
   // this.items = firestore.collection('items').ref.limit(100);
    // var data = firestore.;

    // console.log(data.ref.orderBy('index').limit(100));
   }

  newRegister() {
  //   this.fireservice.collection('/').get().subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   );
  }

  getAll() {
    this.registersRef = this.fireservice.list('/', ref => ref.orderByChild('share_class_name').equalTo(	'Class B')); // est'a deu certo
    return this.registersRef;
  }

  getObj() {
        this.obj = this.fireservice.object('/10').valueChanges();
        return this.obj;
  }

  getDatabase() {
    this.database = this.fireservice.list('/', ref => ref.orderByChild('nb_alerts'));
    return this.database;
}

getObservable() {
  this.items = this.fireservice.list('/', ref => ref.orderByChild('share_class_name').equalTo(	'Class B')).valueChanges();
  return this.items;
}

}
