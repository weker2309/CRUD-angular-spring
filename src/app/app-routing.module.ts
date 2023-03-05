import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Persona/agregar/agregar.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';

const routes: Routes = [
  {path: 'Listar', component:ListarComponent},
  {path: 'Nuevo', component:AgregarComponent},
  {path: 'edut', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
