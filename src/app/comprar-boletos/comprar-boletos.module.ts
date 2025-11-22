import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComprarBoletosPageRoutingModule } from './comprar-boletos-routing.module';
import { ComprarBoletosPage } from './comprar-boletos.page';

@NgModule({
  declarations: [ComprarBoletosPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComprarBoletosPageRoutingModule
  ]
})
export class ComprarBoletosPageModule {}
