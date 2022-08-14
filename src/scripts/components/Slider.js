// import Swiper, { Navigation } from 'swiper'

// Swiper.use([Navigation]);

// let $sliders = document.querySelectorAll('.Slider')

// let slidersInstances = []

// $sliders.forEach(($slider, i) => {
// 	slidersInstances[i] = initSlider($slider)
// })

// window.sliders = slidersInstances

// function initSlider($slider) {
// 	let $container = $slider.querySelector(':scope > .swiper-container')
// 	let $pagination = $slider.querySelector(':scope > .swiper-pagination')
// 	let $buttonPrev = $slider.querySelector(':scope > .swiper-button-prev') || $container.querySelector(':scope > .swiper-button-prev')
// 	let $buttonNext = $slider.querySelector(':scope > .swiper-button-next') || $container.querySelector(':scope > .swiper-button-next')
// 	let areaHover = $slider.dataset.areaHover || false

// 	let slidesPerView = $slider.dataset.slides
// 	if (slidesPerView != 'auto') {
// 		slidesPerView = parseInt($slider.dataset.slides) || 1
// 	}

// 	let options = {
// 		slidesPerGroup:           1,
// 		slidesPerView:            slidesPerView,
// 		freeMode:                 $slider.dataset.freeMode || false,
// 		spaceBetween:             parseInt($slider.dataset.spaceBetween) || 0,
// 		centeredSlides:           $slider.dataset.centered || false,
// 		centerInsufficientSlides: $slider.dataset.centerInsufficient || false,
// 	}

// }



import Swiper, { Navigation } from 'swiper'

Swiper.use([Navigation])

let $sliders = document.querySelectorAll('.Slider')

let slidersInstances = []

$sliders.forEach(($slider, i) => {
	slidersInstances[i] = initSlider($slider)
})

function initSlider($slider) {
	let $container = $slider.querySelector(':scope > .swiper-container')
	let $buttonPrev = $slider.querySelector(':scope > .swiper-button-prev') || $container.querySelector(':scope > .swiper-button-prev')
	let $buttonNext = $slider.querySelector(':scope > .swiper-button-next') || $container.querySelector(':scope > .swiper-button-next')

	let slidesPerView = $slider.dataset.slides
	if (slidesPerView != 'auto') {
		slidesPerView = parseInt($slider.dataset.slides) || 1
	}

	let options = {
		speed:         parseInt($slider.dataset.speed) || 300,
		loop:          $slider.dataset.loop || true,
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		spaceBetween:  35,
		freeMode:      true,
		autoHeight:    $slider.dataset.autoHeight || false,
		watchSlidesProgress:      false,
		watchSlidesVisibility:    false,
		navigation: {
			prevEl:        $buttonPrev,
			nextEl:        $buttonNext,
		},
		breakpoints: {
			768: {
				slidesPerView: slidesPerView || 1,
			},
			992: {
				slidesPerView: slidesPerView || 1,
				spaceBetween:  40
			}
		}
	}

	$slider.instance = new Swiper($container, options)

	return $slider
}

export default initSlider
