import { Component } from '@angular/core';

@Component({
  selector: 'app-parentc',
  templateUrl: './parentc.component.html',
  styleUrls: ['./parentc.component.scss']
})
export class ParentcComponent {
  name: string | undefined;
  message: string = "";
  passData(val: any) {
    this.name = val;
  }
}
