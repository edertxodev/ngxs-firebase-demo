import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Login } from '../../store/auth/auth.actions';
import { LoadingService } from '../../services/loading.service'

@Component({
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
    constructor(private store: Store, private loadingService: LoadingService) {}

    ngOnInit() {
        this.loadingService.changeLoading(false)
    }

    googleLogin() {
        this.store.dispatch(new Login())
    }
}
