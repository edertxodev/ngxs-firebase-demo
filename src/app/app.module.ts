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
import { BrayModule } from './components/bray/bray.module'
import { MaterialComponentsModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { LoginComponent } from './components/login/login.component'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialComponentsModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        NgxsModule.forRoot(STATES, { developmentMode: !environment.production }),
        NgxsStoragePluginModule.forRoot(),
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
