import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@core/guards/auth-guard.service';
import { StartPageComponent } from './pages/start-page/start-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(module => module.LoginModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
