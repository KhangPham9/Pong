class Menu {
	constructor() {
		this.menu = document.getElementsByClassName('menu')[0];
		this.show = true;

		this.menuToggle = this.menuToggle.bind(this);
		this.createListeners();

	}

	createListeners() {
		// listener for the play button
		document.getElementsByClassName('menu-option')[0]
		.addEventListener('click', this.menuToggle);

		// listener for the quit button
		document.getElementsByClassName('menu-option')[1]
		.addEventListener('click', () => {
			console.log('quit');
		});

		// listener for the esc button to bring up the menu.
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				this.menuToggle();
				console.log(this.show);
			}
		});


	}

	menuToggle() {
		console.log('play');
		if (this.show) {
			this.menu.style.display = 'none';
			this.show = false;
		} 
		else {
			this.menu.style.display = 'block';
			this.show = true;
		}
	}


}

export default Menu;