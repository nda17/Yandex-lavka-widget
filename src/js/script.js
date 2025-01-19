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

	const dragstart = e => {
		e.target.classList.add('item-hold');
		setTimeout(() => e.target.classList.add('item-hide'), 0);
		activeTarget = e.target;
	};

	const dragend = e => {
		activeTarget = null;
		e.target.classList.remove('item-hold');
		e.target.classList.remove('item-hide');
	};

	const dragOver = e => {
		e.preventDefault();
	};

	const drop = () => {
		cart.append(activeTarget);
		activeTarget.classList.add('active');
		cart.classList.remove('cart-hovered');
		countProducts < 3 && checkProducts();
	};

	const dragEnter = e => {
		e.preventDefault();
		cart.classList.add('cart-hovered');
	};

	const dragLeave = () => {
		cart.classList.remove('cart-hovered');
	};

	storeShelf.forEach(item => {
		item.addEventListener('dragstart', dragstart);
		item.addEventListener('dragend', dragend);
	});

	cart.addEventListener('dragover', dragOver);
	cart.addEventListener('drop', drop);
	cart.addEventListener('dragenter', dragEnter);
	cart.addEventListener('dragleave', dragLeave);
});
