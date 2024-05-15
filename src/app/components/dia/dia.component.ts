import { Component } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrl: './dia.component.css'
})
export class DiaComponent {
  title="Dia";
  ponFondo = false;
  mostrar = true;
  habilitar = true;
  referencia = "http://www.google.com";

}
