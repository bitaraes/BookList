import { NgxBootstrapIconsModule, search, trash } from 'ngx-bootstrap-icons';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxBootstrapIconsModule.pick({ search, trash }),
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
