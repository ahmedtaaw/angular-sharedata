import { Component, OnInit,Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  //@Input() message:string;
  message:string="Hello From My child ! Holaa";

  @Output() messageEvent=new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  ngOnInit() {
  }

}
