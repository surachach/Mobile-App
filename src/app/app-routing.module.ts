import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: 'cart-modal',loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)},
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'home3',
    loadChildren: () => import('./home3/home3.module').then( m => m.Home3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
