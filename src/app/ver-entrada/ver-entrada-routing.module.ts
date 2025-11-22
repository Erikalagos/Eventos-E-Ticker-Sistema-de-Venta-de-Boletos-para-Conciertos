import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerEntradaPage } from './ver-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: VerEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerEntradaPageRoutingModule {}
