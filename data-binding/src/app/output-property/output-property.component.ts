import { Component, OnInit,  Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {


    @Input() valor = 0;

    @Output() mudouValor = new EventEmitter();

    @ViewChild('campoInput') campoValorInput: ElementRef;

    decrementa() {
        this.campoValorInput.nativeElement.value--;
        this.valor--;
        this.mudouValor.emit({novoValor: this.valor});
    }
    incrementa() {
        this.campoValorInput.nativeElement.value--;
        this.mudouValor.emit({novoValor: this.valor});
    }


  constructor() { }

  ngOnInit() {
  }

}
