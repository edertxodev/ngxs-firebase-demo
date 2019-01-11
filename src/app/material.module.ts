import { NgModule } from '@angular/core'
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material'

@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatTooltipModule,
        MatButtonToggleModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatTooltipModule,
        MatButtonToggleModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
    ]
})
export class MaterialComponentsModule {}
