//burgerMenu
const burgerBtn = document.querySelector('.burger-menu'),
	burgerMenu = document.querySelector('.menu__list'),
	header = document.querySelector('.header'),
	body = document.body;

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('menu--active');
	burgerMenu.classList.toggle('menu--active');
	body.classList.toggle('lock');
	if (document.documentElement.offsetWidth > 768) {
		if (header.style.paddingRight == '17px' && body.style.paddingRight == '17px') {
			header.style.paddingRight = '';
			body.style.paddingRight = '';
		} else {
			header.style.paddingRight = '17px';
			body.style.paddingRight = '17px';
		}
	}
});