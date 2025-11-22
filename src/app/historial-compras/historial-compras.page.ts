import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.page.html',
  styleUrls: ['./historial-compras.page.scss'],
 standalone: false,
})
export class HistorialComprasPage implements OnInit {

  compras: any[] = [];
  cargando = false;
  error = '';

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.cargarCompras();
  }

  ionViewWillEnter() {
    this.cargarCompras();
  }

  cargarCompras() {
    this.cargando = true;
    this.error = '';

    this.eventoService.getCompras().subscribe({
      next: (data: any[]) => {
        this.compras = data || [];
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al obtener compras', err);
        this.error = 'No se pudo cargar el historial de compras.';
        this.cargando = false;
      }
    });
  }
}
