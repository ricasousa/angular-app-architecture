import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

/**
 * References for Dynamic Forms...
 * https://medium.com/@krishnaregmi/how-to-create-dynamic-forms-in-angular-7-using-formcontrol-a443a2c5e3a9
 */

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  profileForm = {} as FormGroup;
  // myFormGroup = {} as FormGroup;

  // formTemplate = [
  //   {
  //     key: 'mail',
  //     type: 'textBox',
  //     label: 'E-mail',
  //   },
  //   {
  //     key: 'age',
  //     type: 'number',
  //     label: 'Age',
  //   },
  //   {
  //     key: 'favorite_book',
  //     type: 'select',
  //     label: 'favorite book',
  //     options: ['Jane Eyre', 'Pride and Prejudice', 'Wuthering Heights'],
  //   },
  // ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // const group: any = {};
    // this.formTemplate.forEach((inputTemplate) => {
    //   group[inputTemplate.key] = new FormControl('');
    // });
    // this.myFormGroup = new FormGroup(group);

    this.profileForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      aliases: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
        }),
      ]),
    });
  }

  onSubmit() {
    console.log('===== onSubmit');
    console.log(this.profileForm.value);
  }

  addAlias() {
    this.a.push(
      this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      })
    );
  }

  get formControls() {
    return this.profileForm.controls;
  }

  get a() {
    //return this.profileForm.get('aliases') as FormArray;
    return this.formControls.aliases as FormArray;
  }

  handleRemoveAlias(indexToRemove: number) {
    this.a.removeAt(indexToRemove);
  }
}
