import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: '',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'class-a',
        loadChildren: () => import('../class-a/class-a.module').then( m => m.ClassAPageModule)
      },
      {
        path: 'class-b',
        loadChildren: () => import('../class-b/class-b.module').then( m => m.ClassBPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
