class Input {
	constructor(stack, {up, down, left, right}) {
    this.stack = stack;
    this.keys = {};
    this.keys[left] = -1;
    this.keys[right] = 1;
    console.log(this.keys);

    document.addEventListener('keydown', (e) => {
      if (e.key === left) {
        this.stack.push(this.keys[e.key]);
      } else if (e.key === right) {
        this.stack.push(this.keys[e.key]);
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.key === left || e.key === right) {
        this.stack.splice(this.stack.indexOf(this.keys[e.key], 1));
      } else if (e.key === right) {
        this.stack.splice(this.stack.indexOf(this.keys[e.key], 1));
      }
      if(this.stack.length == 0) {
        this.stack.push(0);
      }
    });

	}
}

export default Input;