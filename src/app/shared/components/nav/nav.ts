import { Component, signal} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
    protected readonly home = signal ("HOME");
    protected readonly contactanos = signal ("CONTACTANOS");
    protected readonly login = signal ("INICIAR SESIÓN");
    protected readonly servicios = signal ("SERVICIOS");

}
