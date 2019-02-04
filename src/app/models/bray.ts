import { User } from './user'

export interface Bray {
    id?: string
    content: string
    createdAt?: number
    updatedAt?: number
    user?: User
}
