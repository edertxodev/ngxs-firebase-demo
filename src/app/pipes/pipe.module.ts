import { NgModule } from '@angular/core'
import { DateFormatPipe } from './date-format.pipe'
import { DateTimeFormatPipe } from './date-time-format.pipe'

@NgModule({
    exports: [
        DateFormatPipe,
        DateTimeFormatPipe,
    ],
    declarations: [
        DateFormatPipe,
        DateTimeFormatPipe,
    ],
})
export class PipeModule {}
