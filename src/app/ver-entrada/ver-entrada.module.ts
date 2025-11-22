import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { VerEntradaPage } from './ver-entrada.page';

import { QRCodeComponent } from 'angularx-qrcode';

const routes: Routes = [
  {
    path: '',
    component: VerEntradaPage
  }
];

@NgModule({
  imports: [
    CommonModule,         
    FormsModule,
    IonicModule,           
    RouterModule.forChild(routes),
    QRCodeComponent        
  ],
  declarations: [
    VerEntradaPage
  ]
})
export class VerEntradaPageModule {}
