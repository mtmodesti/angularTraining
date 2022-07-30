import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
  
  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
