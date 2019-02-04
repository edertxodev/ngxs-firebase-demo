import { Bray } from './bray'

export interface User {
    id?: string
    email?: string
    name?: string
    avatar?: string
    activeSince?: number
    brays?: Bray[]
}
