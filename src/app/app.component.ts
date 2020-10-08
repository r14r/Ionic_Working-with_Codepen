import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const ICON_MENU_LEVEL1 = 'apps';
const ICON_MENU_LEVEL2 = 'more';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: ICON_MENU_LEVEL1 },
		{ title: 'Menu: Drop Down 01', url: '/drop-down-demo01', icon: ICON_MENU_LEVEL1 },
		{ title: 'Menu: Drop Down 02', url: '/drop-down-demo02', icon: ICON_MENU_LEVEL2 },
		{ title: 'Menu: Horizontal 01', url: '/horizontal-down-demo01', icon: ICON_MENU_LEVEL2 },
		{ title: 'Menu: Horizontal 02', url: '/horizontal-down-demo02', icon: ICON_MENU_LEVEL2 },

		{ title: 'Cards: Hover 01', url: '/cards-hover-demo01', icon: ICON_MENU_LEVEL1 },
		{ title: 'Cards: Hover 02', url: '/cards-hover-demo02', icon: ICON_MENU_LEVEL2 },
		{ title: 'Cards: Hover 03', url: '/cards-hover-demo03', icon: ICON_MENU_LEVEL2 },

		{ title: 'Animation: Logo: 01', url: '/animation-logo-demo01', icon: ICON_MENU_LEVEL1 },
		{ title: 'Animation: Logo: 02', url: '/animation-logo-demo02', icon: ICON_MENU_LEVEL2 },
		{ title: 'Animation: Logo 03', url: '/animation-logo-demo03', icon: ICON_MENU_LEVEL2 },
		{ title: 'Animation: Moon', url: '/animation-three-moon', icon: ICON_MENU_LEVEL2 },

		{ title: 'Layout: Content', url: '/layout-content-demo01', icon: ICON_MENU_LEVEL1 },
		{ title: 'Layout: Monopoly', url: '/layout-monopoly-demo01', icon: ICON_MENU_LEVEL2 },
		{ title: 'Layout: Bingo', url: '/layout-bingo-demo01', icon: ICON_MENU_LEVEL2 },
		{ title: 'Layout: Floorplan', url: '/layout-floorplan-demo01', icon: ICON_MENU_LEVEL2 },

		{ title: 'Grid: Palettes', url: '/grid-palettes-demo01', icon: ICON_MENU_LEVEL1 },
		{ title: 'Table: Periodic', url: '/table-periodic-demo01', icon: ICON_MENU_LEVEL1 },

	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
