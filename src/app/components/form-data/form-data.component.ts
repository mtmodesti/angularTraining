import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent implements OnInit {
  fullName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]*$'),
    Validators.minLength(3),
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$'
    ),
  ]);

  email = new FormControl('', [Validators.required, Validators.email]);

  confirmPassword = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$'
    ),
  ]);

  hidePassword = true;
  hideConfirmPassword = true;

  constructor() {}

  getErrorNameMessage() {
    if (this.fullName.hasError('required')) {
      return 'You must enter a value';
    }
    //PERGUNTA - PQ ESSA MSG NÃO APARECE?
    return this.fullName.hasError('fullName') ? '' : 'Only letters';
  }

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Invalid e-mail format' : '';
  }

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? '' : 'Weak password';
  }

  getErroConfirmPasswordMessage() {
    if (this.confirmPassword.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password != this.confirmPassword) {
      return 'Must Match';
    }
    return '';
  }

  teste() {
    console.log(this.email);
  }

  ngOnInit(): void {}
}
