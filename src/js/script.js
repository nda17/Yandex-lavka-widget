window.addEventListener('DOMContentLoaded', () => {
	const storeShelf = document.querySelectorAll('.item');
	const cart = document.querySelector('.cart');
	const paymentBtn = document.querySelector('.wrapper-payment-btn');
	let activeTarget = null;
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

	const dragMove = e => {
		e.preventDefault();

		let touch = e.targetTouches[0];

		e.target.style.top = `${touch.pageY}px`;
		e.target.style.left = `${touch.pageX}px`;

		// e.target.classList.add('item-hold');
		// setTimeout(() => e.target.classList.add('item-hide'), 0);
		// activeTarget = e.target;
	};

	// const dragend = e => {
	// 	activeTarget = null;
	// 	e.target.classList.remove('item-hold');
	// 	e.target.classList.remove('item-hide');
	// };

	// const dragOver = e => {
	// 	e.preventDefault();
	// };

	// const drop = () => {
	// 	cart.append(activeTarget);
	// 	activeTarget.classList.add('active');
	// 	cart.classList.remove('cart-hovered');
	// 	countProducts < 3 && checkProducts();
	// };

	// const dragEnter = e => {
	// 	cart.classList.add('cart-hovered');
	// };

	// const dragLeave = () => {
	// 	cart.classList.remove('cart-hovered');
	// };

	storeShelf.forEach(item => {
		item.addEventListener('touchmove', dragMove);
		// item.addEventListener('touchend', drop);
		// touchstart
		// item.addEventListener('dragend', dragend);
		// touchend
	});

	// cart.addEventListener('dragover', dragOver);
	// item.addEventListener('touchend', drop);
	// cart.addEventListener('dragenter', dragEnter);
	// cart.addEventListener('dragleave', dragLeave);
});
