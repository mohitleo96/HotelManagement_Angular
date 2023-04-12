import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/Model/Inventory.model';
import { InventoriesService } from 'src/app/services/inventory.service';
@Component({ 
  selector: 'app-inventorys-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventorysListComponent implements OnInit
 {
   inventories: Inventory[]=[];
 
    constructor(private inventoriesService: InventoriesService) { }

     public msg:string="";

     ngOnInit(): void 
     {
       this.inventoriesService.GetAllInventoryAsync()
       .subscribe(
        {
          next:(inventories)=>
        {
         // console.log(inventories);      
          this.inventories=inventories;
           if(this.inventories.length==0)
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