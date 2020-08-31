import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardsHoverDemo02Page } from './cards-hover-demo02.page';

const routes: Routes = [
  {
    path: '',
    component: CardsHoverDemo02Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardsHoverDemo02Page]
})
export class CardsHoverDemo02PageModule {}
