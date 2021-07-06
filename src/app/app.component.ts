import { Component, ViewChild } from '@angular/core';
import {Subject } from 'rxjs';
import { TemperatureComponent } from './temperature/temperature.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(TemperatureComponent) tempVariable : TemperatureComponent;

  title = 'temp';
  parentText:any;
  newValue: String;
  CelciusParentText:any;// pass this value to the child component
childTextBoxvalue:any;

  celcius_conversion(){

    this.tempVariable.celcius_to_fahrenheit();
  }

  getvalue(val){
    val =
    console.log(val);
    
  }
  updateValue(event){
    this.childTextBoxvalue=event;
  }
  increase(){

    this.tempVariable.increasebyone();
  }

  decrease(){

    this.tempVariable.decreasebyone();
  }
  // parentClick: Subject<void> = new Subject<void>();
  // public name= "36 C";

  // converttcelcius(){


  // }
  // // onParentButtonClick(){

  //   this.parentClick.next();
  // }
  updateinChildValue(event){
    this.newValue=event;

    
  }
}
