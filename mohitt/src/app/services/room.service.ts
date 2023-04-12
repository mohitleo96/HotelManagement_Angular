import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../Model/room.model';
@Injectable({ providedIn: 'root'})
export class RoomsService 
{
 baseApiUrl : string = 'https://localhost:7081';
  constructor(private http:HttpClient) { }

   GetAllRoomAsync():Observable<Room[]>
   {
   return this.http.get<Room[]>(this.baseApiUrl + '/Room');
   }    

  AddRoomAsync(addRoomRequest: Room):Observable<Room>
   {
     addRoomRequest.Room_Id='00000000-0000-0000-0000-00000000';
     return this.http.post<Room>(this.baseApiUrl + '/Room', addRoomRequest);
   }

  GetRoomAsync(id :string):Observable<Room>
   {
       return this.http.get<Room>(this.baseApiUrl+'/Room/'+id);
   }

  //the name of methos here  same the method inside controller
  
  UpdateRoomAsync(id :string,updateRoomRequest: Room):Observable<Room>
  {
     return this.http.put<Room>(this.baseApiUrl+'/Room/'+id,updateRoomRequest);
  }
  
  DeleteRoomAsync(id:string):Observable<Room>
  {
    return this.http.delete<Room>(this.baseApiUrl+'/Room/'+id);
  }

  SearchRoom(status:boolean):Observable<Room> 
  {
    return this.http.get<Room>(this.baseApiUrl+'/Room/'+status); 
  }
}