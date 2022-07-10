class Input {
	constructor(vector, {up, down, left, right}) {

    document.addEventListener('keydown', (e) => {
      if (e.key === left) {
        vector.x = -1;
      } else if (e.key === right) {
        vector.x = 1;
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.key === left || e.key === right) {
        vector.x = 0;
    	}
    });

	}
}

export default Input;