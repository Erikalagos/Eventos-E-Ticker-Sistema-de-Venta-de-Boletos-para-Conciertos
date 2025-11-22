import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage }])
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
