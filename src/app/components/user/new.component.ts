import { Component } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { User } from '../../models/user.model'
import { AddUser} from '../../store/user/user.actions'

@Component({
    selector: 'app-new-user',
    templateUrl: 'new.html'
})
export class NewUserComponent {
    @Select(state => state.user) user$: Observable<User>
    userForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        website: ''
    })

    constructor(private store: Store, private formBuilder: FormBuilder, private router: Router) {}

    onSubmit(): void {
        if (this.userForm.valid) {
            this.store.dispatch(new AddUser({
                documentId: null,
                id: null,
                name: this.userForm.get('name').value,
                username: this.userForm.get('name').value.toLowerCase(),
                email: this.userForm.get('email').value,
                website: this.userForm.get('website').value,
            }))
            this.router.navigate(['/'])
        }
    }
}
