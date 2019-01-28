import { NgModule } from '@angular/core'
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatProgressBarModule,
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
        MatProgressBarModule,
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
        MatProgressBarModule,
    ]
})
export class MaterialComponentsModule {}
