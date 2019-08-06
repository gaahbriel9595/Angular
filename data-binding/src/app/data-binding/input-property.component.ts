import { Component, Input } from '@angular/core';

@Component({


    // tslint:disable-next-line:component-selector
    selector: 'curso',
    template: '{{ nomeCurso }}'
})


export class InputPropertyComponent {


    // tslint:disable-next-line:no-input-rename
    @Input ('nome') nomeCurso = '';

    constructor() { }



}
