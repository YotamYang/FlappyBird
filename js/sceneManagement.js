(function() {
	window.SceneManagement = function(game) {
		this.canvas = game.canvas;
		this.ctx = game.ctx;
		var self = this;
		this.load = new LoadResource(function() {
			self.init.call(self);
			self.start.call(self);
		}, game);
		this.R = this.load.R;
		this.RImg = this.load.Robj;
	};

	SceneManagement.prototype.init = function() {
		this.scene = [
			[
				new Background(0, this.load.Robj["bg_day"], this.ctx)
			]
		];
		this.actor = this.scene[0];
	};

	SceneManagement.prototype.changeScene = function(i) {
		this.actor = this.scene[i];
	};

	SceneManagement.prototype.start = function() {
		for (var i = 0; i < this.actor.length; i++ ) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.actor[i].updata();
			this.actor[i].render();
		}
	};
})();