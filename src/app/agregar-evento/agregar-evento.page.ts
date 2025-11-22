import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventoService } from 'src/app/services/evento.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.page.html',
  standalone: false,
})
export class AgregarEventoPage {
  eventoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventoService: EventoService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.eventoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      boletosDisponibles: [0, [Validators.required, Validators.min(1)]]
    });
  }

  guardarEvento() {
    if (this.eventoForm.valid) {
      this.eventoService.agregarEvento(this.eventoForm.value).subscribe(() => {
        this.router.navigate(['/eventos']);
      });
    } else {
      this.mostrarAlerta('Formulario incompleto', 'Por favor, completa todos los campos correctamente.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}
