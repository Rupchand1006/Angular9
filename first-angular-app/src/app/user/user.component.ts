import { Component, OnInit } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = {
        "id":123456,
        "name":"Rupchand",
        "email":"rup@gmail.com",
        "mobile": 87456231
  }

  constructor() { }

  ngOnInit(): void {
  }

}
