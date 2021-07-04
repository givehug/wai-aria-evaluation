import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgBootstrapRoutingModule } from './ng-bootstrap-routing.module';
import { NgBootstrapComponent } from './ng-bootstrap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionWidgetComponent } from './accordion-widget/accordion-widget.component';
import { AlertWidgetComponent } from './alert-widget/alert-widget.component';
import {
  AlertDialogWidgetModal,
  AlertDialogWidgetModalComponent,
} from './alert-dialog-widget/alert-dialog-widget.component';
import { CarouselWidgetComponent } from './carousel-widget/carousel-widget.component';
import { CheckboxWidgetComponent } from './checkbox-widget/checkbox-widget.component';
import { DialogWidgetComponent } from './dialog-widget/dialog-widget.component';
import { DisclosureWidgetComponent } from './disclosure-widget/disclosure-widget.component';
import { ComboboxWidgetComponent } from './combobox-widget/combobox-widget.component';
import { RadioGroupWidgetComponent } from './radio-group-widget/radio-group-widget.component';
import { SpinbuttonWidgetComponent } from './spinbutton-widget/spinbutton-widget.component';
import { TableWidgetComponent } from './table-widget/table-widget.component';
import { TabsWidgetComponent } from './tabs-widget/tabs-widget.component';
import { TooltipWidgetComponent } from './tooltip-widget/tooltip-widget.component';

@NgModule({
  declarations: [
    NgBootstrapComponent,
    AccordionWidgetComponent,
    AlertWidgetComponent,
    AlertDialogWidgetModal,
    AlertDialogWidgetModalComponent,
    CarouselWidgetComponent,
    CheckboxWidgetComponent,
    DialogWidgetComponent,
    DisclosureWidgetComponent,
    ComboboxWidgetComponent,
    RadioGroupWidgetComponent,
    SpinbuttonWidgetComponent,
    TableWidgetComponent,
    TabsWidgetComponent,
    TooltipWidgetComponent,
  ],
  imports: [CommonModule, NgBootstrapRoutingModule, NgbModule, FormsModule],
})
export class NgBootstrapModule {}
