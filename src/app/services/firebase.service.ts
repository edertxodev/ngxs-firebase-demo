import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { User } from '../models/user'

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    constructor(private db: AngularFirestore) {}

    getAll(collectionName: string, user?: User): Observable<any> {
        if (user) {
            return this.db.collection(`users/${user.id}/${collectionName}`).snapshotChanges()
                .pipe(
                    map(actions => actions.map((a: any) => {
                        const data = a.payload.doc.data()
                        const parent = a.payload.doc.ref.parent.parent.id
                        const id = a.payload.doc.id

                        return { id, ...data, parent }
                    }))
                )
        }

        return this.db.collection(collectionName).snapshotChanges()
            .pipe(
                map(actions => actions.map((a: any) => {
                    const data = a.payload.doc.data()
                    const id = a.payload.doc.id

                    return { id, ...data }
                }))
            )
    }

    add(collectionName: string, object: any, user?: User): Promise<any> {
        if (user) {
            this.db.collection('users').doc(user.id).collection(collectionName).add(object)
        }
        if (object.email && object.name) {
            return this.db.collection(collectionName).doc(object.id).set(object)
        }

        return this.db.collection(collectionName).add(object)
    }

    update(collectionName: string, data: any) {
        return this.db.collection(collectionName).doc(data.id).set(data)
    }

    getOne(collectionName: string, documentId: string): Observable<any> {
        return this.db.collection(collectionName).doc(documentId).snapshotChanges()
            .pipe(
                map(a => {
                    const data = a.payload.data()
                    const id = a.payload.id

                    return { id, ...data }
                })
            )
    }

    getCollection(collectionName: string) {
        return this.db.collection(collectionName)
    }

    removeOne(collectionName: string, documentId: string) {
        return this.db.collection(collectionName).doc(documentId).delete()
    }
}
