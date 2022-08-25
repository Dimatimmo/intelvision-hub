import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularResourcesComponent } from './components/AngularResources/angular-resources.component';
import { DotNetResourcesComponent } from './components/DotNetResources/dot-net-resources.component';

import { HomePageComponent } from './components/HomePage/home-page.component';
import { NotFoundPageComponent } from './components/NotFound/not-found-page.component';
import { ReactResourcesComponent } from './components/ReactResources/react-resources.component';
import { VerifyEmailPageComponent } from './components/VerifyEmailPage/verify-email-page.component';
import { AuthGuard } from './components/guards/auth.guard';
import { EmailGuard } from './components/guards/email.guard';
import { NodeResourcesComponent } from './components/NodeResources/node-resources.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'angular-resources',
    component: AngularResourcesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'react-resources',
    component: ReactResourcesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dot-net-resources',
    component: DotNetResourcesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'node-resources',
    component: NodeResourcesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-email',
    component: VerifyEmailPageComponent,
    canActivate: [EmailGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
