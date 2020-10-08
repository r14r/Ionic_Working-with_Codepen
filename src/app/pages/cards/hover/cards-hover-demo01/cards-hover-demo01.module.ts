import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardsHoverDemo01Page } from './cards-hover-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: CardsHoverDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardsHoverDemo01Page]
})
export class CardsHoverDemo01PageModule {}
