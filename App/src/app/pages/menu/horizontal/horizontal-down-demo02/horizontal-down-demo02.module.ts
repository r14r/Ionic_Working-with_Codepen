import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorizontalDownDemo02Page } from './horizontal-down-demo02.page';

const routes: Routes = [
  {
    path: '',
    component: HorizontalDownDemo02Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HorizontalDownDemo02Page]
})
export class HorizontalDownDemo02PageModule {}
