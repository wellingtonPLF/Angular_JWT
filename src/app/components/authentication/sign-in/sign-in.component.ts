import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userAction} from 'src/app/ngRx/action';
import { Auth } from 'src/app/shared/model/Auth';
import { User } from 'src/app/shared/model/User';
import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  auth: Auth;
  error: any = { enabled: true, errors: [] }

  constructor(private userService: UserService, 
    private authService: AuthService,
    private router: Router,
    private store: Store<{userReducer: User}>) {
      this.auth = new Auth();
  }

  validateUser(){
    this.authService.authentication(this.auth).subscribe({
      next: it => {
        this.userService.getAuthenticatedUser().subscribe(
          {
            next: result => {
              this.store.dispatch(userAction(result.data))
              this.router.navigateByUrl('/main');
            },
            error: () => {
              this.router.navigateByUrl('/error');
            }
          }
        )
      },
      error: msg => {
        this.error.enabled = false
        if (msg.status == 400){
          this.error.errors = msg.error
        }
        else if (msg.status == 404){
          this.error.errors = [msg.error]
        }
      }
    })
  }
}
