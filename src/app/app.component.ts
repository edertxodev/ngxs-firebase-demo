import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoadingService } from './services/loading.service'
import { Store } from '@ngxs/store'
import { AuthState } from './store/auth/auth.state'
import { Logout } from './store/auth/auth.actions'
import { Observable } from 'rxjs'
import { User } from './models/user'
import { DeviceDetectorService } from 'ngx-device-detector'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    user$: Observable<User>
    sidenavOpened: boolean
    sidenavMode: string
    title = 'Braying in the name of'
    loading: boolean

    constructor(
        private router: Router,
        private loadingService: LoadingService,
        private store: Store,
        private deviceService: DeviceDetectorService
    ) {}

    ngOnInit() {
        if (this.deviceService.isMobile() || this.deviceService.isTablet()) {
            this.sidenavOpened = false
            this.sidenavMode = 'push'
        } else {
            this.sidenavOpened = true
            this.sidenavMode = 'side'
        }
        this.user$ = this.store.select(AuthState.user)
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
