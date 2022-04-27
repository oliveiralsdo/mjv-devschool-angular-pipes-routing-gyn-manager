import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './components/member/member.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';



@NgModule({
  declarations: [
    MemberComponent,
    MembersListComponent,
    MembersPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MembersModule { }
