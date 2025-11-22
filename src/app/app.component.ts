// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,   // *ngFor, *ngIf, etc.
    RouterModule,   // routerLink, router-outlet
    IonicModule,    // ion-app, ion-menu, ion-content, etc.
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
public appPages = [
  { title: 'eventos',            url: '/eventos',            icon: 'bar-chart' },
  { title: 'agregar-evento',     url: '/agregar-evento',     icon: 'cloud-upload' },
  { title: 'comprar-boletos',    url: '/comprar-boletos',    icon: 'receipt' },
  { title: 'histórico-compras',  url: '/historial-compras',  icon: 'clipboard' },
  { title: 'ver-entrada',        url: '/ver-entrada',        icon: 'reader' },
];


  public labels: string[] = [];

  constructor() {}
}
