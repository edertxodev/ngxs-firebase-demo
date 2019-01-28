import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AngularFireAuth } from '@angular/fire/auth'
import { User, auth } from 'firebase'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: Observable<User>
    private userDetails: User = null

    constructor(private firebaseAuth: AngularFireAuth) {
        this.user = firebaseAuth.authState
        this.user.subscribe(user => {
            if (user) {
                this.userDetails = user
            }
        })
    }

    signInWithGoogle() {
        return this.firebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    }

    logout() {
        return this.firebaseAuth.auth.signOut()
    }
}
