import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestListComponent } from './Component/Guests/guest-list/guest-list.component';

import { ManagerComponent } from './Manager/manager/manager.component';
import { OwnerComponent } from './Owner/owner/owner.component';
import { ReceptionistComponent } from './Receptionist/receptionist/receptionist.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    OwnerComponent,
    ReceptionistComponent, 
    GuestListComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
