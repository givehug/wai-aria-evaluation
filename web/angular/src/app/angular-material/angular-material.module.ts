import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { AngularMaterialComponent } from './angular-material.component';

import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';

import { AccordionWidgetComponent } from './accordion-widget/accordion-widget.component';
import {
  AlertDialogWidgetComponent,
  AlertDialogWidgetModalComponent,
} from './alert-dialog-widget/alert-dialog-widget.component';
import { ButtonWidgetComponent } from './button-widget/button-widget.component';
import { CheckboxWidgetComponent } from './checkbox-widget/checkbox-widget.component';
import { ComboboxWidgetComponent } from './combobox-widget/combobox-widget.component';
import {
  DialogWidgetComponent,
  DialogWidgetModalComponent,
} from './dialog-widget/dialog-widget.component';
import { DisclosureWidgetComponent } from './disclosure-widget/disclosure-widget.component';
import { ListboxWidgetComponent } from './listbox-widget/listbox-widget.component';
import { MenuWidgetComponent } from './menu-widget/menu-widget.component';
import { RadioGroupWidgetComponent } from './radio-group-widget/radio-group-widget.component';
import { SliderWidgetComponent } from './slider-widget/slider-widget.component';
import { TableWidgetComponent } from './table-widget/table-widget.component';
import { TabsWidgetComponent } from './tabs-widget/tabs-widget.component';
import { ToolbarWidgetComponent } from './toolbar-widget/toolbar-widget.component';
import { TooltipWidgetComponent } from './tooltip-widget/tooltip-widget.component';
import { TreeviewWidgetComponent } from './treeview-widget/treeview-widget.component';

@NgModule({
  declarations: [
    AngularMaterialComponent,
    AccordionWidgetComponent,
    AlertDialogWidgetComponent,
    AlertDialogWidgetModalComponent,
    ButtonWidgetComponent,
    CheckboxWidgetComponent,
    ComboboxWidgetComponent,
    DialogWidgetComponent,
    DialogWidgetModalComponent,
    DisclosureWidgetComponent,
    ListboxWidgetComponent,
    MenuWidgetComponent,
    RadioGroupWidgetComponent,
    SliderWidgetComponent,
    TableWidgetComponent,
    TabsWidgetComponent,
    ToolbarWidgetComponent,
    TooltipWidgetComponent,
    TreeviewWidgetComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularMaterialRoutingModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
})
export class AngularMaterialModule {}
