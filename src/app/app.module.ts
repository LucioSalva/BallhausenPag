import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SismonComponent } from './components/sismon/sismon.component';
import { SumistroComponent } from './components/sumistro/sumistro.component';
import { DiaComponent } from './components/dia/dia.component';
import { MaquinaComponent } from './components/maquina/maquina.component';
import { LoginComponent } from './services/login/login.component';
import { RegistroComponent } from './services/registro/registro.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from './services/qr/qr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SobreComponent,
    SismonComponent,
    SumistroComponent,
    DiaComponent,
    MaquinaComponent,
    LoginComponent,
    RegistroComponent,
    MantenimientoComponent,
    BlogComponent,
    FooterComponent,
    QrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
