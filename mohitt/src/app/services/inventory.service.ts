import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../Model/Inventory.model';
@Injectable({ providedIn: 'root'})export class InventoriesService 
{
 baseApiUrl : string = 'https://localhost:7081';
  constructor(private http:HttpClient) { }

   GetAllInventoryAsync():Observable<Inventory[]>
   {
   return this.http.get<Inventory[]>(this.baseApiUrl + '/Inventory');
   }    

  AddInventoryAsync(addInventoryRequest: Inventory):Observable<Inventory>
   {
     addInventoryRequest.Inventory_Id='00000000-0000-0000-0000-00000000';
     return this.http.post<Inventory>(this.baseApiUrl + '/Inventory', addInventoryRequest);
   }

  GetInventoryAsync(id :string):Observable<Inventory>
   {
       return this.http.get<Inventory>(this.baseApiUrl+'/Inventory/'+id);
   }

  //the name of methos here  same the method inside controller
  
  UpdateInventoryAsync(id :string,updateInventoryRequest: Inventory):Observable<Inventory>
  {
     return this.http.put<Inventory>(this.baseApiUrl+'/Inventory/'+id,updateInventoryRequest);
  }
  
  DeleteInventoryAsync(id:string):Observable<Inventory>
  {
    return this.http.delete<Inventory>(this.baseApiUrl+'/Inventory/'+id);
  }

  SearchInventory(status:boolean):Observable<Inventory> 
  {
    return this.http.get<Inventory>(this.baseApiUrl+'/Inventory/'+status); 
  }
}