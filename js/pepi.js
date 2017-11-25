(function() {
	window.Pepi = function() {
		this.image1 = game.Robj['pepi_down'];
		this.image2 = game.Robj['pepi_up'];

		this.height = _.random(50, 250);
		this.x = game.canvas.width;

		this.empty = 100;

		game.actors.push(this);
	};

	Pepi.prototype.update = function() {
		this.x -= 2;
		if (this.x + this.image1.width == 0) {
			debugger;
			game.actors = _.without(game.actors, this);
		}
	};

	Pepi.prototype.render = function() {
		debugger;
		game.ctx.drawImage(this.image1, 0, this.image1.height - this.height, this.image1.width, this.height, this.x, 0, this.image1.width, this.height);

		var height = game.canvas.height - this.height - this.empty - game.Robj['land'].height;
		game.ctx.drawImage(this.image2, 0, 0, this.image2.width, height, this.x, game.canvas.height - game.Robj['land'].height - height, this.image2.width, height);
	};
})();