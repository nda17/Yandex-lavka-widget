const container = document.querySelector('.banner-container');
const storeShelf = document.querySelectorAll('.item');
const cart = document.querySelector('.cart');
const paymentBtn = document.querySelector('.wrapper-payment-btn');
let activeTarget = null;
let touchEvent = null;
let countProducts = 0;

const defaultStateProduct = () => {
	const itemName = activeTarget.classList[0];
	document.querySelector(`.${itemName}`).style.top = '';
	document.querySelector(`.${itemName}`).style.left = '';
	touchEvent = null;
	activeTarget = null;
};

const checkProducts = () => {
	countProducts = countProducts + 1;

	if (
		countProducts >= 3 &&
		!paymentBtn.classList.contains('wrapper-payment-btn-active')
	) {
		paymentBtn.classList.add('wrapper-payment-btn-active');
	}
};

const dragTouchMove = e => {
	e.preventDefault();
	activeTarget = e.target;
	touchEvent = e.targetTouches[0];

	e.target.style.top = `${
		touchEvent.pageY - container.offsetTop - e.target.offsetHeight / 2 - 28
	}px`;
	e.target.style.left = `${
		touchEvent.pageX -
		container.offsetLeft -
		e.target.offsetWidth / 2 -
		44.32
	}px`;
};

const dropTouch = e => {
	if (touchEvent.pageY > 360) {
		cart.append(activeTarget);
		activeTarget.classList.add('active');
		touchEvent = null;
		activeTarget = null;
		countProducts < 3 && checkProducts();
	} else {
		defaultStateProduct();
	}
};

storeShelf.forEach(item => {
	item.addEventListener('touchmove', dragTouchMove);
	item.addEventListener('touchend', dropTouch);
});
