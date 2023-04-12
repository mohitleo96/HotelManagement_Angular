
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/Model/room.model';
import { RoomsService } from 'src/app/services/room.service'; 
@Component({
   selector: 'app-add-room',
    templateUrl: './room-add.component.html',
     styleUrls: ['./room-add.component.css'] 
    })
     export class AddRoomComponent { 
      addRoomRequest: Room = { 
        Room_Id: '', 
        Room_Rate: 0, 
       Room_Status: false 
      };
         constructor(
          private roomsServices: RoomsService,
           private router: Router) { }
            ngOnInit(): void { }
            //this is a method which is inside html.component 
             AddRoomAsync()
              { 
                //here added room response that it is added   
                 this.roomsServices.AddRoomAsync(this.addRoomRequest)
                 .subscribe({
                   next:(room)=>{
                     this.router.navigate(['rooms']); 
                     //this is for routing after submiting it ill redirect to guest component 
                     //console.log(room); 
                     } 
                    });
                   }
              }