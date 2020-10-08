import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorizontalDownDemo01Page } from './horizontal-down-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: HorizontalDownDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HorizontalDownDemo01Page]
})
export class HorizontalDownDemo01PageModule {}
