(function() {
	window.Game = function() {
		this.canvas = document.getElementsByTagName("canvas")[0];
		var self = this;
		this.sm = new SceneManagement(function() {
			self.start.call(self);
		}, this.canvas);
	};

	Game.prototype.start = function() {
		this.sm.changeScene(0);
	};

	Game.prototype.over = function() {
		var self = this;
		clearInterval(self.timer)
	};
})();