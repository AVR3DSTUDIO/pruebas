import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pateras',
  templateUrl: './pateras.component.html',
  styleUrls: ['./pateras.component.css']
})
export class PaterasComponent implements OnInit {
public title: string;

  constructor(){
    this.title = 'pateras 0.0.1'
  }

  ngOnInit(){
      console.log('Componente Pateras Cargado!');
    }
}
