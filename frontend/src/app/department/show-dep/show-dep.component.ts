import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  DepartmentList:any = [];
  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean = true;
  dep:any;
  display = "none";

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep = {
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
    console.log("click");
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data => {
      this.DepartmentList =  data;
    });
  }

}
