import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Model/room.model';
import { RoomsService } from 'src/app/services/room.service';
@Component({ 
  selector: 'app-rooms-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomsListComponent implements OnInit
 {
   rooms: Room[]=[];
    constructor(private roomsService: RoomsService) { }

     public msg:string="";

     ngOnInit(): void 
     {
       this.roomsService.GetAllRoomAsync()
       .subscribe(
        {
          next:(rooms)=>
        {
         // console.log(rooms);      
          this.rooms=rooms;
           if(this.rooms.length==0)
          {
               this.msg="no data found";
          }
          else
          {
              this.msg=" ";
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