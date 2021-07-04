import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBootstrapRoutingModule } from './ng-bootstrap-routing.module';
import { NgBootstrapComponent } from './ng-bootstrap.component';


@NgModule({
  declarations: [
    NgBootstrapComponent
  ],
  imports: [
    CommonModule,
    NgBootstrapRoutingModule
  ]
})
export class NgBootstrapModule { }
