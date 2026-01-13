import { Component, NgModule } from '@angular/core';
import { DesignationComponent } from "../designation/designation.component";
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleComponent } from '../role/role.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent,RoleComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComp = 'role';
  buttonColor = 'btn-primary' 

  changeByButton(tabName : string){
    this.currentComp = tabName;

  }
 
}
