import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BillComponent } from './services/bill/bill.component';
import { GuestComponent } from './services/guest/guest.component';
import { InventoryComponent } from './services/inventory/inventory.component';
import { ReservationComponent } from './services/reservation/reservation.component';
import { RoomComponent } from './component/staffs/room/room.component';
import { RoleComponent } from './component/staffs/role/role.component';
import { RoomEditComponent } from './component/Rooms/room-edit/room-edit.component';
import { RoomListComponent } from './component/Rooms/room-list/room-list.component';
import { AddRoomComponent } from './component/Rooms/room-add/room-add.component';
import { ReservationListComponent } from './component/Reservations/Reservation_list/reservation-list/reservation-list.component';
import { ReservationAddComponent } from './component/Reservations/reservation-add/reservation-add.component';
import { ReservationEditComponent } from './component/Reservations/reservation-edit/reservation-edit.component';
import { InventoryAddComponent } from './component/Inventories/inventory-add/inventory-add.component';
import { InventoryEditComponent } from './component/Inventories/inventory-edit/inventory-edit.component';
import { InventoryListComponent } from './component/Inventories/inventory-list/inventory-list.component';
import { GuestAddComponent } from './component/Guests/guest-add/guest-add.component';
import { GuestListComponent } from './component/Guests/guest-list/guest-list.component';
import { GuestEditComponent } from './component/Guests/guest-edit/guest-edit.component';
import { BillAddComponent } from './component/Bills/bill-add/bill-add.component';
import { BillEditComponent } from './component/Bills/bill-edit/bill-edit.component';
import { BillListComponent } from './component/Bills/bill-list/bill-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    BillComponent,
    GuestComponent,
    InventoryComponent,
    ReservationComponent,
    RoomComponent,
    RoleComponent,
    RoomEditComponent,
    RoomListComponent,
    AddRoomComponent,
    ReservationListComponent,
    ReservationAddComponent,
    ReservationEditComponent,
    InventoryAddComponent,
    InventoryEditComponent,
    InventoryListComponent,
    GuestAddComponent,
    GuestListComponent,
    GuestEditComponent,
    BillAddComponent,
    BillEditComponent,
    BillListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
