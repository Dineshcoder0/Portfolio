import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-prfile',
  templateUrl: './prfile.component.html',
  styleUrls: ['./prfile.component.scss']
})
export class PrfileComponent implements OnInit {



 constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.GetEmp()
  }
EmpDatas:any

GetEmp(){

    this.service.GetEmp().subscribe((data:any)=>{
      this.EmpDatas=data.employeeList
    })
  }


}
