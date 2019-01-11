import { DashboardComponent } from '../components/dashboard/dashboard.component'

export const AppRoutes = [
    { path: '', component: DashboardComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }
]
