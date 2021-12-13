import { HomeRoutingModule } from './home.routing.module';
import { CardsModule } from './../../components/cards/cards.module';

import { HeaderModule } from '../../components/header/header.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule, trash } from 'ngx-bootstrap-icons';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CardsModule,
    HomeRoutingModule,
    NgxBootstrapIconsModule.pick({ trash }),
    SharedModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
