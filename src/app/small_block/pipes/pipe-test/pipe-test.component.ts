import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss']
})
export class PipeTestComponent {
data !:string;
person={
  "name":"harsha"
}
date=new Date();
constructor(){

}
fireEvent(val:any){
this.data=val
}
}
