import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.scss']
})
export class TresComponent implements OnInit {

  @Output() salida: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    console.log("estas en componente 3");
    this.salida.emit(1);
  }

  restar(){
    console.log("estas en componente 3");
    this.salida.emit(-1);

  }

  saludar(){
    this.salida.emit("Hi Brayan");
  }
}
