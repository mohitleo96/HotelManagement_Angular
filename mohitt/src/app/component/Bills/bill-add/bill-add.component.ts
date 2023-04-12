
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bill} from 'src/app/Model/Bill.model';
import { BillsService } from 'src/app/services/bill.service'; 
@Component({
   selector: 'app-add-bill',
    templateUrl: './bill-add.component.html',
     styleUrls: ['./bill-add.component.css'] 
    })
     export class AddBillComponent { 
      // addBillRequest: Bill = { 
      //   bill_Id: '', 
      //   Number_Of_Adults: 0,
      //  Number_Of_Children: 0, 
      //  Check_Out:string,
      //  Check_In:string,
      //  Room_Status:false,
      //  No_Of_Nights:0,
      };
         constructor(
          private billsServices: billsService,
           private router: Router) { }
            ngOnInit(): void { }
            //this is a method which is inside html.component 
             AddBillAsync()
              { 
                //here added room response that it is added   
                 this.billsServices.AddBillAsync(this.addbillRequest)
                 .subscribe({
                   next:(bill)=>{
                     this.router.navigate(['bills']); 
                     //this is for routing after submiting it ill redirect to guest component 
                     //console.log(room); 
                     } 
                    });
                   }
              