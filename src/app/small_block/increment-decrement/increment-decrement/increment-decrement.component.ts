import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.scss']
})
export class IncrementDecrementComponent {
  num_val: number=0;
  add(){
    this.num_val=++this.num_val;
  }
  delete(){
this.num_val=--this.num_val;
if(this.num_val==0){
  console.log("n");
  
}
  }
}
