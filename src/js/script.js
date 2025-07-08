// burger menu
const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');
const burgerOverlay = document.getElementById('burgerOverlay');

function closeBurgerMenu() {
	burgerMenu.classList.remove('active');
	burgerOverlay.classList.remove('active');
	burgerBtn.classList.remove('active');
}
if (burgerBtn && burgerMenu && burgerOverlay) {
	burgerBtn.addEventListener('click', () => {
		const isActive = burgerMenu.classList.contains('active');
		if (isActive) {
			closeBurgerMenu();
		} else {
			burgerMenu.classList.add('active');
			burgerOverlay.classList.add('active');
			burgerBtn.classList.add('active');
		}
	});
	burgerOverlay.addEventListener('click', closeBurgerMenu);
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeBurgerMenu();
		}
	});
}

// reveal service cards
function revealServiceCards() {
	const cards = document.querySelectorAll('.service-card');
	const trigger = window.innerHeight * 0.95;
	cards.forEach(card => {
		const rect = card.getBoundingClientRect();
		if (rect.top < trigger) {
			card.classList.add('visible');
		}
	});
}
window.addEventListener('scroll', revealServiceCards);
window.addEventListener('DOMContentLoaded', revealServiceCards);

// dropdown menu
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.header__link--dropdown > a').forEach(function (link) {
		link.addEventListener('click', function (e) {
			if (window.innerWidth <= 1100) {
				e.preventDefault();
				const parent = this.parentElement;
				document.querySelectorAll('.header__link--dropdown.active').forEach(function (el) {
					if (el !== parent) el.classList.remove('active');
				});
				parent.classList.toggle('active');
			}
		});
	});
	document.addEventListener('click', function (e) {
		if (window.innerWidth > 1100) return;
		document.querySelectorAll('.header__link--dropdown.active').forEach(function (dropdown) {
			if (!dropdown.contains(e.target)) {
				dropdown.classList.remove('active');
			}
		});
	});
});
