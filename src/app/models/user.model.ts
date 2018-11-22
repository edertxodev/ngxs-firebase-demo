import { Main } from './main.model';

export interface User extends Main {
    id: number
    name: string
    username: string
    email: string
    website: string
}

export interface UsersStateModel {
    users: User[]
}
