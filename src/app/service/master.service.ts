import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../Interface/Roles';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient) {

   }

   getAllDesignation():Observable<IApiResponse> {
    return this.http.get<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
   }
}
