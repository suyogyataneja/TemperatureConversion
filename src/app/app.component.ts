import { Component } from '@angular/core';
import {Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp';
  parentText:any;
  newValue: String;
  CelciusParentText:any;// pass this value to the child component

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
