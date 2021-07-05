import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ng-bootstrap',
    loadChildren: () =>
      import('./ng-bootstrap/ng-bootstrap.module').then(
        (m) => m.NgBootstrapModule
      ),
  },
  {
    path: 'angular-material',
    loadChildren: () =>
      import('./angular-material/angular-material.module').then(
        (m) => m.AngularMaterialModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}