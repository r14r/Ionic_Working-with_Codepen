import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardsHoverDemo03Page } from './cards-hover-demo03.page';

const routes: Routes = [
  {
    path: '',
    component: CardsHoverDemo03Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardsHoverDemo03Page]
})
export class CardsHoverDemo03PageModule {}
