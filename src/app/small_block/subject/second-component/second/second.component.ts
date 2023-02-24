import { Component } from '@angular/core';
import { SubjectServiceService } from 'src/app/service/subject-service/subject-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  username:string='';
  constructor(private _service:SubjectServiceService){
    this._service.username.subscribe(uname=>{
      this.username=uname;
    })
  }
  updateName(data:any){
    this._service.username.next(data.value)
  }
}
