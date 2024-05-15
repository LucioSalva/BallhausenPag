import { Component } from '@angular/core';

@Component({
  selector: 'app-sumistro',
  templateUrl: './sumistro.component.html',
  styleUrl: './sumistro.component.css'
})
export class SumistroComponent {
  title="hola da click y te digo algo";
  
  boton: string  = "";

  constructor() {}

  saludar() {this.boton="Hola zoquete hasta que aprendes hacer algo";}

    
}
