import { Component, OnInit } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { User } from '../../models/user.model'
import { LoadUser } from '../../store/user/user.actions'

@Component({
    selector: 'app-show-user',
    templateUrl: 'show.html'
})
export class ShowUserComponent implements OnInit {
    editing = false
    @Select(state => state.users.user) user$: Observable<User>

    constructor(private store: Store, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.store.dispatch(new LoadUser(params['id']))
        })
    }

    editUser(): void {
        this.editing = true
    }
}
