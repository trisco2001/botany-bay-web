import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  username: string;
  user;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getSingleUser(this.username).subscribe((data) => {
      this.user = data;
    });
  }

}
