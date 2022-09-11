export class Star {
	x: number;
	y: number;
	ctx: CanvasRenderingContext2D;

	constructor(cWidth: number, cHeight: number, ctx: CanvasRenderingContext2D) {
		this.x = Math.random() * cWidth;
		this.y = Math.random() * cHeight;
		this.ctx = ctx;
	}

	draw() {
		this.ctx.fillStyle = '#fff';
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, 1.2, 0, 2 * Math.PI);
		this.ctx.fill();
	}

	animate() {
		//TODO: Animate stars
	}
}
