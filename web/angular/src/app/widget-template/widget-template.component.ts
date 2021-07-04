import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-widget-template',
  templateUrl: './widget-template.component.html',
  styleUrls: ['./widget-template.component.css'],
})
export class WidgetTemplateComponent implements OnInit {
  @Input() library!: string;

  @ContentChild('accordionWidget') accordionWidget!: any;

  // widgets = [
  //   'Accordion',
  //   'Alert',
  //   'AlertDialog',
  //   'Breadcrumbs',
  //   'Button',
  //   'Carousel',
  //   'Checkbox',
  //   'Combobox',
  //   'Dialog',
  //   'Disclosure',
  //   'Feed',
  //   'Link',
  //   'Listbox',
  //   'Menu',
  //   'MenuButton',
  //   'RadioGroup',
  //   'Slider',
  //   'MultiThumbSlider',
  //   'Spinbutton',
  //   'Table',
  //   'Tabs',
  //   'Toolbar',
  //   'Tooltip',
  //   'TreeView',
  //   'TreeGrid',
  //   'WindowSplitter',
  // ];

  constructor() {}

  ngOnInit(): void {}
}
