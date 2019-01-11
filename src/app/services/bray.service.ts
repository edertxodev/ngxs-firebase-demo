import { Injectable } from '@angular/core'
import { Bray } from '../models/bray'

@Injectable({
    providedIn: 'root'
})
export class BrayService {
    createBray(params: any): Bray {
        return {
            content: params.content,
            createdAt: params.createdAt
        }
    }

    updateBray(params: any): Bray {
        return {
            id: params.id,
            content: params.content,
            createdAt: params.createdAt,
            updatedAt: params.updatedAt
        }
    }
}
