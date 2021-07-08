import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassAPage } from './class-a.page';

const routes: Routes = [
  {
    path: '',
    component: ClassAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassAPageRoutingModule {}
