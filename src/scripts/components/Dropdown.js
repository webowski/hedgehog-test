import { trigger } from '../helpers/Event'

const $dropdowns = document.querySelectorAll('.Dropdown')
const eventName = 'mousedown'

$dropdowns.forEach($dropdown => {
	initDropdown($dropdown)
})

function initDropdown($dropdown) {

	let $button = $dropdown.querySelectorAll('.Dropdown__button, .Dropdown__close')
	let $list = $dropdown.querySelector('.Dropdown__list')

	$dropdown.addEventListener('open', e => {
		$dropdown.classList.add('is-open')
	})

	$dropdown.addEventListener('close', e => {
		$dropdown.classList.remove('is-open')
	})

	$button.forEach((element) => {
		element.addEventListener(eventName, e => {
			if ($dropdown.classList.contains('is-open')) {
				trigger($dropdown, 'close')
			} else {
				trigger($dropdown, 'open')
			}
		})
	})

	document.addEventListener(eventName, e => {
		if (
			$dropdown.classList.contains('is-open') &&
			!e.target.closest('.Dropdown') &&
			!e.target.classList.contains('Dropdown__button')
		) {
			trigger($dropdown, 'close')
		}
	})

}
