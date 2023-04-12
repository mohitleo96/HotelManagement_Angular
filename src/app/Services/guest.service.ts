
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../Model/Guest.model';
@Injectable({ 
  providedIn: 'root'
})
export class GuestsService 
{
 baseApiUrl : string = 'https://localhost:7081';
  constructor(private http:HttpClient) { }

   GetAllGuestAsync():Observable<Guest[]>
   {
   return this.http.get<Guest[]>(this.baseApiUrl + '/Guest');
   }    

  // AddGuestAsync(addGuestRequest: Guest):Observable<Guest>
  //  {
  //    addGuestRequest.Guest_Id='00000000-0000-0000-0000-00000000';
  //    return this.http.post<Guest>(this.baseApiUrl + '/Guest', addGuestRequest);
  //  }

  // GetGuestAsync(id :string):Observable<Guest>
  //  {
  //      return this.http.get<Guest>(this.baseApiUrl+'/Guest/'+id);
  //  }

  // //the name of methos here  same the method inside controller
  
  // UpdateGuestAsync(id :string,updateGuestRequest: Guest):Observable<Guest>
  // {
  //    return this.http.put<Guest>(this.baseApiUrl+'/Guest/'+id,updateGuestRequest);
  // }
  
  // DeleteGuestAsync(id:string):Observable<Guest>
  // {
  //   return this.http.delete<Guest>(this.baseApiUrl+'/Guest/'+id);
  // }

  // SearchGuest(status:boolean):Observable<Guest> 
  // {
  //   return this.http.get<Guest>(this.baseApiUrl+'/Guest/'+status);
  // }
}