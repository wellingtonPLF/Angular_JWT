import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/service/user/user.service';
import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { userAction } from 'src/app/ngRx/action';
import { UserResponse } from 'src/app/shared/types/UserType';
import { Auth } from 'src/app/shared/model/Auth';
import { ErrorResult } from 'src/app/shared/interfaces/I_ErrorResult';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  user !: UserResponse
  auth !: Auth
  
  constructor(private store: Store<{ userReducer: UserResponse }>, 
    private authService: AuthService, private userService: UserService, private router: Router){
      this.auth = new Auth(undefined, undefined, "12345678");
      this.store.select("userReducer").subscribe(
        it => {
          this.user = it
        }
      )
  }

  edit(){
    this.userService.update(this.user).subscribe(
      {
        next: it => {
          console.log("Updated: ", it)
        },
        error: msg => {
          console.log("Error: ", msg)
        }
      }
    )
  }

  credentials(){
    const auth: Auth = new Auth("lara@gmail.com", undefined, "12345678");
    this.authService.acceptAuth(auth).subscribe({
      next: it => {
        console.log(it)
      },
      error: (msg: ErrorResult<string>) => {
        console.log(msg)
      }
    }
    )
  }

  updateCredentials(){
    this.authService.authUpdate(this.auth).subscribe({
      next: it => {
        console.log(it)
      },
      error: (msg: ErrorResult<string>) => {
        console.log(msg)
      }
    }
    )
  }

  onUserNameChange(value: string, type: string) {
    if (type == "nickName") {
      this.user = {...this.user, nickName: value}
    }
    else if (type == "email"){
      this.user = {...this.user, email: value}
    }
    else if (type == "bornDate"){
      this.user = {...this.user, bornDate: new Date(value)}
    }
    
    this.store.dispatch(userAction(this.user));
  }

  remove(){
    this.userService.delete(this.user).subscribe(
      () => {
        this.clear()
      }        
    )
  }

  logOut(){
    this.authService.logOut().subscribe(
      it => {
        this.clear()
      }
    )
  }

  clear(){
    this.store.dispatch(userAction())
    this.router.navigateByUrl('/');
  }
}
