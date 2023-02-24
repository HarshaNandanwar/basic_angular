import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg:string='';

  constructor(private service:AuthserviceService, private routes:Router){

  }
  ngOnInit(){
   
  }
  check(d1:any,d2:any){

    var output=this.service.checkuserandpassword(d1,d2);
    if(output==true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
      this.msg='Invalid username or password';
    }
  }

}
