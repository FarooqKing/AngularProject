export class Client{
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

    constructor(){
        this.ClientId = 0,
        this.ContactPersonName = '',
        this.CompanyName = '',
        this.Address = '',
        this.City = '',
        this.PinCode='',
        this.EmployeeStrenght=0,
        this.gstNo = '',
        this.ContactNo='',
        this.regNo = '',
        this.State = ''
    }

}

export class ClientProject{
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
    
    constructor(){
        this.ClientId = 0,
        this.ClientProjectId = 0,
        this.ProjectName = '',
        this.StartDate = "",
        this.expectedDate = '',
        this.LeadByEmpId=0,
        this.CompleteDate='',
        this.ContactPerson = '',
        this.ContactPersonContactNo='',
        this.TotalEmpWorking = 0,
        this.ProjectCost = 0,
        this.ProjectDetail = '',
        this.ContactPersonEmailId= ''
    }

}