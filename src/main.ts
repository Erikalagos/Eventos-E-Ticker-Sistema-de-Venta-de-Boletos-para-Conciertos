// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';  // 👈 IMPORTANTE

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,      // 👈 AQUÍ conectamos HttpClient para tus servicios
    ),
  ],
}).catch(err => console.error(err));
