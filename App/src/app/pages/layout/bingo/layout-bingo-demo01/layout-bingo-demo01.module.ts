import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutBingoDemo01Page } from './layout-bingo-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutBingoDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutBingoDemo01Page]
})
export class LayoutBingoDemo01PageModule {}
