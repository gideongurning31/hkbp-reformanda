import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  template: `
  <div class="alert-message"><p>{{ message }}</p></div>
  <div class="alert-button">
    <button type="button" class="btn btn-info" (click)="dialogRef.close()">TUTUP</button>
  </div> `,
  styles: [`
    .alert-message {
      min-width: 30vw;
      min-height: 20vh;
    }
    .alert-message, .alert-button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    button {
      min-width: 150px;
      padding: 5px 20px;
    }
  `]
})
export class AlertDialogComponent {
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public message: Array<string>, public dialogRef: MatDialogRef<AlertDialogComponent>) {}
}
