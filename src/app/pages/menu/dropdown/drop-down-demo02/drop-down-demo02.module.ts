import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DropDownDemo02Page } from './drop-down-demo02.page';

const routes: Routes = [
  {
    path: '',
    component: DropDownDemo02Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DropDownDemo02Page]
})
export class DropDownDemo02PageModule {}
