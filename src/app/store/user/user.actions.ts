import { User } from '../../models/user.model';

export class AddProduct {
    static readonly type = '[User] Add'

    constructor(private user: User) {}
}
