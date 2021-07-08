import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { Vibration } from '@ionic-native/vibration/ngx';
import { UtilityModule } from './utility/utility.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule,
    UtilityModule
  ],

  providers: [
    SplashScreen,
    StatusBar,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    AngularFireDatabase,
    AngularFirestore,
    AngularFireAuth,
    Vibration
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
