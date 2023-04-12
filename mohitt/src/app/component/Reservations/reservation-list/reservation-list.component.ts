import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/Model/Reservation.model';
import { ReservationsService } from 'src/app/services/reservation.service';
@Component({ 
  selector: 'app-reservations-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class reservationsListComponent implements OnInit
 {
   reservations: Reservation[]=[];
    constructor(private reservationsService: ReservationsService) { }

     public msg:string="";

     ngOnInit(): void 
     {
       this.reservationsService.GetAllReservationAsync()
       .subscribe(
        {
          next:(reservations)=>
        {
         // console.log(reservations);      
          this.reservations=reservations;
           if(this.reservations.length==0)
          {
               this.msg="no data found";
          }
          else
          {
              this.msg="";
          }
         },
        error: (response)=>
        {
       console.log(response); 
      this.msg="some error occured";
        }
       });
           
      }
      
    }