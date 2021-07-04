import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBootstrapRoutingModule } from './ng-bootstrap-routing.module';
import { NgBootstrapComponent } from './ng-bootstrap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionWidgetComponent } from './accordion-widget/accordion-widget.component';

@NgModule({
  declarations: [NgBootstrapComponent, AccordionWidgetComponent],
  imports: [CommonModule, NgBootstrapRoutingModule, NgbModule],
})
export class NgBootstrapModule {}
