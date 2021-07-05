import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyTemplateRoutingModule } from './empty-template-routing.module';
import { EmptyTemplateComponent } from './empty-template.component';

@NgModule({
  declarations: [EmptyTemplateComponent],
  imports: [CommonModule, EmptyTemplateRoutingModule],
})
export class EmptyTemplateModule {}
