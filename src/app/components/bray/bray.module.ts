import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ListBraysComponent } from './list/list.component'
import { BrayFormComponent } from './form/form.component'
import { PIPES } from '../../config/pipes'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialComponentsModule } from '../../material.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FlexLayoutModule,
        MaterialComponentsModule,
    ],
    exports: [
        ListBraysComponent,
        BrayFormComponent,
    ],
    declarations: [
        PIPES,
        ListBraysComponent,
        BrayFormComponent,
    ],
    entryComponents: [
        BrayFormComponent,
    ],
})
export class BrayModule {}
