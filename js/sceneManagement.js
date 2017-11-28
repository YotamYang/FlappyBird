(function() {
	window.SceneManagement = function(callback, canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');
		this.R = {
			"bg_day": "images/bg_day.png",
			"bird0": "images/bird0_0.png",
			"bird1": "images/bird0_1.png",
			"bird2": "images/bird0_2.png",
			"land": "images/land.png",
			"pepi_down": "images/pipe_down.png",
			"pepi_up": "images/pipe_up.png",
		};
		this.RImg = {};
		this.loadResource(callback);
	};

	SceneManagement.prototype.loadResource = function(callback) {
		var self = this;
		var already = 0;
		for (var key in self.R) {
			self.RImg[key] = new Image();
			self.RImg[key].src = self.R[key];
			self.RImg[key].onload = function() {
				already++;
				self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
				self.ctx.fillText("loading: " + already + "/" + _.keys(self.R).length, 100, 100)
				if(already == _.keys(self.R).length) {
					callback();
				}
			};
		}
	};

	SceneManagement.prototype.changeScene = function() {

	};
})();