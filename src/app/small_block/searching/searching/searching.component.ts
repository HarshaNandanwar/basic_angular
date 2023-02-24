import { Component } from '@angular/core';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent {
  constructor(){
    
  }
  public searchInput!: string;
  public programmingLanguages = [
    'Python', 'TypeScript', 'C', 'C++', 'Java',
    'Go', 'JavaScript', 'PHP', 'Ruby', 'Swift', 'Kotlin'
  ]
}
