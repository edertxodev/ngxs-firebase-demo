import { Action, Selector, State, StateContext, Store } from '@ngxs/store'
import { FirebaseService } from '../../services/firebase.service'
import {
    AddBray,
    AddBrayFailure,
    BrayStateModel,
    LoadBrays,
    LoadBraysFailure,
    LoadBraysSuccess,
    UpdateBray,
    UpdateBrayFailure
} from './bray.actions'

@State<BrayStateModel>({
    name: 'brays',
    defaults: {
        brays: []
    }
})
export class BrayState {
    private readonly collectionName = 'brays'

    constructor(private store: Store, private firebaseService: FirebaseService) {}

    @Selector() static brays(state: any[]) { return state }

    @Selector()
    static byIndex(state: BrayStateModel) {
        return (index: number) => {
            return state.brays[index]
        }
    }

    @Action(LoadBrays)
    async loadBrays(ctx: StateContext<BrayStateModel>, action: LoadBrays) {
        this.firebaseService.getAll(this.collectionName)
            .subscribe(res => {
                this.store.dispatch(new LoadBraysSuccess(res))
            }, error => {
                this.store.dispatch(new LoadBraysFailure(error))
            })
    }

    @Action(LoadBraysSuccess)
    loadBraysSuccess(ctx: StateContext<BrayStateModel>, action: LoadBraysSuccess) {
        ctx.patchState({ brays: action.brays })
    }

    @Action(LoadBraysFailure)
    loadBraysFailure(ctx: StateContext<BrayStateModel>, action: LoadBraysFailure) {
        console.error('Failed to get brays. Try again later', action.error)
    }

    @Action(AddBray)
    addBray(ctx: StateContext<BrayStateModel>, action: AddBray) {
        this.firebaseService.add(this.collectionName, action.bray)
            .catch(error => this.store.dispatch(new AddBrayFailure(error)))
    }

    @Action(AddBrayFailure)
    addBrayFailure(ctx: StateContext<BrayStateModel>, action: AddBrayFailure) {
        console.error('Failed to add bray. Try again later', action.error)
    }

    @Action(UpdateBray)
    updateBray(ctx: StateContext<BrayStateModel>, action: UpdateBray) {
        this.firebaseService.update(this.collectionName, action.bray)
            .catch(error => this.store.dispatch(new UpdateBrayFailure(error)))
    }

    @Action(UpdateBrayFailure)
    updateBrayFailure(ctx: StateContext<BrayStateModel>, action: AddBrayFailure) {
        console.error('Failed to upate bray. Try again later', action.error)
    }
}
