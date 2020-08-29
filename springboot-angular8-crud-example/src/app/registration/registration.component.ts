import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User=new User("","",0,"");
  message:any;

  constructor(private service:UserRegistationService) { }

  ngOnInit() {
  }
  

  public registerNow(){
    console.log("click on register now ");
let resp=this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
  }

}
