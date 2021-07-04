import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { AngularMaterialComponent } from './angular-material.component';


@NgModule({
  declarations: [
    AngularMaterialComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule
  ]
})
export class AngularMaterialModule { }
