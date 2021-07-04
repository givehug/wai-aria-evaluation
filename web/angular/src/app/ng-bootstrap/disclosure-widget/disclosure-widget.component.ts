import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclosure-widget',
  template: `
    <p>
      <button
        type="button"
        class="btn btn-outline-primary"
        (click)="collapse.toggle()"
        [attr.aria-expanded]="!isCollapsed"
        aria-controls="collapseExample"
      >
        Toggle
      </button>
    </p>
    <div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed">
      <div class="card">
        <div class="card-body">
          You can collapse this card by clicking Toggle
        </div>
      </div>
    </div>
  `,
})
export class DisclosureWidgetComponent implements OnInit {
  public isCollapsed = true;

  constructor() {}

  ngOnInit(): void {}
}
