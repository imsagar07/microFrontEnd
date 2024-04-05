import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'projects/dashboard/authService/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'login',
      exposedModule: './Module'
    })
      .then(m => m.LoginModule)
  },
  {
    path: 'students',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'students',
      exposedModule: './Module'
    })
      .then(m => m.StudentsModule)
  },
  {
    path: 'teachers',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'teachers',
      exposedModule: './Module'
    })
      .then(m => m.TeachersModule)
  },
];
