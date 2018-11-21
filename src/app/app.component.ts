import { Component, OnInit } from '@angular/core'
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs'
import { UsersRequestAttempt } from './store/users/users.actions';
import { User } from './models/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ngxs-firebase-demo'
    @Select(state => state.users) users$: Observable<User[]>

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(new UsersRequestAttempt())
    }
}
