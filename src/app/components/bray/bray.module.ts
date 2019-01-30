import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ListBraysComponent } from './list/list.component'
import { BrayFormComponent } from './form/form.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialComponentsModule } from '../../material.module'
import { PipeModule } from '../../pipes/pipe.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FlexLayoutModule,
        MaterialComponentsModule,
        PipeModule,
    ],
    exports: [
        ListBraysComponent,
        BrayFormComponent,
    ],
    declarations: [
        ListBraysComponent,
        BrayFormComponent,
    ],
    entryComponents: [
        BrayFormComponent,
    ],
})
export class BrayModule {}
