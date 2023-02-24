import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './small_block/Authantication/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './small_block/Authantication/login/login.component';
import { LaptopComponent } from './small_block/child-routing/laptop/laptop/laptop.component';
import { MobileComponent } from './small_block/child-routing/mobile/mobile/mobile.component';
import { TechnologyComponent } from './small_block/child-routing/technology/technology.component';
import { ChildcComponent } from './small_block/component-interaction/parentc/childc/childc.component';
import { ParentcComponent } from './small_block/component-interaction/parentc/parentc.component';
import { IncrementDecrementComponent } from './small_block/increment-decrement/increment-decrement/increment-decrement.component';
import { PipeTestComponent } from './small_block/pipes/pipe-test/pipe-test.component';
import { UserDetailComponent } from './small_block/reactive-form/user-detail/user-detail.component';
import { SearchingComponent } from './small_block/searching/searching/searching.component';
import { TimeintervalComponent } from './small_block/setTime/timeinterval/timeinterval.component';
import { BossComponent } from './small_block/subject/boss/boss.component';
import { TodoComponent } from './small_block/todo_list/todo/todo.component';
import { SuperComponent } from './small_block/view-child/super/super.component';
import { WeatherComponent } from './small_block/weather/weather/weather.component';
import { WeightConverterComponent } from './small_block/weight_converter/weight-converter/weight-converter.component';

const routes: Routes = [
  {
    path: "weight_converter",
    component:WeightConverterComponent
  },
  {
    path: "todo_list",
    component:TodoComponent
  },
  {
    path: "increment_decrement",
    component:IncrementDecrementComponent
  },
  {
    path: "time_interval",
    component:TimeintervalComponent
  },
  {
    path:"parent_c",
    component:ParentcComponent
  },
  {
    path:"child_c",
    component:ChildcComponent
  },
  {
    path:"pipe",
    component:PipeTestComponent
  },
  {
    path:"reactive_form",
    component:UserDetailComponent
  },
  {
    path:"weather",
    component:WeatherComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    canActivate:[AuthGuard],
    component:DashboardComponent
  },
  {
    path:"view_child",
    component:SuperComponent
  },
  {
    path:"subject_boss",
    component:BossComponent
  },
  {
    path:"technology",
    component:TechnologyComponent,
    children:[
      {
        path:"mobile",
        component:MobileComponent
      },
      {
        path:"laptop",
        component:LaptopComponent
      }
    ]
  },
  {
    path:"searching",
    component:SearchingComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents=[]
