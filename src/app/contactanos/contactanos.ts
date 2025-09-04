import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Gris } from '../shared/components/gris/gris';
import { ContactoComponent } from '../shared/components/contacto/contacto';

@Component({
  selector: 'app-contactanos',
  imports: [Nav,Footer,Gris,ContactoComponent],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css'
})
export class Contactanos {

}
