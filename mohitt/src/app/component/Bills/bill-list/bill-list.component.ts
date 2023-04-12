
import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/Model/Bill.model';
import { BillsService } from 'src/app/services/bill.service';
@Component({ 
  selector: 'app-bills-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class billsListComponent implements OnInit
 {
   bills: Bill[]=[];
    constructor(private billsService: BillsService) { }

     public msg:string="";

     ngOnInit(): void 
     {
       this.billsService.GetAllBillAsync()
       .subscribe(
        {
          next:(bills)=>
        {
         // console.log(bills);      
          this.bills=bills;
           if(this.bills.length==0)
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