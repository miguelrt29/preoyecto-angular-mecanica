import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { ContactoComponent } from '../shared/components/contacto/contacto';
import { Gris } from '../shared/components/gris/gris';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, Nav, Footer, ContactoComponent, Gris],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class Servicios {
  // Señales para los títulos
  protected readonly servicio = signal("SERVICIO");
  protected readonly revision = signal("REVISIÓN DE");
  protected readonly cambio = signal("CAMBIO DE");

  // Array de servicios
  servicios = [
    { fila: 'primeraFila', img: 'https://static.vecteezy.com/system/resources/previews/020/898/692/non_2x/mechanic-tool-logo-free-vector.jpg', titulo: 'MECÁNICA GENERAL', tipo: 'mecanica', descripcion: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet.'
    ]},
    { fila: 'primeraFila', img: 'https://media.istockphoto.com/id/1036660912/es/vector/insignia-de-auto-servicio-icono-de-la-reparaci%C3%B3n-del-coche-vector-de.jpg?s=612x612&w=0&k=20&c=URdpiIYrPzBJbH-iTBFTJWPcSCYUQyAjMbliSeQg1Rk=', titulo: this.revision() + ' AUTOMÓVIL', tipo: 'revision', descripcion: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet.'
    ]},
    { fila: 'primeraFila', img: 'https://www.shutterstock.com/image-vector/brake-fluid-icon-line-style-600nw-2550448683.jpg', titulo: this.revision() + ' ACEITE/FRENOS', tipo: 'revision', descripcion: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet.'
    ]},
    { fila: 'segunFila', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ADNC9zQ6TmH55mvXdgIZfmcFtu4SA7j_fA&s', titulo: 'SERVICIO DE REMOLQUE', tipo: 'remolque', descripcion: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet.'
    ]},
    { fila: 'segunFila', img: 'data:image/png;base64,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', titulo: this.cambio() + ' NEUMÁTICOS', tipo: 'cambio', descripcion: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet.'
    ]},
    { fila: 'segunFila', img: 'https://static.vecteezy.com/system/resources/previews/014/599/083/non_2x/car-battery-icon-outline-style-vector.jpg', titulo: this.cambio() + ' BATERÍA', tipo: 'cambio', descripcion: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet.'
    ]}
  ];

  // Arrays filtrados para *ngFor
  primeraFilaServicios = this.servicios.filter(s => s.fila === 'primeraFila');
  segundaFilaServicios = this.servicios.filter(s => s.fila === 'segunFila');
}


