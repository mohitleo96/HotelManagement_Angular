
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation} from 'src/app/Model/Reservation.model';
import { ReservationsService } from 'src/app/services/reservation.service'; 
@Component({
   selector: 'app-add-reservation',
    templateUrl: './reservation-add.component.html',
     styleUrls: ['./reservation-add.component.css'] 
    })
     export class AddReservationComponent { 
      addReservationRequest: Reservation = { 
        Reservation_Id: '', 
        Number_Of_Adults: 0,
       Number_Of_Children: 0, 
       Check_Out:,
       Check_In:,
       Room_Status:false,
       No_Of_Nights:0,
      };
         constructor(
          private reservationsServices: reservationsService,
           private router: Router) { }
            ngOnInit(): void { }
            //this is a method which is inside html.component 
             AddRoomAsync()
              { 
                //here added room response that it is added   
                 this.reservationsServices.AddRoomAsync(this.addReservationRequest)
                 .subscribe({
                   next:(reservation)=>{
                     this.router.navigate(['reservations']); 
                     //this is for routing after submiting it ill redirect to guest component 
                     //console.log(room); 
                     } 
                    });
                   }
              }