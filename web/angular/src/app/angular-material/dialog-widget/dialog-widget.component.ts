import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-widget',
  template: `
    <button mat-raised-button (click)="openDialog()">open doalog</button>
  `,
})
export class DialogWidgetComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWidgetModalComponent, {
      width: '250px',
      role: 'dialog',
      // Note:
      // - The aria-label, aria-labelledby, and aria-describedby attributes can all be set to the dialog element via the MatDialogConfig as well.
      // Each dialog should typically have a label set via aria-label or aria-labelledby.
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-dialog-modal-widget',
  template: `
    <h1 mat-dialog-title>Dialog</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button>
    </div>
  `,
})
export class DialogWidgetModalComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public dialogRef: MatDialogRef<DialogWidgetModalComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
