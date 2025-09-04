import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
  encapsulation: ViewEncapsulation.None   // 👈 agrega esta línea
})
export class ContactoComponent { }
