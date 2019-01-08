import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'
import { Store } from '@ngxs/store'
import { Bray } from '../../../models/bray'
import { FormBuilder, Validators } from '@angular/forms'
import { BrayService } from '../../../services/bray.service'
import { AddBray, UpdateBray } from '../../../store/bray/bray.actions'

@Component({
    selector: 'app-bray-form',
    templateUrl: 'form.html'
})
export class BrayFormComponent implements OnChanges {
    @Input() bray: Bray
    @Input() private active = false
    @Output() private editing = new EventEmitter<boolean>()
    brayForm = this.formBuilder.group({
        content: ['', Validators.required]
    })

    constructor(
        private formBuilder: FormBuilder,
        private brayService: BrayService,
        private store: Store
    ) {}

    ngOnChanges() {
        this.brayForm.patchValue({
            content: this.bray.content
        })
    }

    onSubmit() {
        if (this.brayForm.valid) {
            this.editing.subscribe(isEditing => {
                if (isEditing) {
                    const bray = this.brayService.createBray({
                        id: this.bray.id,
                        content: this.brayForm.get('content').value,
                        updatedAt: new Date().getTime(),
                        createdAt: this.bray.createdAt
                    })
                    this.store.dispatch(new UpdateBray(bray))
                    this.editing.emit(false)
                } else {
                    const bray = this.brayService.createBray({
                        content: this.brayForm.get('content').value,
                        createdAt: new Date().getTime()
                    })
                    this.store.dispatch(new AddBray(bray))
                }
            })
        }
    }
}
