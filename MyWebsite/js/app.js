document.addEventListener('DOMContentLoaded', () => {
	// Smooth Scrolling for Navigation Links
	const navLinks = document.querySelectorAll('.nav-links a');

	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const targetId = link.getAttribute('href');
			const targetSection = document.querySelector(targetId);

			targetSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	});

	// Go back to the top with the 'Home' key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Home') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	});

	// Contact Form Submission
	const contactForm = document.querySelector('.contact-form');

	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();

		// Collect form data
		const name = contactForm.querySelector('input[type="text"]').value;
		const email = contactForm.querySelector('input[type="email"]').value;
		const message = contactForm.querySelector('textarea').value;

		// Basic form validation
		if (!name || !email || !message) {
			showNotification('Please fill in all fields', 'error');
			return;
		}

		// Simulate form submission
		sendMessage(name, email, message);
	});

	// Project Hover Effects
	const projectCards = document.querySelectorAll('.project-card');

	projectCards.forEach((card) => {
		card.addEventListener('mouseenter', () => {
			card.querySelector('.project-overlay').style.opacity = '1';
		});

		card.addEventListener('mouseleave', () => {
			card.querySelector('.project-overlay').style.opacity = '0';
		});
	});

	// Scroll Reveal Animation
	const revealElements = document.querySelectorAll('.services-grid, .projects-grid');

	const revealOnScroll = () => {
		revealElements.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			if (sectionTop < windowHeight * 0.8) {
				section.classList.add('reveal-active');
			}
		});
	};

	window.addEventListener('scroll', revealOnScroll);

	// Notification Function
	function showNotification(message, type = 'success') {
		const notification = document.createElement('div');
		notification.classList.add('notification', type);
		notification.textContent = message;

		document.body.appendChild(notification);

		setTimeout(() => {
			notification.remove();
		}, 3000);
	}

	// Simulated Message Sending Function
	function sendMessage(name, email, message) {
		console.log('Sending message:', { name, email, message });

		setTimeout(() => {
			showNotification('Message sent successfully!');
			contactForm.reset();
		}, 1000);
	}

	// Preloader
	window.addEventListener('load', () => {
		const preloader = document.createElement('div');
		preloader.classList.add('preloader');
		preloader.innerHTML = `
            <div class="spinner"></div>
        `;
		document.body.appendChild(preloader);

		setTimeout(() => {
			preloader.remove();
		}, 1000);
	});

	// Dynamic Year in Footer
	const yearElement = document.createElement('span');
	yearElement.textContent = new Date().getFullYear();
	document.querySelector('footer p').prepend(yearElement, ' ');
});
