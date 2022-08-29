import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { UserService } from 'src/app/service/user.services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (response: User[]) => this.users = response,
      error: (e: HttpErrorResponse) => console.log(e.message)
    })
  }

}
