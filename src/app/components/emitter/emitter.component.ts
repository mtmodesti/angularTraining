import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent implements OnInit {

  @Output() changeData: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.changeData.emit()
  }

  constructor() {}

  ngOnInit(): void {}
}
