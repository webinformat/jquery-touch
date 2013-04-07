# jquery-simple-touch
A very simple jQuery support for Touch events. I initialy developed this plugin to be easily used with Backbone.

## Usage

### Swipe
`
$slides.on('swipe', function (oEvt, oDir) {
	if (oDir.type === "left") {
		console.log('swiping left');
	} else {
		console.log('swiping right');
	}
});
`

### Swipe Left
`
$slides.on('swipeleft', function (oEvt, oDir) {
	console.log('swiping left');
});
`

### Swipe Right
`
$slides.on('swiperight', function (oEvt, oDir) {
	console.log('swiping right');
});
`

### Tap
`
$('.slider-paginator li').on('tap', function () {
	console.log('tapping');
});
`

### Double Tap
`
$('.slider-paginator').on('doubletap', function () {
	console.log('double tapping');
});
`

### Delegation
`
$('.slider-paginator').on('tap', 'li', function () {
	console.log('tapping');
});
`

### Backbone
`
var MyView = Backbone.View.extend({

	template: Helpers.template("tplSocialPosts"),

	index: 0,

	initialize: function () {},

	events: {
		'tap .social-posts-nav a': 'selectPost',
		'swipe .posts': 'swipe'
	},

	...

});
`

### AMD Support
`
// config requirejs
requirejs.config({
    paths: {
        jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
        touch: '../jquery-simple-touch'
    }
});

require(['jquery', 'touch'], function ($) {

    "use strict";

    $(document).ready(function () {

	    // your code here

    });

});
`


## Tested browsers
* iOS 6.1
* iOS 5.1

## Missing
1. Integration with Bower
1. Improve Examples
1. Increment browser testing coverage

