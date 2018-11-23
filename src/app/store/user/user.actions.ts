import { User } from '../../models/user.model';

/**
 * Load Users
 */
export class LoadUsers {
    static readonly type = '[User] Load Users'
    constructor(public fromApi: boolean) {}
}

export class LoadUsersSuccess {
    static readonly type = '[User] Load Users Success'
    constructor(public users: User[]) {}
}

export class LoadUsersFailure {
    static readonly type = '[User] Load Users Failure'
    constructor(public error: any) {}
}

/**
 * Load User
 */
export class LoadUser {
    static readonly type = '[User] Load User'
    constructor(public documentId: string) {}
}

export class LoadUserSuccess {
    static readonly type = '[User] Load User Success'
    constructor(public user: User) {}
}

export class LoadUserFailure {
    static readonly type = '[User] Load User Failure'
    constructor(public error: any) {}
}

/**
 * Add User
 */
export class AddUser {
    static readonly type = '[User] Add User'
    constructor(public user: User) {}
}

export class AddUserSuccess {
    static readonly type = '[User] Add User Success'
    constructor(public success: any) {}
}

export class AddUserFailure {
    static readonly type = '[User] Add User Failure'
    constructor(public error: any) {}
}

/**
 * Remove User
 */
export class RemoveUser {
    static readonly type = '[User] Remove User'
    constructor(public documentId: string) {}
}
