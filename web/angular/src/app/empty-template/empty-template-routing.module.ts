import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyTemplateComponent } from './empty-template.component';

const routes: Routes = [{ path: '', component: EmptyTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyTemplateRoutingModule {}
