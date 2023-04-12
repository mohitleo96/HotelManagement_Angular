import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../Model/Bill.model';
@Injectable({ providedIn: 'root'})export class BillsService 
{
 baseApiUrl : string = 'https://localhost:7081';
  constructor(private http:HttpClient) { }

   GetAllBillAsync():Observable<Bill[]>
   {
   return this.http.get<Bill[]>(this.baseApiUrl + '/Bill');
   }    

  AddBillAsync(addBillRequest: Bill):Observable<Bill>
   {
     addBillRequest.Bill_Id='00000000-0000-0000-0000-00000000';
     return this.http.post<Bill>(this.baseApiUrl + '/Bill', addBillRequest);
   }

  GetBillAsync(id :string):Observable<Bill>
   {
       return this.http.get<Bill>(this.baseApiUrl+'/Bill/'+id);
   }

  //the name of methos here  same the method inside controller
  
  UpdateBillAsync(id :string,updateBillRequest: Bill):Observable<Bill>
  {
     return this.http.put<Bill>(this.baseApiUrl+'/Bill/'+id,updateBillRequest);
  }
  
  DeleteBillAsync(id:string):Observable<Bill>
  {
    return this.http.delete<Bill>(this.baseApiUrl+'/Bill/'+id);
  }

  SearchBill(status:boolean):Observable<Bill> 
  {
    return this.http.get<Bill>(this.baseApiUrl+'/Bill/'+status); 
  }
}