import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/Model/Guest.model';
import { GuestsService } from 'src/app/services/guest.service';
@Component({ 
  selector: 'app-guests-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestsListComponent implements OnInit
 {
   guests: Guest[]=[];
    constructor(private guestsService: GuestsService) { }

     public msg:string="";

     ngOnInit(): void 
     {
       this.guestsService.GetAllGuestAsync()
       .subscribe(
        {
          next:(guests)=>
        {
         // console.log(guests);      
          this.guests=guests;
           if(this.guests.length==0)
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