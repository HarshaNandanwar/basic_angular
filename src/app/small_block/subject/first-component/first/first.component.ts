import { Component } from '@angular/core';
import { SubjectServiceService } from 'src/app/service/subject-service/subject-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
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
