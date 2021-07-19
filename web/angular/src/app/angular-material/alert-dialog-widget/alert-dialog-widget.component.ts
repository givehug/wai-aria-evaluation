import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-alert-dialog-widget',
  template: `
    <button mat-raised-button (click)="openDialog()">open alert</button>
  `,
})
export class AlertDialogWidgetComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AlertDialogWidgetModalComponent, {
      width: '250px',
      role: 'alertdialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-alert-dialog-modal-widget',
  template: `
    <h1 mat-dialog-title>Hi</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button>
    </div>
  `,
})
export class AlertDialogWidgetModalComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    public dialogRef: MatDialogRef<AlertDialogWidgetModalComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
