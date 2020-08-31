import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-layout-bingo-demo01',
	templateUrl: './layout-bingo-demo01.page.html',
	styleUrls: ['./layout-bingo-demo01.page.scss'],
})
export class LayoutBingoDemo01Page implements OnInit {

	constructor() { }

	ngOnInit() {

		document.querySelector('.bingo-card__item').addEventListener('click', node => {
			// node.toggleClass('active');
		});

		document.querySelector('.clear-button').addEventListener('click', node => {
			// document.querySelectorAll('.bingo-card__item').each(node => {
			//		node.removeClass('active');
			// }
		});

	}

}
