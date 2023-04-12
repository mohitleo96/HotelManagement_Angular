
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../Model/Reservation.model';
@Injectable({ providedIn: 'root'})
export class ReservationsService 
{
 baseApiUrl : string = 'https://localhost:7081';
  constructor(private http:HttpClient) { }

   GetAllReservationAsync():Observable<Reservation[]>
   {
   return this.http.get<Reservation[]>(this.baseApiUrl + '/Reservation');
   }    

  AddReservationAsync(addReservationRequest: Reservation):Observable<Reservation>
   {
     addReservationRequest.Reservation_Id='00000000-0000-0000-0000-00000000';
     return this.http.post<Reservation>(this.baseApiUrl + '/Reservation', addReservationRequest);
   }

  GetReservationAsync(id :string):Observable<Reservation>
   {
       return this.http.get<Reservation>(this.baseApiUrl+'/Reservation/'+id);
   }

  //the name of methos here  same the method inside controller
  
  UpdateReservationAsync(id :string,updateReservationRequest: Reservation):Observable<Reservation>
  {
     return this.http.put<Reservation>(this.baseApiUrl+'/Reservation/'+id,updateReservationRequest);
  }
  
  DeleteReservationAsync(id:string):Observable<Reservation>
  {
    return this.http.delete<Reservation>(this.baseApiUrl+'/Reservation/'+id);
  }

  SearchReservation(status:boolean):Observable<Reservation> 
  {
    return this.http.get<Reservation>(this.baseApiUrl+'/Reservation/'+status);
  }
}