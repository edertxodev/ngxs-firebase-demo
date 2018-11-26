import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { NgxsFormPluginModule } from '@ngxs/form-plugin'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { STATES } from './states'
import { environment } from '../environments/environment'
import { RouterModule } from '@angular/router'
import { AppRoutes } from './routes'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { UserModule } from './components/user/user.module'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        NgxsModule.forRoot(STATES, { developmentMode: true }),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        NgxsFormPluginModule.forRoot(),
        NgxsRouterPluginModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        ReactiveFormsModule,

        UserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
