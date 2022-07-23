class Resize {
	constructor() {
		window.addEventListener('resize', () => {
		  let canvas = document.getElementById('canvas');
		  canvas.width = window.innerWidth;
		  canvas.height = window.innerHeight;
		  this.flag = true;
		});
		this.flag = false;
		// this.resizeCanvas.bind(this);
	}


}

export default Resize; 