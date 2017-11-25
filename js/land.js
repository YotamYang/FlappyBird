(function() {
	window.Land = function() {
		this.image = game.Robj['land'];
		this.x = 0;

		game.actors.push(this);
	};

	Land.prototype.update = function() {
		this.x -= 2;
		if(game.canvas.width + this.x == 0) {
			this.x = 0;
		}
	};

	Land.prototype.render = function() {
		game.ctx.drawImage(this.image, this.x, game.canvas.height - this.image.height);
		game.ctx.drawImage(this.image, this.x + this.image.width, game.canvas.height - this.image.height);
	};
})();