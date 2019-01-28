import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private loading = new BehaviorSubject(true)
    isLoading = this.loading.asObservable()

    changeLoading(loading: boolean) {
        this.loading.next(loading)
    }
}
