import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-gris',
  imports: [RouterOutlet],
  templateUrl: './gris.html',
  styleUrl: './gris.css'
})
export class Gris {
  protected readonly servicios = signal("SERVICIOS");
  protected readonly visitanos = signal("VISITANOS");
}
