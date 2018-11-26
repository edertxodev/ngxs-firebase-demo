import { DashboardComponent } from './components/dashboard/dashboard.component'
import { NewUserComponent } from './components/user/new.component'
import { ShowUserComponent } from './components/user/show.component'

export const AppRoutes = [
    { path: '', component: DashboardComponent },

    { path: 'user/new', component: NewUserComponent },
    { path: 'user/:id', component: ShowUserComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }
]
