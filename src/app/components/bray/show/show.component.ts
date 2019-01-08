import { Component, Input } from '@angular/core'
import { Bray } from '../../../models/bray'

@Component({
    selector: 'app-bray-show',
    templateUrl: 'show.html'
})
export class ShowBrayComponent {
    @Input() bray: Bray
}
