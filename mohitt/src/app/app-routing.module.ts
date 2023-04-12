import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomComponent } from './component/Rooms/room-add/room-add.component';
import { RoomsListComponent } from './component/Rooms/room-list/room-list.component';


const routes: Routes = [


  {
    path:'',
    component: RoomsListComponent
  },
  {
    path:'Rooms/add',
    component: AddRoomComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
