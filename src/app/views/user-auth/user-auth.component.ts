import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { userAction } from 'src/app/ngRx/action';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {

  constructor(private store: Store<{userReducer: User }>,
    private userService: UserService){
  }

  ngOnInit(){
    this.userService.getAuthenticatedUser().subscribe({
        next: it => {
          this.store.dispatch(userAction(it.data))
        },
        error: () => {}
      }
    )
  }
}
