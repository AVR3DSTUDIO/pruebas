import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// configuracion de Rutas
import { appRoutingProvider, routing } from './app.routing';
// Componentes
import { AppComponent } from './app.component';
import { PaterasComponent } from './components/pateras/pateras.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { MigranteComponent } from './components/migrante/migrante.component';
import { ParqueComponent } from './components/parque/parque.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaterasComponent,
    ContactComponent,
    HomeComponent,
    KeeperComponent,
    MigranteComponent,
    ParqueComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
