import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactFormModel = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  constructor(
    private _mdr: MatDialogRef<ContactMeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onSubmit(): void {
    if (this.contactFormModel.name && this.contactFormModel.email && this.contactFormModel.subject && this.contactFormModel.message) {
      // Handle form submission logic here
      console.log('Form submitted:', this.contactFormModel);

      // Example: Clear the form after submission
      this.contactFormModel = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      console.log('Form is incomplete.');
    }
  }
  CloseDialog() {
    this._mdr.close(false);
  }
  ngOnInit(): void {
  }

}
