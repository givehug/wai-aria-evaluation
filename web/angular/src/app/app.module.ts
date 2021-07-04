import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { WidgetTemplateComponent } from './widget-template/widget-template.component';

@NgModule({
  declarations: [AppComponent, WidgetTemplateComponent],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
