import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutFloorPlanDemo01Page } from './layout-floorplan-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutFloorPlanDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutFloorPlanDemo01Page]
})
export class LayoutFloorPlanDemo01PageModule { }
