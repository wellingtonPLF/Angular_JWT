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
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngRx/store';
import { MainPageComponent } from './components/main-page/main-page.component';
import { authInterceptorProviders } from './interceptor/auth.interceptor';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserAuthComponent,
    ApresentationComponent,
    MainPageComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
