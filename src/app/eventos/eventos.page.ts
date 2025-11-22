// src/app/eventos/eventos.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
 standalone:false,
})
export class EventosPage implements OnInit {

  eventos: any[] = [];
  cargando = false;
  error = '';

  constructor(
    private eventoService: EventoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarEventos();
  }

  ionViewWillEnter() {
    this.cargarEventos();
  }

  cargarEventos() {
    this.cargando = true;
    this.error = '';

    this.eventoService.getEventos().subscribe({
      next: (data) => {
        this.eventos = data || [];
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener eventos', err);
        this.error = 'No se pudieron cargar los eventos.';
        this.cargando = false;
      }
    });
  }

  eliminarEvento(id: number) {
    if (!confirm('¿Seguro que deseas eliminar este evento?')) return;

    this.eventoService.eliminarEvento(id).subscribe({
      next: () => {
        this.eventos = this.eventos.filter(e => e.id !== id);
      },
      error: (err) => {
        console.error('Error al eliminar evento', err);
        alert('No se pudo eliminar el evento.');
      }
    });
  }

  verDetalle(ev: any) {
    this.router.navigate(['/eventos-detalle', ev.id]);
  }

  irAgregarEvento() {
    this.router.navigate(['/agregar-evento']);
  }
}
