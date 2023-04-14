import { UserService } from './../../shared/service/user/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserResponse } from 'src/app/shared/types/UserType';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent {
  users?: Array<UserResponse>;

  constructor(private store: Store<{authReducer: Boolean}>, 
    private userService: UserService, private router: Router){}

  ngOnInit() {
    this.userService.listAll().subscribe(
      {
        next: it => {
          this.users = it.data;
        },
        error: err => {}
      }
    )
  }
}
