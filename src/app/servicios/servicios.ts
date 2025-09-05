import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { ContactoComponent } from '../shared/components/contacto/contacto';
import { Gris } from '../shared/components/gris/gris';

@Component({
  selector: 'app-servicios',
  imports: [Nav,  Footer, ContactoComponent,Gris],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {
protected readonly servicio = signal ("SERVICIO");
protected readonly revision = signal ("REVISIÓN DE");
protected readonly cambio = signal ("CAMBIO DE")
}
