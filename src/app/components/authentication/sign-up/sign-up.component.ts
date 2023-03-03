import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{
  user : User;
  
  constructor(private userService: UserService, private router: Router){
    this.user = new User();
  }

  ngOnInit(){
  }

  validateUser(){
    this.userService.insert(this.user).subscribe({
        next: it => {
          console.log("StatusResult: " + it.status);
          this.router.navigateByUrl('/apresentation');
        },
        error: msg => {
          console.log("Error: " + msg.error);
        }
      }
    )
  }
}
