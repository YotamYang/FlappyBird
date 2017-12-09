(function() {
	window.Background = function(status, imgs, ctx) {
		debugger;
		this.__proto__ = new Draw(status, imgs, ctx);
		this.__proto__.constructor = Background;
		debugger;
	};
})();