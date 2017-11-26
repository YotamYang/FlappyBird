(function() {
	window.Game = function() {
		this.canvas = document.getElementsByTagName("canvas")[0];
		this.ctx = this.canvas.getContext('2d');
		this.frameNumber = 0;

		this.R = {
			"bg_day": "images/bg_day.png",
			"bird0": "images/bird0_0.png",
			"bird1": "images/bird0_1.png",
			"bird2": "images/bird0_2.png",
			"land": "images/land.png",
			"pepi_down": "images/pipe_down.png",
			"pepi_up": "images/pipe_up.png",
		};

		this.Robj = {
		};

		this.pepiDistance = 120;

		this.actors = [];
		this.pepis = [];


		// this.start();
		this.loadResource(function() {
			this.start();
		});
	};

	Game.prototype.loadResource = function(callback) {
		var self = this;
		var already = 0;
		for (var k in this.R) {
			self.Robj[k] = new Image();
			self.Robj[k].src = self.R[k];
			self.Robj[k].onload = function() {
				already++;
				self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
				self.ctx.font = "20px 微软雅黑";
				console.log('loading-' + already + "/" + _.keys(self.R).length);
				self.ctx.fillText('loading-' + already + "/" + _.keys(self.R).length, 70, 200);
				if (already == _.keys(self.R).length) {
					callback.call(self);
				}
			}
		}
		
	};

	Game.prototype.start = function() {
		var self = this;
		this.bindEvent();

		this.bg = new Background();
		this.land = new Land();
		this.bird = new Bird();

		setInterval(function() {
			self.mainloop();
		}, 20);
	};

	Game.prototype.mainloop = function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.frameNumber++;

		this.ctx.font = "14px consolas";
		if(this.frameNumber % this.pepiDistance == 0) {
			this.pepis.push(new Pepi());
		}

		for (var i = 0; i < this.actors.length; i++) {
			this.actors[i].update();
			this.actors[i].render();
		}
		this.ctx.fillText("FNO:" + this.frameNumber, 10, 20);
	};

	Game.prototype.bindEvent = function() {
		var self = this;
		self.canvas.onmousedown = function() {
			debugger;
			self.bird.fly();
		};
	};
})();