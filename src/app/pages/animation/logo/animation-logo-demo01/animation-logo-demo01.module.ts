import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationLogoDemo01Page } from './animation-logo-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationLogoDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimationLogoDemo01Page]
})
export class AnimationLogoDemo01PageModule {}
