import { Component } from '@angular/core';
import { SubjectServiceService } from 'src/app/service/subject-service/subject-service.service';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.scss']
})
export class BossComponent {
  username:any;
constructor(private _service:SubjectServiceService){
  this._service.username.subscribe(uname=>{
    this.username=uname;
  })
}
}
