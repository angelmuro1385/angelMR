import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { ListaComponent } from './navbar/lista/lista.component';
import { ProductsComponent } from './navbar/products/products.component';
import { GamesComponent } from './navbar/games/games.component';
import { MusicComponent } from './navbar/music/music.component';
import { NeveraComponent } from './sidebar/nevera/nevera.component';
import { MeatComponent } from './sidebar/meat/meat.component';
import { FishComponent } from './sidebar/fish/fish.component';
import { FruitComponent } from './sidebar/fruit/fruit.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'lista', component: ListaComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'music', component: MusicComponent },
  { path: 'nevera',component: NeveraComponent,},
  { path: 'meat',component: MeatComponent},
  { path: 'fish',component: FishComponent},
  { path: 'fruit',component: FruitComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirigir rutas no encontradas a Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
