import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { WidgetTemplateComponent } from './widget-template/widget-template.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, WidgetTemplateComponent],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
