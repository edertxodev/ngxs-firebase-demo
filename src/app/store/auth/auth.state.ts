import { Action, Selector, State, StateContext } from '@ngxs/store'
import { AuthStateModel, Login, LoginSuccess, Logout, LogoutSuccess } from './auth.actions'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { NgZone } from '@angular/core'

@State<AuthStateModel>({
    name: 'auth'
})
export class AuthState {
    @Selector() static token(state: AuthStateModel) { return state.token }

    constructor(private authService: AuthService, private router: Router, private ngZone: NgZone) {}

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        return this.authService.signInWithGoogle()
            .then(res => {
                ctx.dispatch(new LoginSuccess(res))
            })
    }

    @Action(LoginSuccess)
    loginSuccess(ctx: StateContext<AuthStateModel>, action: LoginSuccess) {
        ctx.patchState({token: action.userResponse.credential.idToken, username: action.userResponse.user.email})
        this.ngZone.run(() => this.router.navigate(['/']))
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>, action: Logout) {
        return this.authService.logout()
            .then(() => {
                ctx.dispatch(new LogoutSuccess())
            })
    }

    @Action(LogoutSuccess)
    logoutSuccess(ctx: StateContext<AuthStateModel>, action: LoginSuccess) {
        ctx.setState({})
        this.ngZone.run(() => this.router.navigate(['/login']))
    }
}
