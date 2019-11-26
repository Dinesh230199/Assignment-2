import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello';
  section: any = [];
  Assignment:FormGroup ;
  modalRef: BsModalRef;
  addbtn:Boolean;
  CD1 : Boolean;
  CD2 : Boolean;
  CD3 : Boolean;
  constructor(private modalService: BsModalService , private fb:FormBuilder) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }



  ngOnInit(){
    this.Assignment = this.fb.group({
      cb1 : [''],
      cb2 : [''],
      cb3 : [''],
      newCoverage1 :[''],
      date1 : ['',Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')],
      coverageVal1 :['',Validators.pattern("[0-9]")],
      newCoverage2 :[''],
      date2 : ['',Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')],
      coverageVal2 :['',Validators.pattern("[0-9]")],
      newCoverage3 :[''],
      date3 : ['',Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}')],
      coverageVal3 :['',Validators.pattern("[0-9]")],
    })

    // if(this.Assignment.get('cb1').value === true || this.Assignment.get('cb2').value===true || this.Assignment.get('cb3').value===true){
    //   this.addbtn=true;
    // }
    // else{
    //   this.addbtn=false;
    // }

    this.Assignment.valueChanges.subscribe((Value) => {
      if (Value.cb1 === true || Value.cb2 === true || Value.cb3 === true) {
        this.addbtn = true;
      } else {
        this.addbtn = false;
       
      }
    });
  

  }

  coverageDetails(){

    if(this.Assignment.get('cb1').value === true) {
      this.CD1=true;
    } else{
      this.CD1=false;
    }

    if(this.Assignment.get('cb2').value === true) {
      this.CD2=true;
    } else{
      this.CD2=false;
    }

    if(this.Assignment.get('cb3').value === true) {
      this.CD3=true;
    } else{
      this.CD3=false;
    }

    console.log(this.Assignment.value);
    console.log(this.CD1, this.CD2, this.CD3);
  }

  removeCD1(){
    this.CD1=false;
    this.Assignment.patchValue({
      cb1 : false,
    })
  }

  removeCD2(){
    this.CD2=false;
    this.Assignment.patchValue({
      cb2 : false,
    })
  }

  removeCD3(){
    this.CD3=false;
    this.Assignment.patchValue({
      cb3 : false,
    })
  }

}