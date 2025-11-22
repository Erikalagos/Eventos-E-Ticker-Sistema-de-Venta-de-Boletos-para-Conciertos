import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar-boletos',
  templateUrl: './comprar-boletos.page.html',
  styleUrls: ['./comprar-boletos.page.scss'],
  standalone: false,
})
export class ComprarBoletosPage implements OnInit {

  cliente: string = '';
  eventos: any[] = [];
  zonas: any[] = [];

  eventoSeleccionadoId: number | null = null;
  zonaSeleccionadaId: number | null = null;

  cargandoEventos = false;
  cargandoZonas = false;
  comprando = false;
  error = '';

  constructor(
    private eventoService: EventoService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    // leer evento enviado desde eventos-detalle (si viene)
    const state: any = history.state;
    if (state && state.eventoId) {
      this.eventoSeleccionadoId = state.eventoId;
    }

    this.cargarEventos();
  }

  ionViewWillEnter() {
    this.cargarEventos();
  }

  cargarEventos() {
    this.cargandoEventos = true;
    this.error = '';
    this.eventoService.getEventos().subscribe({
      next: (data: any[]) => {
        this.eventos = data || [];
        this.cargandoEventos = false;

        // si venimos con evento preseleccionado cargamos zonas
        if (this.eventoSeleccionadoId) {
          this.cargarZonas(this.eventoSeleccionadoId);
        }
      },
      error: (err: any) => {
        console.error('Error al cargar eventos', err);
        this.error = 'No se pudieron cargar los eventos.';
        this.cargandoEventos = false;
      }
    });
  }

  onEventoChange(ev: any) {
    const id = Number(ev.detail.value);
    this.eventoSeleccionadoId = isNaN(id) ? null : id;
    this.zonas = [];
    this.zonaSeleccionadaId = null;

    if (this.eventoSeleccionadoId != null) {
      this.cargarZonas(this.eventoSeleccionadoId);
    }
  }

  cargarZonas(eventoId: number) {
    this.cargandoZonas = true;
    this.eventoService.getEventoConZonas(eventoId).subscribe({
      next: (data: any) => {
        this.zonas = data?.zonas || [];
        this.cargandoZonas = false;
      },
      error: (err: any) => {
        console.error('Error al cargar zonas', err);
        this.cargandoZonas = false;
      }
    });
  }

  async comprar() {
    if (!this.cliente || !this.eventoSeleccionadoId || !this.zonaSeleccionadaId) {
      const alert = await this.alertCtrl.create({
        header: 'Campos incompletos',
        message: 'Debes ingresar el nombre del cliente, seleccionar un evento y una zona.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.comprando = true;

    this.eventoService.guardarCompra({
      cliente: this.cliente,
      eventoId: this.eventoSeleccionadoId,
      zonaId: this.zonaSeleccionadaId
    }).subscribe({
      next: async (compra: any) => {
        this.comprando = false;

        // Ir directo a VER-ENTRADA con los datos de la compra
        this.router.navigate(['/ver-entrada'], {
          state: { entrada: compra }
        });
      },
      error: async (err: any) => {
        console.error('Error al crear compra', err);
        this.comprando = false;

        const msg = err?.error?.message || 'Ocurrió un error al crear la compra.';

        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: msg,
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

}
