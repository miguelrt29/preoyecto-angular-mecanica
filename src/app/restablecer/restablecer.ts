import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Gris } from '../shared/components/gris/gris';

@Component({
  selector: 'app-restablecer',
  imports: [Nav, Gris, Footer],
  templateUrl: './restablecer.html',
  styleUrl: './restablecer.css'
})
export class Restablecer {
  protected readonly restc = signal ("Restablecer Tu Contraseña");
  protected readonly correo = signal ("Correo Electrónico");
}
