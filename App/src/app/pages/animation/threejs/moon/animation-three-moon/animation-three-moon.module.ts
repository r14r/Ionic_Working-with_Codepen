import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationThreeJSMoonPage } from './animation-three-moon.page';

const routes: Routes = [
	{
		path: '',
		component: AnimationThreeJSMoonPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [AnimationThreeJSMoonPage]
})
export class AnimationThreeJSMoonPageModule { }
