import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TablePeriodicDemo01Page } from './table-periodic-demo01.page';

const routes: Routes = [
  {
    path: '',
    component: TablePeriodicDemo01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablePeriodicDemo01Page]
})
export class TablePeriodicDemo01PageModule {}
