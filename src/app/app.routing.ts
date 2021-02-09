import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@core/guards/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { TestFormComponent } from './pages/test-form/test-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'test-form',
    component: TestFormComponent
  },
  {
    path: '',
    redirectTo: 'test-form',
    pathMatch: 'full'
  },
  {
    path: '',
    component: StartPageComponent,
    canActivate: [AuthGuardService],
    children: [
      // Legacy Lazy Loading < Angular7
      // {
      //   path: 'home',
      //   loadChildren: './views/base/base.module#BaseModule',
      // },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then(
            module => module.HomeModule
          )
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./features/user/user.module').then(
            module => module.UserModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
