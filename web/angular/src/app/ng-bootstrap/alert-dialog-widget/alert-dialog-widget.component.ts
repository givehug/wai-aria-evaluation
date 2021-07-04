import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-dialog-widget-modal',
  template: ` <div class="modal-header">
      s
      <h4 class="modal-title" id="modal-title">Profile deletion</h4>
      <button
        type="button"
        class="close"
        aria-describedby="modal-title"
        (click)="modal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
        <strong
          >Are you sure you want to delete
          <span class="text-primary">"John Doe"</span> profile?</strong
        >
      </p>
      <p>
        All information associated to this user profile will be permanently
        deleted.
        <span class="text-danger">This operation can not be undone.</span>
      </p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-secondary"
        (click)="modal.dismiss('cancel click')"
      >
        Cancel
      </button>
      <button
        type="button"
        class="btn btn-danger"
        (click)="modal.close('Ok click')"
      >
        Ok
      </button>
    </div>`,
})
export class AlertDialogWidgetModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}

@Component({
  selector: 'app-alert-dialog-widget',
  template: ` <button class="btn btn-outline-primary mr-2" (click)="open()">
    Open confirm modal
  </button>`,
})
export class AlertDialogWidgetModal {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;

  constructor(private _modalService: NgbModal) {}

  open() {
    this._modalService.open(AlertDialogWidgetModalComponent);
  }
}
