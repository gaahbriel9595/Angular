
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']

})

export class DataBindingComponent implements OnInit {


  url = 'http://loiane.training';
  urlImagem = 'https://loremflickr.com/320/240/dog';

  cursoAngular = true;

  conteudoAtual = '';
  conteudoSalvo = '';

  isMouseOver = false;

  nome = '';

  pessoa = {nome: '', idade: 18};

  getvalor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onClick() {
    alert('Botão clicado');
  }

  onKeyUp(event) {
    console.log(event);
    this.conteudoAtual = event.target.value;
  }

  onSave(valor) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event) {
    alert(event.novoValor);
  }
  constructor() { }

  ngOnInit() {
  }

}
