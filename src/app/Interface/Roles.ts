export interface IRoles {
  roleId: number;
  roleName: string;

  
}

export interface IApiResponse{
  message:string,
  result:boolean,
  data:any
}


export interface IDesignation {
  designationId: number;
  designationName: string;

  
}
export interface IEmployee {
  EmpId: number;
  EmpName: string;
  EmpCode: string;
  EmpEmailId: string;
  EmpDesignation: string;
  Role: string;


  
}
export interface IClient{
    ClientId:number;
    ContactPersonName:string;
    CompanyName:string;
    Address:string;
    City:string;
    PinCode:string;
    EmployeeStrenght:number;
    gstNo:string;
    ContactNo:string;
    regNo:string;
    State:string;


}


export interface IClientProject{
    ClientProjectId:number;
    ProjectName:string;
    StartDate:string;
    expectedDate:string;
    LeadByEmpId:number;
    CompleteDate:string;
    ContactPerson:string;
    ContactPersonContactNo:string;
    TotalEmpWorking: number;
    ProjectCost:number;
    ProjectDetail:string;
    ContactPersonEmailId:string;
    ClientId:number;
}