import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { UserAuthComponent } from './views/user-auth/user-auth.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { ApresentationComponent } from './views/apresentation/apresentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserAuthComponent,
    ApresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
