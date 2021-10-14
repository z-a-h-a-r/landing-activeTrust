// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault() // Предотвратить стандартное поведение ссылок
		// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
		const goto = anchor.hasAttribute('href')
			? anchor.getAttribute('href')
			: 'body'

		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock')
			iconBody.classList.remove('_active')
			iconMenu.classList.remove('_active')
		}
		// Плавная прокрутка до элемента с id = href у ссылки
		document.querySelector(goto).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}

// =====================================================================

// function testWebP(callback) {
// 	var webP = new Image()
// 	webP.onload = webP.onerror = function () {
// 		callback(webP.height == 2)
// 	}
// 	webP.src =
// 		'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
// }

// testWebP(function (support) {
// 	if (support == true) {
// 		document.querySelector('body').classList.add('webp')
// 	} else {
// 		document.querySelector('body').classList.add('no-webp')
// 	}
// })

// =====================================================================

const iconMenu = document.querySelector('.menu__icon')
const iconBody = document.querySelector('.menu__body')

if (iconMenu) {
	const iconBody = document.querySelector('.menu__body')
	iconMenu.addEventListener('click', function () {
		document.body.classList.toggle('_lock')
		iconBody.classList.toggle('_active')
		iconMenu.classList.toggle('_active')
	})
}

// =====================================================================

$(function () {
	$('.services__list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		prevArrow: "<img src='../img/arrow.ico' class='prev' alt='1'>",
		nextArrow: "<img src='../img/arrow.ico' class='next' alt='2'>",

		responsive: [
			{
				breakpoint: 996,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 546,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
		],
	})
})
