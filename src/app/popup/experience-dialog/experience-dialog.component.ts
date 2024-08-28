import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.scss']
})
export class ExperienceDialogComponent implements OnInit {

  constructor(
    private _mdr: MatDialogRef<ExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Method to close the dialog
  CloseDialog() {
    this._mdr.close(false);
  }

  ngOnInit(): void {
  }
}
