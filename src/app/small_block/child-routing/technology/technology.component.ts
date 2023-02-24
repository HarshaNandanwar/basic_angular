import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {
  constructor(private router:Router,private route:ActivatedRoute){

  }
  mobileRoute(){
    this.router.navigate(['mobile'],{relativeTo:this.route})
  }
  laptopRoute(){
    this.router.navigate(['laptop'],{relativeTo:this.route})
  }
}
