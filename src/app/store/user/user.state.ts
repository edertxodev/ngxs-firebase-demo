import { Action, State, StateContext, Store } from '@ngxs/store'

import { User, UsersStateModel } from '../../models/user.model'
import { UsersService } from '../../services/users.service'
import {
    AddUser,
    AddUserFailure,
    AddUserSuccess,
    LoadUser,
    LoadUsers,
    LoadUsersFailure,
    LoadUsersSuccess,
    LoadUserSuccess
} from './user.actions'
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
    async loadUsers(stateContext: StateContext<any>, action: LoadUsers) {
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
            this.firebaseService.getAllFromCollection('users')
                .subscribe(res => {
                    stateContext.dispatch(new LoadUsersSuccess(res))
                })
        }
    }

    @Action(LoadUsersSuccess)
    loadUsersSuccess(stateContext: StateContext<any>, action: LoadUsersSuccess) {
        stateContext.patchState({ users: action.users })
    }

    @Action(LoadUsersFailure)
    loadUsersFailure(stateContext: StateContext<any>, action: LoadUsersFailure) {
        console.error('Failed to get users. Try again later', action.error)
    }

    @Action(LoadUser)
    async loadUser(stateContext: StateContext<any>, action: LoadUser) {
        this.firebaseService.getOneFromCollection('users', action.documentId)
            .subscribe(res => {
                this.store.dispatch(new LoadUserSuccess(res))
            })
    }

    @Action(LoadUserSuccess)
    loadUserSuccess(stateContext: StateContext<any>, action: LoadUserSuccess) {
        stateContext.patchState({ user: action.user })
    }

    @Action(AddUser)
    addUser(stateContext: StateContext<User>, action: AddUser) {
        this.firebaseService.addToCollection('users', action.user)
            .then(success => stateContext.dispatch(new AddUserSuccess(stateContext)))
            .catch(error => stateContext.dispatch(new AddUserFailure(stateContext)))
    }
}
