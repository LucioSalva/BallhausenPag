import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaginaBallhausen02';
}

export class QRCodeComponent {
  public myAngularxQrCode: string = 'null';
  constructor () {
    this.myAngularxQrCode = 'Your QR code data string';
  }
}