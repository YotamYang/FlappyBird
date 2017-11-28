(function() {
	window.Land = function() {
		this.image = game.Robj['land'];
		this.x = 0;

		game.actors.push(this);
	};

	Land.prototype.crash = function() {
		var birdPosition = game.bird.getPosition();
		if(game.canvas.height - this.image.height < birdPosition.cy + birdPosition.height / 2) {
			game.over();
		}
	};

	Land.prototype.update = function() {
		this.x -= 2;
		if(game.canvas.width + this.x == 0) {
			this.x = 0;
		}
		this.crash();
	};

	Land.prototype.render = function() {
		game.ctx.drawImage(this.image, this.x, game.canvas.height - this.image.height);
		game.ctx.drawImage(this.image, this.x + this.image.width, game.canvas.height - this.image.height);
	};
})();