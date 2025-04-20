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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductosService } from '../assets/productos.service';
import { MeatComponent } from './sidebar/meat/meat.component';
import { FishComponent } from './sidebar/fish/fish.component';
import { DessertsComponent } from './sidebar/desserts/desserts.component';
import { ColdCutsComponent } from './sidebar/coldCuts/coldCuts.component';
import { HomeComponent } from './navbar/home/home.component';
import { FormsModule } from '@angular/forms';
import { PreservesComponent } from './sidebar/preserves/preserves.component';
import { MilkComponent } from './sidebar/milk/milk.component';
import { DrinkComponent } from './sidebar/drink/drink.component';
import { NombraObjetosComponent } from './navbar/games/nombraObjetos/nombra-objetos.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    NombraObjetosComponent,
    DrinkComponent,
    MilkComponent,
    PreservesComponent,
    FormsModule,
    HomeComponent,
    ColdCutsComponent,
    DessertsComponent,
    FishComponent,
    HttpClientModule,
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

