import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationLogoDemo02Page } from './animation-logo-demo02.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationLogoDemo02Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimationLogoDemo02Page]
})
export class AnimationLogoDemo02PageModule {}
