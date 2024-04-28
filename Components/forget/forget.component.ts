import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css',
})
export class ForgetComponent {
  resetForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    repassword: new FormControl(null, [Validators.required]),
  });
  forget() {
    console.log(this.resetForm);
  }
}
