import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { AntdModule } from 'src/app/antd.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const MODULES = [CommonModule, RouterModule, AntdModule, TranslateModule];

@NgModule({
  imports: [...MODULES],
  declarations: [LoaderComponent],
  exports: [...MODULES, LoaderComponent]
})
export class SharedModule {}
