import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private apiEventosUrl = 'http://localhost:3000/api/eventos';
  private apiComprasUrl = 'http://localhost:3000/api/compras';

  constructor(private http: HttpClient) { }

  // ========== EVENTOS ==========

  // Obtener todos los eventos
  getEventos(): Observable<any> {
    return this.http.get<any>(`${this.apiEventosUrl}`);
  }

  // Solo evento por id (sin zonas)
  getEventoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiEventosUrl}/${id}`);
  }

  // Evento + zonas (usa /detalle)
  getEventoConZonas(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiEventosUrl}/${id}/detalle`);
  }

  // Crear evento
  crearEvento(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiEventosUrl}`, data);
  }

  // Actualizar evento
  actualizarEvento(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiEventosUrl}/${id}`, data);
  }

  // Eliminar evento
  eliminarEvento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiEventosUrl}/${id}`);
  }

  // ===== ALIAS para que tus páginas actuales no fallen =====

  // agregar-evento.page.ts usa this.eventoService.agregarEvento(...)
  agregarEvento(data: any): Observable<any> {
    return this.crearEvento(data);
  }

  // eventos-detalle.page.ts usa this.eventoService.getEvento(id)
  getEvento(id: number): Observable<any> {
    return this.getEventoConZonas(id);
  }

  // ========== COMPRAS (ANTES EN CompraService) ==========

  // comprar-boletos.page.ts usa this.eventoService.guardarCompra(...)
  guardarCompra(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiComprasUrl}`, data);
  }

  // Historial completo de compras
  getCompras(): Observable<any> {
    return this.http.get<any>(`${this.apiComprasUrl}`);
  }

  // Historial filtrado por cliente (por si lo necesitas después)
  getComprasPorCliente(cliente: string): Observable<any> {
    return this.http.get<any>(`${this.apiComprasUrl}/cliente/${encodeURIComponent(cliente)}`);
  }
}
