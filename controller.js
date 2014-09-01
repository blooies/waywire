WindowController = function(view) {
	this.view = view;
	this.listenBrowserChange();
}

WindowController.prototype.listenBrowserChange = function() {
	timer = ''
	var self = this;
	window.onresize = function() {
		clearTimeout(timer)
		timer = setTimeout(function() {
			self.view.resize();
		}, 300)
	}
}


