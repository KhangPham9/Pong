class Resize {
	constructor() {
		window.addEventListener('resize', this.resizeCanvas, false);
	}

  resizeCanvas() {
	  let canvas = document.getElementById('canvas');
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	}

}

export default Resize; 