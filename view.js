WindowView = function() {
	this.bag = $("#bag")
	this.dots = $('.dot')
	this.browserWidth = ''
	this.calculateBrowserWidth()

	this.resizeDots();
	this.resizeBag();
	this.resizeText();
	this.resizeContainer();

	this.placeDots();
	this.placeText();
	this.placeLines();
	this.placeContainer();
}

WindowView.prototype.calculateBrowserWidth = function() {
	var currentWidth = $(window).width();
	this.browserWidth = currentWidth
};

WindowView.prototype.resizeContainer = function() {
	$('#left-container').css('width', Math.ceil(.199*this.browserWidth))
	$('#left-container').css('height', Math.ceil(.361*this.browserWidth))

	$('#right-container').css('width', Math.ceil(.105*this.browserWidth))
	$('#right-container').css('height', Math.ceil(.374*this.browserWidth))
}

WindowView.prototype.resizeBag = function() {
	this.bag.css("width", Math.ceil(this.browserWidth*.70))
}

WindowView.prototype.resizeDots = function() {
	var self = this;
	this.dots.each(function(){
		$(this).css("width", Math.ceil(.03*self.browserWidth))
	})
}

WindowView.prototype.resizeText = function() {
	$('body').css('font-size', Math.ceil(.01*this.browserWidth))
}

WindowView.prototype.placeDots = function() {
	$(".dot-1").css("top", Math.ceil(.14*this.browserWidth))
	$(".dot-1").css("left", Math.ceil(.31*this.browserWidth))


	$('.dot-2').css('top', Math.ceil(.17*this.browserWidth))
	$('.dot-2').css('left', Math.ceil(.27*this.browserWidth))

	$('.dot-3').css('top', Math.ceil(.23*this.browserWidth))
	$('.dot-3').css('left', Math.ceil(.27*this.browserWidth))
}

WindowView.prototype.placeText = function() {
	var containerHeight = $('#left-container').height()
	$('#buckle').css('top', Math.ceil(.019*containerHeight))
	$('#stitch').css('top', Math.ceil(.126*containerHeight))
	$('#lining').css('top', Math.ceil(.136*containerHeight))
}

WindowView.prototype.placeLines = function() {
	var containerHeight = $('#right-container').height()
	$('.leather').css('top', Math.ceil(containerHeight*.043))
	$('.buckle').css('top', Math.ceil(containerHeight*.116))
	$('.stitch').css('top', Math.ceil(containerHeight*.272))

	var dotOne = $('.dot-1').position().left
	var dotTwo = $('.dot-2').position().left
	var dotThree = $('.dot-3').position().left

	$('.leather').css('width', Math.ceil(dotOne*.356))
	$('.buckle').css('width', Math.ceil(dotTwo*.268))
	$('.stitch').css('width', Math.ceil(dotThree*.262))
}

WindowView.prototype.placeContainer = function() {
	$('#left-container').css('top', Math.ceil(this.browserWidth*.137))
	$('#left-container').css('left', Math.ceil(this.browserWidth*.004))

	$('#right-container').css('top', Math.ceil(this.browserWidth*.137))
	$('#right-container').css('left', Math.ceil(this.browserWidth*.206))
}

WindowView.prototype.resize = function() {
	this.calculateBrowserWidth();

	this.resizeBag();
	this.resizeDots();
	this.resizeText();
	this.resizeContainer();

	this.placeDots();
	this.placeText();
	this.placeLines();
	this.placeContainer();
}


