import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxsFormPluginModule } from '@ngxs/form-plugin'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NewUserComponent } from './new.component'
import { ListUsersComponent } from './list.component'
import { ShowUserComponent } from './show.component'
import { EditUserComponent } from './edit.component'

@NgModule({
    imports: [
        CommonModule,
        NgxsFormPluginModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        NewUserComponent,
        ListUsersComponent,
        ShowUserComponent,
        EditUserComponent
    ],
    declarations: [
        NewUserComponent,
        ListUsersComponent,
        ShowUserComponent,
        EditUserComponent
    ]
})
export class UserModule {}
