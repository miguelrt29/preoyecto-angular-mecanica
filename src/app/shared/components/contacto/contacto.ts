import { Component, ViewEncapsulation, signal } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
  encapsulation: ViewEncapsulation.None   // 👈 agrega esta línea
})
export class ContactoComponent {
  protected readonly llamanos = signal("LLÁMANOS");
  protected readonly escribenos = signal("ESCRÍBENOS");
  protected readonly horario = signal("HORARIO");

  protected readonly mostrarContacto = signal (false);

  toogleContacto() {
    this.mostrarContacto.update (valor => !valor);
  }
}
