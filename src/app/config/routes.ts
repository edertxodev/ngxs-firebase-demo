import { DashboardComponent } from '../components/dashboard/dashboard.component'
import { BrayFormComponent } from '../components/bray/form/form.component'
import { ShowBrayComponent } from '../components/bray/show/show.component'

export const AppRoutes = [
    { path: '', component: DashboardComponent },

    { path: 'bray/new', component: BrayFormComponent, data: { edit: false } },
    { path: 'bray/:id', component: ShowBrayComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }
]
