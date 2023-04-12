import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestListComponent } from './Component/Guests/guest-list/guest-list.component';
import { LoginComponent } from './Login/login/login.component';
import { ManagerComponent } from './Manager/manager/manager.component';
import { OwnerComponent } from './Owner/owner/owner.component';
import { ReceptionistComponent } from './Receptionist/receptionist/receptionist.component';

const routes: Routes = [
  {
    //path is empty because it indicates home page
    path:'',
    component:LoginComponent
  },
  {
  path:'Manager/manager',
  component:ManagerComponent,
  
   },
  {
    path:'Owner/owner',
    component:OwnerComponent
   },
  {
      path:'Receptionist/receptionist',
      component:ReceptionistComponent
   },
   {
    path:'Component/Guests/guest-list',
    component:GuestListComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
