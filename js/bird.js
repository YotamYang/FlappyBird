(function() {
	window.Bird = function() {
		this.image = [game.Robj['bird0'], game.Robj['bird1'], game.Robj['bird2']];
		this.index = 0;
		this.num = 0;

		this.x = 30;
		this.height = 200;

		this.downSpeed = 0;
		this.angle = 0;

		game.actors.push(this);
	};

	Bird.prototype.fly = function() {
		this.status = "U";
		this.downSpeed = -400
	};

	Bird.prototype.update = function() {
		this.num++;
		if(this.num % 10 == 0) {
			this.index = ++this.index % 3;
		}

		this.downSpeed += 10;
		this.height += this.downSpeed / 200;
		this.angle += this.downSpeed / 50000;
	};

	Bird.prototype.render = function() {
		game.ctx.save();
		game.ctx.translate(this.x + 24, this.height + 24);
		game.ctx.rotate(this.angle);
		game.ctx.translate(-(this.x + 24), -(this.height + 24));
		game.ctx.drawImage(this.image[this.index], this.x, this.height);

		game.ctx.restore();
	};
})();