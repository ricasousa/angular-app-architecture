import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  /**
   * Formulários Dinâmicos
   * https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
   * https://jasonwatmore.com/post/2019/06/25/angular-8-dynamic-reactive-forms-example
   * https://medium.com/@mail.bahurudeen/create-a-dynamic-form-with-configurable-fields-and-validations-using-angular-6-994db56834da
   */


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
        zip: ['']
      }),
      aliases: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
        })
      ])
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
        email: ['', [Validators.required, Validators.email]]
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
