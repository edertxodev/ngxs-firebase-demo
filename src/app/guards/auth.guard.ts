import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { Store } from '@ngxs/store'
import { AuthState } from '../store/auth/auth.state'

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private store: Store) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.store.selectSnapshot(AuthState.token)
        if (token !== undefined) {
            return true
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })

        return false
    }
}
