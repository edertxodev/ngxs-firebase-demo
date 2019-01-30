import { NgModule } from '@angular/core'
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
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
        MatListModule,
        MatDividerModule,
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
        MatListModule,
        MatDividerModule,
    ]
})
export class MaterialComponentsModule {}
