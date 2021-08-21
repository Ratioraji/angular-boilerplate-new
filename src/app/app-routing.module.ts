import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AuthLayoutComponent } from './layouts/auth/auth.component';
import { DashboardLayoutComponent } from './layouts/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main/main.component';
import { LayoutModule } from './layouts/layout.module';

const routes: Routes = [
  // Shell.childRoutes([{ path: 'about', loadChildren: './about/about.module#AboutModule' }]),
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './pages/auth/auth.module#AuthModule'
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: './pages/main/main.module#MainModule'
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), LayoutModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
