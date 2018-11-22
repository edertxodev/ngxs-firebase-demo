import { Component, OnInit } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { User } from './models/user.model'
import { LoadUsers, LoadUser } from './store/user/user.actions'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ngxs-firebase-demo'
    @Select(state => state.users) users$: Observable<User[]>
    @Select(state => state.user) user$: Observable<User>

    constructor(private store: Store) {}

    ngOnInit(): void {
        // this.store.dispatch(new LoadUsers(false))
        this.store.dispatch(new LoadUser('2bvOzHF1iQNeaAkdgrhS'))
    }
}
