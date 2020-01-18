import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userList: any[];

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {

    this.userService.getUsers()
        .subscribe((res) => this.userList = res);
}

logout(): void {
  localStorage.removeItem('TOKEN_NUMBER');
  localStorage.removeItem('ROLE_TYPE');
  this.router.navigate(['/login']);
}

onback(): void {
  this.router.navigate(['/profile']);
}

}
