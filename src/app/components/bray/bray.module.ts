import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ListBraysComponent } from './list/list.component'
import { BrayFormComponent } from './form/form.component'
import { ShowBrayComponent } from './show/show.component'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        ListBraysComponent,
        BrayFormComponent,
        ShowBrayComponent,
    ],
    declarations: [
        ListBraysComponent,
        BrayFormComponent,
        ShowBrayComponent,
    ]
})
export class BrayModule {}
