window.addEventListener('DOMContentLoaded', () => {
	const storeShelf = document.querySelectorAll('.item');
	const cart = document.querySelector('.cart');
	const paymentBtn = document.querySelector('.wrapper-payment-btn');
	let activeTarget = null;
	let touchEvent = null;
	let countProducts = 0;

	const checkProducts = () => {
		countProducts = countProducts + 1;

		if (
			countProducts >= 3 &&
			!paymentBtn.classList.contains('wrapper-payment-btn-active')
		) {
			paymentBtn.classList.add('wrapper-payment-btn-active');
		}
	};

	const dragTouch = e => {
		e.preventDefault();
		activeTarget = e.target;
		touchEvent = e.targetTouches[0];

		let touch = e.targetTouches[0];

		e.target.style.top = `${touch.pageY}px`;
		e.target.style.left = `${touch.pageX}px`;
	};

	// const dragend = e => {
	// 	activeTarget = null;
	// 	e.target.classList.remove('item-hold');
	// 	e.target.classList.remove('item-hide');
	// };

	// const dragOver = e => {
	// 	e.preventDefault();
	// };

	const dropTouch = e => {
		if (touchEvent.pageY > 330) {
			cart.append(activeTarget);
			activeTarget.classList.add('active');
			touchEvent = null;
			activeTarget = null;
			countProducts < 3 && checkProducts();
		} else {
		}
	};

	storeShelf.forEach(item => {
		item.addEventListener('touchmove', dragTouch);
		item.addEventListener('touchend', dropTouch);
	});

	// cart.addEventListener('dragover', dragOver);
	// cart.addEventListener('touchend', () => console.log('fffff'));
	// cart.addEventListener('dragenter', dragEnter);
	// cart.addEventListener('dragleave', dragLeave);
});
