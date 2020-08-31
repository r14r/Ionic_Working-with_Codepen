import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationLogoDemo03Page } from './animation-logo-demo03.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationLogoDemo03Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimationLogoDemo03Page]
})
export class AnimationLogoDemo03PageModule {}
