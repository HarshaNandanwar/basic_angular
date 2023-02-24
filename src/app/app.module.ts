import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WeightConverterComponent } from './small_block/weight_converter/weight-converter/weight-converter.component';
import { TodoComponent } from './small_block/todo_list/todo/todo.component';
import { IncrementDecrementComponent } from './small_block/increment-decrement/increment-decrement/increment-decrement.component';
import { TimeintervalComponent } from './small_block/setTime/timeinterval/timeinterval.component';
import { ParentcComponent } from './small_block/component-interaction/parentc/parentc.component';
import { ChildcComponent } from './small_block/component-interaction/parentc/childc/childc.component';
import { PipeTestComponent } from './small_block/pipes/pipe-test/pipe-test.component';
import { DollerRupeePipe } from './small_block/pipes/doller-rupee.pipe';
import { UserDetailComponent } from './small_block/reactive-form/user-detail/user-detail.component';
import { WeatherComponent } from './small_block/weather/weather/weather.component';
import { LoginComponent } from './small_block/Authantication/login/login.component';
import { DashboardComponent } from './small_block/Authantication/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { SuperComponent } from './small_block/view-child/super/super.component';
import { SubComponent } from './small_block/view-child/super/sub-component/sub/sub.component';
import { BossComponent } from './small_block/subject/boss/boss.component';
import { FirstComponent } from './small_block/subject/first-component/first/first.component';
import { ThirdComponent } from './small_block/subject/third-component/third/third.component';
import { SecondComponent } from './small_block/subject/second-component/second/second.component';
import { TechnologyComponent } from './small_block/child-routing/technology/technology.component';
import { MobileComponent } from './small_block/child-routing/mobile/mobile/mobile.component';
import { LaptopComponent } from './small_block/child-routing/laptop/laptop/laptop.component';
import { SearchingComponent } from './small_block/searching/searching/searching.component';
import { SearchPipePipe } from './small_block/pipes/search-pipe/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeightConverterComponent,
    TodoComponent,
    IncrementDecrementComponent,
    TimeintervalComponent,
    ParentcComponent,
    ChildcComponent,
    PipeTestComponent,
    DollerRupeePipe,
    UserDetailComponent,
    WeatherComponent,
    LoginComponent,
    DashboardComponent,
    SuperComponent,
    SubComponent,
    BossComponent,
    FirstComponent,
    ThirdComponent,
    SecondComponent,
    TechnologyComponent,
    MobileComponent,
    LaptopComponent,
    SearchingComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
