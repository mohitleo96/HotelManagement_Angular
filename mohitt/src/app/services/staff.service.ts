import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { staff } from '../Model/staff.model';


@Injectable({
  providedIn: 'root'
})
export class StaffService {
  baseApiUrl:string= environment.baseApiUrl;

  constructor(private http : HttpClient) { }
  getAllStaffs():Observable<staff[]>{
   return this.http.get<staff[]>(this.baseApiUrl+'/Bill');
    
  }
}
   