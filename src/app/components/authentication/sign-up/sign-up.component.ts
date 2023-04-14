import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorResult } from 'src/app/shared/interfaces/I_ErrorResult';
import { StatusResult } from 'src/app/shared/interfaces/I_StatusResult';
import { Auth } from 'src/app/shared/model/Auth';
import { User } from 'src/app/shared/model/User';
import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{
  user : User;
  auth : Auth;
  error: any = { enabled: true, errors: [] }
  
  constructor(private userService: UserService, 
    private router: Router,
    private authService: AuthService){
    this.user = new User();
    this.auth = new Auth();
  }

  validateUser() {
    this.authService.authInsert(this.auth).subscribe({
      next: (it : StatusResult<Auth>) => {
        this.user.auth = it.data
        this.userService.insert(this.user).subscribe({
          next: result => {
            this.router.navigateByUrl('/signIn');
          },
          error: msg => {
            console.log("Error: " + msg);
            this.router.navigateByUrl('/error');
          }
        })
      },
      error: (msg: ErrorResult<Array<string>>) => {
        this.error.enabled = false
        this.error.errors = msg.error
      }
    })
  }
}
