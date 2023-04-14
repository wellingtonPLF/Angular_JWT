import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { ApresentationComponent } from './views/apresentation/apresentation.component';
import { HomeComponent } from './views/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ErrorComponent } from './components/error/error.component';
import { UserAuthComponent } from './views/user-auth/user-auth.component';
import { AuthActivateGuard } from './shared/guard/authActivate/authActivate.guard';
import { AuthDeactivateGuard } from './shared/guard/authDeactivate/authDeactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: UserAuthComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'main',
            component: MainPageComponent,
            canActivate: [AuthActivateGuard],
          },
          {
            path: 'error',
            component: ErrorComponent
          },
          {
            path: 'apresentation',
            component: ApresentationComponent,
            canActivate: [AuthActivateGuard]
          },
          {
            path: 'signUp',
            component: SignUpComponent,
            canActivate: [AuthDeactivateGuard]
          },
          {
            path: 'signIn',
            component: SignInComponent,
            canActivate: [AuthDeactivateGuard]
          } 
        ]
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
