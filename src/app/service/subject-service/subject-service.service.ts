import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor() { }

  // username=new Subject<any>();
  username=new BehaviorSubject('harsha');
}
