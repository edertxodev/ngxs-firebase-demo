import { Injectable, Type} from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    constructor(private db: AngularFirestore) {}

    getAllFromCollection(collectionName: string): Observable<any> {
        return this.db.collection(collectionName).snapshotChanges()
            .pipe(
                map(actions => actions.map((a: any) => {
                    const data = a.payload.doc.data()
                    const id = a.payload.doc.id
                    data.documentId = id

                    return { id, ...data }
                }))
            )
    }

    addToCollection(collectionName: string, object: any): Promise<any> {
        return this.db.collection(collectionName).add(object)
    }

    getOneFromCollection(collectionName: string, documentId: string): Observable<any> {
        return this.db.collection(collectionName).doc(documentId).snapshotChanges()
            .pipe(
                map(a => {
                    const data = a.payload.data()
                    const id = a.payload.id
                    data.documentId = id

                    return { id, ...data }
                })
            )
    }
}
