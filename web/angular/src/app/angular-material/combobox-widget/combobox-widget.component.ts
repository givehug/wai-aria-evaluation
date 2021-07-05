import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-combobox-widget',
  template: `
    <form class="example-form">
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>Number</mat-label>
        <input
          type="text"
          placeholder="Pick one"
          aria-label="Number"
          matInput
          [formControl]="myControl"
          [matAutocomplete]="auto"
        />
        <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
          <mat-option
            *ngFor="let option of filteredOptions | async"
            [value]="option"
          >
            {{ option }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
})
export class ComboboxWidgetComponent implements OnInit {
  constructor() {}

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
