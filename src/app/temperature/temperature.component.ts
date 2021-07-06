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
  // @Input() props: { parentvaluetype:any;  celciusparentvalue:any };

  // @Input() parentClick:Subject<void>;
  // @Output('ontextfromchild') passtoParent: EventEmitter<string> = new EventEmitter<string>();
  // childtextbox:string;

  constructor() { }

  ngOnInit(): void {
  
  }

  // passValuetoParent(){
  //   this.passtoParent.emit(this.childtextbox);

  // }

  
}
