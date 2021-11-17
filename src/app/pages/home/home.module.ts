import { HomeRoutingModule } from './home.routing.module';
import { CardsModule } from './../../components/cards/cards.module';

import { HeaderModule } from '../../components/header/header.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, HeaderModule, CardsModule, HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
