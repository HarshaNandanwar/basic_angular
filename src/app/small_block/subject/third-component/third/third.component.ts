import { Component } from '@angular/core';
import { SubjectServiceService } from 'src/app/service/subject-service/subject-service.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {
  username: string = '';
  constructor(private _service: SubjectServiceService) {
    this._service.username.subscribe(uname => {
      this.username = uname;
    })
  }
  updateName(data: any) {
    this._service.username.next(data.value)
    // this.username = data.value;
  }
}
