import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { DiaComponent } from './components/dia/dia.component';
import { LoginComponent } from './services/login/login.component';
import { MaquinaComponent } from './components/maquina/maquina.component';
import { RegistroComponent } from './services/registro/registro.component';
import { SismonComponent } from './components/sismon/sismon.component';
import { SumistroComponent } from './components/sumistro/sumistro.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { BlogComponent } from './components/blog/blog.component';
import { Erro404Component } from './components/erro404/erro404.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'dia', component: DiaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'maquina', component: MaquinaComponent },
  { path: 'regsitro', component: RegistroComponent },
  { path: 'sismom', component: SismonComponent },
  { path: 'suministro', component: SumistroComponent },
  { path: 'mantenimiento', component: MantenimientoComponent},
  { path: 'blog', component: BlogComponent},
  { path: '404', component: Erro404Component},
  {path: '**', redirectTo:'/404', pathMatch:'full'}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
