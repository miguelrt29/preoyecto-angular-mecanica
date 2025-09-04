import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Servicios } from './servicios/servicios';
import { Contactanos } from './contactanos/contactanos';
import { Restablecer } from './restablecer/restablecer';
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'servicios', component: Servicios },
    {path: 'contactanos', component: Contactanos},
    {path: 'restablecer', component: Restablecer}

];

