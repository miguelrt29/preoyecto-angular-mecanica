import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Gris } from '../shared/components/gris/gris';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ RouterModule,Nav, Footer, Gris],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
