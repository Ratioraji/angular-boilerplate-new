import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLayoutComponent } from './auth/auth.component';
import { MainLayoutComponent } from './main/main.component';
import { DashboardLayoutComponent } from './dashboard/dashboard.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, SharedModule],
  declarations: [AuthLayoutComponent, MainLayoutComponent, DashboardLayoutComponent]
})
export class LayoutModule {}
