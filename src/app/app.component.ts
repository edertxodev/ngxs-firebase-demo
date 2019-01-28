import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoadingService } from './services/loading.service'
import { Store } from '@ngxs/store'
import { AuthState } from './store/auth/auth.state'
import { Logout } from './store/auth/auth.actions'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Braying in the name of'
    loading: boolean

    constructor(
        private router: Router,
        private loadingService: LoadingService,
        private store: Store
    ) {}

    ngOnInit() {
        this.router.navigate([''])
        this.loadingService.isLoading.subscribe(isLoading => this.loading = isLoading)
    }

    isLoggedIn(): boolean {
        return this.store.selectSnapshot(AuthState.token) !== undefined
    }

    logout() {
        this.store.dispatch(new Logout())
    }
}
