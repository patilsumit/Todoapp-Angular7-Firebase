import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytodoappComponent } from './mytodoapp/mytodoapp.component';
import { environment } from '../environments/environment';
import { FilterpipePipe } from './mytodoapp/filterpipe.pipe';
import { SearchpipePipe } from './mytodoapp/searchpipe.pipe';
import {CrudservicesService} from '../app/crudservices.service';
import { HomeComponent } from './home/home.component';
import {AuthserviceService} from '../app/authservice.service';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    MytodoappComponent,
    FilterpipePipe,
    SearchpipePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent
      },
    ])
  
  ],
  providers: [CrudservicesService,AuthserviceService,AngularFireAuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
