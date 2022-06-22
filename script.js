
$('.gallery__items').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	}
});



const modalBtn = document.querySelectorAll('[data-modal-button]')
const buttonClose = document.querySelectorAll('[data-modal-close]');
const modals = document.querySelectorAll('[data-modal]');

const tabButtons = document.querySelectorAll('[data-tab]');
const contentTabs = document.querySelectorAll('[data-tab-content]');



// ==============================Set Timer=============================
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const endPromotion = new Date('September 23 2022 00:00:00');

function update () {

	const currentTime = new Date();
	const diff = endPromotion - currentTime;

	const daysLeft = Math.floor(diff/1000/60/60/24);
	const hoursLeft = Math.floor(diff/1000/60/60) % 24;
	const minutesLeft = Math.floor(diff/1000/60) % 60;
	const secondsLeft = Math.floor(diff/1000) % 60;

	days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

	if (diff <= 0) {
		clearInterval(setInterval)

		days.innerText = '00'
		hours.innerText = '00'
		minutes.innerText = '00'
		seconds.innerText = '00'
	}

}

update ();

setInterval(update, 1000);

// ============================== End Set Timer=============================



// ============================== Modal =============================

modalBtn.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		const modalId = this.dataset.modalButton;

		const modal = document.querySelector('#' + modalId);

		modal.classList.remove('hidden');

		document.body.classList.add('lock');

		modal.querySelector('.fade-modal__content').addEventListener('click', function (e) {
			e.stopPropagation();
		})

	});
});

buttonClose.forEach(function (item) {
	item.addEventListener('click', function () {
		const currentModal = this.closest('[data-modal]');
		currentModal.classList.add('hidden');
		
		document.body.classList.remove('lock');
	});
});

modals.forEach(function (modal) {
	modal.addEventListener('click', function () {
		this.classList.add('hidden')

		document.body.classList.remove('lock');
	});
});


// ============================== Tabs =============================

tabButtons.forEach(function (btn) {
	btn.addEventListener('click', function () {
		
		tabButtons.forEach(function (box) {
			box.classList.remove('_active');
		});

		// this.closest('.service-tabs__box').classList.add('_active');
		this.classList.add('_active');
		
		
		const tabContent = document.querySelector('#' + this.dataset.tab);
		
		contentTabs.forEach(function (elm) {
			elm.classList.add('hidden');
		});

		tabContent.classList.remove('hidden');


	});
});


