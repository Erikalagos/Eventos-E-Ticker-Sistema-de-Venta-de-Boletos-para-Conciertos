import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos-detalle',
  templateUrl: './eventos-detalle.page.html',
  styleUrls: ['./eventos-detalle.page.scss'],
  standalone: false,
})
export class EventosDetallePage implements OnInit {

  evento: any = null;
  zonas: any[] = [];
  cargando = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (isNaN(id)) {
      this.error = 'ID de evento inválido';
      return;
    }

    this.cargando = true;
    this.eventoService.getEvento(id).subscribe({
      next: (data: any) => {
        this.evento = data;
        this.zonas = data?.zonas || [];
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al obtener detalle de evento', err);
        this.error = 'No se pudo cargar el evento';
        this.cargando = false;
      }
    });
  }

  irAComprar() {
    if (!this.evento) return;

    this.router.navigate(['/comprar-boletos'], {
      state: {
        eventoId: this.evento.id,
        eventoNombre: this.evento.nombre
      }
    });
  }

}
