import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { ListaService } from './navbar/lista/lista.component';
import { ProductsComponent } from './navbar/products/products.component';
import { GamesComponent } from './navbar/games/games.component';
import { JukeboxComponent } from './navbar/jukebox/jukebox.component';
import { NeveraComponent } from './sidebar/nevera/nevera.component';
import { MeatComponent } from './sidebar/meat/meat.component';
import { FishComponent } from './sidebar/fish/fish.component';
import { FruitComponent } from './sidebar/fruit/fruit.component';
import { DessertsComponent } from './sidebar/desserts/desserts.component';
import { ColdCutsComponent } from './sidebar/coldCuts/coldCuts.component';
import { SumasComponent } from './navbar/games/sumas/suma.component';
import { PreservesComponent } from './sidebar/preserves/preserves.component';
import { MilkComponent } from './sidebar/milk/milk.component';
import { DrinkComponent } from './sidebar/drink/drink.component';
import { RestasComponent } from './navbar/games/restas/restas.component';
import { CuentaObjetosComponent } from './navbar/games/cuentaObjetos/cuentaObjetos.component';
import { NombraObjetosComponent} from './navbar/games/nombraObjetos/nombra-objetos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'lista', component: ListaService },
  { path: 'products', component: ProductsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'jukebox', component: JukeboxComponent },
  { path: 'nevera',component: NeveraComponent,},
  { path: 'meat',component: MeatComponent},
  { path: 'fish',component: FishComponent},
  { path: 'fruit',component: FruitComponent},
  { path: 'desserts',component: DessertsComponent},
  { path: 'coldCuts',component: ColdCutsComponent},
  { path: 'sumas',component: SumasComponent},
  { path: 'preserves',component: PreservesComponent},
  { path: 'milk',component: MilkComponent},
  { path: 'drink',component: DrinkComponent},
  { path: 'restas',component: RestasComponent},
  { path: 'cuentaObjetos',component: CuentaObjetosComponent},
  { path: 'nombraObjetos',component: NombraObjetosComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirigir rutas no encontradas a Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
