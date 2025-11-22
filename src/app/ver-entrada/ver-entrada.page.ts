import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-entrada',
  templateUrl: './ver-entrada.page.html',
  styleUrls: ['./ver-entrada.page.scss'],
  standalone: false,
})
export class VerEntradaPage implements OnInit {

  entrada: any = null;
  qrData: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const state: any = history.state;

    if (state && state.entrada) {
      this.entrada = state.entrada;

      this.qrData = JSON.stringify({
        id: this.entrada.id,
        cliente: this.entrada.cliente,
        eventoId: this.entrada.eventoId,
        zonaId: this.entrada.zonaId,
        fechaCompra: this.entrada.fechaCompra
      });
    } else {
      this.router.navigate(['/eventos']);
    }
  }

}
