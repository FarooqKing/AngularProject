import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../Interface/Roles';
import { environment } from '../../environments/environment';
import { Client } from '../model/Class/Client';
import { Constant } from '../Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

 // Client Api
  getAllClient():Observable<IApiResponse>{
   return this.http.get<IApiResponse>(environment.Api_Url + Constant.API_MEHTOD.GET_ALL_CLIENTS);
  }
  addUpdateClient(obj:Client):Observable<IApiResponse>{
    return this.http.post<IApiResponse>(environment.Api_Url + Constant.API_MEHTOD.GET_ALL_CLIENTS,obj);
  }
  deleteClientById(id:number):Observable<IApiResponse>{
    return this.http.delete<IApiResponse>(environment.Api_Url + Constant.API_MEHTOD.GET_ALL_CLIENTS + id);
  }
 
  //ClientProjectApi

 getAllClientProject():Observable<IApiResponse>{
   return this.http.get<IApiResponse>(environment.Api_Url + Constant.API_MEHTOD.GET_ALL_CLIENTS);
  }
  addUpdateClientProject(obj:Client):Observable<IApiResponse>{
    return this.http.post<IApiResponse>(environment.Api_Url + Constant.API_MEHTOD.GET_ALL_CLIENTS,obj);
  }
  deleteClientByIdProject(id:number):Observable<IApiResponse>{
    return this.http.delete<IApiResponse>(environment.Api_Url + Constant.API_MEHTOD.GET_ALL_CLIENTS + id);
  }
  getAllEmployee():Observable<IApiResponse>{
   return this.http.get<IApiResponse>(environment.Api_Url + Constant.API_MEHTOD.GET_ALL_CLIENTS);
  }


}
