import { LoginComponent } from '../components/login/login.component'
import { AuthGuard } from '../guards/auth.guard'
import { ListBraysComponent } from '../components/bray/list/list.component'

export const AppRoutes = [
    { path: '', component: ListBraysComponent, canActivate: [AuthGuard] },

    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }
]
