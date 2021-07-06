import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
// import * as EventEmitter from 'events';
import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  @Input('parentvalue')  parentvaluetype:any;
  @Input('ConversionParentValue') celciusparentvalue:any;
// @Output() Conversionvalue: EventEmitter<any> = new EventEmitter<any>();

  // @Input() props: { parentvaluetype:any;  celciusparentvalue:any };

  // @Input() parentClick:Subject<void>;
  @Output('ontextfromchild') passtoParent: EventEmitter<string> = new EventEmitter<string>();
  // childtextbox:string;

  message:string='';
  count:number=0;
  temp_value:number;
  celcius_output:any;
  childtextbox:any;
  constructor() { }
  // (parentvaluetype-32)*5/9
  ngOnInit(): void {
  
  }

  celcius_to_fahrenheit(){
    this.parentvaluetype = ((this.parentvaluetype-32)*5/9);
    this.celcius_output ="Celcius to fahrenheit : " + this.temp_value;
  }
  increasebyone(){

    
    this.count=this.count+1;
    this.message="counter :" + this.count;
  }

  decreasebyone(){

    this.count=this.count-1;
    this.message="counter :" + this.count;
  }
  passValuetoParent(){
    this.passtoParent.emit(this.childtextbox);

  }
  getvalue(val){
    
    console.log(val);
    
  }

  
}
