import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-drop-down-demo01',
	templateUrl: './drop-down-demo01.page.html',
	styleUrls: ['./drop-down-demo01.page.scss'],
})
export class DropDownDemo01Page implements OnInit {

	constructor() { }

	ngOnInit() {
		/*
		document.querySelectorAll('select[data-menu]').each(node => {
	
		  let select = $(this),
			options = select.find('option'),
			menu = $('<div />').addClass('select-menu'),
			button = $('<div />').addClass('button'),
			list = $('<ul />'),
			arrow = $('<em />').prependTo(button);
	
		  options.each(function (i) {
			let option = $(this);
			list.append($('<li />').text(option.text()));
		  });
	
		  menu.css('--t', select.find(':selected').index() * -41 + 'px');
	
		  select.wrap(menu);
	
		  button.append(list).insertAfter(select);
	
		  list.clone().insertAfter(button);
		});
	
		document.querySelector('.select-menu').addEventListener('click', function (e) {
	
		  const menu = $(this);
		  if (!menu.hasClass('open')) {
			menu.addClass('open');
		  }
	
		});
	
		document.querySelector('.select-menu').addEventListener('.select-menu > ul > li', function (e) {
		  /*
		  let const = $(this),
			menu = li.parent().parent(),
			select = menu.children('select'),
			selected = select.find('option:selected'),
			index = li.index();
	
		  menu.css('--t', index * -41 + 'px');
		  selected.attr('selected', false);
		  select.find('option').eq(index).attr('selected', true);
	
		  menu.addClass(index > selected.index() ? 'tilt-down' : 'tilt-up');
	
		  setTimeout(() => {
			menu.removeClass('open tilt-up tilt-down');
		  }, 500);
	    
		$(document).click(e => {
		  e.stopPropagation();
		  if ($('.select-menu').has(e.target).length === 0) {
			$('.select-menu').removeClass('open');
		  }
		})
	  */
	}
}
