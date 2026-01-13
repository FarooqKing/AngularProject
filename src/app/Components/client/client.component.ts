import { Component, inject } from '@angular/core';
import { Client } from '../../model/Class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { IApiResponse } from '../../Interface/Roles';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,TitleCasePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {


   clientObj:Client = new Client();

   clientList:Client[]= [];

   clientService = inject(ClientService)

  ngOnInit(){
this.loadClient();
  }

  loadClient(){
    this.clientService.getAllClient().subscribe((res:IApiResponse)=>{
      this.clientList = res.data;
    })
  }


  onSaveClient(){
    this.clientService.addUpdateClient(this.clientObj).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Client Successfully added");
        this.loadClient();
        this.clientObj = new Client(); //this will reInitilaize all the fields after adding
      }
      else{
        alert(res.message)
      }
    });
  }

  onDelete(id:number){
    const isDelete = confirm("Are You Sure to Delete");
    if(isDelete){

      this.clientService.deleteClientById(id).subscribe((res:IApiResponse)=>{
        if(res.result){
          alert("Client Successfully delete");
          this.loadClient();
        }
        else{
          alert(res.message)
        }
      });
    }else{
      this.loadClient();
    }
  }

  onEdit(obj:Client){
    this.clientService.addUpdateClient(obj).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Client Successfully updated");
        this.loadClient();
        this.clientObj = new Client(); //this will reInitilaize all the fields after adding
      }
      else{
        alert(res.message)
      }
    });
  }
}
