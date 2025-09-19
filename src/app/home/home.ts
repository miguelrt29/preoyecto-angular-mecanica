import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { ContactoComponent } from '../shared/components/contacto/contacto';
import { Gris } from '../shared/components/gris/gris';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Nav, Footer, ContactoComponent, Gris],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  
  protected readonly servicios = signal("SERVICIOS DE REPARACIÓN");
  protected readonly mecanica = signal("MECÁNICA");
  protected readonly acc = signal("ACCESORIOS DE AUTÓMOVILES");
  protected readonly reparacion = signal("REPARACIÓN DE AVERIAS")

imagenUrl = 'https://images.pexels.com/photos/27985144/pexels-photo-27985144.jpeg?cs=srgb&dl=pexels-lynxexotics-27985144.jpg&fm=jpg'




}

 

