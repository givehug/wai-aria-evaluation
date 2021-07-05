import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-listbox-widget',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Favorite food</mat-label>
      <mat-select>
        <mat-option *ngFor="let food of foods" [value]="food.value">
          {{ food.viewValue }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
export class ListboxWidgetComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
