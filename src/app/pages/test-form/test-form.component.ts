import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  myForm: FormGroup = {} as FormGroup;
  mockCargos = [
    {
      name: 'Dev',
      level: 'Junior',
      desc: 'Dev Jr'
    },
    {
      name: 'Dev',
      level: 'Pleno',
      desc: 'Dev Pl'
    },
    {
      name: 'Dev',
      level: 'Senior',
      desc: 'Dev Sr'
    }
  ];

  mockTechs = [
    {
      tech: 'javascript'
    },
    {
      tech: 'React JS'
    },
    {
      tech: 'NodeJS'
    }
  ];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],

      address: this.formBuilder.group({
        zipcode: ['', [Validators.required, Validators.maxLength(8)]],
        street: ['', Validators.required],
        number: ['', Validators.required],
        complement: [''],
        neighborhood: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required]
      }),

      techs: this.formBuilder.array([
        this.formBuilder.group({
          name: ['']
        })
      ]),

      parents: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', Validators.required]
        })
      ])
    });
  }

  findZipCode(event: Event) {
    const cep = this.myForm.get('address.zipcode')?.value.replace(/\D/g, '');

    this.myForm.patchValue({
      address: {
        zipcode: null,
        street: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null
      }
    });

    const response = {
      cep: '18133445',
      logradouro: 'Avenida Três de Maio',
      complemento: 'de 560/561 ao fim',
      bairro: 'Jardim Maria Trindade',
      localidade: 'São Roque',
      uf: 'SP',
      ibge: '3550605',
      gia: '6531',
      ddd: '11',
      siafi: '7113'
    };

    // https://httpbin.org/
    // this.http.get(`//viacep.com.br/ws/${cep}/json/`).subscribe(response => {
    //   console.log(response);
    // });

    this.myForm.patchValue({
      address: {
        zipcode: response.cep,
        street: response.logradouro,
        number: null,
        complement: null,
        neighborhood: response.bairro,
        city: response.localidade,
        state: response.uf
      }
    });
  }

  submitHandler() {
    const { value } = this.myForm;

    console.log(value);

    setTimeout(() => {
      this.myForm.reset();
    }, 100);
  }

  addParent() {
    const parents = this.myForm.get('parents') as FormArray;
    parents.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        age: ['', Validators.required]
      })
    );
  }

  removeParent(indexToRemove: number) {
    const parents = this.myForm.get('parents') as FormArray;
    parents.removeAt(indexToRemove);
  }

  addTech() {
    const parents = this.myForm.get('techs') as FormArray;
    parents.push(
      this.formBuilder.group({
        name: ['', Validators.required]
      })
    );
  }

  removeTech(indexToRemove: number) {
    console.log('removeTech', indexToRemove);
    const parents = this.myForm.get('techs') as FormArray;
    parents.removeAt(indexToRemove);
  }
}
