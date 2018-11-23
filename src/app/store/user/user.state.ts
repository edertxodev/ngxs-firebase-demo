import { Action, State, StateContext, Store } from '@ngxs/store'

import { User, UsersStateModel } from '../../models/user.model'
import { UsersService } from '../../services/users.service'
import {
    AddUser,
    AddUserFailure,
    AddUserSuccess,
    LoadUser, LoadUserFailure,
    LoadUsers,
    LoadUsersFailure,
    LoadUsersSuccess,
    LoadUserSuccess, RemoveUser
} from './user.actions';
import { FirebaseService } from '../../services/firebase.service'

@State<UsersStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
export class UserState {
    constructor(
        private store: Store,
        private usersService: UsersService,
        private firebaseService: FirebaseService
    ) {}

    @Action(LoadUsers)
    async loadUsers(sc: StateContext<any>, action: LoadUsers) {
        if (action.fromApi) {
            this.usersService.getUsersFromApi().subscribe(
                data => {
                    this.store.dispatch(new LoadUsersSuccess(data))
                    data.forEach(user => {
                        this.store.dispatch(new AddUser(user))
                    })
                },
                error => {
                    this.store.dispatch(new LoadUsersFailure(error))
                }
            )
        } else {
            this.firebaseService.getAll('users')
                .subscribe(
                    res => {
                        this.store.dispatch(new LoadUsersSuccess(res))
                    }, error => {
                        this.store.dispatch(new LoadUsersFailure(error))
                    }
                )
        }
    }

    @Action(LoadUsersSuccess)
    loadUsersSuccess(sc: StateContext<any>, action: LoadUsersSuccess) {
        sc.patchState({ users: action.users })
    }

    @Action(LoadUsersFailure)
    loadUsersFailure(sc: StateContext<any>, action: LoadUsersFailure) {
        console.error('Failed to get users. Try again later', action.error)
    }

    @Action(LoadUser)
    async loadUser(sc: StateContext<any>, action: LoadUser) {
        this.firebaseService.getOne('users', action.documentId)
            .subscribe(
                res => {
                    this.store.dispatch(new LoadUserSuccess(res))
                }, error => {
                    this.store.dispatch(new LoadUsersFailure(error))
                }
            )
    }

    @Action(LoadUserSuccess)
    loadUserSuccess(sc: StateContext<any>, action: LoadUserSuccess) {
        sc.patchState({ user: action.user })
    }

    @Action(LoadUserFailure)
    loadUserFailure(sc: StateContext<any>, action: LoadUserFailure) {
        console.error('Failed to get user. Try again later', action.error)
    }

    @Action(AddUser)
    addUser(stateContext: StateContext<User>, action: AddUser) {
        this.firebaseService.add('users', action.user)
            .then(success => stateContext.dispatch(new AddUserSuccess(stateContext)))
            .catch(error => stateContext.dispatch(new AddUserFailure(stateContext)))
    }

    @Action(AddUserSuccess)
    addUserSuccess(sc: StateContext<any>, action: AddUserSuccess) {
        sc.patchState({ user: action.success })
    }

    @Action(AddUserFailure)
    addUserFailure(sc: StateContext<any>, action: AddUserFailure) {
        console.error('Failed to create user. Try again later', action.error)
    }

    @Action(RemoveUser)
    async removeUser(sc: StateContext<any>, action: RemoveUser) {
        this.firebaseService.removeOne('users', action.documentId)
    }
}
