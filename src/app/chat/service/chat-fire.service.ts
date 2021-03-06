import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChatFireService {

  constructor(private dbFire : AngularFirestore) { }

  public getMsg(path : string){
    return this.dbFire
              .collection<any>('/firechat/'+path+'/msg', ref => ref.orderBy('timeSend')
              .limitToLast(10))
              .valueChanges();

  }

  public sengMsg(path : string, msg : string, sendBy : string){
    this.dbFire.collection('/firechat/'+path+'/msg/').add({
      text : msg,
      from : sendBy,
      timeSend : Date.now()
    });
  }
}
