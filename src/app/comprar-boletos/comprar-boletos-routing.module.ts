import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarBoletosPage } from './comprar-boletos.page';

const routes: Routes = [
  {
    path: '',
    component: ComprarBoletosPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprarBoletosPageRoutingModule {}
