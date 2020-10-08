import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DropDownDemo01Page } from './drop-down-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: DropDownDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DropDownDemo01Page]
})
export class DropDownDemo01PageModule {}
