(function() {
	var LoadResource = window.LoadResource = function(callback, game) {
		this.R = {
			"atlas": './images/atlas.png',
			"bg_day": './images/bg_day.png',
			"bg_night": './images/bg_night.png',
			"bird0_0": './images/bird0_0.png',
			"bird0_1": './images/bird0_1.png',
			"bird0_2": './images/bird0_2.png',
			"bird1_0": './images/bird1_0.png',
			"bird1_1": './images/bird1_1.png',
			"bird1_2": './images/bird1_2.png',
			"bird2_0": './images/bird2_0.png',
			"bird2_1": './images/bird2_1.png',
			"bird2_2": './images/bird2_2.png',
			"black": './images/black.png',
			"blink_00": './images/blink_00.png',
			"blink_01": './images/blink_01.png',
			"blink_02": './images/blink_02.png',
			"brand_copyright": './images/brand_copyright.png',
			"button_menu": './images/button_menu.png',
			"button_ok": './images/button_ok.png',
			"button_pause": './images/button_pause.png',
			"button_play": './images/button_play.png',
			"button_rate": './images/button_rate.png',
			"button_resume": './images/button_resume.png',
			"button_score": './images/button_score.png',
			"button_share": './images/button_share.png',
			"font_048": './images/font_048.png',
			"font_049": './images/font_049.png',
			"font_050": './images/font_050.png',
			"font_051": './images/font_051.png',
			"font_052": './images/font_052.png',
			"font_053": './images/font_053.png',
			"font_054": './images/font_054.png',
			"font_055": './images/font_055.png',
			"font_056": './images/font_056.png',
			"font_057": './images/font_057.png',
			"land": './images/land.png',
			"medals_0": './images/medals_0.png',
			"medals_1": './images/medals_1.png',
			"medals_2": './images/medals_2.png',
			"medals_3": './images/medals_3.png',
			"new": './images/new.png',
			"number_context_00": './images/number_context_00.png',
			"number_context_01": './images/number_context_01.png',
			"number_context_02": './images/number_context_02.png',
			"number_context_03": './images/number_context_03.png',
			"number_context_04": './images/number_context_04.png',
			"number_context_05": './images/number_context_05.png',
			"number_context_06": './images/number_context_06.png',
			"number_context_07": './images/number_context_07.png',
			"number_context_08": './images/number_context_08.png',
			"number_context_09": './images/number_context_09.png',
			"number_context_10": './images/number_context_10.png',
			"number_score_00": './images/number_score_00.png',
			"number_score_01": './images/number_score_01.png',
			"number_score_02": './images/number_score_02.png',
			"number_score_03": './images/number_score_03.png',
			"number_score_04": './images/number_score_04.png',
			"number_score_05": './images/number_score_05.png',
			"number_score_06": './images/number_score_06.png',
			"number_score_07": './images/number_score_07.png',
			"number_score_08": './images/number_score_08.png',
			"number_score_09": './images/number_score_09.png',
			"pipe_down": './images/pipe_down.png',
			"pipe_up": './images/pipe_up.png',
			"pipe2_down": './images/pipe2_down.png',
			"pipe2_up": './images/pipe2_up.png',
			"score_panel": './images/score_panel.png',
			"text_game_over": './images/text_game_over.png',
			"text_ready": './images/text_ready.png',
			"title": './images/title.png',
			"tutorial": './images/tutorial.png',
			"white": './images/white.png'
		};
		this.Robj = {};
		this.load(callback, game);
	};

	LoadResource.prototype.load = function(callback, game) {
		var self = this;
		var ready = 0;
		for (var i in self.R) {
			self.Robj[i] = new Image();
			self.Robj[i].src = self.R[i];
			self.Robj[i].onload = function() {
				ready++;
				game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
				var text = "资源正在加载" + ready + "/" + Object.keys(self.R).length;
				game.ctx.textAlign = "center";
				game.ctx.font = "20px Arial";
				game.ctx.fillText(text, game.canvas.width / 2, game.canvas.height * (1 - 0.618));
				if(ready == Object.keys(self.R).length) {
					callback();
				}
			}
		}
	};
})();