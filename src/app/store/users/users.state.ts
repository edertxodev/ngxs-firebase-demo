import { Action, State, StateContext, Store } from '@ngxs/store'
import { User } from '../../models/user.model'
import { UsersService } from '../../services/users.service'
import { UsersRequestAttempt, UsersRequestFailure, UsersRequestSuccess } from './users.actions'

export interface UsersStateModel {
    users: User[]
}

@State({
    name: 'users',
    defaults: {
        users: []
    }
})
export class UsersState {
    constructor(private store: Store, private usersService: UsersService) {}

    @Action(UsersRequestAttempt)
    async UsersRequestAttempt() {
        this.usersService.getUsers().subscribe(
            data => {
                this.store.dispatch(new UsersRequestSuccess(data))
            },
            error => {
                this.store.dispatch(new UsersRequestFailure(error))
            }
        )
    }

    @Action(UsersRequestSuccess)
    UsersRequestSuccess(stateContext: StateContext<any>, action: UsersRequestSuccess) {
        stateContext.patchState({ users: action.users })
    }

    @Action(UsersRequestFailure)
    UsersRequestFailure(stateContext: StateContext<any>, action: UsersRequestFailure) {
        console.error('Failed to get Users. Try again later', action.error)
    }
}
