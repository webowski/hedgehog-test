import { trigger } from '../helpers/Event'

let $navMobile = document.querySelector('.NavMobile')

if ($navMobile) {
	let $navMobileOpener = document.querySelector('.NavMobileOpener')

	$navMobile.addEventListener('open', (e) => {
		$navMobileOpener.classList.add('is-open')
		$navMobile.classList.add('is-open')
		document.body.classList.add('G-noScroll')
	})

	$navMobile.addEventListener('close', (e) => {
		$navMobileOpener.classList.remove('is-open')
		$navMobile.classList.remove('is-open')
		document.body.classList.remove('G-noScroll')
	})

	$navMobileOpener.addEventListener('click', e => {
		if ($navMobile.classList.contains('is-open')) {
			trigger($navMobile, 'close')
		} else {
			trigger($navMobile, 'open')
		}
	})

	document.addEventListener('mousedown', e => {
		if (
			$navMobile.classList.contains('is-open') &&
			!e.target.closest('.NavMobile') &&
			!e.target.closest('.NavMobileOpener') &&
			!e.target.classList.contains('NavMobileOpener')
		){
			trigger($navMobile, 'close')
		}
	})

}

// // event outer click
// document.addEventListener('mousedown', e => {
// 	if (
// 		!e.target.closest('.NavMain__items')
// 	){
// 		$menuItems.forEach($menuItem => {
// 			trigger($menuItem, 'close')
// 		})
// 	}
// })
