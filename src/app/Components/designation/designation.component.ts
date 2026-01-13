import { Component, inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IApiResponse, IDesignation } from '../../Interface/Roles';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {
  isLoader :boolean = true;
  designationArray : IDesignation[] = [];
  desginationService  = inject(MasterService);

  ngOnInit(){
    this.desginationService.getAllDesignation().subscribe((res:IApiResponse)=>{
      this.designationArray  = res.data; 
      this.isLoader = false;
    },error=>{
      alert("Api error")
      this.isLoader = false;

    })
  }
}
