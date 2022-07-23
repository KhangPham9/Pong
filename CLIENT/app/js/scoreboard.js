class ScoreBoard{
	constructor() {
		this.p1Tag = document.getElementById("p1-score");
		this.p2Tag = document.getElementById("p2-score");
		this.p1Score = 0;
		this.p2Score = 0;

		this.p1Tag.innerText = `Score: ${this.p1Score}`;
		this.p2Tag.innerText = `Score: ${this.p2Score}`;
	}

	incP1() {
		this.p1Score++;
		this.p1Tag.innerText = `Score: ${this.p1Score}`;

	}
	incP2() {
		this.p2Score++;
		this.p2Tag.innerText = `Score: ${this.p2Score}`;


	}
}

export default ScoreBoard;