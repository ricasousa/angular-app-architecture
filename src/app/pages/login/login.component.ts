import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl = '';

  STATE = {
    a: 'A'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private x = 'A';

  private obj = {
    required: 'a',
    minlength: 'b'
  };

  verifica() {
    console.log('Verificar...');
    return Object.prototype.hasOwnProperty.call(this.obj, 'required');
    //return this.STATE.a === this.obj.required
  }

  handleLogin() {
    sessionStorage.setItem(
      'user',
      JSON.stringify({
        name: 'Ricardo',
        lastName: 'Sousa'
      })
    );

    this.router.navigate([this.returnUrl]);
  }
}
