export class AuthStateModel {
    token?: string
    username?: string
}

export class Login {
    static readonly type = '[Auth] Login'
}

export class LoginSuccess {
    static readonly type = '[Auth] Login Success'

    constructor(public userResponse: any) {}
}

export class Logout {
    static readonly type = '[Auth] Logout'
}

export class LogoutSuccess {
    static readonly type = '[Auth] Logout Success'
}
