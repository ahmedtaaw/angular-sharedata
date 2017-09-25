import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  constructor() { }
  @ViewChild(ChildComponent) child;

  ngAfterViewInit() {
    //we can access the message variable that wass defined in the child component
    this.message=this.child.message;
  }
  //view child allows one component to be injected to another
  message="hello World";

  receiveMessage($event){
    this.message=$event;
  }
}
