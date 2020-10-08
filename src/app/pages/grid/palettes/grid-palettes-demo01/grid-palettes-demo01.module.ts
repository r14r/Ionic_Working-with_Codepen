import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridPalettesDemo01Page } from './grid-palettes-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: GridPalettesDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridPalettesDemo01Page]
})
export class GridPalettesDemo01PageModule {}
