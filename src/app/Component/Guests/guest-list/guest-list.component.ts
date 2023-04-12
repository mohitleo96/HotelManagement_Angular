import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/Model/Guest.model';
import { GuestsService } from 'src/app/Services/guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  guest:Guest[]=[];
  constructor(private guestsService:GuestsService){}
  ngOnInit(): void {
    this.guestsService.GetAllGuestAsync()
    .subscribe(
      {
        next:(guest)=>{
          this.guest=guest;
        },
        error:(response)=>{
        console.log(response);
      }
  })

  }

}
