import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { HttpClientModule } from '@angular/common/http'
import {AngularFireModule} from '@angular/fire'

import { AppComponent } from './app.component'
import { STATES } from './states'
import {environment} from '../environments/environment'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        NgxsModule.forRoot(STATES, { developmentMode: true }),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
