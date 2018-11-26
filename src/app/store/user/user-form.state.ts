import { State } from '@ngxs/store'

@State({
    name: 'user',
    defaults: {
        userForm: {
            model: undefined,
            dirty: false,
            status: '',
            errors: {}
        }
    }
})
export class UserFormState {}
