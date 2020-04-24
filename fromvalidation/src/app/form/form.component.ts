import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // userdetails: User = {
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   password: '',
  // };

  registerForm: FormGroup;
  submitted = false;

  // userform = new FormGroup({
  //   firstname: new FormControl('', Validators.required),
  //   lastname: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required, Validators.minLength(1)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  get form() { return this.registerForm.controls; }

  onSubmit() {
    // console.log(this.userform.value);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 3));
    console.log(JSON.stringify(this.registerForm.value));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
