import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  profileForm = {} as FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['Ricardo', Validators.required],
      lastName: ['', Validators.minLength(3)],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      aliases: this.fb.array([
        {
          a: this.fb.control('a'),
          c: this.fb.control('c'),
        },
        {
          b: this.fb.control('b'),
        },
      ]),
    });
  }

  onSubmit() {
    console.log('===== onSubmit');
    console.log(this.profileForm.value);
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
}
