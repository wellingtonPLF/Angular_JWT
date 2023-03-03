import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/shared/model/AuthUser';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user: AuthUser;

  constructor(private userService: UserService, private router: Router) {
    this.user = new AuthUser();
  }

  validateUser(){
    this.userService.validateUser(this.user).subscribe({
      next: it => {
        console.log("StatusResult: " + it.status);
        this.router.navigateByUrl('/apresentation');
      },
      error: msg => {
        console.log("Error: " + msg.error);
      }
    })
  }
}
