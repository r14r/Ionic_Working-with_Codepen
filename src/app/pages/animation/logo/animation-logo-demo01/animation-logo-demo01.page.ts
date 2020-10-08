import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-animation-logo-demo01',
	templateUrl: './animation-logo-demo01.page.html',
	styleUrls: ['./animation-logo-demo01.page.scss'],
})
export class AnimationLogoDemo01Page implements OnInit {

	constructor() { }

	ngOnInit() {
		/*
		$('body').click(function () {
			$(".animate").removeClass("animate");
			setTimeout(function () {
				$("div").addClass("animate");
			}, 1000);
		})
		*/
	}

}
