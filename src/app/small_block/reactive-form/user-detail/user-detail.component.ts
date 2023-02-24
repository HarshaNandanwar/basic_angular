import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userDetail!: FormGroup;
  count: number = 0;
  msg:string='';

  constructor(private fb: FormBuilder) {
    this.userDetail = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      dob: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      city: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      skills: new FormArray([]),
    })
  }

  userData() {
    console.log(this.userDetail.value);

  }
  addSkills() {
    if (this.count < 5) {
      const control = new FormControl("", [Validators.required]);
      (<FormArray>this.userDetail.get('skills')).push(control);
      this.count=++this.count;
    } else {
      this.msg="can not add more than 5 skill"
    }
  }
  
  deleteSkill(i:number){
    (<FormArray>this.userDetail.get('skills')).removeAt(i);
    this.count=--this.count;
    if(this.count<5){
      this.msg=""
    }  
  }

  get user() {
    return this.userDetail.get('user')
  }
  get password() {
    return this.userDetail.get('password')
  }
  get contact() {
    return this.userDetail.get('contact')
  }
  get skillControls() {
    return (<FormArray>this.userDetail.get('skills')).controls;
  }

}
