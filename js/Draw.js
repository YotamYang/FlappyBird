(function() {
	window.Draw = function(status, imgs, ctx) {
		this.x = 0;
		this.y = 0;
		this.ctx = ctx;
		this.status = status;
		this.image = [].concat(imgs);
	};

	Draw.prototype.updata = function() {
		if (status == 0) {

		} else {
			this.x++;
		}
	};

	Draw.prototype.render = function() {
		debugger;
		for (var i = 0; i < this.image.length; i++) {
			this.ctx.drawImage(this.image[i], this.x, this.y, this.image[i].width, this.image[i].height);
		}
	}
})();