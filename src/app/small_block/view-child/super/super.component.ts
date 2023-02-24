import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SubComponent } from './sub-component/sub/sub.component';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.scss']
})
export class SuperComponent implements AfterViewInit {

  @ViewChild(SubComponent)
  child: SubComponent = new SubComponent;
  
  constructor() {}

  ngAfterViewInit() {
    console.log(this.child);
  }

  changeChildProperty(data:any) {
    this.child.name =data;
  }

  changeChildMethod() {
    this.child.change();
  }
}
