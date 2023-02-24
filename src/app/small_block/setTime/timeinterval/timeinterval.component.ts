import { Component } from '@angular/core';

@Component({
  selector: 'app-timeinterval',
  templateUrl: './timeinterval.component.html',
  styleUrls: ['./timeinterval.component.scss']
})
export class TimeintervalComponent {
  count: number = 0
  constructor() {

  }
  str(){
    setTimeout(()=>{
      setInterval(() =>{
        this.count = ++this.count;
        if(this.count==11){
          this.count=0;
        }
      },1000);
    },5000)
  }
}
