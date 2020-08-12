import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
	{ path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule) },
	{ path: 'drop-down-demo01', loadChildren: './pages/menu/dropdown/drop-down-demo01/drop-down-demo01.module#DropDownDemo01PageModule' },
	{ path: 'drop-down-demo02', loadChildren: './pages/menu/dropdown/drop-down-demo02/drop-down-demo02.module#DropDownDemo02PageModule' },
	{ path: 'horizontal-down-demo01', loadChildren: './pages/menu/horizontal/horizontal-down-demo01/horizontal-down-demo01.module#HorizontalDownDemo01PageModule' },
	{ path: 'horizontal-down-demo02', loadChildren: './pages/menu/horizontal/horizontal-down-demo02/horizontal-down-demo02.module#HorizontalDownDemo02PageModule' },
	{ path: 'cards-hover-demo01', loadChildren: './pages/cards/hover/cards-hover-demo01/cards-hover-demo01.module#CardsHoverDemo01PageModule' },
	{ path: 'cards-hover-demo02', loadChildren: './pages/cards/hover/cards-hover-demo02/cards-hover-demo02.module#CardsHoverDemo02PageModule' },
	{ path: 'cards-hover-demo03', loadChildren: './pages/cards/hover/cards-hover-demo03/cards-hover-demo03.module#CardsHoverDemo03PageModule' },
	{ path: 'animation-logo-demo01', loadChildren: './pages/animation/logo/animation-logo-demo01/animation-logo-demo01.module#AnimationLogoDemo01PageModule' },
	{ path: 'animation-logo-demo02', loadChildren: './pages/animation/logo/animation-logo-demo02/animation-logo-demo02.module#AnimationLogoDemo02PageModule' },
	{ path: 'animation-logo-demo03', loadChildren: './pages/animation/logo/animation-logo-demo03/animation-logo-demo03.module#AnimationLogoDemo03PageModule' },
	{ path: 'layout-content-demo01', loadChildren: './pages/layout/content/layout-content-demo01/layout-content-demo01.module#LayoutContentDemo01PageModule' },
	{ path: 'layout-monopoly-demo01', loadChildren: './pages/layout/monopoly/layout-monopoly-demo01/layout-monopoly-demo01.module#LayoutMonopolyDemo01PageModule' },
	{ path: 'layout-bingo-demo01', loadChildren: './pages/layout/bingo/layout-bingo-demo01/layout-bingo-demo01.module#LayoutBingoDemo01PageModule' },
	{ path: 'layout-floorplan-demo01', loadChildren: './pages/layout/floorplan/layout-floorplan-demo01/layout-floorplan-demo01.module#LayoutFloorPlanDemo01PageModule' },
	{ path: 'grid-palettes-demo01', loadChildren: './pages/grid/palettes/grid-palettes-demo01/grid-palettes-demo01.module#GridPalettesDemo01PageModule' },
	{ path: 'table-periodic-demo01', loadChildren: './pages/table/periodic/table-periodic-demo01/table-periodic-demo01.module#TablePeriodicDemo01PageModule' },
	{ path: 'animation-three-moon', loadChildren: './pages/animation/threejs/moon/animation-three-moon/animation-three-moon.module#AnimationThreeJSMoonPageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
