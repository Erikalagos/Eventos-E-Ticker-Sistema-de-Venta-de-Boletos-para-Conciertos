// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'eventos',
    pathMatch: 'full',
  },
  {
    path: 'eventos',
    loadChildren: () =>
      import('./eventos/eventos.module').then(m => m.EventosPageModule),
  },
  {
    path: 'agregar-evento',
    loadChildren: () =>
      import('./agregar-evento/agregar-evento.module').then(m => m.AgregarEventoPageModule),
  },
  {
    path: 'comprar-boletos',
    loadChildren: () =>
      import('./comprar-boletos/comprar-boletos.module').then(m => m.ComprarBoletosPageModule),
  },
  {
    path: 'historial-compras',
    loadChildren: () =>
      import('./historial-compras/historial-compras.module').then(m => m.HistorialComprasPageModule),
  },
  {
    path: 'ver-entrada',
    loadChildren: () =>
      import('./ver-entrada/ver-entrada.module').then(m => m.VerEntradaPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
