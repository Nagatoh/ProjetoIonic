import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { GESTURE_REFRESHER } from "../../node_modules/ionic-angular/umd";

@Injectable()
export class FirebaseProvider {
  constructor(private afs: AngularFirestore) { }

  //Create user on firestore
  postUser = data =>
    this.afs
      .collection("Users")
      .doc(data.uid)
      .set(data);

  getUser = uid =>
  this.afs.firestore.collection('Users').doc(uid)
    .get();
}
