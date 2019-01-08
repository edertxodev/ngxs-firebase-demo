import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { Bray } from '../../../models/bray'
import { LoadBrays, RemoveBray } from '../../../store/bray/bray.actions'
import { BrayState } from '../../../store/bray/bray.state'
import { map } from 'rxjs/operators'

@Component({
    selector: 'app-bray-list',
    templateUrl: 'list.html'
})
export class ListBraysComponent implements OnInit {
    brays$: Observable<Bray[]>
    selectedBray$: Observable<Bray>
    editing = false

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(new LoadBrays())
        this.brays$ = this.store.select(BrayState.brays)
    }

    deleteBray(id: string) {
        this.store.dispatch(new RemoveBray(id))
    }

    selectBray(index: number) {
        this.editing = true
        this.selectedBray$ = this.store.select(BrayState.byIndex)
            .pipe(map(filterFn => filterFn(index)))
    }

    isEditing($event) {
        this.editing = $event
    }
}
