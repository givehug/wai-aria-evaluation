import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accordion-widget',
  templateUrl: './accordion-widget.component.html',
})
export class AccordionWidgetComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor() {}

  ngOnInit(): void {}
}
