import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NeveraComponent } from './sidebar/nevera/nevera.component';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from '../assets/productos.service';
import { MeatComponent } from './sidebar/meat/meat.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    MeatComponent,
    NeveraComponent,
    SidebarComponent,
    RouterModule,
    AppComponent,
    NavbarComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [HttpClient, ProductosService],
  bootstrap: []
})
export class AppModule { }

