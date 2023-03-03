import { UserService } from './../../shared/service/user/user.service';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent {
  users?: Array<User>;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.listAll().subscribe(
      it => {
        this.users = it.data;
      }
    )
  }
}
