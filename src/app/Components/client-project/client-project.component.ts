import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { IApiResponse, IClient, IClientProject, IEmployee } from '../../Interface/Roles';
import { Constant } from '../../Constant/constant';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent {


  projectForm : FormGroup = new FormGroup({
    ClientProjectId : new FormControl(0),
    ClientId : new FormControl(''),
    LeadByEmpId : new FormControl(''),
    ProjectName : new FormControl('',[Validators.required,Validators.minLength(2)]),
    StartDate : new FormControl(''),
    ExpectedDate : new FormControl(''),
    CompleteDate : new FormControl(''),
    ContactPerson : new FormControl(''),
    ContactPersonContactNo : new FormControl(''),
    TotalEmpWorking : new FormControl(0),
    ProjectCost : new FormControl(0),
    ProjectDetail : new FormControl(''),
    ContactPersonEmailId : new FormControl(''),
    
    
  });
requiredMsg : string = Constant.VALIDATION_MSG.Required;
  clientService  = inject(ClientService);

  empList : IEmployee[] = [];
  clientList: IClient[] = [];
  clientProjectList$ :Observable<IApiResponse> = new Observable<IApiResponse>;
  clientProjectList = signal<IClientProject[]>([]);
  ngOnInit(){
    this.getAllClient();
    this.getAllEmp();
    this.clientProjectList$ = this.clientService.getAllClientProject()
  }

  //Client Project APi 

  onSaveProject(){
    const formValue = this.projectForm.value;
    this.clientService.addUpdateClientProject(formValue).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert('Successfully Added')
      }
      else{
        alert(res.message)
      }
    })
  }

  getAllEmp(){
    this.clientService.getAllEmployee().subscribe((res:IApiResponse)=>{
      this.empList=res.data;
    })
  }
   getAllClient(){
    this.clientService.getAllClient().subscribe((res:IApiResponse)=>{
      this.clientList=res.data;
    })
  }
  getAllClientProject(){
    this.clientService.getAllClientProject().subscribe((res:IApiResponse)=>{
      this.clientProjectList.set(res.data);
    })
  }



}
