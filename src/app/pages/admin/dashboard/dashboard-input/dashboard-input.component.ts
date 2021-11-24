import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-input',
  templateUrl: './dashboard-input.component.html',
  styleUrls: ['./dashboard-input.component.css']
})
export class DashboardInputComponent implements OnInit {

  productForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DashboardInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
    this.initForm()
  }

  ngOnInit(): void {
  }

  initForm() {
    this.productForm = this.fb.group({
      idproduct: [this.data ? this.data.idproduct : 0, [Validators.required]],
      nameproduct: [this.data ? this.data.nameproduct : '', [Validators.required]],
      idcategory: [this.data ? this.data.idcategory : 0, [Validators.required]],

    })
  }

  closeDialog() {
    if (this.data?.idproduct) {
      this.dialogRef.close({ action: 'update', data: this.productForm.value, id: this.data.idproduct })

    } else {
      this.dialogRef.close({ action: 'add', data: this.productForm.value })

    }

  }

}
