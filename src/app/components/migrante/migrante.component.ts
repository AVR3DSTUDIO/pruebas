import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'migrante',
  templateUrl: './migrante.component.html',
  styleUrls: ['./migrante.component.css']
})
export class MigranteComponent implements OnInit {
	public title: string;
	public nombreDelParque: string;
	public miParque;

  	constructor(){
  		this.title = 'Migrante 0.0.1';
  	}

    ngOnInit(){
      $('#textojq').hide();
      $('#botonjq').click(function(){
        console.log('jq');
        $('#textojq').slideToggle();
      });
    }
  	mostrarNombre(){
  		console.log(this.nombreDelParque);
  	}

  	verDatosParque(event){
  		console.log(event);
  		this.miParque = event;
  	}
}
