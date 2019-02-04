import { Action, Selector, State, StateContext, Store } from '@ngxs/store'
import { FirebaseService } from '../../services/firebase.service'
import {
    AddBray,
    AddBrayFailure,
    BrayStateModel,
    LoadBrays,
    LoadBraysFailure,
    LoadBraysSuccess, RemoveBray,
    UpdateBray,
    UpdateBrayFailure
} from './bray.actions'
import { LoadingService } from '../../services/loading.service'
import { AuthState } from '../auth/auth.state'

@State<BrayStateModel>({
    name: 'brays',
    defaults: {
        brays: []
    }
})
export class BrayState {
    private readonly collectionName = 'brays'

    constructor(
        private firebaseService: FirebaseService,
        private loadingService: LoadingService,
        private store: Store
    ) {}

    @Selector() static brays(state: any[]) { return state }

    @Selector()
    static byIndex(state: BrayStateModel) {
        return (index: number) => {
            return state.brays[index]
        }
    }

    @Action(LoadBrays)
    async loadBrays(ctx: StateContext<BrayStateModel>, action: LoadBrays) {
        const user = this.store.selectSnapshot(AuthState.user)
        this.firebaseService.getAll(this.collectionName, user)
            .subscribe(res => {
                ctx.dispatch(new LoadBraysSuccess(res))
            }, error => {
                ctx.dispatch(new LoadBraysFailure(error))
            })
    }

    @Action(LoadBraysSuccess)
    loadBraysSuccess(ctx: StateContext<BrayStateModel>, action: LoadBraysSuccess) {
        const user = this.firebaseService.getOne('users', action.brays[0]['parent'])
        this.loadingService.changeLoading(false)
        ctx.patchState({ brays: action.brays })
    }

    @Action(LoadBraysFailure)
    loadBraysFailure(ctx: StateContext<BrayStateModel>, action: LoadBraysFailure) {
        console.error('Failed to get brays. Try again later', action.error)
    }

    @Action(AddBray)
    addBray(ctx: StateContext<BrayStateModel>, action: AddBray) {
        const user = this.store.selectSnapshot(AuthState.user)
        this.firebaseService.add(this.collectionName, action.bray, user)
            .catch(error => ctx.dispatch(new AddBrayFailure(error)))
    }

    @Action(AddBrayFailure)
    addBrayFailure(ctx: StateContext<BrayStateModel>, action: AddBrayFailure) {
        console.error('Failed to add bray. Try again later', action.error)
    }

    @Action(UpdateBray)
    updateBray(ctx: StateContext<BrayStateModel>, action: UpdateBray) {
        this.firebaseService.update(this.collectionName, action.bray)
            .catch(error => ctx.dispatch(new UpdateBrayFailure(error)))
    }

    @Action(UpdateBrayFailure)
    updateBrayFailure(ctx: StateContext<BrayStateModel>, action: AddBrayFailure) {
        console.error('Failed to upate bray. Try again later', action.error)
    }

    @Action(RemoveBray)
    removeBray(ctx: StateContext<BrayStateModel>, action: RemoveBray) {
        this.firebaseService.removeOne(this.collectionName, action.documentId)
    }
}
