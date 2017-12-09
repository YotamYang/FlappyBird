(function() {
	window.Game = function() {
		this.canvas = document.getElementsByTagName("canvas")[0];
		this.ctx = this.canvas.getContext("2d");
		this.sm = new SceneManagement(this);
	};

	Game.prototype.start = function() {
		this.sm.changeScene(0);
	};

	Game.prototype.over = function() {
		var self = this;
		clearInterval(self.timer)
	};
})();