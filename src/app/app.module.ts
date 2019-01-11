import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { STATES } from './config/states'
import { environment } from '../environments/environment'
import { AppRoutes } from './config/routes'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { BrayModule } from './components/bray/bray.module'
import { MaterialComponentsModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialComponentsModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        NgxsModule.forRoot(STATES, { developmentMode: !environment.production }),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        ReactiveFormsModule,
        FlexLayoutModule,

        BrayModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
