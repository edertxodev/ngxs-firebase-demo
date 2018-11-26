import { Component, OnInit } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { User } from '../../models/user.model'
import { LoadUsers, RemoveUser } from '../../store/user/user.actions'

@Component({
    selector: 'app-list-users',
    templateUrl: 'list.html'
})
export class ListUsersComponent implements OnInit {
    @Select(state => state.users) users$: Observable<User[]>
    editing = false

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(new LoadUsers(false))
        // this.store.dispatch(new LoadUser('2bvOzHF1iQNeaAkdgrhS'))
    }

    deleteUser(documentId: string): void {
        this.store.dispatch(new RemoveUser(documentId))
    }
}
