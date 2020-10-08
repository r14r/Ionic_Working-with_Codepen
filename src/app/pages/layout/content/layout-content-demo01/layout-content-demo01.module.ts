import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutContentDemo01Page } from './layout-content-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutContentDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutContentDemo01Page]
})
export class LayoutContentDemo01PageModule {}
