import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { PaterasComponent } from './components/pateras/pateras.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { MigranteComponent } from './components/migrante/migrante.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'pateras',
  component: PaterasComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'keeper',
  component: KeeperComponent
},
{
  path: 'migrante',
  component: MigranteComponent
},
{
  path: 'registro',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  component: HomeComponent
}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
