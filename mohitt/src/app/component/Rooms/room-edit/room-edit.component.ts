
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/Model/room.model';
import { RoomsService } from 'src/app/services/room.service';
@Component({
  selector: 'app-edit',
  templateUrl: './room-edit.component.html',
    styleUrls: ['./room-edit.component.css']
  })
  export class EditComponent {roomDetails : Room =
     {
       room_id:'',
       room_rate: 0,
       room_status: false
         };
         constructor(
          private route:ActivatedRoute,
          private roomsServices: RoomsService,
          private router: Router 
          )
           {}ngOnInit(): void {
              this.route.paramMap
            .subscribe
            ({
               next:(params)=>
               { const room_id=params.get('room_id');
                if(room_id)
                 {
                   //call api     
                  //the name of id here will be same as the name inside app-routin.module        
                  this.roomsServices.GetRoomAsync(room_id)
                  .subscribe 
                  ({
                    next:(response)=>
                    {
                       this.roomDetails=response; 
                    }
                      });
                   }
                   }
                   })
                  }
                  UpdateRoomAsync()
                  {
                     this.roomsServices.UpdateRoomAsync(this.roomDetails.room_id,this.roomDetails)
                     .subscribe({
                       next:(response)=>
                       { this.router.navigate(['Rooms']);
                       }
                       });
                      }
                      DeleteRoomAsync(room_id:string)
                      {
                         this.roomsServices.DeleteRoomAsync(room_id)
                         .subscribe({
                           next:(Response)=>
                           {
                             this.router.navigate(['rooms']);
                             
                          }
                         });
                        }
                      }