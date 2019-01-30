import { Injectable } from '@angular/core'
import { User } from '../models/user'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    createFromGoogleUser(data: any): User {
        return {
            id: data.additionalUserInfo.profile.id,
            name: data.additionalUserInfo.profile.name,
            email: data.additionalUserInfo.profile.email,
            avatar: data.additionalUserInfo.profile.picture,
            activeSince: Math.round(new Date(data.user.metadata.creationTime).getTime())
        }
    }
}
