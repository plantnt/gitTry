import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormitoComponent } from './formito/formito.component';

const routes: Routes = [
  {path: '', component: CatalogoComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'pokemon', component: FormitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
