import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { Bray } from '../../../models/bray'
import { LoadBrays, RemoveBray } from '../../../store/bray/bray.actions'
import { BrayState } from '../../../store/bray/bray.state'
import { map } from 'rxjs/operators'
import { MatDialog } from '@angular/material'
import { BrayFormComponent } from '../form/form.component'

@Component({
    selector: 'app-bray-list',
    templateUrl: 'list.html',
    styleUrls: ['list.scss']
})
export class ListBraysComponent implements OnInit {
    brays$: Observable<Bray[]>

    constructor(private store: Store, public dialog: MatDialog) {}

    ngOnInit() {
        this.store.dispatch(new LoadBrays())
        this.brays$ = this.store.select(BrayState.brays)
    }

    deleteBray(id: string) {
        this.store.dispatch(new RemoveBray(id))
    }

    openForm(editing: boolean, index?: number): void {
        let bray = null
        if (editing) {
            this.store.select(BrayState.byIndex)
                .pipe(map(filterFn => filterFn(index)))
                .subscribe(selectedBray => {
                    bray = selectedBray
                })
        }
        this.dialog.open(BrayFormComponent, {
            width: '450px',
            data: {
                editing: editing,
                bray: bray
            }
        })
    }
}
