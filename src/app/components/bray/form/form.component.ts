import { Component, Inject, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { Bray } from '../../../models/bray'
import { FormBuilder, Validators } from '@angular/forms'
import { BrayService } from '../../../services/bray.service'
import { AddBray, UpdateBray } from '../../../store/bray/bray.actions'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

export interface DialogData {
    editing: boolean,
    bray?: Bray
}

@Component({
    selector: 'app-bray-form',
    templateUrl: 'form.html',
    styleUrls: ['form.scss']
})
export class BrayFormComponent implements OnInit {
    brayForm = this.formBuilder.group({
        content: ['', [Validators.required, Validators.max]]
    })
    contentMaxLength = 140
    title: string

    constructor(
        private formBuilder: FormBuilder,
        private brayService: BrayService,
        private store: Store,
        public dialogRef: MatDialogRef<BrayFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    ngOnInit() {
        this.title = this.data.editing ? 'Edit Bray' : 'New Bray'
        if (this.data.bray) {
            this.brayForm.patchValue({
                content: this.data.bray.content
            })
        }
    }

    onSubmit() {
        if (this.brayForm.valid) {
            if (this.data.editing) {
                const bray = this.brayService.updateBray({
                    id: this.data.bray.id,
                    content: this.brayForm.get('content').value,
                    updatedAt: new Date().getTime(),
                    createdAt: this.data.bray.createdAt
                })
                this.store.dispatch(new UpdateBray(bray))
                this.data.editing = false
            } else {
                const bray = this.brayService.createBray({
                    content: this.brayForm.get('content').value,
                    createdAt: new Date().getTime()
                })
                this.store.dispatch(new AddBray(bray))
            }
            this.dialogRef.close()
        }
    }

    cancel(): void {
        this.dialogRef.close()
    }
}
