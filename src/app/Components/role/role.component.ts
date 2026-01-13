import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IApiResponse, IRoles } from '../../Interface/Roles';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {

   roleArray: IRoles[] = [];


//http = inject(HttpClient);

constructor(private http : HttpClient ){}
ngOnInit(): void {
  this.getAllRole();
}

getAllRole(){
 
  this.http.get<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:IApiResponse)=>{
    this.roleArray = res.data;
  })
}
}
